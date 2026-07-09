// Google Scholar 지표 — scripts/sync-scholar.mjs 가 주기적으로 data/scholar.json 을 갱신.
import raw from './scholar.json';

export const scholar = {
  citations: Number(raw.citations) || 0,
  citationsSince: Number(raw.citationsSince) || 0,
  hIndex: Number(raw.hIndex) || 0,
  i10Index: Number(raw.i10Index) || 0,
  authorId: (raw.authorId as string) || 'tlvfJbMAAAAJ',
  updatedAt: (raw.updatedAt as string) || '',
};
