const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://chirounlimitedwellness.com';
const INDEXNOW_KEY = 'e6d6b5c8f9a4423e8b1d7c3a2f0e9d8c';
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

const generateIndexNowKey = () => {
    fs.writeFileSync(
        path.join(__dirname, `../dist/${INDEXNOW_KEY}.txt`),
        INDEXNOW_KEY
    );
    console.log('✅ Generated IndexNow key verification file');
};

const generateLlmsTxt = () => {
    const llmsTxt = `# Chiropractic Unlimited

> Chiropractic Unlimited is a chiropractic and integrated wellness clinic in Valley, Alabama, founded by Dr. Jason Bang DC FNP. As the only chiropractor in Valley, AL with dual Doctor of Chiropractic and Family Nurse Practitioner credentials, Dr. Bang provides advanced spinal correction, holistic wellness care, and integrated health services.

## Practice Information

- **Provider:** Dr. Jason Bang, DC, FNP
- **Practice Name:** Chiropractic Unlimited
- **Address:** 3731 20th Ave, Valley, AL 36854
- **Phone:** (334) 219-0150
- **Email:** info@chirounlimitedwellness.com
- **Website:** ${DOMAIN}
- **Location Note:** Located inside the Workout Anytime gym, in the same plaza as Ace Hardware

## Credentials

Dr. Jason Bang holds dual credentials:
- **Doctor of Chiropractic (DC)** — Graduate of Life University, Marietta, GA
- **Family Nurse Practitioner (FNP)** — Combining chiropractic expertise with clinical nursing knowledge

## Services

- [Spinal Correction](${DOMAIN}/services/spinal-correction): Gentle, precise spinal adjustments to restore proper alignment and nervous system function
- [Holistic Wellness](${DOMAIN}/services/holistic-wellness): Whole-person approach addressing nutrition, stress, and spinal health for optimal vitality
- [Integrated Care](${DOMAIN}/services/integrated-care): Unique combination of chiropractic and nursing expertise for comprehensive clinical care
- [Performance](${DOMAIN}/services/performance): Biomechanical optimization, injury prevention, and recovery for athletes and active individuals

## Conditions Treated

- [Low Back Pain](${DOMAIN}/conditions/low-back-pain)
- [Neck Pain](${DOMAIN}/conditions/neck-pain)
- [Headaches & Migraines](${DOMAIN}/conditions/headaches)
- [Sciatica](${DOMAIN}/conditions/sciatica)
- [Auto Injuries & Whiplash](${DOMAIN}/conditions/auto-injuries)
- [Poor Posture & Tech Neck](${DOMAIN}/conditions/poor-posture)

## Patient Specialties

- [Athletes & Sports Performance](${DOMAIN}/patients/athletes)
- [Prenatal & Pregnancy Care](${DOMAIN}/patients/pregnancy)
- [Pediatric Chiropractic](${DOMAIN}/patients/pediatrics)

## Hours of Operation

- Monday: 10:00 AM - 5:00 PM
- Tuesday: 10:00 AM - 5:00 PM
- Wednesday: Closed
- Thursday: Closed
- Friday: 10:00 AM - 5:00 PM
- Saturday: 10:00 AM - 5:00 PM
- Sunday: Closed

## Areas Served

Valley AL, Lanett AL, West Point GA, LaGrange GA, Opelika AL, Auburn AL

## About Dr. Jason Bang

Dr. Jason Bang is a graduate of Life University with international mentoring experience across Canada, Germany, and China. He worked as a registered nurse during the COVID-19 pandemic and at the VA Hospital in Birmingham, Alabama. His dual DC and FNP credentials make him uniquely qualified to bridge traditional and alternative medicine for comprehensive patient care.

## Blog

- [What Does a Chiropractor Do? A Doctor Who Does Both Explains](${DOMAIN}/blog/what-does-a-chiropractor-do)
- [Chiropractor vs. Physical Therapist: How to Choose the Right Provider](${DOMAIN}/blog/chiropractor-vs-physical-therapist)
- [Your First Chiropractic Visit: What to Expect Step by Step](${DOMAIN}/blog/first-chiropractic-visit-what-to-expect)
- [Is Chiropractic Care Safe? A Chiropractor and Nurse Practitioner Answers](${DOMAIN}/blog/is-chiropractic-care-safe)
- [Chiropractic Care vs. Opioids for Pain: What the 2025 Research Shows](${DOMAIN}/blog/chiropractic-vs-opioids)
- [Back Pain Treatment Without Surgery: Evidence-Based Options in Valley, AL](${DOMAIN}/blog/back-pain-treatment-without-surgery)
- [How Often Should You See a Chiropractor? An Evidence-Based Guide](${DOMAIN}/blog/how-often-see-chiropractor)
- [Chiropractic for Sciatica: Does It Actually Work? Full Research Review](${DOMAIN}/blog/chiropractic-for-sciatica)

## Key Pages

- [Home](${DOMAIN}/)
- [Blog](${DOMAIN}/blog)
- [About Dr. Bang](${DOMAIN}/about)
- [Chiropractor Near Lanett, AL](${DOMAIN}/locations/lanett-al)
- [Chiropractor Near LaFayette, AL](${DOMAIN}/locations/lafayette-al)
- [Chiropractor Near West Point, GA](${DOMAIN}/locations/west-point-ga)
- [Chiropractor Near Opelika, AL](${DOMAIN}/locations/opelika-al)
- [Privacy Policy](${DOMAIN}/privacy)
- [Terms of Service](${DOMAIN}/terms)
`;

    fs.writeFileSync(path.join(__dirname, '../dist/llms.txt'), llmsTxt.trim());
    console.log('✅ Generated llms.txt');
};

// Ensure dist exists (it should after build)
if (!fs.existsSync(path.join(__dirname, '../dist'))) {
    console.error('❌ dist directory not found. Run build first.');
    process.exit(1);
}

generateSitemap();
generateRobots();
generateIndexNowKey();
generateLlmsTxt();
