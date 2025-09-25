'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import PublicationCard from '@/components/PublicationCard';

type Publication = {
  title: string; authors: string; journal: string; link: string; image?: string;
};
const pubs: Record<string, Publication[]> = {
  '2025': [
    {
    title: 'Zero-strain Mn-rich layered cathode for sustainable and high-energy next-generation batteries',
    authors: 'Park Geon-Tae/Nam-Yung Park/Ryu Ji-Hyun/Sohn Sung-June/Yu Tae-Yeon/Kim Myoung-Chan/Baiju Sourav/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook',
    journal: 'NATURE ENERGY (IF: 60.1)',
    link: 'https://doi.org/10.1038/s41560-025-01852-3',
    image: '/pubs/2025-6.jpg'
  },
  {
    title: 'Ni-rich cathode materials enabled by cracked-surface protection strategy for high-energy lithium batteries',
    authors: 'Park Geon-Tae/Yoon Jung-In/Kim Gwang-Ho/Nam-Yung Park/Park Byung-Chun/Sun Yang-Kook',
    journal: 'MATERIALS SCIENCE & ENGINEERING R-REPORTS (IF: 26.8)',
    link: 'https://doi.org/10.1016/j.mser.2025.100945',
    image: '/pubs/2025-5.jpg'
  },
  {
    title: 'Scalable shell doping strategy for enhancing the stability of Ni-rich cathode materials',
    authors: 'Myoung-Chan Kim/Byung-Chun Park/Nam-Yung Park/Min-su Kim/Kyu-Moon Kim/Jae-Ho Kim/Eun-Jung Kim/Geon-Tae Park/Yang-Kook Sun',
    journal: 'ENERGY STORAGE MATERIALS (IF: 20.2)',
    link: 'https://doi.org/10.1016/j.ensm.2025.104252',
    image: '/pubs/2025-4.jpg'
  },
  {
    title: 'Structural Unpredictability of a Cobalt-Free Layered Cathode and Its Mitigation for Producing Reliable, Sustainable Batteries',
    authors: 'Park Geon-Tae/Kim Myoung-Chan/Kim Min-Su/Noh Tae-Chong/Ryu Ji-Hyun/Nam-Yung Park/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS (IF: 27.8)',
    link: 'https://doi.org/10.1002/aenm.202404593',
    image: '/pubs/2025-3.jpg'
  },
  {
    title: 'Tuning the Lithium Diffusion Kinetics in Co-Free Layered Cathodes for High-Performance All-Solid-State Batteries',
    authors: 'Nam-Yung Park/Yu Tae-Yeon/Kim Hun/Lee In-Su/Lee Han-Uk/Kim Keun-Hee/Cho Woosuk/Jung Hun-Gi/Chung Kyung Yoon/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS (IF: 18.2)',
    link: 'https://doi.org/10.1021/acsenergylett.5c00961',
    image: '/pubs/2025-2.jpg'
  },
  {
    title: 'High-energy, long-life Ni-rich cathode materials with columnar structures for all-solid-state batteries',
    authors: 'Nam-Yung Park/Lee Han-Uk/Yu Tae-Yeon/Lee In-Su/Kim Hun/Park Sung-Min/Jung Hun-Gi/Jung Yun-Chae/Sun Yang-Kook',
    journal: 'NATURE ENERGY (IF: 60.1)',
    link: 'https://doi.org/10.1038/s41560-025-01726-8',
    image: '/pubs/2025-1.png'
  }
      ],
      '2018-2024': [
          {
    title: 'Nano-rods in Ni-rich layered cathodes for practical batteries',
    authors: 'Nam-Yung Park/Park Geon-Tae/Ryu Hoon-Hee/Sun H. Hohyun/Hwang Jang-Yeon/Sun Yang-Kook',
    journal: 'CHEMICAL SOCIETY REVIEWS',
    link: 'https://pubs.rsc.org/en/content/articlehtml/2007/7y/d3cs01110k',
    image: '/pubs/2018-2024-26.jpg'
  },
  {
    title: 'Introducing Co Nanoshells onto Ni-Rich Cathode Materials for High-Rate Long-Life Li-Ion Batteries',
    authors: 'Han Sang-Mun/Park Geon-Tae/Kim Dong-Hwi/Seo Min-Gyu/Nam-Yung Park/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/10.1021/acsenergylett.4c02638',
    image: '/pubs/2018-2024-25.jpg'
  },
  {
    title: 'Tailoring Primary Particle Size Distribution to Suppress Microcracks in Ni-Rich Cathodes via Controlled Grain Coarsening',
    authors: 'Nam-Yung Park/Han Sang-Mun/Ryu Ji-Hyun/Kim Myoung-Chan/Yoon Jung-In/Kim Jae-Ho/Park Geon-Tae/Frerichs Joop Enno/Erk Christoph/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.4c01397',
    image: '/pubs/2018-2024-24.jpg'
  },
  {
    title: 'Aluminum-distribution-dependent microstructural evolution of NCA cathodes: Is aluminum homogeneity really favorable?',
    authors: 'Park Geon-Tae/Ryu Ji-Hyun/Kim Jae-Ho/Sun H. Hohyun/Dhanbee Emma Suh/Han Sang -Mun/Nam-Yung Park/Sun Yang -Kook',
    journal: 'ENERGY STORAGE MATERIALS',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405829724003234',
    image: '/pubs/2018-2024-23.jpg'
  },
  {
    title: 'Unraveling the New Role of Manganese in Nano and Microstructural Engineering of Ni-Rich Layered Cathode for Advanced Lithium-Ion Batteries',
    authors: 'Park Geon-Tae/Kim Su-Bin/Yoon Jung-In/Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202400130',
    image: '/pubs/2018-2024-22.jpg'
  },
  {
    title: 'Mechanism Behind the Loss of Fast Charging Capability in Nickel-Rich Cathode Materials',
    authors: 'Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Park Geon-Tae/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook',
    journal: 'ANGEWANDTE CHEMIE-INTERNATIONAL EDITION',
    link: 'https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202319707',
    image: '/pubs/2018-2024-21.jpg'
  },
  {
    title: 'Doping Strategy in Developing Ni-Rich Cathodes for High-Performance Lithium-Ion Batteries',
    authors: 'Lee Soo-Been/Nam-Yung Park/Park Geon-Tae/Kim Un-Hyuck/Sohn Sung-June/Kang Min-Seok/Ribas Rogerio M./Monteiro Robson S./Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.3c02759',
    image: '/pubs/2018-2024-20.jpg'
  },
  {
    title: 'Forming Robust and Highly Li-Ion Conductive Interfaces in High-Performance Lithium Metal Batteries Using Chloroethylene Carbonate Additive',
    authors: 'Kim Hun/Lee Su-Hyun/Nam-Yung Park/Kim Jae-Min/Hwang Jang-Yeon/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY AND SUSTAINABILITY RESEARCH',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aesr.202300151',
    image: '/pubs/2018-2024-19.jpg'
  },
  {
    title: 'Intergranular Shielding for Ultrafine-Grained Mo-Doped Ni-Rich Li[Ni0.96Co0.04]O2 Cathode for Li-Ion Batteries with High Energy Density and Long Life',
    authors: 'Park Geon-Tae/Kim Su-Bin/Namkoong Been/Ryu Ji-Hyun/Yoon Jung-In/Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Maglia Filippo/Sun Yang-Kook',
    journal: 'ANGEWANDTE CHEMIE-INTERNATIONAL EDITION',
    link: 'https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202314480',
    image: '/pubs/2018-2024-18.jpg'
  },
  {
    title: 'A New Ternary Co-Free Layered Cathode, Li[Ni1-x-yTixAly]O2, for High-Energy Lithium-Ion Batteries',
    authors: 'Kim Hun/Yoon Chong S./Sun Yang-Kook/Park Geon-Tae/Kim Su-Bin/Namkoong Been/Nam-Yung Park',
    journal: 'MATERIALS TODAY',
    link: 'https://www.sciencedirect.com/science/article/pii/S1369702123003528',
    image: '/pubs/2018-2024-17.jpg'
  },
  {
    title: 'Mechanism of Doping with High-Valence Elements for Developing Ni-Rich Cathode Materials',
    authors: 'Nam-Yung Park/Kim Su-Bin/Kim Myoung-Chan/Han Sang-Mun/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202301530',
    image: '/pubs/2018-2024-16.jpg'
  },
  {
    title: 'Multifunctional Doping Strategy to Develop High-Performance Ni-Rich Cathode Material',
    authors: 'Nam-Yung Park/Cho Gyeil/Kim Su-Bin/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202204291',
    image: '/pubs/2018-2024-15.jpg'
  },
  {
    title: 'Long-Lasting Ni-Rich NCMA Cathodes via Simultaneous Microstructural Refinement and Surface Modification',
    authors: 'Ryu Hoon-Hee/Lim Hyung-Woo/Kang Gyeong-Cheol/Nam-Yung Park/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/10.1021/acsenergylett.3c00083',
    image: '/pubs/2018-2024-14.jpg'
  },
  {
    title: 'High-Energy-Density Li-Ion Battery Reaching Full Charge in 12 min',
    authors: 'Kim Un-Hyuck/Lee Soo-Been/Nam-Yung Park/Kim Suk Jun/Yoon Chong Seung/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/10.1021/acsenergylett.2c02032',
    image: '/pubs/2018-2024-13.jpg'
  },
  {
    title: 'Degradation Mechanism of Ni-Rich Cathode Materials: Focusing on Particle Interior',
    authors: 'Nam-Yung Park/Park Geon-Tae/Kim Su-Bin/Jung Wangmo/Park Byung-Chun/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.2c01272',
    image: '/pubs/2018-2024-12.jpg'
  },
  {
    title: 'High-Energy Ni-Rich Cathode Materials for Long-Range and Long-Life Electric Vehicles',
    authors: 'Nam-Yung Park/Namkoong Been/Park Geon-Tae/Shin Ji-Yong/Beierling Thorsten/Yoon Chong S./Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202200615',
    image: '/pubs/2018-2024-11.jpg'
  },
  {
    title: 'High-Energy Cathodes via Precision Microstructure Tailoring for Next-Generation Electric Vehicles',
    authors: 'Nam-Yung Park/Ryu Hoon-Hee/Kuo Liang-Yin/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.1c02281',
    image: '/pubs/2018-2024-10.jpg'
  },
  {
    title: 'High-performance Ni-rich Li[Ni0.9-xCo0.1Alx]O2 cathodes via multi-stage microstructural tailoring from hydroxide precursor to the lithiated oxide',
    authors: 'Park Geon-Tae/Nam-Yung Park/Noh Tae-Chong/Namkoong Been/Ryu Hoon-Hee/Shin Ji-Yong/Beierling Thorsten/Yoon Chong S./Sun Yang-Kook',
    journal: 'ENERGY & ENVIRONMENTAL SCIENCE',
    link: 'https://pubs.rsc.org/en/content/articlehtml/2021/xx/d1ee01773j',
    image: '/pubs/2018-2024-9.jpg'
  },
  {
    title: 'Optimized Ni-Rich NCMA Cathode for Electric Vehicle Batteries',
    authors: 'Nam-Yung Park/Ryu Hoon-Hee/Park Geon-Tae/Noh Tae-Chong/Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202003767',
    image: '/pubs/2018-2024-8.jpg'
  },
  {
    title: 'Microstrain Alleviation in High-Energy Ni-Rich ma NCMA Cathode for Long Battery Life',
    authors: 'Nam-Yung Park/Ryu Hoon-Hee/Noh Tae-Chong/Kang Gyeong-Cheol/Maglia Filippo/Kim Sung-Jin/Yoon Chong S./Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.0c02281',
    image: '/pubs/2018-2024-7.jpg'
  },
  {
    title: 'High-Energy W-Doped Li[Ni0.95Co0.04Al0.01]O2 Cathodes for Next-Generation Electric Vehicles',
    authors: 'Nam-Yung Park/Kim Un-Hyuck/Park Geon-Tae/Kim Hun/Yoon Chong S./Sun Yang-Kook',
    journal: 'ENERGY STORAGE MATERIALS',
    link: 'https://www.sciencedirect.com/science/article/pii/S2405829720303238',
    image: '/pubs/2018-2024-6.jpg'
  },
  {
    title: 'New Class of Ni-Rich Cathode Materials Li[NixCoyB1-x-y]O2 for Next Lithium Batteries',
    authors: 'Nam-Yung Park/Ryu Hoon-Hee/Yoon Dae Ro/Kim Un-Hyuck/Yoon Chong S./Sun Yang-Kook',
    journal: 'ADVANCED ENERGY MATERIALS',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202000495',
    image: '/pubs/2018-2024-5.jpg'
  },
  {
    title: 'A highly stabilized Ni-rich NCA cathode for high-energy lithium-ion batteries',
    authors: 'Ryu Hoon-Hee/Nam-Yung Park/Seo Jeong Hyun/Yu Young-Sang/Sharma Monika/Muecke Robert/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook',
    journal: 'MATERIALS TODAY',
    link: 'https://www.sciencedirect.com/science/article/pii/S1369702120300365',
    image: '/pubs/2018-2024-4.jpg'
  },
  {
    title: 'Capacity Fading of Ni-Rich NCA Cathodes: Effect of Microcracking Extent',
    authors: 'Nam Gyeong Won/Nam-Yung Park/Park Kang-Joon/Yang Jihui/Jun Liu/Yoon Chong S./Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.9b02302',
    image: '/pubs/2018-2024-3.jpg'
  },
  {
    title: 'Tungsten doping for stabilization of Li[Ni0.90Co0.05Mn0.05]O2 cathode for Li-ion battery at high voltage',
    authors: 'Park Geon-Tae/Ryu Hoon-Hee/Nam-Yung Park/Yoon Chong S./Sun Yang-Kook',
    journal: 'JOURNAL OF POWER SOURCES',
    link: 'https://www.sciencedirect.com/science/article/pii/S0378775319312352',
    image: '/pubs/2018-2024-2.jpg'
  },
  {
    title: 'ICAC 2018: The First International Conference Focused on NCM & NCA Cathode Materials for Lithium Ion Batteries',
    authors: 'Kwak Won-Jin/Nam-Yung Park/Sun Yang-Kook',
    journal: 'ACS ENERGY LETTERS',
    link: 'https://pubs.acs.org/doi/full/10.1021/acsenergylett.8b01926',
    image: '/pubs/2018-2024-1.jpg'
  }
        ],
};

export default function PublicationsPage() {
  const years = Object.keys(pubs);
 const [year, setYear] = useState(years[0]);
  const list = pubs[year] ?? [];

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title="논문">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm">연도 선택</span>
          <div className="flex gap-2">
            {years.map(y => (
              <button key={y}
                onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-xl border text-sm ${year===y ? 'bg-black text-white':'bg-white'}`}>
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, idx) => <PublicationCard key={idx} p={p} />)}
        </div>
      </Section>
      <Footer />
    </main>
  );
}