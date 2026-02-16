#!/usr/bin/env node
/**
 * On-Page SEO Audit via DataForSEO On-Page API
 *
 * Usage:
 *   node scripts/seo/onpage-audit.mjs https://chiropracticunlimited.com
 *   node scripts/seo/onpage-audit.mjs --mobile https://chiropracticunlimited.com
 */
import { callAPI } from './client.mjs';

const args = process.argv.slice(2);

let browserPreset = 'desktop';
const mobileIdx = args.indexOf('--mobile');
if (mobileIdx !== -1) {
  browserPreset = 'mobile';
  args.splice(mobileIdx, 1);
}

const url = args[0];

if (!url) {
  console.log('Usage: node scripts/seo/onpage-audit.mjs <url>');
  console.log('Options: --mobile  (audit as mobile device)');
  process.exit(1);
}

console.log(`\nAuditing: ${url} (${browserPreset})\n`);

try {
  const tasks = await callAPI('/on_page/instant_pages', [
    {
      url,
      browser_preset: browserPreset,
      load_resources: true,
      enable_javascript: true,
      check_spell: true,
      validate_micromarkup: true,
    },
  ]);

  for (const task of tasks) {
    if (task.status_code !== 20000) {
      console.error(`Task error: ${task.status_message}`);
      continue;
    }

    for (const page of task.result || []) {
      const items = page.items || [];
      for (const item of items) {
        console.log('━━━ Page Overview ━━━');
        console.log(`  URL         : ${item.url}`);
        console.log(`  Status Code : ${item.meta?.status_code}`);
        console.log(`  Load Time   : ${item.page_timing?.duration_time}ms`);

        // Meta
        const meta = item.meta || {};
        console.log('\n━━━ Meta Tags ━━━');
        console.log(`  Title       : ${meta.title ?? 'MISSING'}`);
        console.log(`  Title Length: ${meta.title?.length ?? 0} chars`);
        console.log(`  Description : ${meta.description ?? 'MISSING'}`);
        console.log(`  Desc Length : ${meta.description?.length ?? 0} chars`);
        console.log(`  Canonical   : ${meta.canonical ?? 'MISSING'}`);

        // Headers
        if (meta.htags) {
          console.log('\n━━━ Headings ━━━');
          for (const [tag, values] of Object.entries(meta.htags)) {
            console.log(`  ${tag.toUpperCase()}: ${Array.isArray(values) ? values.join(' | ') : values}`);
          }
        }

        // Content
        if (meta.content) {
          console.log('\n━━━ Content ━━━');
          console.log(`  Word Count     : ${meta.content.plain_text_word_count ?? 'N/A'}`);
          console.log(`  Text Size      : ${meta.content.plain_text_size ?? 'N/A'} bytes`);
        }

        // Checks
        const checks = item.checks || {};
        const issues = Object.entries(checks).filter(([, v]) => v === true);
        if (issues.length > 0) {
          console.log('\n━━━ Issues Found ━━━');
          for (const [check] of issues) {
            console.log(`  ⚠  ${check.replace(/_/g, ' ')}`);
          }
        }

        // Links
        if (item.links) {
          console.log('\n━━━ Links ━━━');
          console.log(`  Internal : ${item.links.internal ?? 'N/A'}`);
          console.log(`  External : ${item.links.external ?? 'N/A'}`);
        }

        // Resources
        if (item.resource_errors) {
          console.log('\n━━━ Resource Errors ━━━');
          console.log(`  Errors: ${item.resource_errors.errors ?? 0}`);
          console.log(`  Warnings: ${item.resource_errors.warnings ?? 0}`);
        }

        console.log();
      }
    }
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
