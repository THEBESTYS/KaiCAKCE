
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  currentUser: User | null;
  onLogout: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  onAdminClick: () => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, setLang, currentUser, onLogout, onLoginClick, onSignupClick, onAdminClick, t 
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 glass border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight hidden sm:block">Kai-Culture Academy</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.home}</a>
            <a href="#courses" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.courses}</a>
            <a href="#magazine" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.magazine}</a>
            <a href="#reservation" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.reservation}</a>
            <a href="#locations" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.locations}</a>
            <a href="#about" className="text-sm font-medium text-zinc-700 hover:text-primary transition-all">{t.about}</a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Full Screen Toggle Button */}
            <button 
              onClick={toggleFullScreen}
              className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-primary transition-all flex items-center justify-center"
              title="Toggle Full Screen"
            >
              <iconify-icon icon={isFullScreen ? "mdi:fullscreen-exit" : "mdi:fullscreen"} width="24"></iconify-icon>
            </button>

            {!currentUser ? (
              <>
                <button onClick={onLoginClick} className="text-sm font-medium text-zinc-700 hover:text-primary hidden sm:block px-2">
                  {t.login}
                </button>
                <button onClick={onSignupClick} className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-all shadow-md">
                  {t.signup}
                </button>
              </>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <iconify-icon icon="mdi:account" className="text-primary"></iconify-icon>
                  </div>
                  <span className="text-sm font-medium hidden xs:block">{currentUser.name}</span>
                  <iconify-icon icon="mdi:chevron-down"></iconify-icon>
                </button>
                
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 z-50">
                    {currentUser.role === 'admin' && (
                      <button 
                        onClick={() => { onAdminClick(); setUserDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-2"
                      >
                        <iconify-icon icon="mdi:shield-account"></iconify-icon>
                        {t.admin}
                      </button>
                    )}
                    <button 
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-zinc-50 flex items-center gap-2"
                    >
                      <iconify-icon icon="mdi:logout"></iconify-icon>
                      {t.logout}
                    </button>
                  </div>
                )}
              </div>
            )}
            
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <iconify-icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width="24"></iconify-icon>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-100 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.home}</a>
          <a href="#courses" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.courses}</a>
          <a href="#magazine" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.magazine}</a>
          <a href="#reservation" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.reservation}</a>
          <a href="#locations" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.locations}</a>
          <a href="#about" className="block text-lg font-medium" onClick={() => setMobileOpen(false)}>{t.about}</a>
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
             {!currentUser && (
               <>
                 <button onClick={onLoginClick} className="w-full text-center py-3 border border-zinc-200 rounded-xl font-medium">{t.login}</button>
                 <button onClick={onSignupClick} className="w-full text-center py-3 bg-primary text-white rounded-xl font-medium">{t.signup}</button>
               </>
             )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
