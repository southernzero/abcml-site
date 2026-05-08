import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getNoticeById, notices } from '@/data/notices';

export function generateStaticParams() {
  return notices.map((n) => ({ id: n.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const item = getNoticeById(id);
  if (!item) return { title: 'Notice' };
  return {
    title: item.title,
    description: item.summary ?? item.title,
  };
}

export default async function NoticeDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = getNoticeById(id);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title={item.title}>
        <p className="text-sm text-gray-500">{item.date}</p>
        <div className="prose mt-4 whitespace-pre-line">
          {item.body ?? '상세 내용 준비 중입니다.'}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
