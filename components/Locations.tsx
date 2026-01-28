
import React from 'react';
import '../types';

const Locations: React.FC = () => {
  const branches = [
    { name: "서울역 지점", addr: "서울특별시 용산구 한강대로 405", icon: "mdi:train" },
    { name: "강남 지점", addr: "서울특별시 강남구 테헤란로 152", icon: "mdi:city" },
    { name: "부산 해운대 지점", addr: "부산광역시 해운대구 해운대해변로 276", icon: "mdi:beach" }
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">지점 안내</h2>
          <p className="text-zinc-500 text-lg">전국 주요 거점에서 Kai-Culture를 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {branches.map((b, i) => (
            <div key={i} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <iconify-icon icon={b.icon} className="text-primary text-3xl group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{b.name}</h3>
              <p className="text-zinc-500 leading-relaxed mb-6">{b.addr}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                <iconify-icon icon="mdi:clock-outline"></iconify-icon>
                10:00 - 20:00
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
