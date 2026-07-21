import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getNewsById, news } from '@/data/news';
import Image from 'next/image';

// 빌드 시 모든 뉴스 경로를 미리 생성 (정적 생성)
export function generateStaticParams() {
  return news.map((n) => ({ id: n.id }));
}

// 동적 메타데이터 (각 뉴스마다 OG 태그/타이틀 자동 생성)
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) return { title: 'News' };
  return {
    title: item.title,
    description: item.summary ?? item.title,
    alternates: { canonical: `/news/${id}` },
    openGraph: {
      title: item.title,
      description: item.summary ?? item.title,
      images: item.image ? [{ url: item.image }] : undefined,
    },
  };
}

export default async function NewsDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) return notFound();

  const content = item.body ?? item.summary ?? '상세 내용 준비 중입니다.';

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <Section title={item.title} eyebrow="News">
        {/* 날짜 */}
        <p className="mono text-xs text-muted mb-6">{item.date}</p>

        {/* 이미지 */}
        {item.image && (
          <div className="relative w-full max-w-3xl mx-auto mb-8 aspect-[16/9] rounded-2xl overflow-hidden border border-line">
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
        <div className="prose prose-slate max-w-2xl text-navy">
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
                      className="text-teal underline break-all"
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
