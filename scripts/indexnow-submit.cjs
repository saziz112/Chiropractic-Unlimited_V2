/**
 * IndexNow URL Submission Script
 * Run after deployment to notify search engines of updated pages.
 * Usage: node scripts/indexnow-submit.cjs
 */

const https = require('https');

const DOMAIN = 'https://chirounlimitedwellness.com';
const HOST = 'chirounlimitedwellness.com';
const INDEXNOW_KEY = 'e6d6b5c8f9a4423e8b1d7c3a2f0e9d8c';
const KEY_LOCATION = `${DOMAIN}/${INDEXNOW_KEY}.txt`;
const SITEMAP = `${DOMAIN}/sitemap.xml`;

// Pull the live URL list from the sitemap so blog posts and location pages are
// always included (the previous hardcoded list missed them).
const fetchSitemapUrls = () => new Promise((resolve, reject) => {
    https.get(SITEMAP, (res) => {
        let xml = '';
        res.on('data', (c) => { xml += c; });
        res.on('end', () => resolve([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])));
    }).on('error', reject);
});

const submitToIndexNow = (urls) => {
    const payload = JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
    });

    const options = {
        hostname: 'api.indexnow.org',
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload),
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 202) {
                    console.log(`✅ IndexNow: ${urls.length} URLs submitted successfully (HTTP ${res.statusCode})`);
                    resolve();
                } else {
                    console.error(`⚠️ IndexNow returned HTTP ${res.statusCode}: ${data}`);
                    resolve(); // Don't fail the build
                }
            });
        });

        req.on('error', (err) => {
            console.error(`⚠️ IndexNow submission failed: ${err.message}`);
            resolve(); // Don't fail the build
        });

        req.write(payload);
        req.end();
    });
};

fetchSitemapUrls()
    .then((urls) => {
        if (!urls.length) {
            console.error('⚠️ No URLs found in sitemap — aborting.');
            return;
        }
        console.log(`📡 Submitting ${urls.length} URLs to IndexNow...`);
        return submitToIndexNow(urls);
    })
    .then(() => console.log('Done.'))
    .catch((err) => console.error(`⚠️ IndexNow failed: ${err.message}`));
