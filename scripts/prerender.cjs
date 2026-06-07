const puppeteer = require('puppeteer');
const puppeteerCore = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Try to load chromium for serverless environments
let chromium;
try {
    chromium = require('@sparticuz/chromium');
} catch (e) {
    chromium = null;
}


// Simple static server using pure Node to avoid deps if possible, but serve-handler is better.
// Let's use written logic to avoid new deps if possible, or just install serve-handler.
// Actually, let's use a simple express-like polling.
// Re-using the routes list.

const ROUTES = [
    '/',
    '/about',
    '/conditions/low-back-pain',
    '/conditions/neck-pain',
    '/conditions/headaches',
    '/conditions/sciatica',
    '/conditions/auto-injuries',
    '/conditions/poor-posture',
    '/services/holistic-wellness',
    '/services/spinal-correction',
    '/services/integrated-care',
    '/services/performance',
    '/patients/athletes',
    '/patients/pregnancy',
    '/patients/pediatrics',
    '/privacy',
    '/terms',
    '/locations/lanett-al',
    '/locations/lafayette-al',
    '/locations/west-point-ga',
    '/locations/opelika-al',
    '/pricing',
    '/blog',
    '/blog/what-does-a-chiropractor-do',
    '/blog/chiropractor-vs-physical-therapist',
    '/blog/first-chiropractic-visit-what-to-expect',
    '/blog/is-chiropractic-care-safe',
    '/blog/chiropractic-vs-opioids',
    '/blog/back-pain-treatment-without-surgery',
    '/blog/how-often-see-chiropractor',
    '/blog/chiropractic-for-sciatica',
    '/blog/chiropractic-during-pregnancy',
    '/blog/rural-alabama-pain-rates',
    '/blog/chiropractic-for-kids',
    '/blog/auto-accident-injuries-i85',
    '/blog/chiropractor-for-headaches',
    '/blog/chiropractic-vs-surgery-back-pain',
    '/blog/medicare-chiropractic-coverage',
    '/blog/sports-chiropractic',
    '/blog/drug-free-pain-management',
];

const PORT = 4173;
const DIST_DIR = path.join(__dirname, '../dist');

