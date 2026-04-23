import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abudhabi-properties.net';
  
  // Main pages
  const routes = [
    '',
    '/home',
    '/al-reem-island',
    '/bab-al-qasr-royal-28',
    '/bashayer-residences',
    '/bayn-by-ora',
    '/bloom-arjaan-by-rotana',
    '/coming-soon-reem-island',
    '/fay-hills',
    '/hudayriyat-island',
    '/one-residence',
    '/radiant-wave',
    '/radisson-residences',
    '/reem-island',
    '/shoba-project-in-yas-gateway',
    '/the-row-saadiyat',
    '/thewilds-aldar',
    '/wadeem',
    '/yas-riva-residences',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
