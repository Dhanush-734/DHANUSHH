import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Moon, Sun, Zap, Home, Wrench, FolderGit2, Mail, Compass } from 'lucide-react';
import { sfx } from '../utils/sound';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, setSoundEnabled }) => {
  const [isDark, setIsDark] = useState(false);
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

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sfx.enabled = next;
    if (next) sfx.blip(800, 0.1);
  };

  const toggleTheme = () => {
    sfx.blip(700, 0.08);
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      <header className="sticky top-0 z-50 bg-[#ffd84d] border-b-[3px] border-[#1c1b1b] shadow-[0_3px_0px_#1c1b1b]">
        <div className="flex justify-between items-center w-full px-4 py-2.5 max-w-6xl mx-auto">
          {/* Logo & Terminal Pill */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className="font-headline text-2xl font-black bg-white text-[#1c1b1b] px-3 py-1 border-[2.5px] border-[#1c1b1b] shadow-[2.5px_2.5px_0px_#1c1b1b] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1c1b1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              D.
            </a>

            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 border-2 border-[#1c1b1b] bg-white font-code text-xs font-semibold text-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b]">
              <Terminal className="w-3.5 h-3.5 text-[#725c00] animate-pulse" />
              <span>data_pipeline.py</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a843] animate-ping" />
              <span className="text-[10px] text-[#725c00] font-bold">{pipelineUptime}%</span>
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
                  className={`transition-all hover:text-[#1c1b1b] cursor-pointer ${
                    isActive
                      ? 'text-[#1c1b1b] underline decoration-[#725c00] decoration-4 underline-offset-4 font-black scale-105'
                      : 'text-[#4d4634] hover:scale-105'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Sound, Theme & CTA */}
          <div className="flex items-center gap-2.5">
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Disable Comic Sound FX' : 'Enable Comic Sound FX'}
              className="p-1.5 border-2 border-[#1c1b1b] bg-white shadow-[2px_2px_0px_#1c1b1b] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#1c1b1b]" /> : <VolumeX className="w-4 h-4 text-[#7e7662]" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Day / Night"
              className="p-1.5 border-2 border-[#1c1b1b] bg-white shadow-[2px_2px_0px_#1c1b1b] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#e9c339]" /> : <Moon className="w-4 h-4 text-[#1c1b1b]" />}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#postcard"
              onClick={() => handleNavClick('postcard')}
              className="font-code text-xs uppercase font-extrabold bg-white text-[#1c1b1b] px-3 py-1.5 border-[2.5px] border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] hover:bg-[#69c9f0] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4.5px_4.5px_0px_#1c1b1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <Zap className="w-3.5 h-3.5 fill-[#ffd84d] text-[#1c1b1b]" />
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-[#fcf9f8] border-t-[3px] border-[#1c1b1b] shadow-[0_-4px_0px_#1c1b1b]">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center justify-center px-3 py-1 border-2 border-[#1c1b1b] transition-all ${
            activeTab === 'home' ? 'bg-[#ffd84d] shadow-[2px_2px_0px_#1c1b1b] font-black' : 'bg-white text-[#4d4634]'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="font-code text-[10px] uppercase font-bold mt-0.5">HOME</span>
        </button>

        <button
          onClick={() => handleNavClick('toolkit')}
          className={`flex flex-col items-center justify-center px-3 py-1 border-2 border-[#1c1b1b] transition-all ${
            activeTab === 'toolkit' ? 'bg-[#ffd84d] shadow-[2px_2px_0px_#1c1b1b] font-black' : 'bg-white text-[#4d4634]'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span className="font-code text-[10px] uppercase font-bold mt-0.5">TOOLKIT</span>
        </button>

        <button
          onClick={() => handleNavClick('projects')}
          className={`flex flex-col items-center justify-center px-3 py-1 border-2 border-[#1c1b1b] transition-all ${
            activeTab === 'projects' ? 'bg-[#ffd84d] shadow-[2px_2px_0px_#1c1b1b] font-black' : 'bg-white text-[#4d4634]'
          }`}
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="font-code text-[10px] uppercase font-bold mt-0.5">PROJECTS</span>
        </button>

        <button
          onClick={() => handleNavClick('journey')}
          className={`flex flex-col items-center justify-center px-3 py-1 border-2 border-[#1c1b1b] transition-all ${
            activeTab === 'journey' ? 'bg-[#ffd84d] shadow-[2px_2px_0px_#1c1b1b] font-black' : 'bg-white text-[#4d4634]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span className="font-code text-[10px] uppercase font-bold mt-0.5">JOURNEY</span>
        </button>

        <button
          onClick={() => handleNavClick('postcard')}
          className={`flex flex-col items-center justify-center px-3 py-1 border-2 border-[#1c1b1b] transition-all ${
            activeTab === 'postcard' ? 'bg-[#ffd84d] shadow-[2px_2px_0px_#1c1b1b] font-black' : 'bg-white text-[#4d4634]'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span className="font-code text-[10px] uppercase font-bold mt-0.5">POSTCARD</span>
        </button>
      </nav>
    </>
  );
};
