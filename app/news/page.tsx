'use client';
import Section from '@/components/Section';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { news } from '@/data/news';

export default function NewsListPage() {
  // 최신순 정렬
  const list = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="News" eyebrow="Latest">
        {list.length === 0 ? (
          <div className="card p-8 text-sm text-muted">등록된 뉴스가 없습니다.</div>
        ) : (
          <div className="card divide-y divide-line overflow-hidden">
            {list.map((x) => (
              <Link
                key={x.id}
                href={`/news/${x.id}`}
                className="block px-5 py-4 hover:bg-panel/60 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium text-navy">{x.title}</span>
                  <span className="mono shrink-0 text-xs text-muted">{x.date}</span>
                </div>
                {x.summary && <p className="text-sm text-muted mt-1.5 line-clamp-2">{x.summary}</p>}
              </Link>
            ))}
          </div>
        )}
      </Section>
      <Footer />
    </main>
  );
}
