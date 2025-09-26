import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getNoticeById } from '@/data/notices';

export default function NoticeDetail({ params }: { params: { id: string } }) {
  const item = getNoticeById(params.id);
  if (!item) return notFound();

  // Markdown 느낌의 줄바꿈 보존을 원하면 <pre>나 white-space 유틸을 사용
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
