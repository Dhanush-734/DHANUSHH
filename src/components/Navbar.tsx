import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Moon, Sun, Zap, Home, Wrench, FolderGit2, Mail, Compass } from 'lucide-react';
import { sfx } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, setSoundEnabled }) => {
  const { toggleTheme, isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('home');
  const [pipelineUptime, setPipelineUptime] = useState(99.98);

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineUptime(prev => {
        const delta = (Math.random() - 0.5) * 0.01;
        return parseFloat(Math.min(99.99, Math.max(99.95, prev + delta)).toFixed(2));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sfx.enabled = next;
    if (next) sfx.blip(800, 0.1);
  };

  const handleToggleTheme = () => {
    sfx.blip(isDark ? 850 : 600, 0.08);
    toggleTheme();
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'toolkit', label: 'TOOLKIT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'postcard', label: 'POSTCARD' },
  ];

  const handleNavClick = (id: string) => {
    sfx.blip(600, 0.05);
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* TOP DESKTOP & TABLET APP BAR */}
      <header className="sticky top-0 z-50 bg-[#ffd84d] dark:bg-[#191B20] border-b-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[0_3px_0px_#1c1b1b] dark:shadow-[0_3px_0px_#000000] transition-colors">
        <div className="flex justify-between items-center w-full px-3 sm:px-4 py-2.5 max-w-6xl mx-auto">
          {/* Logo & Terminal Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className="font-headline text-2xl font-black bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[2.5px_2.5px_0px_#1c1b1b] dark:shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1c1b1b] dark:hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              D.
            </a>

            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#24262D] font-code text-xs font-semibold text-[#1c1b1b] dark:text-[#F5F1E8] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000]">
              <Terminal className="w-3.5 h-3.5 text-[#725c00] dark:text-[#FFD43B] animate-pulse" />
              <span>data_pipeline.py</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a843] animate-ping" />
              <span className="text-[10px] text-[#725c00] dark:text-[#FFD43B] font-bold">{pipelineUptime}%</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 font-code text-xs font-bold tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-all hover:text-[#1c1b1b] dark:hover:text-[#F5F1E8] cursor-pointer ${
                    isActive
                      ? 'text-[#1c1b1b] dark:text-[#FFD43B] underline decoration-[#725c00] dark:decoration-[#FFD43B] decoration-4 underline-offset-4 font-black scale-105'
                      : 'text-[#4d4634] dark:text-[#d0cbbf] hover:scale-105'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Sound, Theme & CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              title={soundEnabled ? 'Disable Comic Sound FX' : 'Enable Comic Sound FX'}
              aria-label="Toggle sound effects"
              className="p-1.5 sm:p-2 border-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#24262D] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#1c1b1b] dark:text-[#F5F1E8]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#7e7662] dark:text-[#8e8a82]" />
              )}
            </button>

            {/* Theme Toggle Button (Sun for Light Mode, Moon for Dark Mode) */}
            <button
              id="theme-toggle-btn"
              onClick={handleToggleTheme}
              title={isDark ? 'Switch to Light Mode (Currently Dark Mode)' : 'Switch to Dark Mode (Currently Light Mode)'}
              aria-label={isDark ? 'Dark Mode Active - Click for Light Mode' : 'Light Mode Active - Click for Dark Mode'}
              className="p-1.5 sm:p-2 border-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#24262D] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center cursor-pointer group"
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-[#55DFFF] group-hover:-rotate-12 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 text-[#725c00] group-hover:rotate-45 transition-transform" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#postcard"
              onClick={() => handleNavClick('postcard')}
              className="font-code text-xs uppercase font-extrabold bg-white dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2.5 sm:px-3 py-1.5 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] hover:bg-[#69c9f0] dark:hover:bg-[#ffe07e] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4.5px_4.5px_0px_#1c1b1b] dark:hover:shadow-[4.5px_4.5px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <Zap className="w-3.5 h-3.5 fill-[#ffd84d] dark:fill-[#101114] text-[#1c1b1b] dark:text-[#101114]" />
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2 bg-[#fcf9f8] dark:bg-[#191B20] border-t-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[0_-4px_0px_#1c1b1b] dark:shadow-[0_-4px_0px_#000000] transition-colors">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] font-black'
              : 'bg-white dark:bg-[#24262D] text-[#4d4634] dark:text-[#d0cbbf]'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">HOME</span>
        </button>

        <button
          onClick={() => handleNavClick('toolkit')}
          className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer ${
            activeTab === 'toolkit'
              ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] font-black'
              : 'bg-white dark:bg-[#24262D] text-[#4d4634] dark:text-[#d0cbbf]'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">TOOLKIT</span>
        </button>

        <button
          onClick={() => handleNavClick('projects')}
          className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] font-black'
              : 'bg-white dark:bg-[#24262D] text-[#4d4634] dark:text-[#d0cbbf]'
          }`}
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">PROJECTS</span>
        </button>

        <button
          onClick={() => handleNavClick('journey')}
          className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer ${
            activeTab === 'journey'
              ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] font-black'
              : 'bg-white dark:bg-[#24262D] text-[#4d4634] dark:text-[#d0cbbf]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">JOURNEY</span>
        </button>

        <button
          onClick={() => handleNavClick('postcard')}
          className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] transition-all cursor-pointer ${
            activeTab === 'postcard'
              ? 'bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] font-black'
              : 'bg-white dark:bg-[#24262D] text-[#4d4634] dark:text-[#d0cbbf]'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">POSTCARD</span>
        </button>

        {/* Mobile Theme Toggle Button */}
        <button
          onClick={handleToggleTheme}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme on mobile"
          className="flex flex-col items-center justify-center px-2 sm:px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] cursor-pointer"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-[#55DFFF]" />
          ) : (
            <Sun className="w-4 h-4 text-[#725c00]" />
          )}
          <span className="font-code text-[9px] uppercase font-bold mt-0.5">{isDark ? 'DARK' : 'LIGHT'}</span>
        </button>
      </nav>
    </>
  );
};
