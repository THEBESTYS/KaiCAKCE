
import React, { useState, useEffect, useCallback } from 'react';
import { Language, User, Course, Reservation } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Magazine from './components/Magazine';
import ReservationSection from './components/ReservationSection';
import Locations from './components/Locations';
import About from './components/About';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminPanel from './components/AdminPanel';

const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'K-Pop 댄스 마스터클래스',
    price: '₩120,000',
    description: '현직 안무가와 함께하는 K-Pop 그룹 댄스 클래스',
    duration: '주 2회, 4주',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80',
    tag: '인기'
  },
  {
    id: '2',
    title: 'K-Beauty 스킨케어 워크숍',
    price: '₩85,000',
    description: '한국식 스킨케어 루틴과 메이크업 테크닉 클래스',
    duration: '주 1회, 3주',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    tag: 'NEW'
  },
  {
    id: '3',
    title: '한국 전통 도예 클래스',
    price: '₩95,000',
    description: '한국 전통 기법을 활용한 도자기 만들기 체험',
    duration: '주 1회, 6주',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80'
  }
];

const MOCK_USERS: User[] = [
  { id: '1', name: '김지민', email: 'jimin.kim@example.com', joinDate: '2023-01-15', reservations: 5, role: 'user' },
  { id: '2', name: '이수현', email: 'soohyun.lee@example.com', joinDate: '2023-02-20', reservations: 3, role: 'user' },
  { id: '3', name: '박민준', email: 'minjun.park@example.com', joinDate: '2023-03-10', reservations: 7, role: 'user' },
  { id: '4', name: '관리자', email: 'one@example.com', joinDate: '2022-12-01', reservations: 0, role: 'admin' },
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ko');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [members, setMembers] = useState<User[]>(MOCK_USERS);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const t = translations[lang];

  const handleLogin = (email: string, pass: string) => {
    // Admin login check
    if (email === 'one' && pass === 'pass1234') {
      const admin = members.find(u => u.role === 'admin') || MOCK_USERS[3];
      setCurrentUser(admin);
      setIsAuthModalOpen(false);
      return true;
    }
    // Simple mock user login
    const user = members.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      setIsAuthModalOpen(false);
      return true;
    }
    return false;
  };

  const handleSignup = (userData: Partial<User>) => {
    const newUser: User = {
      id: String(members.length + 1),
      name: userData.name || 'New User',
      email: userData.email || '',
      role: 'user',
      joinDate: new Date().toISOString().split('T')[0],
      reservations: 0
    };
    setMembers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdminPanelOpen(false);
  };

  const handleCourseSelect = (id: string) => {
    setSelectedCourseId(id);
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentUser={currentUser} 
        onLogout={handleLogout}
        onLoginClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); }}
        onSignupClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }}
        onAdminClick={() => setIsAdminPanelOpen(true)}
        t={t.nav}
      />

      <main className="pt-16">
        <Hero t={t.hero} />
        <Courses courses={MOCK_COURSES} t={t.courses} onSelectCourse={handleCourseSelect} />
        <Magazine />
        <ReservationSection 
          courses={MOCK_COURSES} 
          t={t.reservation} 
          selectedCourseId={selectedCourseId}
        />
        <Locations />
        <About />
      </main>

      <Footer />

      {isAuthModalOpen && (
        <AuthModal 
          mode={authMode} 
          setMode={setAuthMode} 
          onClose={() => setIsAuthModalOpen(false)} 
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      )}

      {isAdminPanelOpen && (
        <AdminPanel 
          members={members} 
          onClose={() => setIsAdminPanelOpen(false)} 
          t={t.admin}
        />
      )}

      {/* Language Switcher Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="group relative">
           <button className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-all flex items-center justify-center">
             <iconify-icon icon="mdi:translate" width="28" height="28"></iconify-icon>
           </button>
           <div className="absolute bottom-full right-0 mb-3 hidden group-hover:flex flex-col bg-white border border-zinc-200 rounded-xl shadow-xl p-2 min-w-[120px] fade-in">
              <button onClick={() => setLang('ko')} className={`px-4 py-2 text-sm text-left rounded hover:bg-zinc-50 ${lang === 'ko' ? 'text-primary font-bold' : ''}`}>한국어</button>
              <button onClick={() => setLang('en')} className={`px-4 py-2 text-sm text-left rounded hover:bg-zinc-50 ${lang === 'en' ? 'text-primary font-bold' : ''}`}>English</button>
              <button onClick={() => setLang('zh')} className={`px-4 py-2 text-sm text-left rounded hover:bg-zinc-50 ${lang === 'zh' ? 'text-primary font-bold' : ''}`}>中文</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default App;
