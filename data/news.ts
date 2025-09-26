import type { Post } from './types';

export const news = [
  {
    id: '2025-09-26',
    title: 'News',
    date: '2025-09-01',
    summary: 'To be updated',
    image: '/images/news/2025-09-01.jpg', // 추가
  },
  {
    id: '2025-09-01',
    title: 'News',
    date: '2025-09-01',
    summary: 'To be updated',
    image: '/images/news/2025-09-02.jpg', // 추가
  },
  
  // ...
];

// 헬퍼
export const getNewsById = (id: string) => news.find(n => n.id === id);
