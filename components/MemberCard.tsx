'use client';
import { useEffect, useState } from 'react';

export type Member = {
  name: string;
  role: 'Postdoc' | 'PhD' | 'MS' | 'UG' | 'Staff' | 'Alumni' | string;
  image?: string;
  email?: string;
  note?: string;
  link?: string;
};

export default function MemberCard({ m }: { m: Member }) {
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setImgError(false); }, [m.image]);

  const showImage = Boolean(m.image) && !imgError;

  return (
    <article className="card overflow-hidden transition-shadow hover:shadow-[0_18px_44px_-24px_rgba(20,48,61,0.32)]">
      <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={m.image}
            alt={m.name}
            className="w-full h-full object-contain"
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

      <div className="p-4 border-t border-line">
        <div className="font-semibold text-navy">{m.name}</div>
        <div className="text-[0.82rem] font-medium text-teal mt-1 leading-snug">{m.role}</div>
        {m.note && <div className="text-[0.78rem] text-muted mt-1">{m.note}</div>}

        {(m.email || m.link) && (
          <div className="mt-3 flex gap-4 text-[0.78rem]">
            {m.email && (
              <a href={`mailto:${m.email}`} className="text-teal hover:underline">Email</a>
            )}
            {m.link && (
              <a href={m.link} target="_blank" rel="noreferrer" className="text-teal hover:underline">Link ↗</a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
