'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow rise rise-1">Advanced Battery &amp; Cathode Materials Lab</p>

          <h1
            className="mt-6 text-[2.4rem] leading-[1.05] md:text-[4rem] font-bold text-navy rise rise-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            From material innovation
            <br />
            to <span className="text-teal">sustainable</span> batteries.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.05rem] md:text-[1.15rem] leading-relaxed text-muted rise rise-3">
            양극재의 결정 구조와 입자 형상을 원자 단위에서 설계하고, 합성·분석·응용을 거쳐 자원순환까지
            잇는 <span className="text-navy font-medium">전주기 통합 연구</span>로 차세대 배터리 소재를 만듭니다.
          </p>

          <div className="mt-9 rise rise-4">
            <Link href="/research" className="btn-brand" aria-label="연구 분야 보기">
              연구 분야 보기 <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* 지표 스트립 */}
        <dl className="mt-16 grid grid-cols-3 max-w-2xl gap-8 rise rise-4">
          {[
            ['3', 'Battery systems', 'Li · Na · ASSB'],
            ['30+', 'Publications', 'since 2018'],
            ['100%', 'Lifecycle', 'synth → recycle'],
          ].map(([n, k, s]) => (
            <div key={k}>
              <dd className="mono text-3xl md:text-4xl font-semibold text-navy">{n}</dd>
              <dt className="mt-1.5 text-[0.9rem] font-medium text-navy">{k}</dt>
              <p className="mono text-[0.68rem] uppercase tracking-wider text-muted mt-0.5">{s}</p>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
