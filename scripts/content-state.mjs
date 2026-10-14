import { createHash } from 'node:crypto';
import { writeFile, appendFile } from 'node:fs/promises';
const query = '*[_type in ["homeContent","activiteit","evenement","bestuurslid","geschiedenis","photoGallery","siteSettings"]] | order(_id asc){_id,_rev}';
const url = new URL('https://z10tsa4x.api.sanity.io/v2026-10-14/data/query/production');
url.searchParams.set('query', query);
url.searchParams.set('perspective', 'published');
const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Sanity returned ${response.status}; preserve the existing deployment.`);
const { result } = await response.json();
if (!Array.isArray(result) || !result.length) throw new Error('No published content; preserve the existing deployment.');
const day = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Brussels' }).format(new Date());
const hash = createHash('sha256').update(JSON.stringify({ result, day })).digest('hex');
let previous;
try {
  const live = await fetch('https://kljmerkem.be/content-state.json', { cache: 'no-store', signal: AbortSignal.timeout(15000) });
  if (live.ok) previous = (await live.json()).hash;
} catch { /* A missing fingerprint means a rebuild is needed. */ }
await writeFile('content-state.json', JSON.stringify({ hash, day }));
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `changed=${previous !== hash}\n`);
console.log(previous === hash ? 'Published content is unchanged.' : 'Published content or event calendar day changed.');
