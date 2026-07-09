'use client';
import { useEffect, useState } from 'react';

export type ResearchTopic = {
  slug: string;
  title: string;
  cover: string; // 상단 탭 썸네일
  sections: {
    src: string;
    title?: string;
    text: { ko: string; en: string };  // 한/영 동시 표기
  }[];
};

export default function ResearchTabsClient({ topics }: { topics: ResearchTopic[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });

  // 라이트박스 키보드 내비
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') setLightbox({ open: false, idx: 0 });
      if (e.key === 'ArrowLeft')
        setLightbox((s) => ({ open: true, idx: (s.idx - 1 + topics[active].sections.length) % topics[active].sections.length }));
      if (e.key === 'ArrowRight')
        setLightbox((s) => ({ open: true, idx: (s.idx + 1) % topics[active].sections.length }));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, lightbox.open, topics]);

  const secs = topics[active].sections;

  return (
    <div className="space-y-8">
      {/* 상단 탭: 커버이미지 + 제목 */}
      <div className="grid md:grid-cols-3 gap-4">
        {topics.map((t, i) => (
          <button
            key={t.slug}
            onClick={() => setActive(i)}
            className={`card overflow-hidden text-left transition-shadow ${
              active === i
                ? 'outline outline-2 outline-teal shadow-[0_18px_44px_-24px_rgba(20,48,61,0.32)]'
                : 'hover:shadow-[0_14px_36px_-24px_rgba(20,48,61,0.28)]'
            }`}
            aria-pressed={active === i}
          >
            <div className="aspect-[5/3] bg-white flex items-center justify-center border-b border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.cover} alt={t.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-4 flex items-center gap-2">
              <span className={`mono text-[0.7rem] ${active === i ? 'text-teal' : 'text-muted'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-semibold text-navy text-[0.92rem] leading-snug">{t.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* 하단 본문: 2열(왼쪽 그림, 오른쪽 글) — 모바일에서는 1열로 스택 */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>
          {topics[active].title}
        </h3>

        <div className="mt-6 space-y-6">
          {secs.map((s, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-5 items-stretch">
              {/* 왼쪽: 이미지 */}
              <button
                onClick={() => setLightbox({ open: true, idx: i })}
                className="card overflow-hidden text-left group transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(20,48,61,0.3)]"
                aria-label={s.title ? `Open ${s.title}` : 'Open image'}
              >
                <div className="aspect-[4/3] bg-white flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.title ?? 'image'}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </button>

              {/* 오른쪽: 텍스트(한/영) */}
              <div className="card p-6 flex flex-col justify-center">
                <p className="eyebrow mb-3">{String(i + 1).padStart(2, '0')}</p>
                {s.title && <div className="font-semibold text-navy mb-3 leading-snug">{s.title}</div>}
                <p className="text-[0.92rem] leading-relaxed text-navy whitespace-pre-line">{s.text.ko}</p>
                <p className="mt-4 pt-4 border-t border-line text-[0.86rem] leading-relaxed text-muted whitespace-pre-line">
                  {s.text.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 라이트박스 */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox({ open: false, idx: 0 })}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={secs[lightbox.idx].src}
              alt={secs[lightbox.idx].title ?? 'image'}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            {secs[lightbox.idx].title && (
              <div className="absolute left-0 right-0 bottom-0 m-3">
                <div className="inline-block rounded-lg bg-white/90 px-3 py-1 text-xs text-gray-800 shadow">
                  {secs[lightbox.idx].title}
                </div>
              </div>
            )}
            <button
              onClick={() => setLightbox({ open: false, idx: 0 })}
              className="absolute top-2 right-2 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
            >
              닫기
            </button>
            <button
              onClick={() =>
                setLightbox((s) => ({ open: true, idx: (s.idx - 1 + secs.length) % secs.length }))
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
            >
              ‹
            </button>
            <button
              onClick={() => setLightbox((s) => ({ open: true, idx: (s.idx + 1) % secs.length }))}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
