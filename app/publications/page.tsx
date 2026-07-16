'use client';
import { useMemo, useState, useEffect } from 'react';
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

const anchorId = (label: string) => `year-${label}`;
// 상단 고정 Nav(~70px) + 연도 sticky 바(~58px) 높이만큼 스크롤 보정
const SCROLL_OFFSET = 132;

export default function PublicationsPage() {
  const groups = useMemo(() => groupByYear(publications, RANGES), []);
  const [activeLabel, setActiveLabel] = useState<string>(groups[0]?.label ?? '');

  // 스크롤 위치에 따라 현재 보이는 연도 pill 을 하이라이트
  useEffect(() => {
    if (groups.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveLabel(visible[0].target.id.replace('year-', ''));
      },
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 },
    );
    groups.forEach((g) => {
      const el = document.getElementById(anchorId(g.label));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [groups]);

  const scrollToYear = (label: string) => {
    setActiveLabel(label);
    const el = document.getElementById(anchorId(label));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const total = publications.length;

  // 동기화 시각 — placeholder(1970)면 표시 안 함
  const syncDate = new Date(lastSyncedAt);
  const hasSynced = syncDate.getFullYear() > 2000;
  const syncDateStr = hasSynced
    ? syncDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="Publications" eyebrow="Peer-reviewed research">
        {total === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-navy font-medium">논문 목록을 준비 중입니다.</p>
            <p className="text-sm text-muted mt-2">잠시 후 다시 방문해주세요.</p>
          </div>
        ) : (
          <>
            {/* 연도 네비 (상단 고정) — 클릭 시 해당 연도 섹션으로 스크롤 이동 */}
            <div className="sticky top-[68px] z-30 -mx-5 px-5 py-3 bg-background/90 backdrop-blur border-b border-line">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="mono text-[0.7rem] uppercase tracking-wider text-muted shrink-0">
                  Year <span className="text-navy font-semibold normal-case tracking-normal">· {total} papers</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {groups.map((g) => (
                    <button
                      key={g.label}
                      onClick={() => scrollToYear(g.label)}
                      aria-current={activeLabel === g.label}
                      className={`mono px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                        activeLabel === g.label
                          ? 'bg-teal text-white border-teal'
                          : 'bg-white border-line text-muted hover:text-navy hover:border-teal'
                      }`}
                    >
                      {g.label}
                      <span className="ml-1 opacity-70">({g.pubs.length})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 모든 연도 섹션을 한 페이지에 전부 표시 */}
            <div className="mt-10 space-y-16">
              {groups.map((g) => (
                <section
                  key={g.label}
                  id={anchorId(g.label)}
                  className="scroll-mt-[132px]"
                >
                  <div className="flex items-baseline gap-3 mb-6">
                    <h3
                      className="text-2xl font-bold text-navy"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {g.label}
                    </h3>
                    <span className="mono text-[0.72rem] text-muted whitespace-nowrap">
                      {g.pubs.length} papers
                    </span>
                    <span className="flex-1 h-px bg-line" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {g.pubs.map((p, idx) => (
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
                </section>
              ))}
            </div>

            {hasSynced && (
              <p className="mono mt-14 text-[0.72rem] text-muted/80">
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
