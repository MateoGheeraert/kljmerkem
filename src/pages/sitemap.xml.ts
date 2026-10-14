import type { APIRoute } from 'astro';
import { getContent } from '../lib/content';
export const GET: APIRoute = async ({ site }) => {
  const { settings } = await getContent();
  const urls = settings.navigation.map(page => `<url><loc>${new URL(page.path, site).href.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
