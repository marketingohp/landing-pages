import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google AdsBot for web - checks ad landing pages
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
        disallow: ['/admin', '/api/', '/private/'],
      },
      // Google AdsBot for mobile - checks mobile ad landing pages
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: '/',
        disallow: ['/admin', '/api/', '/private/'],
      },
      // All other crawlers (Googlebot, Bing, etc.)
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api/',
          '/private/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://abudhabi-properties.net/sitemap.xml',
  };
}