async function serve(dir, port) {
    const server = http.createServer((req, res) => {
        // Basic static file serving
        let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
        // If no ext, assume it's a route and serve index.html (SPA Fallback)
        if (!path.extname(filePath)) {
            filePath = path.join(dir, 'index.html');
        }

        const ext = path.extname(filePath);
        let contentType = 'text/html';
        switch (ext) {
            case '.js': contentType = 'text/javascript'; break;
            case '.css': contentType = 'text/css'; break;
            case '.json': contentType = 'application/json'; break;
            case '.png': contentType = 'image/png'; break;
            case '.jpg': contentType = 'image/jpg'; break;
            case '.svg': contentType = 'image/svg+xml'; break;
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });

    return new Promise((resolve) => {
        server.listen(port, () => {
            console.log(`Static server running on port ${port}`);
            resolve(server);
        });
    });
}

async function prerender() {
    console.log('Starting Prerender...');
    const server = await serve(DIST_DIR, PORT);

    let browser;
    try {
        // Use @sparticuz/chromium in serverless environments (Vercel), regular puppeteer locally
        if (chromium && process.env.VERCEL) {
            console.log('Using serverless Chrome for prerendering...');
            browser = await puppeteerCore.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
            });
        } else {
            console.log('Using local Puppeteer for prerendering...');
            browser = await puppeteer.launch({
                headless: "new",
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            });
        }
    } catch (e) {
        console.warn('⚠️  Puppeteer failed to launch. Skipping prerendering step.', e.message);
        server.close();
        process.exit(0);
        return;
    }
    const page = await browser.newPage();

    // Block video/audio downloads during prerender — they keep the network busy
    // and time out networkidle waits without contributing to the rendered HTML.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        const url = req.url();
        const type = req.resourceType();
        if (type === 'media' || /\.(mp4|webm|mov|m4v|avi|mp3|wav|ogg)(\?|$)/i.test(url)) {
            req.abort();
        } else {
            req.continue();
        }
    });

    // Read the base SPA shell once for fallback when prerender fails
    const baseIndexPath = path.join(DIST_DIR, 'index.html');
    const baseSpaShell = fs.existsSync(baseIndexPath) ? fs.readFileSync(baseIndexPath, 'utf8') : null;

    let succeeded = 0, failed = 0;
    for (const route of ROUTES) {
        console.log(`Prerendering: ${route}`);
        const filePath = path.join(DIST_DIR, route === '/' ? 'index.html' : `${route}/index.html`);
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        try {
            // domcontentloaded fires once HTML is parsed — fast and reliable.
            // Videos are blocked above, but other XHRs/scripts may still load.
            await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });

            // Give Helmet + lazy components time to render meta tags + content
            await new Promise(r => setTimeout(r, 1500));

            // Helmet can race: a snapshot taken before it flushes captures the previous
            // page's canonical (this shipped a homepage canonical on a blog post once).
            // Wait until the rendered canonical actually matches this route.
            const expectedCanonical = `https://chirounlimitedwellness.com${route === '/' ? '/' : route}`;
            try {
                await page.waitForFunction(
                    (expected) => document.querySelector('link[rel="canonical"]')?.href === expected,
                    { timeout: 10000 },
                    expectedCanonical
                );
            } catch {
                throw new Error(`canonical mismatch on ${route}: got "${await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.href)}", expected "${expectedCanonical}"`);
            }

            // React renders adjacent JSX text segments ("Call {phone}") as separate
            // text nodes, but HTML serialization merges them into one. On hydration
            // the boundaries no longer match and React 18 throws #418, tearing down
            // the DOM (the sitewide footer-CLS bug). ReactDOMServer solves this with
            // <!-- --> separator comments — inject the same markers before capturing.
            await page.evaluate(() => {
                const walk = (node) => {
                    let child = node.firstChild;
                    while (child) {
                        const next = child.nextSibling;
                        if (child.nodeType === Node.TEXT_NODE && next && next.nodeType === Node.TEXT_NODE) {
                            node.insertBefore(document.createComment(' '), next);
                        }
                        if (child.nodeType === Node.ELEMENT_NODE) walk(child);
                        child = next;
                    }
                };
                const root = document.getElementById('root');
                if (root) walk(root);
            });

            const content = await page.content();
            let productionContent = content.replace(/http:\/\/localhost:4173/g, 'https://chirounlimitedwellness.com');
            // React drops the `muted` boolean attribute when serializing to HTML, which breaks
            // mobile autoplay (browsers require muted to be present on the attribute, not just
            // the DOM property). Inject it on any <video autoplay> that doesn't already have it.
            productionContent = productionContent.replace(
                /<video\b([^>]*\bautoplay\b[^>]*)>/gi,
                (match, attrs) => /\bmuted\b/.test(attrs) ? match : `<video${attrs} muted>`
            );
            // Routes are lazy() inside <Suspense> (App.tsx). hydrateRoot needs the
            // SSR suspense-boundary markers (<!--$--> ... <!--/$-->) to treat the
            // prerendered route content as a dehydrated boundary — otherwise the
            // lazy chunk suspends with no marker, hydration fails (#418), and React
            // tears down the DOM (the footer-CLS bug). Inject the markers exactly
            // where ReactDOMServer would emit them.
            // Plain-string replace is only safe while the document has exactly one
            // <main> — assert it so a future second match can never corrupt markup.
            if ((productionContent.match(/<\/main>/g) || []).length !== 1) {
                throw new Error(`expected exactly one </main> on ${route} — suspense-marker injection would be ambiguous`);
            }
            productionContent = productionContent
                .replace('<main id="main-content">', '<main id="main-content"><!--$-->')
                .replace('</main>', '<!--/$--></main>');
            // Normalize every reveal section to `is-visible`. The snapshot captures
            // below-fold sections in their hidden state, but the client's hydration
            // pass renders everything visible (RevealOnScroll initialPageLoad) — the
            // server HTML must match or React 18 falls back to a full client
            // re-render, shifting the footer (the sitewide CLS bug).
            // Assumes Puppeteer-serialized HTML: class attributes are always
            // double-quoted with no newlines (true for page.content() output).
            productionContent = productionContent.replace(
                /class="([^"]*\b(?:fade-in-section|stagger-children)\b[^"]*)"/g,
                (match, cls) => /\bis-visible\b/.test(cls) ? match : `class="${cls} is-visible"`
            );
            fs.writeFileSync(filePath, productionContent);
            succeeded++;
        } catch (e) {
            console.error(`⚠️  Failed to prerender ${route}: ${e.message}`);
            // Fallback: write the base SPA shell so the route returns 200 with client-side rendering
            // (worse for SEO than a prerendered page, but vastly better than a 404).
            if (baseSpaShell && route !== '/') {
                fs.writeFileSync(filePath, baseSpaShell);
                console.log(`   → wrote SPA fallback for ${route}`);
            }
            failed++;
        }
    }
    console.log(`Prerender summary: ${succeeded} succeeded, ${failed} failed (with SPA fallback)`);

    await browser.close();
    server.close();
    console.log('✅ Prerendering Complete');
    process.exit(0);
}

prerender();
