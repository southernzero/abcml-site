'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import MemberCard from '@/components/MemberCard';
import { currentMemberGroups, alumniGroups } from '@/data/members';

type TabKey = 'current' | 'alumni';

export default function MembersPage() {
  const [tab, setTab] = useState<TabKey>('current');
  const groups = tab === 'current' ? currentMemberGroups : alumniGroups;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <Section title="Members" eyebrow="People">
        {/* 탭 */}
        <div className="mb-8 inline-flex gap-1 rounded-full border border-line bg-white p-1">
          {(['current', 'alumni'] as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                tab === key ? 'bg-teal text-white' : 'text-muted hover:text-navy'
              }`}
            >
              {key === 'current' ? 'Current' : 'Alumni'}
            </button>
          ))}
        </div>

        {/* 그룹별 그리드 */}
        <div className="space-y-12">
          {groups.map((g, gi) => (
            <section key={gi}>
              <p className="eyebrow mb-5">{g.title}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {g.items.filter(Boolean).map((m, i) => (
                  <MemberCard key={i} m={m} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
