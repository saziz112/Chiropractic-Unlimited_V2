#!/usr/bin/env node
/**
 * Keyword Research via DataForSEO Keywords Data API
 *
 * Usage:
 *   node scripts/seo/keyword-research.mjs "chiropractor valley al" "back pain treatment"
 *   node scripts/seo/keyword-research.mjs --location 2840 "keyword1" "keyword2"
 */
import { callAPI } from './client.mjs';

const args = process.argv.slice(2);
let locationCode = 2840; // US default

// Parse --location flag
const locIdx = args.indexOf('--location');
if (locIdx !== -1) {
  locationCode = parseInt(args[locIdx + 1], 10);
  args.splice(locIdx, 2);
}

const keywords = args.filter(a => !a.startsWith('--'));

if (keywords.length === 0) {
  console.log('Usage: node scripts/seo/keyword-research.mjs "keyword1" "keyword2" ...');
  console.log('Options: --location <code>  (default: 2840 = US)');
  process.exit(1);
}

console.log(`\nSearching ${keywords.length} keyword(s) — location: ${locationCode}\n`);

try {
  const tasks = await callAPI('/keywords_data/google_ads/search_volume/live', [
    {
      keywords,
      location_code: locationCode,
      language_code: 'en',
    },
  ]);

  for (const task of tasks) {
    if (task.status_code !== 20000) {
      console.error(`Task error: ${task.status_message}`);
      continue;
    }

    if (!task.result) {
      console.log('No results returned.');
      continue;
    }

    for (const item of task.result) {
      console.log(`━━━ ${item.keyword} ━━━`);
      console.log(`  Search Volume : ${item.search_volume ?? 'N/A'}`);
      console.log(`  Competition   : ${item.competition ?? 'N/A'}`);
      console.log(`  CPC           : $${item.cpc ?? 'N/A'}`);

      if (item.monthly_searches?.length) {
        const recent = item.monthly_searches.slice(0, 6);
        const trend = recent.map(m => `${m.month}/${m.year}: ${m.search_volume}`).join('  |  ');
        console.log(`  Trend (6mo)   : ${trend}`);
      }
      console.log();
    }
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
