const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://chiropracticunlimited.com';
const ROUTES = [
    '/',
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
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ROUTES.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap.trim());
    console.log('✅ Generated sitemap.xml');
};

const generateRobots = () => {
    const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

    fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robots.trim());
    console.log('✅ Generated robots.txt');
};

// Ensure dist exists (it should after build)
if (!fs.existsSync(path.join(__dirname, '../dist'))) {
    console.error('❌ dist directory not found. Run build first.');
    process.exit(1);
}

generateSitemap();
generateRobots();
