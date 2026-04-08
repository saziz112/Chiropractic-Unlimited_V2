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
    '/pricing',
    '/privacy',
    '/terms',
];

const submitToIndexNow = () => {
    const urls = ROUTES.map(route => `${DOMAIN}${route}`);

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

console.log(`📡 Submitting ${ROUTES.length} URLs to IndexNow...`);
submitToIndexNow().then(() => {
    console.log('Done.');
});
