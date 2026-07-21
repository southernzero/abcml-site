// app/gallery/page.tsx
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery · 연구실 사진',
  description: '인하대학교 차세대전지소재연구실(ABCML)의 활동 사진 갤러리.',
  alternates: { canonical: '/gallery' },
};

type Meta = { title?: string; date?: string; place?: string };
type CaptionEntry = { file: string } & Meta;
type CaptionMap = Record<string, Meta>;

function loadCaptionMap(dir: string): CaptionMap {
  const captionsPath = path.join(dir, 'captions.json');
  if (!fs.existsSync(captionsPath)) return {};

  try {
    const raw = JSON.parse(fs.readFileSync(captionsPath, 'utf-8'));
    // 새 포맷(Array) 지원 + 구포맷(Object: { "file.jpg": "title" })도 호환
    if (Array.isArray(raw)) {
      const map: CaptionMap = {};
      (raw as CaptionEntry[]).forEach((e) => {
        if (e?.file) map[e.file] = { title: e.title, date: e.date, place: e.place };
      });
      return map;
    } else if (typeof raw === 'object' && raw) {
      const map: CaptionMap = {};
      for (const [k, v] of Object.entries(raw as Record<string, string>)) {
        map[k] = { title: String(v) }; // 구포맷: title만 있음
      }
      return map;
    }
  } catch {
    // 무시하고 빈 맵
  }
  return {};
}

export default function GalleryPage() {
  const dir = path.join(process.cwd(), 'public', 'gallery');
  let images: { src: string; alt: string; title?: string; date?: string; place?: string }[] = [];

  try {
    const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f));
    const metaMap = loadCaptionMap(dir);

    images = files.map((f, i) => {
      const src = `/gallery/${f}`;
      const meta = metaMap[f] ?? {};
      const fallbackTitle = decodeURIComponent(path.parse(f).name.replace(/[_-]+/g, ' ').trim());
      return {
        src,
        alt: `gallery-${i + 1}`,
        title: meta.title || fallbackTitle,
        date: meta.date,
        place: meta.place,
      };
    });
  } catch {
    images = [];
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="Gallery" eyebrow="Lab life" subtitle="연구실의 순간들">
        {images.length === 0 ? (
          <div className="card p-8 text-sm text-muted">
            아직 업로드된 사진이 없습니다.
          </div>
        ) : (
          <GalleryClient images={images} />
        )}
      </Section>
      <Footer />
    </main>
  );
}
