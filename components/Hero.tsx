'use client';
import Link from 'next/link';
import RodParticle from './RodParticle';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* --- 좌: 카피 --- */}
          <div>
            <p className="eyebrow rise rise-1">Advanced Battery &amp; Cathode Materials Lab</p>

            <h1
              className="mt-6 text-[2.15rem] leading-[1.06] md:text-[3.1rem] font-bold text-navy rise rise-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              From material innovation
              <br />
              to <span className="text-cobalt">sustainable</span> batteries.
            </h1>

            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted rise rise-3">
              양극재의 결정 구조와 입자 형상을 원자 단위에서 설계하고, 합성·분석·응용을 거쳐 자원순환까지
              잇는 <span className="text-navy font-medium">전주기 통합 연구</span>로 차세대 배터리 소재를 만듭니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 rise rise-4">
              <Link href="/research" className="btn-brand" aria-label="연구 분야 보기">
                연구 분야 보기 <span aria-hidden>→</span>
              </Link>
              <Link href="/#contact" className="btn-ghost">문의 &amp; 합류</Link>
            </div>

            <dl className="mt-11 grid grid-cols-3 max-w-md gap-6 rise rise-4">
              {[
                ['3', 'Battery systems', 'Li · Na · ASSB'],
                ['30+', 'Publications', 'since 2018'],
                ['100%', 'Lifecycle', 'synth → recycle'],
              ].map(([n, k, s]) => (
                <div key={k}>
                  <dd className="mono text-2xl font-semibold text-navy">{n}</dd>
                  <dt className="mt-1 text-[0.82rem] font-medium text-navy">{k}</dt>
                  <p className="mono text-[0.66rem] uppercase tracking-wider text-muted mt-0.5">{s}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* --- 우: 시그니처 — 방사형 rod-type 1차 입자 --- */}
          <div className="rise rise-3">
            <RodParticle />
          </div>
        </div>
      </div>
    </header>
  );
}
