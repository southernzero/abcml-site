import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications · 발표 논문',
  description:
    'ABCML 발표 논문 목록 — 니켈리치 양극재, 전고체전지, 리튬·나트륨 이차전지 소재 분야 peer-reviewed 논문.',
  alternates: { canonical: '/publications' },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
