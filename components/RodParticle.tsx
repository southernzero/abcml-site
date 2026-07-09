'use client';
import { useEffect, useRef } from 'react';

/**
 * 시그니처 그래픽 — 방사형 막대(rod-type) 1차 입자 형상.
 * ABCML 실제 연구(radially-aligned rod-type primary particles)를 모노톤으로 재해석.
 * Canvas 생성 그래픽. 로드 시 중심→외곽 draw-in, prefers-reduced-motion 존중.
 */
export default function RodParticle() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NAVY = '#12303F';
    const COBALT = '#2B5BE0';
    const AMBER = '#E8A23A';

    // 결정적 의사난수 (렌더 안정)
    let seed = 20260709;
    const rand = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

    type Rod = { a: number; r0: number; r1: number; w: number; color: string; curve: number };
    const N = 460;
    const rods: Rod[] = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + (rand() - 0.5) * 0.06;
      // 촘촘한 packing: 대부분 외곽까지 뻗고(둥근 경계), 일부는 짧은 내부 결정립
      const inner = rand() < 0.34;
      const r1 = inner ? 0.34 + rand() * 0.30 : 0.74 + rand() * 0.24;
      const r0 = 0.07 + rand() * 0.05;
      const w = 0.7 + rand() * 1.3;
      const roll = rand();
      const color = roll > 0.95 ? AMBER : (roll > 0.52 ? COBALT : NAVY);
      rods.push({ a, r0, r1, w, color, curve: (rand() - 0.5) * 0.09 });
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let start = 0;

    const draw = (progress: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const R = size * 0.46;

      // 은은한 배경 글로우
      const glow = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.15);
      glow.addColorStop(0, 'rgba(43,91,224,0.10)');
      glow.addColorStop(1, 'rgba(43,91,224,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 방사형 막대
      ctx.lineCap = 'round';
      for (const rod of rods) {
        const grow = Math.min(1, progress * 1.15);
        const rEnd = rod.r0 + (rod.r1 - rod.r0) * grow;
        const a = rod.a;
        const x0 = cx + Math.cos(a) * R * rod.r0;
        const y0 = cy + Math.sin(a) * R * rod.r0;
        const x1 = cx + Math.cos(a) * R * rEnd;
        const y1 = cy + Math.sin(a) * R * rEnd;
        // 살짝 굽은 결정립
        const mx = (x0 + x1) / 2 + Math.cos(a + Math.PI / 2) * R * rod.curve;
        const my = (y0 + y1) / 2 + Math.sin(a + Math.PI / 2) * R * rod.curve;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(mx, my, x1, y1);
        ctx.strokeStyle = rod.color;
        ctx.globalAlpha = rod.color === NAVY ? 0.82 : 0.9;
        ctx.lineWidth = rod.w;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // 내핵
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.16);
      core.addColorStop(0, NAVY);
      core.addColorStop(1, 'rgba(18,48,63,0)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.16, 0, Math.PI * 2);
      ctx.fill();

      // 입자 외곽 힌트 링
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.02, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(18,48,63,0.10)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    if (reduce) { draw(1); return; }

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / 1400);
      const eased = 1 - Math.pow(1 - p, 3);
      draw(eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => draw(1);
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <figure className="relative mx-auto w-full max-w-[440px]">
      <canvas ref={ref} className="block w-full aspect-square" aria-hidden="true" />
      <figcaption className="mono mt-3 flex items-center justify-center gap-2 text-[0.72rem] text-muted">
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--color-cobalt)' }} />
        radially-aligned rod-type primary particle
      </figcaption>
    </figure>
  );
}
