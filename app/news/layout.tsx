import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News · 연구실 소식',
  description: '인하대학교 차세대전지소재연구실(ABCML)의 최근 소식과 활동.',
  alternates: { canonical: '/news' },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
