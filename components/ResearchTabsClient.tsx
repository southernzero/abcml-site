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
            className={`card overflow-hidden text-left transition ring-1 ring-transparent hover:ring-brand-navy/20 ${
              active === i ? 'outline outline-2 outline-brand-navy' : ''
            }`}
            aria-pressed={active === i}
          >
            <div className="aspect-[5/3] bg-white flex items-center justify-center">
              <img src={t.cover} alt={t.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{t.title}</div>
            </div>
          </button>
        ))}
      </div>

      {/* 하단 본문: 2열(왼쪽 그림, 오른쪽 글) — 모바일에서는 1열로 스택 */}
      <div className="card p-5">
        <h3 className="text-lg font-semibold">{topics[active].title}</h3>

        <div className="mt-4 space-y-6">
          {secs.map((s, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4 items-start">
              {/* 왼쪽: 이미지 */}
              <button
                onClick={() => setLightbox({ open: true, idx: i })}
                className="card overflow-hidden text-left group"
                aria-label={s.title ? `Open ${s.title}` : 'Open image'}
              >
                <div className="aspect-[4/3] bg-white flex items-center justify-center">
                  <img
                    src={s.src}
                    alt={s.title ?? 'image'}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                {s.title && (
                  <div className="px-3 py-2 text-xs text-gray-600 border-t bg-white">{s.title}</div>
                )}
              </button>

              {/* 오른쪽: 텍스트(한/영) */}
              <div className="card p-4">
                {s.title && <div className="text-sm font-semibold mb-2">{s.title}</div>}
                <p className="text-sm text-gray-800 whitespace-pre-line">{s.text.ko}</p>
                <hr className="my-3 border-slate-200" />
                <p className="text-sm text-gray-700 whitespace-pre-line italic">{s.text.en}</p>
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
