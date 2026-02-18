import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sorryboss.com.au'
  const currentDate = new Date()
  
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book/personal`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book/carer`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // NEW blog posts (2025)
    {
      url: `${baseUrl}/blog/can-pharmacist-write-medical-certificate`,
      lastModified: new Date('2025-02-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/medical-certificate-mental-health-day`,
      lastModified: new Date('2025-02-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/medical-certificate-without-seeing-doctor`,
      lastModified: new Date('2025-02-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sick-leave-certificate-cost`,
      lastModified: new Date('2025-02-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/absence-from-work-certificate`,
      lastModified: new Date('2025-02-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Existing blog posts
    {
      url: `${baseUrl}/blog/medical-certificate-online-australia`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pharmacist-sick-certificate-australia`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/carers-leave-certificate`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/do-i-need-medical-certificate-for-one-day`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sick-leave-rights-australia`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/same-day-medical-certificate`,
      lastModified: new Date('2025-02-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
