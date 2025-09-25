'use client';
import { useEffect, useState } from 'react';

export type Member = {
  name: string;
  role: 'Postdoc' | 'PhD' | 'MS' | 'UG' | 'Staff' | 'Alumni' | string;
  image?: string;           // /members/xxx.jpg (없어도 됨)
  email?: string;
  note?: string;            // 전공/연구주제/입학연도 등
  link?: string;            // 개인 페이지/구글스칼라 등
};

export default function MemberCard({ m }: { m: Member }) {
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setImgError(false); }, [m.image]);

  const showImage = Boolean(m.image) && !imgError;

  return (
    <article className="card overflow-hidden">
      {/* 정사각형 프레임 + 흰 배경 + contain (잘림 방지) */}
      <div className="aspect-square bg-white flex items-center justify-center">
        {showImage ? (
          <img
            src={m.image}
            alt={m.name}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="font-semibold">{m.name}</div>
        <div className="text-xs text-gray-600 mt-0.5">{m.role}</div>
        {m.note && <div className="text-xs text-gray-600 mt-1">{m.note}</div>}

        <div className="mt-2 text-xs space-x-3">
          {m.email && (
            <a href={`mailto:${m.email}`} className="underline">Email</a>
          )}
          {m.link && (
            <a href={m.link} target="_blank" rel="noreferrer" className="underline">Link</a>
          )}
        </div>
      </div>
    </article>
  );
}
