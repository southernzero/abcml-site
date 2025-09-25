'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notices } from '@/data/notices';
import { news } from '@/data/news';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Hero />

      <Section id="overview" title="연구실 소개" subtitle="Advanced Battery & Cathode Materials Lab (ABCML)">
        <div className="prose max-w-none prose-slate">
          <p>
            ABCML focuses on developing advanced cathode materials optimized for diverse battery systems, including lithium-ion, sodium-ion, and all-solid-state batteries. Through an integrated approach that tightly connects synthesis, characterization, and application, we pursue industrial applicability and sustainability across the full material lifecycle.
          </p>
        </div>
      </Section>

      <Section title="Notice">
        <ul className="divide-y rounded-2xl border bg-white shadow-sm">
          {notices.map(n => (
            <li key={n.id} className="p-4">
              <div className="flex items-baseline justify-between">
                <Link href={`/notice/${n.id}`} className="font-medium hover:underline">{n.title}</Link>
                <span className="text-xs text-gray-500">{n.date}</span>
              </div>
              {n.summary && <p className="text-sm text-gray-600 mt-1">{n.summary}</p>}
            </li>
          ))}
        </ul>
        <div className="mt-3 text-sm">
          <Link href="/notice" className="underline">공지 더 보기</Link>
        </div>
      </Section>

      <Section title="News">
        <ul className="divide-y rounded-2xl border bg-white shadow-sm">
          {news.map(n => (
            <li key={n.id} className="p-4">
              <div className="flex items-baseline justify-between">
                <Link href={`/news/${n.id}`} className="font-medium hover:underline">{n.title}</Link>
                <span className="text-xs text-gray-500">{n.date}</span>
              </div>
              {n.summary && <p className="text-sm text-gray-600 mt-1">{n.summary}</p>}
            </li>
          ))}
        </ul>
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