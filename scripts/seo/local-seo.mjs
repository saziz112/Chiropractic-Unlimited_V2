#!/usr/bin/env node
/**
 * Local SEO / Google Business Profile via DataForSEO Business Data API
 *
 * Usage:
 *   node scripts/seo/local-seo.mjs
 *   node scripts/seo/local-seo.mjs --query "Chiropractic Unlimited Valley AL"
 */
import { callAPI } from './client.mjs';

const args = process.argv.slice(2);
let query = 'Chiropractic Unlimited Valley AL';

const queryIdx = args.indexOf('--query');
if (queryIdx !== -1) {
  query = args[queryIdx + 1];
}

console.log(`\nFetching local SEO data for: "${query}"\n`);

try {
  const tasks = await callAPI('/business_data/google/my_business_info/live', [
    {
      keyword: query,
      location_code: 2840,
      language_code: 'en',
    },
  ]);

  for (const task of tasks) {
    if (task.status_code !== 20000) {
      console.error(`Task error: ${task.status_message}`);
      continue;
    }

    for (const resultSet of task.result || []) {
      const items = resultSet.items || [];

      if (items.length === 0) {
        console.log('No business listings found.');
        continue;
      }

      for (const biz of items) {
        console.log('━━━ Business Profile ━━━');
        console.log(`  Name       : ${biz.title ?? 'N/A'}`);
        console.log(`  Category   : ${biz.category ?? 'N/A'}`);
        console.log(`  Address    : ${biz.address ?? 'N/A'}`);
        console.log(`  Phone      : ${biz.phone ?? 'N/A'}`);
        console.log(`  Website    : ${biz.url ?? 'N/A'}`);
        console.log(`  Rating     : ${biz.rating?.value ?? 'N/A'} (${biz.rating?.votes_count ?? 0} reviews)`);
        console.log(`  Place ID   : ${biz.place_id ?? 'N/A'}`);

        if (biz.work_hours?.work_hours) {
          console.log('\n━━━ Hours ━━━');
          for (const day of Object.values(biz.work_hours.work_hours)) {
            if (Array.isArray(day)) {
              for (const entry of day) {
                console.log(`  ${entry.day_of_week}: ${entry.open?.hour}:${String(entry.open?.minute).padStart(2, '0')} - ${entry.close?.hour}:${String(entry.close?.minute).padStart(2, '0')}`);
              }
            }
          }
        }

        if (Array.isArray(biz.attributes?.available_attributes) && biz.attributes.available_attributes.length > 0) {
          console.log('\n━━━ Attributes ━━━');
          for (const attr of biz.attributes.available_attributes) {
            console.log(`  ✓ ${typeof attr === 'string' ? attr : attr.attribute}`);
          }
        }

        if (biz.people_also_search) {
          console.log('\n━━━ People Also Search ━━━');
          for (const related of biz.people_also_search.slice(0, 5)) {
            console.log(`  • ${related.title} — ${related.rating?.value ?? 'N/A'}★ (${related.rating?.votes_count ?? 0} reviews)`);
          }
        }

        console.log();
      }
    }
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
