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
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />

      <Section title="Members">
        {/* 탭 */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setTab('current')}
            className={`px-4 py-2 rounded-full border text-sm ${
              tab === 'current' ? 'bg-brand-navy text-white' : 'bg-white hover:bg-slate-50'
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setTab('alumni')}
            className={`px-4 py-2 rounded-full border text-sm ${
              tab === 'alumni' ? 'bg-brand-navy text-white' : 'bg-white hover:bg-slate-50'
            }`}
          >
            Alumni
          </button>
        </div>

        {/* 그룹별 그리드 */}
        <div className="space-y-8">
          {groups.map((g, gi) => (
            <section key={gi}>
              <h3 className="text-base font-semibold mb-3">{g.title}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
