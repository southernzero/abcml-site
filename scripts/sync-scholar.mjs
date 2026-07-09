// Google Scholar 프로필에서 인용 지표를 가져와 data/scholar.json 을 갱신한다.
// 가벼운 HTTP fetch + 정규식 파싱 (브라우저 불필요). 파싱 실패(차단/캡차) 시
// 기존 값을 유지하고 exit 0 → 워크플로우는 초록, 마지막 정상값 보존.
import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'data', 'scholar.json');

const AUTHOR_ID = process.env.SCHOLAR_ID || readAuthorId() || 'tlvfJbMAAAAJ';

function readAuthorId() {
  try { return JSON.parse(readFileSync(OUT, 'utf-8')).authorId; } catch { return null; }
}

const url = `https://scholar.google.com/citations?user=${AUTHOR_ID}&hl=en`;

try {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  if (!res.ok) {
    console.warn(`⚠️ Scholar fetch HTTP ${res.status} — 기존 값 유지`);
    process.exit(0);
  }

  const html = await res.text();
  // 통계 테이블: citations(all, since), h-index(all, since), i10(all, since)
  const nums = [...html.matchAll(/<td[^>]*class="gsc_rsb_std"[^>]*>(\d+)<\/td>/g)].map((m) => Number(m[1]));

  if (nums.length < 6 || !(nums[0] > 0)) {
    console.warn('⚠️ Scholar 통계 파싱 실패(차단/캡차 추정) — 기존 값 유지');
    process.exit(0);
  }

  // 실제 지표가 바뀔 때만 파일을 갱신한다(불필요한 커밋·재배포 방지).
  // updatedAt 은 지표가 바뀔 때만 갱신 → 값이 같으면 파일 무변경 → push 안 함.
  let prev = {};
  try { prev = JSON.parse(readFileSync(OUT, 'utf-8')); } catch {}
  if (prev.citations === nums[0] && prev.hIndex === nums[2] && prev.i10Index === nums[4]) {
    console.log(`변경 없음(${nums[0]} citations) — 파일 유지, push skip`);
    process.exit(0);
  }

  const data = {
    citations: nums[0],
    citationsSince: nums[1],
    hIndex: nums[2],
    i10Index: nums[4],
    authorId: AUTHOR_ID,
    updatedAt: new Date().toISOString(),
  };

  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ Scholar 지표 변경 → 갱신: ${data.citations} citations · h-index ${data.hIndex}`);
} catch (e) {
  console.warn('⚠️ Scholar 동기화 예외 — 기존 값 유지:', String(e));
  process.exit(0);
}
