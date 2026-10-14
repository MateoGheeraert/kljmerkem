import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kljmerkem.be',
  output: 'static',
  trailingSlash: 'always',
  // Keep the old CRA public/index.html from overwriting Astro's homepage.
  publicDir: './static',
});
