
import React from 'react';
import '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 pt-20 pb-10 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-display text-xl font-bold">Kai-Culture Academy</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              K-Pop, K-Beauty, K-에듀테크를 중심으로 전 세계인과 한국 문화를 연결하는 프리미엄 문화 체험 플랫폼입니다.
            </p>
            <div className="flex gap-4">
              {['instagram', 'youtube', 'facebook', 'twitter'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all">
                  <iconify-icon icon={`mdi:${s}`} width="20"></iconify-icon>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">홈</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">강좌 정보</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">예약하기</a></li>
              <li><a href="#locations" className="hover:text-primary transition-colors">지점 안내</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-500 font-medium">
              <li className="flex items-center gap-2"><iconify-icon icon="mdi:phone"></iconify-icon> 02-1234-5678</li>
              <li className="flex items-center gap-2"><iconify-icon icon="mdi:email"></iconify-icon> info@kai-culture.com</li>
              <li className="flex items-center gap-2"><iconify-icon icon="mdi:map-marker"></iconify-icon> 서울시 용산구 한강대로 405</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200 text-center text-zinc-400 text-xs font-bold uppercase tracking-widest">
          © 2023 Kai-Culture Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
