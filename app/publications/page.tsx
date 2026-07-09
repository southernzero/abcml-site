'use client';
import { useMemo, useState } from 'react';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import PublicationCard from '@/components/PublicationCard';
import { publications, groupByYear, lastSyncedAt } from '@/data/publications';

// 2024 이전 논문은 "2018-2024" 그룹으로 묶음.
// 새 범위 그룹을 추가하고 싶으면 여기에 한 줄 추가.
const RANGES = [
  { label: '2018-2024', from: 2018, to: 2024 },
];

export default function PublicationsPage() {
  const groups = useMemo(() => groupByYear(publications, RANGES), []);
  const labels = groups.map((g) => g.label);
  const [activeLabel, setActiveLabel] = useState<string>(labels[0] ?? '');

  const currentGroup = groups.find((g) => g.label === activeLabel);
  const list = currentGroup?.pubs ?? [];

  // 동기화 시각 — placeholder(1970)면 표시 안 함
  const syncDate = new Date(lastSyncedAt);
  const hasSynced = syncDate.getFullYear() > 2000;
  const syncDateStr = hasSynced
    ? syncDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="Publications" eyebrow="Peer-reviewed research">
        {publications.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-navy font-medium">논문 목록을 준비 중입니다.</p>
            <p className="text-sm text-muted mt-2">잠시 후 다시 방문해주세요.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span className="mono text-[0.7rem] uppercase tracking-wider text-muted">Year</span>
              <div className="flex flex-wrap gap-2">
                {labels.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveLabel(y)}
                    className={`mono px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                      activeLabel === y
                        ? 'bg-teal text-white border-teal'
                        : 'bg-white border-line text-muted hover:text-navy hover:border-teal'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((p, idx) => (
                <PublicationCard
                  key={p.link + idx}
                  p={{
                    title: p.title,
                    authors: p.authors,
                    journal: p.journal,
                    link: p.link,
                    image: p.image,
                  }}
                />
              ))}
            </div>

            {hasSynced && (
              <p className="mono mt-10 text-[0.72rem] text-muted/80">
                Last synced from ORCID · {syncDateStr}
              </p>
            )}
          </>
        )}
      </Section>
      <Footer />
    </main>
  );
}
