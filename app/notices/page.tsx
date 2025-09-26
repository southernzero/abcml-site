'use client';
import Section from '@/components/Section';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notices } from '@/data/notices';

export default function NoticeListPage() {
  // 최신순 정렬이 필요하면 아래 주석 해제
  // const list = [...notices].sort((a, b) => b.date.localeCompare(a.date));
  const list = notices;

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title="Notice">
        <div className="rounded-2xl border bg-white shadow-sm">
          {list.map(x => (
            <Link
              key={x.id}
              href={`/notices/${x.id}`}
              className="block p-4 border-b last:border-0 hover:bg-slate-50"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{x.title}</span>
                <span className="text-xs text-gray-500">{x.date}</span>
              </div>
              {x.summary && <p className="text-sm text-gray-600 mt-1">{x.summary}</p>}
            </Link>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
