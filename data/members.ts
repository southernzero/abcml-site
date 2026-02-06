// data/members.ts
import type { Member } from '@/components/MemberCard';

export type MemberGroup = {
  title: string;
  items: Member[];
};

/** 현재 구성원 */
export const currentMemberGroups: MemberGroup[] = [
  
  {
    title: 'Ph.D. Candidates',
    items: [
      { name: '모집중', role: 'Ph.D' },
      // 예) { name: '김철수', role: 'Ph.D', image: '/members/phd-kim.jpg', note: '입학 2024' },
    ],
  },
  {
    title: 'M.S. Students',
    items: [
      { name: '정승훈 (Seung Hun Jeong)', role: '리튬이온전지 양극 소재',image: '/members/정승훈.png', note: '석박사통합 1기'},{ name: '권혁원 (Hyuck-Won Kwon)', role: '리튬이온전지 양극 소재',image: '/members/권혁원.jpg', note: '석사 1기'}
      // 예) { name: '이영희', role: 'MS', image: '/members/ms-lee.png', note: '입학 2025' },
    ],
  },
  {
    title: 'Undergraduate Researchers',
    items: [
      { name: '모집중', role: 'UG', note: '학부연구생' },
    ],
  },
];

/** 졸업생/Alumni */
export const alumniGroups: MemberGroup[] = [
  {
    title: 'Ph.D. Alumni',
    items: [
      // 예) { name: '박OO', role: 'Alumni', note: 'Ph.D. (2023) · 현재 ABC Corp.' },
    ],
  },
  {
    title: 'M.S. Alumni',
    items: [
      // 예) { name: '이OO', role: 'Alumni', note: 'M.S. (2024) · 인하대학교 박사과정' },
    ],
  },
];

//추후 포닥
//{
//    title: 'Postdoctoral Researchers',
//    items: [
//      { name: '모집중', role: 'Postdoc', note: '박사후연구원' },
//      // 예) { name: '홍길동', role: 'Postdoc', image: '/members/postdoc-hong.jpg', email: 'hong@inha.ac.kr', note: '양극소재 합성' },
//    ],
//  },