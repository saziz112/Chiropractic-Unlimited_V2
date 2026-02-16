#!/usr/bin/env node
/**
 * SERP Rank Tracking via DataForSEO SERP API
 *
 * Usage:
 *   node scripts/seo/serp-tracking.mjs "chiropractor valley al" "back pain treatment near me"
 *   node scripts/seo/serp-tracking.mjs --domain chiropracticunlimited.com --depth 30 "keyword"
 */
import { callAPI } from './client.mjs';

const args = process.argv.slice(2);
let targetDomain = 'chiropracticunlimited.com';
let depth = 20;
let locationCode = 2840;

// Parse flags
function extractFlag(flag) {
  const idx = args.indexOf(flag);
  if (idx !== -1) {
    const val = args[idx + 1];
    args.splice(idx, 2);
    return val;
  }
  return null;
}

const domainArg = extractFlag('--domain');
if (domainArg) targetDomain = domainArg;

const depthArg = extractFlag('--depth');
if (depthArg) depth = parseInt(depthArg, 10);

const locArg = extractFlag('--location');
if (locArg) locationCode = parseInt(locArg, 10);

const keywords = args.filter(a => !a.startsWith('--'));

if (keywords.length === 0) {
  console.log('Usage: node scripts/seo/serp-tracking.mjs "keyword1" "keyword2" ...');
  console.log('Options:');
  console.log('  --domain <domain>    Target domain (default: chiropracticunlimited.com)');
  console.log('  --depth <n>          Results depth (default: 20)');
  console.log('  --location <code>    Location code (default: 2840 = US)');
  process.exit(1);
}

console.log(`\nTracking "${targetDomain}" for ${keywords.length} keyword(s) — depth: ${depth}\n`);

try {
  const payload = keywords.map(keyword => ({
    keyword,
    location_code: locationCode,
    language_code: 'en',
    device: 'desktop',
    depth,
  }));

  const tasks = await callAPI('/serp/google/organic/live/regular', payload);

  for (const task of tasks) {
    if (task.status_code !== 20000) {
      console.error(`Task error: ${task.status_message}`);
      continue;
    }

    for (const resultSet of task.result || []) {
      console.log(`━━━ "${resultSet.keyword}" ━━━`);
      console.log(`  Total results: ${resultSet.se_results_count ?? 'N/A'}`);

      const items = resultSet.items || [];
      const match = items.find(i => i.domain === targetDomain || i.url?.includes(targetDomain));

      if (match) {
        console.log(`  ✓ FOUND at position ${match.rank_group} (absolute: ${match.rank_absolute})`);
        console.log(`    URL   : ${match.url}`);
        console.log(`    Title : ${match.title}`);
      } else {
        console.log(`  ✗ Not found in top ${depth} results`);
      }

      // Show top 5 results
      console.log(`\n  Top 5 results:`);
      for (const item of items.filter(i => i.type === 'organic').slice(0, 5)) {
        const marker = item.domain === targetDomain ? ' ◄' : '';
        console.log(`    ${item.rank_group}. ${item.domain} — ${item.title}${marker}`);
      }
      console.log();
    }
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
