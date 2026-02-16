import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../../.env.local') });

const { DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD } = process.env;

if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
  console.error('Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD in .env.local');
  process.exit(1);
}

const credentials = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

export async function callAPI(endpoint, payload) {
  const url = `https://api.dataforseo.com/v3${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const remaining = response.headers.get('X-RateLimit-Remaining');
  if (remaining) {
    console.log(`[Rate limit remaining: ${remaining}]`);
  }

  const data = await response.json();

  if (data.status_code !== 20000) {
    throw new Error(`DataForSEO API error ${data.status_code}: ${data.status_message}`);
  }

  return data.tasks;
}
