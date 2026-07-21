import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members · 연구실 구성원',
  description:
    '인하대학교 차세대전지소재연구실(ABCML) 구성원 — 박남영 교수, 대학원생, 학부연구생 소개.',
  alternates: { canonical: '/members' },
};

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
