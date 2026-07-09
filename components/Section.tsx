'use client';
import React from 'react';

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-14 md:py-20"
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h2
            id={id ? `${id}-title` : undefined}
            className="text-[1.7rem] md:text-[2.1rem] font-bold text-navy"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
          {subtitle && <p className="mt-2.5 text-[1.02rem] text-muted">{subtitle}</p>}
        </div>
        <div className="mt-4 h-px bg-line" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
