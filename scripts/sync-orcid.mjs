// scripts/sync-orcid.mjs
//
// ORCID Public API에서 박남영 교수님의 publications를 가져와
// data/publications.json에 저장하는 스크립트.
//
// 실행 방법:
//   ORCID_ID=0000-0000-0000-0000 node scripts/sync-orcid.mjs
//
// GitHub Actions에서는 Secrets로 ORCID_ID를 등록해서 자동 실행됨.

import fs from 'node:fs/promises';
import path from 'node:path';

const ORCID_ID = process.env.ORCID_ID;
if (!ORCID_ID || !/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(ORCID_ID)) {
  console.error('❌ ORCID_ID 환경변수가 설정되지 않았거나 형식이 잘못되었습니다.');
  console.error('   예: ORCID_ID=0000-0001-2345-6789');
  process.exit(1);
}

const ORCID_API = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;
const OUTPUT_PATH = path.resolve('data', 'publications.json');

// Preprint/repo DOIs를 가려내서 정식 출판본만 사이트에 노출.
// 같은 논문이 정식 저널로도 ORCID에 들어와 있으면 그쪽이 자동으로 남음.
const PREPRINT_DOI_PREFIXES = [
  '10.21203/', // Research Square
  '10.26434/', // ChemRxiv
  '10.1101/',  // bioRxiv / medRxiv
  '10.48550/', // arXiv
  '10.2139/',  // SSRN
];

function isPreprint(doi) {
  if (!doi) return false;
  const lower = doi.toLowerCase();
  return PREPRINT_DOI_PREFIXES.some((p) => lower.startsWith(p));
}

/**
 * ORCID Works API 응답 파싱
 * ORCID는 같은 논문이 여러 source(Crossref, Scopus, 직접 입력 등)에서 들어올 수 있어서
 * `work-summary` 배열 중 가장 정보가 풍부한 것을 골라야 함.
 */
function pickBestSummary(group) {
  const summaries = group['work-summary'] ?? [];
  if (summaries.length === 0) return null;

  // 우선순위: DOI 있음 > journal title 있음 > 가장 최근 수정
  const scored = summaries.map((s) => {
    const hasDoi = (s['external-ids']?.['external-id'] ?? []).some(
      (e) => e['external-id-type'] === 'doi',
    );
    const hasJournal = !!s['journal-title']?.value;
    const lastMod = s['last-modified-date']?.value ?? 0;
    return { s, score: (hasDoi ? 100 : 0) + (hasJournal ? 10 : 0), lastMod };
  });
  scored.sort((a, b) => b.score - a.score || b.lastMod - a.lastMod);
  return scored[0].s;
}

function extractDoi(summary) {
  const ids = summary['external-ids']?.['external-id'] ?? [];
  const doi = ids.find((e) => e['external-id-type'] === 'doi');
  return doi?.['external-id-value'] ?? null;
}

function extractYear(summary) {
  const y = summary['publication-date']?.year?.value;
  return y ? Number(y) : null;
}

function extractTitle(summary) {
  return summary?.title?.title?.value ?? '(Untitled)';
}

function extractJournal(summary) {
  return summary?.['journal-title']?.value ?? '';
}

/**
 * 저자 목록은 work-summary에 안 담겨 있어서 개별 work를 또 fetch해야 함.
 * 하나씩 천천히 호출 (ORCID는 분당 24 req 제한).
 */
async function fetchWorkDetail(putCode) {
  const url = `https://pub.orcid.org/v3.0/${ORCID_ID}/work/${putCode}`;
  const res = await fetch(url, {
    headers: { Accept: 'application/json', 'User-Agent': 'abcml-site-sync/1.0' },
  });
  if (!res.ok) {
    console.warn(`⚠️  work ${putCode} 가져오기 실패: ${res.status}`);
    return null;
  }
  return res.json();
}

function extractAuthors(workDetail) {
  const contributors = workDetail?.contributors?.contributor ?? [];
  if (contributors.length === 0) return '';
  return contributors
    .map((c) => c['credit-name']?.value)
    .filter(Boolean)
    .join('/');
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log(`📥 ORCID에서 ${ORCID_ID}의 works 목록 가져오는 중...`);

  const res = await fetch(ORCID_API, {
    headers: { Accept: 'application/json', 'User-Agent': 'abcml-site-sync/1.0' },
  });
  if (!res.ok) {
    console.error(`❌ ORCID API 호출 실패: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const data = await res.json();

  const groups = data?.group ?? [];
  console.log(`✅ ${groups.length}개의 논문 그룹 발견`);

  const works = [];
  let processed = 0;

  let skippedPreprints = 0;
  for (const group of groups) {
    const summary = pickBestSummary(group);
    if (!summary) continue;

    const putCode = summary['put-code'];
    const title = extractTitle(summary);
    const year = extractYear(summary);
    const journal = extractJournal(summary);
    const doi = extractDoi(summary);

    if (isPreprint(doi)) {
      skippedPreprints++;
      continue;
    }

    // 상세 정보 (저자 목록) 가져오기 - rate limit 회피용 sleep
    let authors = '';
    if (putCode) {
      const detail = await fetchWorkDetail(putCode);
      if (detail) authors = extractAuthors(detail);
      await sleep(150); // 분당 ~400req으로 제한 — 안전 마진
    }

    works.push({
      putCode,
      title,
      authors,
      journal,
      year,
      doi,
      link: doi ? `https://doi.org/${doi}` : null,
    });

    processed++;
    if (processed % 5 === 0) {
      console.log(`  ...${processed}/${groups.length} 처리됨`);
    }
  }

  // 연도 내림차순, 같은 연도 내에서는 제목순
  works.sort((a, b) => {
    if ((b.year ?? 0) !== (a.year ?? 0)) return (b.year ?? 0) - (a.year ?? 0);
    return a.title.localeCompare(b.title);
  });

  // 메타데이터를 포함한 JSON으로 저장
  const output = {
    syncedAt: new Date().toISOString(),
    orcidId: ORCID_ID,
    count: works.length,
    works,
  };

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`✅ ${works.length}개 논문을 ${OUTPUT_PATH}에 저장 완료`);
  if (skippedPreprints > 0) {
    console.log(`   (preprint ${skippedPreprints}건 제외됨)`);
  }
}

main().catch((err) => {
  console.error('❌ 오류:', err);
  process.exit(1);
});
