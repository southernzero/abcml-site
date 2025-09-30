'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notices } from '@/data/notices';
import { news } from '@/data/news';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Hero />
      <Section id="overview" title="연구실 소개" subtitle="Advanced Battery & Cathode Materials Lab (ABCML)">
        <div className="prose max-w-none prose-slate">
          <p>
            ABCML은 Li-ion Batteries, Na-ion Batteries, All-Solid-State Batteries를 비롯한 다양한 차세대 배터리 시스템에 최적화된 첨단 소재 개발에 집중하고 있습니다. 배터리 소재 합성 및 분석을 바탕으로 배터리 성능을 향상시키며, 나아가 소재 재활용까지 확장하는 전주기적 통합 연구를 통해 소재에 대한 근본적 이해와 산업적 활용성, 지속가능성을 동시에 실현합니다.
          </p>
        </div>
      </Section>

      <Section title="Notices">
        <ul className="divide-y divide-gray-200 border rounded-lg bg-white shadow-sm">
          {notices
          .slice()
         .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 최신순 정렬
         .slice(0, 3) // 상위 3개만 표시
         .map((notice) => (
         <li key={notice.id} className="p-3 hover:bg-gray-50 transition">
          <Link href={`/notices/${notice.id}`} className="flex justify-between">
            <span className="line-clamp-1">{notice.title}</span>
            <span className="text-sm text-gray-500">{notice.date}</span>
          </Link>
        </li>
          ))}
        </ul>
           <div className="mt-3 text-sm">
           <Link href="/notices" className="underline">공지 더 보기</Link>
         </div>
      </Section>

      <Section title="News">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {news
      .slice() // 원본 배열 훼손 방지
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 최신순 정렬
      .slice(0, 2) // 상위 2개만 표시
      .map((n) => (
        <Link
          key={n.id}
          href={`/news/${n.id}`}
          className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative aspect-[16/9] bg-slate-100">
            {n.image ? (
              <Image
                src={n.image}
                alt={n.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-sm text-gray-400">
                No image
              </div>
            )}
          </div>

          <div className="p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-medium line-clamp-2">{n.title}</h3>
              <span className="shrink-0 text-xs text-gray-500">{n.date}</span>
            </div>
            {n.summary && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{n.summary}</p>
            )}
          </div>
        </Link>
      ))}
  </div>

  <div className="mt-3 text-sm">
    <Link href="/news" className="underline">뉴스 더 보기</Link>
  </div>
</Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl border bg-white shadow-sm p-5">
          <h3 className="font-semibold">Admission & Collaboration</h3>
          <p className="mt-2 text-sm text-gray-700">For inquiries regarding admission or research collaboration, please contact us by e-mail.</p>
          <ul className="mt-4 text-sm space-y-1">
            <li>E-mail: nypark@inha.ac.kr</li>
            <li>Address: 인천 미추홀구 인하로 100 인하대학교 2북관 585호</li>
          </ul>
        </div>
      </Section>

      <Footer />
    </main>
  );
}