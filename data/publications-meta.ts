// data/publications-meta.ts
//
// ORCID에서 자동으로 안 가져와지는 정보들을 수동으로 관리하는 곳.
//
// - JOURNAL_IF: 저널명(소문자) → Impact Factor 매핑
//   같은 저널에 실리는 새 논문도 자동으로 IF가 적용됩니다.
//   새 저널에 실린 논문이 추가되면 여기에 한 줄만 추가하세요.
//
// - DOI_IMAGES: DOI → 썸네일 이미지 경로 매핑
//   새 논문 썸네일을 추가하려면 /public/pubs/ 폴더에 이미지 넣고
//   여기에 DOI와 경로를 추가하세요. 매핑 없는 논문은 "No Image" 박스로 표시됩니다.

/** 저널 IF 매핑 (저널명은 소문자/대문자 무관, 공백/하이픈 정규화 후 비교) */
export const JOURNAL_IF: Record<string, number> = {
  'nature nanotechnology': 34.9,
  'nature energy': 60.1,
  'chemical reviews': 55.8,
  'energy storage materials': 20.2,
  'materials science & engineering r-reports': 26.8,
  'materials science and engineering: r: reports': 26.8, // ORCID에서 다른 표기로 올 수 있음
  'advanced energy materials': 27.8,
  'acs energy letters': 18.2,
  'angewandte chemie international edition': 16.1, // 추정치, 필요시 갱신
  'angewandte chemie-international edition': 16.1,
  'materials today': 21.1,
  'energy & environmental science': 32.5,
  'energy and environmental science': 32.5, // ORCID 표기
  'materials science and engineering r reports': 26.8, // ORCID 표기
  'chemical society reviews': 40.4,
  'advanced energy and sustainability research': 5.5,
  'journal of power sources': 8.1,
  // 새 저널 추가 시: '저널명 소문자': 숫자,
};

/** 저널명 정규화 (대소문자/구분기호 무시하고 매칭) */
export function normalizeJournalName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[\u2010-\u2015]/g, '-') // 다양한 하이픈 통일
    .replace(/\s+/g, ' ')
    .trim();
}

/** 저널명에서 IF를 찾아서 표시용 문자열 반환. 없으면 저널명만 반환. */
export function formatJournalWithIF(journal: string): string {
  if (!journal) return '';
  const normalized = normalizeJournalName(journal);
  const impactFactor = JOURNAL_IF[normalized];
  if (impactFactor === undefined) return journal;
  return `${journal} (IF: ${impactFactor})`;
}

/** DOI → 썸네일 이미지 매핑 (소문자로 비교) */
export const DOI_IMAGES: Record<string, string> = {
  // 2026
  '10.1021/acsenergylett.6c00663': '/pubs/2026-3.jpg',
  '10.1038/s41565-025-02092-y': '/pubs/2026-2.jpg',
  '10.1016/j.ensm.2025.104761': '/pubs/2026-1.jpg',

  // 2025
  '10.1021/acs.chemrev.5c00441': '/pubs/2025-7.jpg',
  '10.1038/s41560-025-01852-3': '/pubs/2025-6.jpg',
  '10.1016/j.mser.2025.100945': '/pubs/2025-5.jpg',
  '10.1016/j.ensm.2025.104252': '/pubs/2025-4.jpg',
  '10.1002/aenm.202404593': '/pubs/2025-3.jpg',
  '10.1021/acsenergylett.5c00961': '/pubs/2025-2.jpg',
  '10.1038/s41560-025-01726-8': '/pubs/2025-1.png',

  // 2018-2024
  '10.1039/d3cs01110k': '/pubs/2018-2024-26.jpg',
  '10.1021/acsenergylett.4c02638': '/pubs/2018-2024-25.jpg',
  '10.1021/acsenergylett.4c01397': '/pubs/2018-2024-24.jpg',
  '10.1016/j.ensm.2024.103496': '/pubs/2018-2024-23.jpg', // ESM 2024 (ORCID 실제 DOI)
  '10.1002/aenm.202400130': '/pubs/2018-2024-22.jpg',
  '10.1002/anie.202319707': '/pubs/2018-2024-21.jpg',
  '10.1021/acsenergylett.3c02759': '/pubs/2018-2024-20.jpg',
  '10.1002/aesr.202300151': '/pubs/2018-2024-19.jpg',
  '10.1002/anie.202314480': '/pubs/2018-2024-18.jpg',
  '10.1016/j.mattod.2023.11.006': '/pubs/2018-2024-17.jpg', // Materials Today 2023 (ORCID 실제 DOI)
  '10.1002/aenm.202301530': '/pubs/2018-2024-16.jpg',
  '10.1002/aenm.202204291': '/pubs/2018-2024-15.jpg',
  '10.1021/acsenergylett.3c00083': '/pubs/2018-2024-14.jpg',
  '10.1021/acsenergylett.2c02032': '/pubs/2018-2024-13.jpg',
  '10.1021/acsenergylett.2c01272': '/pubs/2018-2024-12.jpg',
  '10.1002/aenm.202200615': '/pubs/2018-2024-11.jpg',
  '10.1021/acsenergylett.1c02281': '/pubs/2018-2024-10.jpg',
  '10.1039/d1ee01773j': '/pubs/2018-2024-9.jpg',
  '10.1002/aenm.202003767': '/pubs/2018-2024-8.jpg',
  '10.1021/acsenergylett.0c02281': '/pubs/2018-2024-7.jpg',
  '10.1016/j.ensm.2020.08.013': '/pubs/2018-2024-6.jpg', // ESM 2020 (ORCID 실제 DOI)
  '10.1002/aenm.202000495': '/pubs/2018-2024-5.jpg',
  '10.1016/j.mattod.2020.01.019': '/pubs/2018-2024-4.jpg', // Materials Today 2020 (ORCID 실제 DOI)
  '10.1021/acsenergylett.9b02302': '/pubs/2018-2024-3.jpg',
  '10.1016/j.jpowsour.2019.227242': '/pubs/2018-2024-2.jpg',
  '10.1021/acsenergylett.8b01926': '/pubs/2018-2024-1.jpg',
  // 새 논문 추가 시: '10.xxxx/yyyy': '/pubs/파일명.jpg',
};

export function getImageForDoi(doi: string | null | undefined): string | undefined {
  if (!doi) return undefined;
  return DOI_IMAGES[doi.toLowerCase()];
}
