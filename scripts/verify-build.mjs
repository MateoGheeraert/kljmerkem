import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const routes = ['', 'activiteiten', 'bestuur', 'evenementen', 'fotos', 'geschiedenis'];
for (const route of routes) {
  const html = await readFile(`dist/${route ? route + '/' : ''}index.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one H1`);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /cdn\.sanity\.io/);
  assert.doesNotMatch(html, /%PUBLIC_URL%|react-scripts|<div id="root"|undefined/);
  for (const [, path] of html.matchAll(/(?:href|src)="(\/(?!\/)[^"?#]*)/g)) {
    if (!path) continue;
    await access(`dist${path}${path.endsWith('/') ? 'index.html' : ''}`);
  }
}
assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'kljmerkem.be');
assert.match(await readFile('dist/404.html', 'utf8'), /noindex/);
assert.match(await readFile('dist/sitemap.xml', 'utf8'), /https:\/\/kljmerkem\.be\/bestuur\//);
console.log('Verified six static pages, local links/assets, SEO, 404, sitemap and custom domain.');
