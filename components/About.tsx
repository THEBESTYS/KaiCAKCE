
import React from 'react';
import '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-8 leading-tight">롯데ON과 함께하는<br/>새로운 문화 경험</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Kai-Culture Academy는 롯데ON, 월드 K-Pop 센터, 리본 코리아와의 협력을 통해 한국 문화의 진수를 전달합니다. 단순한 배움을 넘어 한국의 라이프스타일을 체험하고 이해하는 공간입니다.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">120+</p>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Available Classes</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">5K+</p>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Happy Students</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="mdi:store" className="text-primary text-3xl"></iconify-icon>
              </div>
              <div>
                <p className="font-bold text-xl">롯데ON 협력</p>
                <p className="text-zinc-500 text-sm">프리미엄 공간 및 유통망 네트워크</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="mdi:music" className="text-accent text-3xl"></iconify-icon>
              </div>
              <div>
                <p className="font-bold text-xl">World K-Pop Center</p>
                <p className="text-zinc-500 text-sm">글로벌 K-Pop 인재 양성 노하우</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
