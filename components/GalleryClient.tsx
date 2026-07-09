'use client';
import { useEffect, useState } from 'react';

type Pic = { src: string; alt?: string; title?: string; date?: string; place?: string };

export default function GalleryClient({ images }: { images: Pic[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const onOpen = (i: number) => { setIdx(i); setOpen(true); };
  const onClose = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const MetaLine = ({ pic }: { pic: Pic }) => {
    const parts = [pic.date, pic.place].filter(Boolean);
    if (parts.length === 0) return null;
    return <div className="mono text-[0.66rem] text-muted mt-1">{parts.join(' · ')}</div>;
  };

  return (
    <>
      {/* 썸네일 그리드 + 캡션/메타 */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((p, i) => (
          <button
            key={i}
            onClick={() => onOpen(i)}
            className="card overflow-hidden group text-left transition-shadow hover:shadow-[0_18px_44px_-24px_rgba(20,48,61,0.32)]"
            aria-label={`Open ${p.title ?? p.alt ?? `image ${i + 1}`}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt ?? `gallery-${i + 1}`}
              className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="px-4 py-3 border-t border-line">
              {p.title && <div className="text-sm font-medium text-navy">{p.title}</div>}
              <MetaLine pic={p} />
            </div>
          </button>
        ))}
      </div>

      {/* 라이트박스 */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[idx].src}
              alt={images[idx].alt ?? 'image'}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            {/* 캡션/메타 오버레이 */}
            {(images[idx].title || images[idx].date || images[idx].place) && (
              <div className="absolute left-0 right-0 bottom-0 m-3">
                <div className="inline-block rounded-lg bg-white/90 px-3 py-1 text-xs text-gray-800 shadow">
                  {images[idx].title && <span className="font-medium">{images[idx].title}</span>}
                  {(images[idx].date || images[idx].place) && (
                    <span className="ml-2 text-gray-600">
                      {[images[idx].date, images[idx].place].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </div>
              </div>
            )}
            {/* controls */}
            <button onClick={onClose} className="absolute top-2 right-2 rounded-full bg-white/90 px-3 py-1 text-sm shadow">X</button>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm shadow">›</button>
          </div>
        </div>
      )}
    </>
  );
}
