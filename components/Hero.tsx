
import React from 'react';
import '../types';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              {t.badge}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              {t.title.split(' ').map((word: string, i: number) => 
                word === '예술' || word === 'Art' ? <span key={i} className="gradient-text">{word} </span> : word + ' '
              )}
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#courses" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 text-center">
                {t.cta_explore}
              </a>
              <a href="#reservation" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-all text-center">
                {t.cta_book}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 scale-95 hover:rotate-0 hover:scale-100 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1000&q=80" alt="Main" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-zinc-100">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <iconify-icon icon="mdi:star" className="text-accent" width="24"></iconify-icon>
                  </div>
                  <div>
                    <p className="font-bold text-xl">120+ Classes</p>
                    <p className="text-sm text-zinc-500 font-medium">Expert-led sessions</p>
                  </div>
               </div>
               <p className="text-sm text-zinc-600 leading-relaxed">Discover your passion in dance, beauty, and traditional arts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
