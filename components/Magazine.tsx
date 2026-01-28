
import React from 'react';
import '../types';

const Magazine: React.FC = () => {
  const articles = [
    { title: "서울의 예술 공간 탐방기", category: "트렌드 리포트", date: "2023.11", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" },
    { title: "2023 K-Beauty 트렌드 분석", category: "뷰티 리포트", date: "2023.10", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80" },
    { title: "K-Pop 글로벌 현황과 미래", category: "문화 리포트", date: "2023.09", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section id="magazine" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4">K-Culture 매거진</h2>
            <p className="text-zinc-500 text-lg">한국 문화와 트렌드에 대한 최신 소식</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            전체 보기 <iconify-icon icon="mdi:arrow-right"></iconify-icon>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <article key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
               <div className="h-60 overflow-hidden">
                 <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-8">
                 <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3 uppercase tracking-widest">
                   {art.category} • {art.date}
                 </div>
                 <h3 className="text-xl font-bold text-zinc-900 mb-4">{art.title}</h3>
                 <a href="#" className="text-sm font-bold text-zinc-400 hover:text-primary transition-colors">READ MORE</a>
               </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magazine;
