'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              From Material Innovation to Sustainable Battery Technologies
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              ABCML focuses on developing advanced cathode materials optimized for diverse battery systems, including lithium-ion,
              sodium-ion, and all-solid-state batteries. Through an integrated approach that connects synthesis, characterization,
              and application, we pursue industrial applicability and sustainability across the full material lifecycle.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/research" className="btn-brand" aria-label="연구내용 페이지로 이동">
                연구 분야 보기
              </Link>
              <Link href="/#contact" className="btn-ghost">
                문의
              </Link>
            </div>
          </div>

          <div className="aspect-[4/3] bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-center">
            <Image
              src="/abcml-logo.png"
              alt="ABCML Logo"
              width={800}
              height={600}
              className="max-h-full max-w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
