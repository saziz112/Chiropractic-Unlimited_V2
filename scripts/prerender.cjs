const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');
// serve-handler removed


// Simple static server using pure Node to avoid deps if possible, but serve-handler is better.
// Let's use written logic to avoid new deps if possible, or just install serve-handler.
// Actually, let's use a simple express-like polling.
// Re-using the routes list.

const ROUTES = [
    '/',
    '/conditions/low-back-pain',
    '/conditions/neck-pain',
    '/conditions/headaches',
    '/conditions/sciatica',
    '/conditions/auto-injuries',
    '/conditions/poor-posture',
    '/services/shockwave-therapy',
    '/services/holistic-wellness',
    '/services/spinal-correction',
    '/services/integrated-care',
    '/services/performance',
    '/patients/athletes',
    '/patients/pregnancy',
    '/patients/pediatrics',
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

    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    for (const route of ROUTES) {
        console.log(`Prerendering: ${route}`);
        try {
            await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait for Helmet to update title/meta (simple delay to be safe)
            await new Promise(r => setTimeout(r, 500));

            const content = await page.content();

            // Replace localhost with production domain in canonical/og tags if needed
            const productionContent = content.replace(/http:\/\/localhost:4173/g, 'https://chiropracticunlimited.com');

            // Save file
            const filePath = path.join(DIST_DIR, route === '/' ? 'index.html' : `${route}/index.html`);
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            fs.writeFileSync(filePath, productionContent);
        } catch (e) {
            console.error(`Failed to prerender ${route}:`, e);
        }
    }

    await browser.close();
    server.close();
    console.log('✅ Prerendering Complete');
    process.exit(0);
}

prerender();
