// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://abcml.vercel.app'),
  title: {
    default:
      'Advanced Battery & Cathode Materials Lab (ABCML) — Inha University, Nam-Yung Park | 인하대학교, 박남영',
    template: '%s | ABCML',
  },
  description:
    '인하대학교 차세대전지소재연구실 (Advanced Battery & Cathode Materials Lab, ABCML) — 박남영 교수',
  keywords: [
    'ABCML',
    '차세대전지소재연구실',
    '인하대학교',
    '박남영',
    'Nam-Yung Park',
    'Inha University',
    '이차전지',
    '양극재',
    'cathode materials',
    'lithium-ion battery',
    'sodium-ion battery',
    'all-solid-state battery',
  ],
  authors: [{ name: 'Nam-Yung Park' }],
  openGraph: {
    title:
      'Advanced Battery & Cathode Materials Lab (ABCML) — Inha University',
    description:
      '인하대학교 차세대전지소재연구실 (ABCML) — 박남영 교수 연구실',
    url: 'https://abcml.vercel.app',
    siteName: 'ABCML',
    images: [
      {
        url: '/abcml-logo.png',
        width: 1200,
        height: 630,
        alt: 'ABCML — Advanced Battery & Cathode Materials Lab',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABCML — Inha University',
    description: '인하대학교 차세대전지소재연구실',
    images: ['/abcml-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// 연구실을 하나의 기관 엔티티로 인식시키는 구조화 데이터 (검색 결과 통합·사이트링크 유도)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: 'Advanced Battery & Cathode Materials Lab (ABCML)',
  alternateName: ['ABCML', '차세대전지소재연구실'],
  url: 'https://abcml.vercel.app',
  logo: 'https://abcml.vercel.app/abcml-logo.png',
  parentOrganization: {
    '@type': 'CollegeOrUniversity',
    name: 'Inha University',
    alternateName: '인하대학교',
  },
  founder: {
    '@type': 'Person',
    name: 'Nam-Yung Park',
    alternateName: '박남영',
    jobTitle: 'Assistant Professor',
    email: 'nypark@inha.ac.kr',
  },
  knowsAbout: [
    'cathode materials',
    'lithium-ion battery',
    'sodium-ion battery',
    'all-solid-state battery',
    'battery recycling',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className="font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
