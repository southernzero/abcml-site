'use client';
import { useState, useEffect } from 'react';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  link: string;
  image?: string;
};

export default function PublicationCard({ p }: { p: Publication }) {
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setImgError(false); }, [p.image]);

  const showImage = Boolean(p.image) && !imgError;

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="group card overflow-hidden flex flex-col transition-shadow hover:shadow-[0_20px_50px_-26px_rgba(20,48,61,0.34)]"
    >
      <div className="aspect-[16/9] bg-white flex items-center justify-center overflow-hidden border-b border-line">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="mono w-full h-full flex items-center justify-center text-[0.7rem] uppercase tracking-wider text-muted/60">
            No image
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-[0.92rem] leading-snug text-navy line-clamp-3">{p.title}</h3>
        <p className="text-[0.78rem] text-muted mt-1.5 line-clamp-2">{p.authors}</p>
        <p className="mono text-[0.74rem] text-teal-deep mt-2 line-clamp-1">{p.journal}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[0.78rem] font-medium text-teal">
          View paper <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
        </span>
      </div>
    </a>
  );
}
