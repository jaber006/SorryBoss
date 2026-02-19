import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/book/success', '/book/confirm/'],
      },
    ],
    sitemap: 'https://sorryboss.com.au/sitemap.xml',
  }
}
