'use client';
import Section from '@/components/Section';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { news } from '@/data/news';

export default function NewsListPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title="News">
        <div className="rounded-2xl border bg-white shadow-sm">
          {news.map(x => (
            <Link key={x.id} href={`/news/${x.id}`} className="block p-4 border-b last:border-0 hover:bg-slate-50">
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
