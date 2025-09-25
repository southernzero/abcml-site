'use client';
import { useState, useEffect } from 'react';

type Publication = {
  title: string;
  authors: string;
  journal: string;
  link: string;
  image?: string; // 썸네일 (없거나 404일 수 있음)
};

export default function PublicationCard({ p }: { p: Publication }) {
  const [imgError, setImgError] = useState(false);

  // 이미지 URL이 바뀌면 에러 상태 초기화
  useEffect(() => { setImgError(false); }, [p.image]);

  const showImage = Boolean(p.image) && !imgError;

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* 항상 흰 배경 + 고정 비율 박스 */}
      <div className="aspect-[16/9] bg-white flex items-center justify-center">
        {showImage ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}   // ← 실패 시 흰 배경 플레이스홀더로 전환
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            {/* 필요하면 아이콘/텍스트 변경 가능 */}
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm">{p.title}</h3>
        <p className="text-xs text-gray-600 mt-1">{p.authors}</p>
        <p className="text-xs mt-1"><span className="font-semibold">{p.journal}</span></p>
        <Link
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-sm underline"
        >
          View
        </Link>
      </div>
    </div>
  );
}
