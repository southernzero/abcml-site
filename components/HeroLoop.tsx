import type { CSSProperties } from 'react';
import { FlaskConical, Microscope, BatteryCharging, Car, Recycle } from 'lucide-react';

/**
 * HeroLoop — abcml 히어로 대표 비주얼.
 * 양극 소재의 전주기 순환(closed-loop)을 강조하는 모션 그래픽:
 *   소재 합성 → 소재 평가·분석 → 셀 제조 → EV·ESS 활용 → 재활용 → (다시 합성)
 * 링 위를 시계방향으로 도는 발광 입자 + 흐르는 링으로 "순환"을 표현.
 * lucide-react 아이콘 사용, 순수 CSS 애니메이션. keyframes 는 globals.css 참조.
 */

const STAGES = [
  { Icon: FlaskConical, label: '소재 합성', sub: 'SYNTHESIS' },
  { Icon: Microscope, label: '소재 평가·분석', sub: 'ANALYSIS' },
  { Icon: BatteryCharging, label: '셀 제조', sub: 'CELL' },
  { Icon: Car, label: 'EV · ESS 활용', sub: 'USE' },
  { Icon: Recycle, label: '재활용', sub: 'RECYCLE' },
] as const;

const R = 37; // 노드 배치 반지름(%) — 링(r=37)과 정합

export default function HeroLoop() {
  return (
    <div className="loop-stage">
      <svg
        className="loop-ring"
        viewBox="0 0 100 100"
        role="img"
        aria-label="소재 합성, 소재 평가·분석, 셀 제조, EV·ESS 활용, 재활용으로 순환하는 양극 소재 전주기 루프"
      >
        <defs>
          <filter id="loopGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle className="loop-track" cx="50" cy="50" r="37" />
        <circle className="loop-flow" cx="50" cy="50" r="37" />

        {/* 순환하는 소재 입자 (시계방향) */}
        <g className="loop-orbit">
          <circle className="loop-particle" cx="50" cy="13" r="2.6" />
        </g>
        <g className="loop-orbit b">
          <circle className="loop-particle" cx="50" cy="13" r="2.1" />
        </g>
        <g className="loop-orbit c">
          <circle className="loop-particle" cx="50" cy="13" r="1.6" />
        </g>
      </svg>

      {STAGES.map((s, i) => {
        const a = ((-90 + i * 72) * Math.PI) / 180; // 12시부터 시계방향 72°씩
        const left = 50 + R * Math.cos(a);
        const top = 50 + R * Math.sin(a);
        return (
          <div
            key={s.sub}
            className="loop-node"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <span className="loop-badge" style={{ animationDelay: `${-i * 0.7}s` } as CSSProperties}>
              <s.Icon size={38} strokeWidth={1.7} aria-hidden />
            </span>
            <span className="loop-label">
              {s.label}
              <span className="loop-sub">{s.sub}</span>
            </span>
          </div>
        );
      })}

      <div className="loop-center">
        <span className="loop-center-main">CLOSED-LOOP</span>
        <span className="loop-center-sub">소재 전주기 순환</span>
      </div>
    </div>
  );
}
