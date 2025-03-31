import { MetadataRoute } from 'next';

// sitemap.xml 생성
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ez-compress.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
} 