'use client';
import React from 'react';

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};
export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 id={id ? `${id}-title` : undefined} className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}