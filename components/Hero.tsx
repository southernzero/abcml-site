'use client';
import Link from 'next/link';

const ELEMENTS = [
  { sym: 'Li', z: 3 },
  { sym: 'Na', z: 11 },
  { sym: 'Mn', z: 25 },
  { sym: 'Co', z: 27 },
  { sym: 'Ni', z: 28 },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* --- 좌: 카피 --- */}
          <div>
            <p className="eyebrow rise rise-1">Advanced Battery &amp; Cathode Materials Lab</p>

            {/* 원소 스트립 */}
            <div className="mt-5 flex flex-wrap gap-2.5 rise rise-1" aria-hidden="true">
              {ELEMENTS.map((e) => (
                <span
                  key={e.sym}
                  className="el-tile"
                  style={e.sym === 'Co' ? { borderColor: 'var(--color-cobalt)' } : undefined}
                >
                  <span className="z">{e.z}</span>
                  <span className="sym" style={e.sym === 'Co' ? { color: 'var(--color-cobalt)' } : undefined}>
                    {e.sym}
                  </span>
                </span>
              ))}
            </div>

            <h1
              className="mt-7 text-[2.15rem] leading-[1.06] md:text-[3.1rem] font-bold text-navy rise rise-2"
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

          {/* --- 우: 시그니처 — 충·방전 전압-용량 곡선 --- */}
          <div className="rise rise-3">
            <ChargeCurve />
          </div>
        </div>
      </div>
    </header>
  );
}

function ChargeCurve() {
  return (
    <figure className="card p-5 md:p-6 shadow-[0_24px_60px_-24px_rgba(11,26,36,0.28)]">
      <figcaption className="flex items-center justify-between mb-3">
        <span className="eyebrow" style={{ color: 'var(--color-navy)' }}>Voltage profile</span>
        <span className="mono text-[0.68rem] text-muted">NCM · half-cell</span>
      </figcaption>

      <svg viewBox="0 0 440 300" className="w-full h-auto" role="img"
           aria-label="양극재 충전·방전 전압-용량 곡선">
        {/* grid */}
        <g stroke="var(--color-line)" strokeWidth="1">
          {[70, 122, 174, 226].map((y) => <line key={y} x1="52" y1={y} x2="416" y2={y} />)}
          {[128, 220, 312].map((x) => <line key={x} x1={x} y1="44" x2={x} y2="252" />)}
        </g>
        {/* axes */}
        <line x1="52" y1="44" x2="52" y2="252" stroke="var(--color-navy)" strokeWidth="1.4" />
        <line x1="52" y1="252" x2="416" y2="252" stroke="var(--color-navy)" strokeWidth="1.4" />

        {/* discharge (cobalt) — 항상 아래, 완만한 plateau */}
        <path
          className="curve-draw" pathLength={1}
          d="M60,188 C110,176 150,166 210,156 C255,150 285,146 316,140 C355,128 388,104 416,78"
          fill="none" stroke="var(--color-cobalt)" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* charge (amber) — 항상 위, 완만한 plateau */}
        <path
          className="curve-draw amber" pathLength={1}
          d="M60,165 C110,150 150,140 210,132 C255,126 285,124 316,116 C355,104 388,88 416,62"
          fill="none" stroke="var(--color-amber)" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round"
        />

        {/* axis labels (mono) */}
        <text x="8" y="52" className="mono" fontSize="10" fill="var(--color-muted)">4.4</text>
        <text x="14" y="256" className="mono" fontSize="10" fill="var(--color-muted)">3.0</text>
        <text x="52" y="286" className="mono" fontSize="10.5" fill="var(--color-navy)"
              style={{ fontWeight: 500 }}>Capacity (mAh g⁻¹)</text>
        <text x="14" y="34" className="mono" fontSize="10.5" fill="var(--color-navy)"
              style={{ fontWeight: 500 }}>V</text>
      </svg>

      <div className="mt-3 flex items-center gap-5 text-[0.74rem]">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-3.5 h-[3px] rounded-full" style={{ background: 'var(--color-amber)' }} />
          <span className="text-muted">Charge</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-3.5 h-[3px] rounded-full" style={{ background: 'var(--color-cobalt)' }} />
          <span className="text-muted">Discharge</span>
        </span>
      </div>
    </figure>
  );
}
