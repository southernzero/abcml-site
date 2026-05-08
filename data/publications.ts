// data/publications.ts
//
// ORCID에서 가져온 publications.json + 수동 메타(IF, 이미지)를 합쳐
// 페이지 컴포넌트에서 쓸 형태로 가공하는 래퍼.

import publicationsData from './publications.json';
import { formatJournalWithIF, getImageForDoi } from './publications-meta';

export type Publication = {
  title: string;
  authors: string;
  journal: string; // IF가 합쳐진 표시용 문자열 (예: "Nature Energy (IF: 60.1)")
  link: string;
  image?: string;
  year: number | null;
};

type RawWork = {
  putCode: number | null;
  title: string;
  authors: string;
  journal: string;
  year: number | null;
  doi: string | null;
  link: string | null;
};

type RawData = {
  syncedAt: string;
  orcidId: string;
  count: number;
  works: RawWork[];
};

const data = publicationsData as RawData;

/** 컴포넌트에서 쓸 가공된 publication 배열 (연도 내림차순 이미 정렬됨) */
export const publications: Publication[] = data.works.map((w) => ({
  title: w.title,
  authors: w.authors,
  journal: formatJournalWithIF(w.journal),
  link: w.link ?? (w.doi ? `https://doi.org/${w.doi}` : '#'),
  image: getImageForDoi(w.doi),
  year: w.year,
}));

/** 마지막 동기화 시간 (UI에 "Last updated: ..." 표시용) */
export const lastSyncedAt: string = data.syncedAt;

/**
 * 연도별로 묶기. UI에서 탭 표시할 때 사용.
 * 2018-2024처럼 범위 묶음을 원하면 두번째 인자에 그룹 정의를 넘김.
 */
export type YearGroup = {
  label: string;
  pubs: Publication[];
};

export function groupByYear(
  pubs: Publication[],
  ranges: { label: string; from: number; to: number }[] = [],
): YearGroup[] {
  // ranges에 매치되는 논문은 그쪽으로, 나머지는 단일 연도 그룹으로
  const used = new Set<Publication>();
  const groups: YearGroup[] = [];

  // 1) 명시된 범위 그룹
  for (const r of ranges) {
    const inRange = pubs.filter(
      (p) => p.year !== null && p.year >= r.from && p.year <= r.to,
    );
    inRange.forEach((p) => used.add(p));
    if (inRange.length > 0) groups.push({ label: r.label, pubs: inRange });
  }

  // 2) 나머지는 연도별 단일 그룹 (내림차순)
  const remaining = pubs.filter((p) => !used.has(p));
  const byYear = new Map<number, Publication[]>();
  for (const p of remaining) {
    const y = p.year ?? 0;
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y)!.push(p);
  }
  const sortedYears = [...byYear.keys()].sort((a, b) => b - a);
  for (const y of sortedYears) {
    groups.push({ label: y === 0 ? 'Unknown' : String(y), pubs: byYear.get(y)! });
  }

  // 단일 연도 그룹들이 범위 그룹들 앞에 오도록 재정렬
  // (예: 2026, 2025, ..., 2018-2024 순)
  groups.sort((a, b) => {
    const yA = parseInt(a.label, 10);
    const yB = parseInt(b.label, 10);
    const aIsYear = !isNaN(yA);
    const bIsYear = !isNaN(yB);
    if (aIsYear && bIsYear) return yB - yA;
    if (aIsYear) return -1; // 단일 연도가 앞
    if (bIsYear) return 1;
    // 둘 다 범위면 라벨 첫 숫자 기준 내림차순
    const aStart = parseInt(a.label, 10);
    const bStart = parseInt(b.label, 10);
    return bStart - aStart;
  });

  return groups;
}
