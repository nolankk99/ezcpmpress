import { MetadataRoute } from 'next';

// robots.txt 생성
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ez-compress.vercel.app/sitemap.xml',
  };
} 