import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notices } from '@/data/notices';
import { news } from '@/data/news';
import Image from 'next/image';

const CYCLE = [
  ['01', 'Synthesis', '합성', '전구체·조성 설계와 결정 성장'],
  ['02', 'Characterization', '분석', '구조·계면·열화 메커니즘 규명'],
  ['03', 'Application', '응용', 'Li · Na · 전고체 셀 구현'],
  ['04', 'Recycling', '자원순환', '회수·재합성·업사이클링'],
];

export default function HomePage() {
  const latestNotices = notices
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const latestNews = news
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />

      {/* --- 연구실 소개 + 전주기 사이클 --- */}
      <Section id="overview" title="전주기 통합 연구" eyebrow="What we do">
        <p className="max-w-3xl text-[1.05rem] leading-relaxed text-navy">
          결정 구조와 입자 형상을 원자 단위에서 제어해 고성능 양극 소재를 설계하고, 전자현미경·X-선 분광 등
          다각적 분석으로 열화 메커니즘을 규명하며, 사용 후 배터리의 회수·재합성·업사이클링까지 아우릅니다.
          소재의 탄생부터 순환까지 — <span className="text-teal font-medium">근본적 이해 · 산업적 활용성 · 지속가능성</span>을
          한 연구실에서 함께 추구합니다.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CYCLE.map(([n, en, ko, desc], i) => (
            <li key={n} className="relative card p-5">
              <div className="flex items-baseline justify-between">
                <span className="mono text-sm font-semibold text-teal">{n}</span>
                {i < CYCLE.length - 1 ? (
                  <span aria-hidden className="mono text-line text-lg">→</span>
                ) : (
                  <span aria-hidden className="mono text-teal-deep text-lg">↻</span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy" style={{ fontFamily: 'var(--font-display)' }}>
                {en}
              </h3>
              <p className="text-[0.74rem] font-medium text-muted mt-0.5">{ko}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* --- Notices --- */}
      <Section title="Notices" eyebrow="Announcements">
        <ul className="card divide-y divide-line overflow-hidden">
          {latestNotices.map((notice) => (
            <li key={notice.id}>
              <Link
                href={`/notices/${notice.id}`}
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-panel/60 transition-colors"
              >
                <span className="line-clamp-1 text-navy font-medium">{notice.title}</span>
                <span className="mono shrink-0 text-xs text-muted">{notice.date}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/notices" className="text-sm font-medium text-teal hover:underline">공지 더 보기 →</Link>
        </div>
      </Section>

      {/* --- News --- */}
      <Section title="News" eyebrow="Latest">
        <div className={`grid gap-5 ${latestNews.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl'}`}>
          {latestNews.map((n) => (
            <Link
              key={n.id}
              href={`/news/${n.id}`}
              className="group card overflow-hidden transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,26,36,0.3)]"
            >
              <div className="relative aspect-[16/9] bg-panel overflow-hidden">
                {n.image ? (
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center mono text-sm text-muted">No image</div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-navy line-clamp-2">{n.title}</h3>
                  <span className="mono shrink-0 text-xs text-muted">{n.date}</span>
                </div>
                {n.summary && <p className="text-sm text-muted mt-1.5 line-clamp-2">{n.summary}</p>}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/news" className="text-sm font-medium text-teal hover:underline">뉴스 더 보기 →</Link>
        </div>
      </Section>

      {/* --- Contact (dark band) --- */}
      <section id="contact" className="scroll-mt-24 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-6 py-10 md:px-12 md:py-14">
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                background:
                  'radial-gradient(600px 300px at 88% -20%, rgba(47,163,123,0.42), transparent 60%), radial-gradient(400px 240px at 0% 120%, rgba(47,163,123,0.18), transparent 55%)',
              }}
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 md:items-center">
              <div>
                <p className="eyebrow" style={{ color: 'var(--color-teal)' }}>Join / Collaborate</p>
                <h2 className="mt-4 text-[1.7rem] md:text-[2.1rem] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  대학원생 · 공동연구를 찾습니다
                </h2>
                <p className="mt-3 max-w-lg text-white/70 leading-relaxed">
                  배터리 소재에 진심인 연구자를 환영합니다. 입학 및 공동연구 문의는 이메일로 연락 주세요.
                </p>
                <ul className="mt-6 space-y-1.5 text-sm text-white/85">
                  <li><span className="mono text-white/50 mr-2">E</span> nypark@inha.ac.kr</li>
                  <li><span className="mono text-white/50 mr-2">A</span> 인천 미추홀구 인하로 100, 인하대학교 2북관 591호</li>
                </ul>
              </div>
              <a href="mailto:nypark@inha.ac.kr" className="btn-brand justify-center md:self-start">
                이메일 보내기 <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
