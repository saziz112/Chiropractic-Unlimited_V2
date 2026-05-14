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

            const content = await page.content();
            let productionContent = content.replace(/http:\/\/localhost:4173/g, 'https://chirounlimitedwellness.com');
            // React drops the `muted` boolean attribute when serializing to HTML, which breaks
            // mobile autoplay (browsers require muted to be present on the attribute, not just
            // the DOM property). Inject it on any <video autoplay> that doesn't already have it.
            productionContent = productionContent.replace(
                /<video\b([^>]*\bautoplay\b[^>]*)>/gi,
                (match, attrs) => /\bmuted\b/.test(attrs) ? match : `<video${attrs} muted>`
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
