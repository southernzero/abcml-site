# ABCML Lab Website

인하대학교 차세대전지소재연구실 (Advanced Battery & Cathode Materials Lab) 공식 사이트.

배포 URL: https://abcml.vercel.app
스택: Next.js 16 (App Router) + React 19 + Tailwind v4 + Vercel

---

## 🚀 로컬 개발

```bash
npm install
npm run dev
# http://localhost:3000
```

배포는 `main` 브랜치에 push하면 Vercel이 자동으로 처리합니다.

---

## 📚 Publications 자동 동기화

Publications 페이지는 **ORCID**에서 자동으로 가져옵니다.

### 일회성 셋업

1. **GitHub Repo Secrets에 ORCID_ID 등록**
   - Repo → Settings → Secrets and variables → Actions → **New repository secret**
   - Name: `ORCID_ID`
   - Value: 박남영 교수님 ORCID ID (예: `0000-0001-2345-6789`)

2. **Actions 권한 확인**
   - Repo → Settings → Actions → General
   - "Workflow permissions" → **Read and write permissions** 체크
   - "Allow GitHub Actions to create and approve pull requests" 체크

### 자동 동작

- **매주 월요일 09:00 KST** 자동 실행 (`.github/workflows/sync-publications.yml`)
- ORCID API → `data/publications.json` 갱신
- 변경 사항 있으면 자동 커밋 → Vercel 자동 재배포
- 사이트 publications 페이지에 새 논문 자동 반영

### 수동 트리거

Repo → Actions → "Sync publications from ORCID" → **Run workflow** 버튼

### 로컬에서 테스트

```bash
ORCID_ID=0000-0001-2345-6789 node scripts/sync-orcid.mjs
```

---

## ✏️ Publications 수동 관리 항목

ORCID에서 자동으로 안 가져오는 정보는 `data/publications-meta.ts`에서 관리합니다.

### IF (Impact Factor) 추가/수정

새 저널에 논문이 실리면 `JOURNAL_IF` 객체에 한 줄 추가:

```ts
export const JOURNAL_IF: Record<string, number> = {
  // ...
  '새 저널명 소문자': 12.3,
};
```

### 논문 썸네일 추가

1. 이미지 파일을 `public/pubs/` 폴더에 저장 (예: `2027-1.jpg`)
2. `DOI_IMAGES`에 매핑 추가:

```ts
export const DOI_IMAGES: Record<string, string> = {
  // ...
  '10.xxxx/yyyy': '/pubs/2027-1.jpg',
};
```

DOI는 **소문자**로 적습니다.

---

## 📝 News / Notices 관리

`data/news.ts` 와 `data/notices.ts` 파일을 직접 수정합니다. 새 항목 추가 시:

```ts
{
  id: '2026-03-15',                    // URL 슬러그
  title: '새로운 연구 성과 발표',
  date: '2026-03-15',
  summary: '간단한 요약',
  image: '/images/news/2026-03-15.jpg', // 옵션
  body: `상세 내용...`,                 // 옵션
}
```

이미지는 `public/images/news/` 폴더에 저장합니다.

---

## 👥 Members 관리

`data/members.ts` 에서 직접 수정합니다. 멤버 사진은 `public/members/` 폴더에 저장.

---

## 🖼️ Gallery 관리

1. 사진을 `public/gallery/` 폴더에 저장
2. `public/gallery/captions.json` 에 메타데이터 추가:

```json
[
  { "file": "lab-photo-1.jpg", "title": "연구실 단체 사진", "date": "2026-01", "place": "인하대" }
]
```

---

## 📂 폴더 구조

```
app/
  page.tsx                  # 메인 페이지
  research/                 # Research 페이지 (수동)
  professor/                # Professor 페이지 (수동)
  members/                  # Members 페이지 → data/members.ts
  publications/             # Publications 페이지 → ORCID 자동
  news/                     # News 목록 + 디테일 → data/news.ts
  notices/                  # Notice 목록 + 디테일 → data/notices.ts
  gallery/                  # Gallery 페이지 → public/gallery/
  layout.tsx                # 전역 레이아웃 + SEO 메타
  globals.css               # 전역 스타일

components/
  Nav.tsx, Footer.tsx, Hero.tsx, Section.tsx
  PublicationCard.tsx, MemberCard.tsx
  ResearchTabsClient.tsx, GalleryClient.tsx

data/
  news.ts                   # 뉴스 (수동)
  notices.ts                # 공지 (수동)
  members.ts                # 멤버 (수동)
  publications.json         # 논문 자동 동기화 (수정 X)
  publications-meta.ts      # IF/이미지 매핑 (수동)
  publications.ts           # 위 두 개 병합 래퍼 (수정 X)

scripts/
  sync-orcid.mjs            # ORCID → publications.json 동기화

.github/workflows/
  sync-publications.yml     # 매주 자동 실행 워크플로우

public/
  abcml-logo.png            # 로고
  pubs/                     # 논문 썸네일
  members/                  # 멤버 사진
  research/                 # Research 페이지 이미지
  gallery/                  # 갤러리 사진
  images/news/              # 뉴스 이미지
```
