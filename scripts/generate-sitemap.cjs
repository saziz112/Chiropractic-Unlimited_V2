const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://chirounlimitedwellness.com';
const INDEXNOW_KEY = 'e6d6b5c8f9a4423e8b1d7c3a2f0e9d8c';
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// Static (non-blog) routes with their last meaningful update.
// Update lastmod here when a page's content is substantively revised.
const STATIC_ROUTES = [
    { path: '/', lastmod: '2026-05-04' }, // hero video + schema overhaul
    { path: '/about', lastmod: '2026-05-04' }, // clinic tour videos added
    { path: '/conditions/low-back-pain', lastmod: '2026-04-07' },
    { path: '/conditions/neck-pain', lastmod: '2026-04-07' },
    { path: '/conditions/headaches', lastmod: '2026-04-07' },
    { path: '/conditions/sciatica', lastmod: '2026-04-07' },
    { path: '/conditions/auto-injuries', lastmod: '2026-04-07' },
    { path: '/conditions/poor-posture', lastmod: '2026-04-07' },
    { path: '/services/holistic-wellness', lastmod: '2026-05-04' },
    { path: '/services/spinal-correction', lastmod: '2026-05-04' },
    { path: '/services/integrated-care', lastmod: '2026-05-04' },
    { path: '/services/performance', lastmod: '2026-05-04' },
    { path: '/patients/athletes', lastmod: '2026-05-04' },
    { path: '/patients/pregnancy', lastmod: '2026-05-04' },
    { path: '/patients/pediatrics', lastmod: '2026-05-04' },
    { path: '/privacy', lastmod: '2026-04-03' },
    { path: '/terms', lastmod: '2026-04-03' },
    { path: '/locations/lanett-al', lastmod: '2026-04-07' },
    { path: '/locations/lafayette-al', lastmod: '2026-04-07' },
    { path: '/locations/west-point-ga', lastmod: '2026-04-07' },
    { path: '/locations/opelika-al', lastmod: '2026-04-07' },
    { path: '/pricing', lastmod: '2026-04-07' },
    { path: '/blog', lastmod: TODAY },
];

// Parse blog posts from blogPosts.tsx without needing TS tooling.
// Top-level post objects start with `    slug:` at exactly 4 spaces of indent.
// `relatedLinks` and other inline slug references live deeper and are skipped.
const parseBlogPosts = () => {
    const src = fs.readFileSync(path.join(__dirname, '../blogPosts.tsx'), 'utf8');
    const slugRe = /^    slug: '([^']+)'/gm;
    const posts = [];
    let m;
    while ((m = slugRe.exec(src)) !== null) {
        const slug = m[1];
        // Look forward in the file from this slug to find publishDate and optional lastUpdated.
        // Stop searching when we hit the next top-level slug or a closing `  },` at 2-space indent.
        const tail = src.slice(m.index, m.index + 4000);
        const pub = tail.match(/publishDate: '(\d{4}-\d{2}-\d{2})'/);
        const lu = tail.match(/lastUpdated: '(\d{4}-\d{2}-\d{2})'/);
        if (pub) {
            posts.push({ slug, publishDate: pub[1], lastUpdated: (lu && lu[1]) || pub[1] });
        }
    }
    return posts;
};

const generateSitemap = () => {
    const allPosts = parseBlogPosts();
    const publishedPosts = allPosts.filter(p => p.publishDate <= TODAY);
    const skipped = allPosts.length - publishedPosts.length;

    const blogRoutes = publishedPosts.map(p => ({
        path: `/blog/${p.slug}`,
        lastmod: p.lastUpdated,
    }));

    const routes = [...STATIC_ROUTES, ...blogRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
    console.log(`✅ Generated sitemap.xml (${routes.length} URLs, ${skipped} future-dated blog posts excluded)`);
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
- **Phone:** (334) 203-7032 (this is the chiropractic clinic line; the number on the gym signage, 334.219.0150, belongs to Workout Anytime, not the clinic)
- **Email:** info@chirounlimitedwellness.com
- **Website:** ${DOMAIN}
- **Location Note:** Located inside the Workout Anytime gym, in the same plaza as Ace Hardware
- **Storefront photo:** ${DOMAIN}/clinic-exterior.jpg
- **Clinic tour video:** ${DOMAIN}/clinic-tour.mp4

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
- [Chiropractic During Pregnancy: Benefits, Safety, and What to Expect](${DOMAIN}/blog/chiropractic-during-pregnancy)
- [Why Rural Alabama Has Higher Pain Rates](${DOMAIN}/blog/rural-alabama-pain-rates)
- [Chiropractic for Kids: What Parents Need to Know](${DOMAIN}/blog/chiropractic-for-kids)
- [Auto Accident Injuries on I-85: When to See a Chiropractor After a Crash](${DOMAIN}/blog/auto-accident-injuries-i85)
- [Can a Chiropractor Help with Headaches? What the Research Shows](${DOMAIN}/blog/chiropractor-for-headaches)
- [Chiropractic vs. Surgery for Back Pain: Cost, Recovery, and Outcomes Compared](${DOMAIN}/blog/chiropractic-vs-surgery-back-pain)
- [What Medicare Covers for Chiropractic Care in 2025-2026](${DOMAIN}/blog/medicare-chiropractic-coverage)
- [Sports Chiropractic: How Athletes Recover Faster and Prevent Injuries](${DOMAIN}/blog/sports-chiropractic)
- [The Complete Guide to Drug-Free Pain Management (Pillar)](${DOMAIN}/blog/drug-free-pain-management)

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
