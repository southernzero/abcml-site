import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notices · 공지사항',
  description:
    '인하대학교 차세대전지소재연구실(ABCML) 공지사항 — 대학원생·학부연구생 모집 안내.',
  alternates: { canonical: '/notices' },
};

export default function NoticesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
