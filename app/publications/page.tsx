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
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title="논문">
        {publications.length === 0 ? (
          <div className="rounded-2xl border bg-white shadow-sm p-8 text-center">
            <div className="text-4xl mb-3">📚</div>
            <p className="text-gray-700 font-medium">
              논문 목록을 준비 중입니다.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              잠시 후 다시 방문해주세요.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm">연도 선택</span>
              <div className="flex flex-wrap gap-2">
                {labels.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveLabel(y)}
                    className={`px-3 py-1.5 rounded-xl border text-sm transition ${
                      activeLabel === y
                        ? 'bg-black text-white'
                        : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <p className="mt-8 text-xs text-gray-400">
                Last synced from ORCID: {syncDateStr}
              </p>
            )}
          </>
        )}
      </Section>
      <Footer />
    </main>
  );
}
