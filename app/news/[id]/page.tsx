import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getNewsById } from '@/data/news';

export default function NewsDetail({ params }: { params: { id: string } }) {
  const item = getNewsById(params.id);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title={item.title}>
        <p className="text-sm text-gray-500">{item.date}</p>
        <div className="prose mt-4">{item.body ?? '상세 내용 준비 중입니다.'}</div>
      </Section>
      <Footer />
    </main>
  );
}
