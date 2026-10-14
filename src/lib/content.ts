import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { defineQuery } from 'groq';
import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _key?: string;
  alt?: string;
  asset: { _ref: string; _type: 'reference' };
  crop?: { top: number; bottom: number; left: number; right: number };
  hotspot?: { x: number; y: number; width: number; height: number };
}
export interface Navigation { path: string; label: string; title: string; description: string; eyebrow: string; intro: string }
export interface Settings {
  name: string; tagline: string; heroTitle: string; heroIntro: string;
  membershipTitle: string; contactTitle: string; address: string; postalCity: string;
  email: string; copyright: string; analyticsId?: string; logo: SanityImage;
  navigation: Navigation[]; socialLinks: { label: string; url: string }[];
  labels: Record<string, string>;
}
export interface Activity { _id: string; title: string; description?: string; image?: SanityImage }
export interface Event { _id: string; title: string; description?: PortableTextBlock[]; date?: string; annualSchedule?: string; location?: string; image?: SanityImage }
export interface Member { _id: string; naam: string; taken?: string; telefoon?: string; foto?: SanityImage }
export interface Content {
  settings: Settings;
  home: { title: string; metaDescription: string; carouselImages: SanityImage[]; aboutTitle: string; aboutContent: PortableTextBlock[]; membershipInfo: PortableTextBlock[] };
  activities: Activity[]; events: Event[]; members: Member[];
  history: { title: string; content: PortableTextBlock[]; images?: SanityImage[] };
  gallery: { title: string; images: SanityImage[] };
}
const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'z10tsa4x',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: '2026-10-14',
  perspective: 'published',
  useCdn: false,
  timeout: 30000,
});
const builder = createImageUrlBuilder(client);
export const imageUrl = (image: SanityImage, width = 960) => builder.image(image).width(width).fit('max').auto('format').quality(82).url();
export const query = defineQuery(`{
  "settings": *[_type == "siteSettings" && _id == "website-settings"][0]{name,tagline,heroTitle,heroIntro,membershipTitle,contactTitle,address,postalCity,email,copyright,analyticsId,logo,navigation,socialLinks,labels},
  "home": *[_type == "homeContent"] | order(_createdAt asc)[0]{title,metaDescription,carouselImages,aboutTitle,aboutContent,membershipInfo},
  "activities": *[_type == "activiteit"] | order(order asc, title asc){_id,title,description,image},
  "events": *[_type == "evenement"] | order(date desc, title asc){_id,title,description,date,annualSchedule,location,image},
  "members": *[_type == "bestuurslid"] | order(order asc, naam asc){_id,naam,taken,telefoon,foto},
  "history": *[_type == "geschiedenis"] | order(_createdAt asc)[0]{title,content,images},
  "gallery": *[_type == "photoGallery" && _id == "website-gallery"][0]{title,images}
}`);
let content: Promise<Content> | undefined;
export function getContent() {
  return content ??= client.fetch<Content>(query).then(data => {
    if (!data.settings?.name || !data.settings.navigation?.length || !data.home?.title || !data.history || !data.gallery) {
      throw new Error('Required published Sanity website content is missing. Keep the last deployment and publish the missing documents before rebuilding.');
    }
    return data;
  });
}
