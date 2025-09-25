import type { Post } from './types';

export const news: Post[] = [
  { id: '2025-07-20-award', title: 'To be updated', date: '2025-09-01', summary: 'To be updated', body: 'To be updated' },
];

// 헬퍼
export const getNewsById = (id: string) => news.find(n => n.id === id);
