import type { MetadataRoute } from 'next';
import { news } from '@/data/news';
import { notices } from '@/data/notices';

const BASE = 'https://abcml.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/professor`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/research`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/members`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/publications`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE}/news`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${BASE}/notices`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${BASE}/gallery`, priority: 0.5, changeFrequency: 'monthly' },
  ];

  const newsPages: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${BASE}/news/${n.id}`,
    lastModified: n.date,
    priority: 0.5,
  }));

  const noticePages: MetadataRoute.Sitemap = notices.map((n) => ({
    url: `${BASE}/notices/${n.id}`,
    lastModified: n.date,
    priority: 0.5,
  }));

  return [...staticPages, ...newsPages, ...noticePages];
}
