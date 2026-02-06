import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getNewsById } from '@/data/news';
import Image from 'next/image';

export default function NewsDetail({ params }: { params: { id: string } }) {
  const item = getNewsById(params.id);
  if (!item) return notFound();

  const content = item.body ?? item.summary ?? '상세 내용 준비 중입니다.';

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />

      <Section title={item.title}>
        {/* 날짜 */}
        <p className="text-sm text-gray-500 mb-4">{item.date}</p>

        {/* 이미지 */}
        {item.image && (
          <div className="relative w-full max-w-3xl mx-auto mb-6 aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 본문 */}
<div className="prose prose-slate max-w-none">
  {content
    .split('\n')
    .filter(Boolean)
    .map((line, idx) => {
      const isUrl = line.startsWith('http');

      if (isUrl) {
        return (
          <p key={idx}>
            <a
              href={line}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {line}
            </a>
          </p>
        );
      }

      return <p key={idx}>{line}</p>;
    })}
</div>

      </Section>

      <Footer />
    </main>
  );
}
