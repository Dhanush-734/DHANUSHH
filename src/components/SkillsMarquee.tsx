import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { sfx } from '../utils/sound';

export interface ToolItem {
  id: string;
  name: string;
  accentBg: string;
  accentBorder: string;
  badgeContent: React.ReactNode;
  icon: React.ReactNode;
}

export const SkillsMarquee: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // The STRICT 11 tools requested by the user
  const tools: ToolItem[] = [
    {
      id: 'python',
      name: 'PYTHON',
      accentBg: 'bg-[#ffd84d]',
      accentBorder: '#ffd84d',
      badgeContent: <span className="text-[#ffd84d] font-code font-black text-[10px]">&gt;_</span>,
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 128 128" fill="none">
          <path
            fill="#387eb8"
            d="M63.7 7.6c-26.6 0-25 11.5-25 11.5l.03 11.9h25.4v3.6H29.1S12 32.7 12 59.4c0 26.6 15 25.7 15 25.7h8.9v-12.5s-.5-15 14.8-15h25.2s14.3.2 14.3-14V21.8s1.6-14.2-26.5-14.2zM52.4 17.5c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"
          />
          <path
            fill="#ffe052"
            d="M64.3 120.4c26.6 0 25-11.5 25-11.5l-.03-11.9H63.9v-3.6h35s17.1 1.9 17.1-24.8c0-26.6-15-25.7-15-25.7h-8.9v12.5s.5 15-14.8 15H52.1s-14.3-.2-14.3 14v21.8s-1.6 14.2 26.5 14.2zm11.3-9.9c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"
          />
        </svg>
      )
    },
    {
      id: 'sql',
      name: 'SQL',
      accentBg: 'bg-[#69c9f0]',
      accentBorder: '#69c9f0',
      badgeContent: <span className="text-[#55DFFF] font-code font-black text-[9px]">SQL</span>,
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="14" rx="21" ry="8" fill="#55DFFF" stroke="#1c1b1b" strokeWidth="2.5" />
          <path d="M11 14v15c0 4.4 9.4 8 21 8s21-3.6 21-8V14" fill="#008cb4" stroke="#1c1b1b" strokeWidth="2.5" />
          <ellipse cx="32" cy="29" rx="21" ry="8" fill="#55DFFF" stroke="#1c1b1b" strokeWidth="2.5" />
          <path d="M11 29v16c0 4.4 9.4 8 21 8s21-3.6 21-8V29" fill="#006783" stroke="#1c1b1b" strokeWidth="2.5" />
          <ellipse cx="32" cy="45" rx="21" ry="8" fill="#55DFFF" stroke="#1c1b1b" strokeWidth="2.5" />
          <path d="M16 14c0 1.5 7 3 16 3s16-1.5 16-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      )
    },
    {
      id: 'airflow',
      name: 'AIRFLOW',
      accentBg: 'bg-[#ff6b6b]',
      accentBorder: '#ff6b6b',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#ffd84d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="6" cy="6" r="2.5" fill="currentColor" />
          <circle cx="18" cy="6" r="2.5" fill="currentColor" />
          <circle cx="12" cy="18" r="2.5" fill="currentColor" />
          <path d="M6 8.5v4l6 3m6-7v4l-6 3" strokeLinecap="round" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <path d="M32 10v22H10c0-12.2 9.8-22 22-22z" fill="#017CEE" stroke="#1c1b1b" strokeWidth="2.2" />
          <path d="M54 32H32V10c12.2 0 22 9.8 22 22z" fill="#00AD46" stroke="#1c1b1b" strokeWidth="2.2" />
          <path d="M32 54V32h22c0 12.2-9.8 22-22 22z" fill="#E43921" stroke="#1c1b1b" strokeWidth="2.2" />
          <path d="M10 32h22v22c-12.2 0-22-9.8-22-22z" fill="#133857" stroke="#1c1b1b" strokeWidth="2.2" />
          <circle cx="32" cy="32" r="5" fill="#ffd84d" stroke="#1c1b1b" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'docker',
      name: 'DOCKER',
      accentBg: 'bg-[#4ecdc4]',
      accentBorder: '#4ecdc4',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#4ecdc4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <line x1="8" y1="5" x2="8" y2="19" />
          <line x1="16" y1="5" x2="16" y2="19" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <path
            d="M56 34c-1.5-5-5-8-10-8h-3v-3h-5v3h-3v-3h-5v3h-3v-3h-5v3h-3v-3H14v8c-6 2-8 7-8 11 0 7 6 11 15 11 18 0 28-8 32-15 1-1 3-3 3-5z"
            fill="#2496ED"
            stroke="#1c1b1b"
            strokeWidth="2.2"
          />
          <rect x="15" y="24" width="4.5" height="4.5" fill="#7ad8ff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="21" y="24" width="4.5" height="4.5" fill="#7ad8ff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="27" y="24" width="4.5" height="4.5" fill="#7ad8ff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="21" y="18" width="4.5" height="4.5" fill="#ffffff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="27" y="18" width="4.5" height="4.5" fill="#ffffff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="33" y="24" width="4.5" height="4.5" fill="#7ad8ff" stroke="#1c1b1b" strokeWidth="1.2" />
          <rect x="33" y="18" width="4.5" height="4.5" fill="#ffffff" stroke="#1c1b1b" strokeWidth="1.2" />
          <circle cx="48" cy="36" r="1.5" fill="#ffffff" stroke="#1c1b1b" strokeWidth="1" />
          <path d="M54 26c4-3 7-2 8-1-1 3-3 6-6 7" stroke="#1c1b1b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'cloud',
      name: 'CLOUD',
      accentBg: 'bg-[#b388ff]',
      accentBorder: '#b388ff',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <path
            d="M18 44h28a12 12 0 0 0 4-23.3 16 16 0 0 0-30-2.4A11 11 0 0 0 18 44z"
            fill="url(#cloudGrad)"
            stroke="#1c1b1b"
            strokeWidth="2.5"
          />
          <path d="M22 27a10 10 0 0 1 18-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
          <defs>
            <linearGradient id="cloudGrad" x1="10" y1="18" x2="52" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7ad8ff" />
              <stop offset="1" stopColor="#006783" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'alteryx',
      name: 'ALTERYX',
      accentBg: 'bg-[#51cf66]',
      accentBorder: '#51cf66',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#51cf66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="6" cy="12" r="3" fill="currentColor" />
          <circle cx="18" cy="12" r="3" fill="currentColor" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" fill="#004C97" stroke="#1c1b1b" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="18" fill="#0072CE" />
          <text
            x="32"
            y="43"
            textAnchor="middle"
            fill="white"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="900"
            fontSize="32"
          >
            a
          </text>
          <circle cx="43" cy="21" r="3" fill="#ffd84d" stroke="#1c1b1b" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'snowflake',
      name: 'SNOWFLAKE',
      accentBg: 'bg-[#ff85a2]',
      accentBorder: '#ff85a2',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#29B5E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="3.3" y1="7" x2="20.7" y2="17" />
          <line x1="3.3" y1="17" x2="20.7" y2="7" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <g stroke="#29B5E8" strokeWidth="3" strokeLinecap="round">
            <line x1="32" y1="8" x2="32" y2="56" />
            <line x1="11.2" y1="20" x2="52.8" y2="44" />
            <line x1="11.2" y1="44" x2="52.8" y2="20" />
            <path d="M26 14l6 6 6-6M26 50l6-6 6 6" />
            <path d="M16 28l8 2-2 8M48 36l-8-2 2-8" />
            <path d="M22 40l2-8 8 2M42 24l-2 8-8-2" />
          </g>
          <circle cx="32" cy="32" r="4.5" fill="#29B5E8" stroke="#1c1b1b" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'excel',
      name: 'EXCEL',
      accentBg: 'bg-[#fab005]',
      accentBorder: '#fab005',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#fab005]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <rect x="18" y="14" width="34" height="36" rx="2" fill="#107C41" stroke="#1c1b1b" strokeWidth="2.2" />
          <rect x="24" y="20" width="22" height="24" fill="#185C37" />
          <line x1="24" y1="28" x2="46" y2="28" stroke="#33C481" strokeWidth="1.5" />
          <line x1="24" y1="36" x2="46" y2="36" stroke="#33C481" strokeWidth="1.5" />
          <line x1="35" y1="20" x2="35" y2="44" stroke="#33C481" strokeWidth="1.5" />
          <rect x="10" y="20" width="18" height="24" rx="2" fill="#0E5C2F" stroke="#1c1b1b" strokeWidth="2.2" />
          <text
            x="19"
            y="38"
            textAnchor="middle"
            fill="white"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="900"
            fontSize="18"
          >
            X
          </text>
        </svg>
      )
    },
    {
      id: 'powerbi',
      name: 'POWER BI',
      accentBg: 'bg-[#e9ecef]',
      accentBorder: '#ced4da',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#ffd43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <rect x="14" y="34" width="9" height="18" rx="1.5" fill="#F2C811" stroke="#1c1b1b" strokeWidth="2" />
          <rect x="27" y="22" width="9" height="30" rx="1.5" fill="#E8B80D" stroke="#1c1b1b" strokeWidth="2" />
          <rect x="40" y="12" width="9" height="40" rx="1.5" fill="#DDA800" stroke="#1c1b1b" strokeWidth="2" />
          <path d="M15 35h7M28 23h7M41 13h7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      )
    },
    {
      id: 'flask',
      name: 'FLASK',
      accentBg: 'bg-[#ff7777]',
      accentBorder: '#ff7777',
      badgeContent: <span className="text-white font-code font-black text-[9px]">&lt;/&gt;</span>,
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <path
            d="M26 10h12M29 10v12L14 46c-2 3.5.5 8 4.5 8h27c4 0 6.5-4.5 4.5-8L35 22V10"
            stroke="#1c1b1b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 44L24 33c3 2 6 2 9 0 3-2 6-2 9 0l6.5 11c1.5 2.5 0 6-3 6H20.5c-3 0-4.5-3.5-3-6z"
            fill="#FF4D4D"
            stroke="#1c1b1b"
            strokeWidth="2"
          />
          <circle cx="28" cy="42" r="2" fill="white" opacity="0.6" />
          <circle cx="36" cy="38" r="1.5" fill="white" opacity="0.6" />
        </svg>
      )
    },
    {
      id: 'streamlit',
      name: 'STREAMLIT',
      accentBg: 'bg-[#cc5de8]',
      accentBorder: '#cc5de8',
      badgeContent: (
        <svg className="w-3.5 h-3.5 text-[#ff4b4b]" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      icon: (
        <svg className="w-10 h-10 select-none" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 14l10 16 12-8-6 26H16l-6-26 12 8 10-16z"
            fill="#FF4B4B"
            stroke="#1c1b1b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M32 14v34M22 22l10 26M42 22L32 48" stroke="#B81414" strokeWidth="2" />
          <path d="M16 48l16-34 16 34" stroke="#1c1b1b" strokeWidth="1.5" opacity="0.4" />
        </svg>
      )
    }
  ];

  // Repeat tools 3 times for seamless infinite loop from LEFT to RIGHT
  const marqueeItems = [...tools, ...tools, ...tools];

  return (
    <section className="space-y-4 pt-2" id="toolkit">
      {/* 1. RETRO TOP HEADER BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Title Box */}
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3.5 py-1.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3.5px_3.5px_0px_#1c1b1b] dark:shadow-[3.5px_3.5px_0px_#000000]">
          <Layers className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <h2 className="font-headline text-lg sm:text-xl font-black tracking-wide">
            My Developer Toolkit 🛠️
          </h2>
        </div>

        {/* Subtitle Arrows */}
        <div className="hidden sm:flex items-center gap-1.5 font-code text-xs font-black tracking-wider text-[#4d4634] dark:text-[#d0cbbf]">
          <span>SKILLS IN MOTION</span>
          <span className="text-[#a8363a] dark:text-[#ff7777]">▶</span>
          <span className="text-[#725c00] dark:text-[#ffd84d]">▶</span>
          <span className="text-[#006783] dark:text-[#55DFFF]">▶</span>
          <span className="text-[#1c1b1b] dark:text-[#F5F1E8]">──</span>
        </div>

        {/* Status Badge */}
        <div className="bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] font-code text-xs font-black shadow-[2.5px_2.5px_0px_#1c1b1b] dark:shadow-[2.5px_2.5px_0px_#000000] tracking-wider min-w-[220px] text-center">
          {activeTooltip ? `INSPECT: ${activeTooltip}` : '11 TOOLS // ALWAYS LEARNING'}
        </div>
      </div>

      {/* 2. MAIN RETRO WINDOW CONTAINER */}
      <div className="bg-white dark:bg-[#191B20] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[6px_6px_0px_#1c1b1b] dark:shadow-[6px_6px_0px_#000000] relative overflow-hidden transition-colors marquee-wrapper">
        {/* Retro Window Header */}
        <div className="px-4 py-2.5 bg-white dark:bg-[#24262D] border-b-[2.5px] border-[#1c1b1b] dark:border-[#353842] flex items-center justify-between">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#1c1b1b]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#1c1b1b]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1c1b1b]" />
          </div>

          {/* Hatching + Direction indicator */}
          <div className="flex items-center gap-2 font-code text-[11px] font-black text-[#1c1b1b] dark:text-[#F5F1E8] tracking-wider">
            <span className="text-[#7e7662] dark:text-[#8e8a82] font-mono tracking-tighter">///////////</span>
            <span className="uppercase">MOVING LEFT → RIGHT</span>
            <span>──</span>
          </div>
        </div>

        {/* Retro Grid Marquee Canvas Area */}
        <div className="p-4 sm:p-6 bg-retro-grid relative overflow-hidden">
          {/* Left & Right subtle edge fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-8 z-10 pointer-events-none bg-gradient-to-r from-[#fbf9f4] dark:from-[#191B20] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-[#fbf9f4] dark:from-[#191B20] to-transparent" />

          {/* Continuous Left-to-Right Scrolling Marquee Track */}
          <div className="flex items-center w-max animate-marquee-ltr py-2 cursor-grab active:cursor-grabbing">
            {marqueeItems.map((tool, idx) => (
              <React.Fragment key={`${tool.id}-${idx}`}>
                {/* TOOL SKILL CARD */}
                <div
                  onMouseEnter={() => {
                    sfx.blip(800, 0.03);
                    setActiveTooltip(tool.name);
                  }}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => sfx.pop()}
                  className="w-[108px] sm:w-[116px] h-[154px] sm:h-[162px] bg-white dark:bg-[#24262D] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] relative flex flex-col justify-between shrink-0 group hover:translate-y-[-4px] hover:shadow-[5px_5px_0px_#1c1b1b] dark:hover:shadow-[5px_5px_0px_#000000] transition-all duration-200 select-none"
                >
                  {/* Top corner color accents */}
                  <div
                    className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2"
                    style={{ borderColor: tool.accentBorder }}
                  />
                  <div
                    className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2"
                    style={{ borderColor: tool.accentBorder }}
                  />

                  {/* Card Center: Icon & Title */}
                  <div className="pt-3.5 px-2 flex flex-col items-center justify-center flex-1">
                    {/* Floating tool icon */}
                    <div className="animate-retro-float-icon group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>

                    {/* Tool Name */}
                    <span className="font-code text-[11px] sm:text-xs font-black tracking-wider text-[#1c1b1b] dark:text-[#F5F1E8] text-center mt-2.5 leading-tight">
                      {tool.name}
                    </span>
                  </div>

                  {/* Bottom Accent Tab with Micro Badge */}
                  <div
                    className={`w-full h-7 ${tool.accentBg} border-t-2 border-[#1c1b1b] dark:border-[#353842] flex items-center justify-center px-1`}
                  >
                    <div className="bg-[#1c1b1b] dark:bg-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] flex items-center justify-center min-w-[28px]">
                      {tool.badgeContent}
                    </div>
                  </div>
                </div>

                {/* RETRO MOTION PARTICLES & ARROWS BETWEEN CARDS */}
                <div className="flex flex-col items-center justify-center gap-1 px-2.5 sm:px-3 shrink-0 opacity-70 select-none">
                  <div className="flex items-center gap-1 font-mono text-[9px] text-[#ba1a1a] dark:text-[#ff7777] font-bold">
                    <span>›</span>
                    <span>›</span>
                    <span>›</span>
                  </div>
                  <span className="text-[10px] text-[#ffd84d] font-bold">✦</span>
                  <div className="flex items-center gap-1 font-mono text-[9px] text-[#006783] dark:text-[#55DFFF] font-bold">
                    <span>·</span>
                    <span>·</span>
                    <span>·</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. RETRO BOTTOM DESIGN: PROGRESS LINE WITH PIXEL CAR */}
        <div className="px-4 py-3 bg-white dark:bg-[#24262D] border-t-[2.5px] border-[#1c1b1b] dark:border-[#353842] flex items-center gap-3 relative select-none">
          {/* Left Arrow */}
          <span className="font-headline font-black text-sm text-[#1c1b1b] dark:text-[#F5F1E8] shrink-0">
            &gt;&gt;
          </span>

          {/* Dotted Track with Driving Pixel Car */}
          <div className="relative flex-1 h-5 flex items-center">
            {/* Horizontal Track Line */}
            <div className="w-full border-b-2 border-dashed border-[#1c1b1b] dark:border-[#353842]" />

            {/* Little Animated Pixel Car Driving Left to Right */}
            <div className="absolute animate-car-drive top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {/* Speed dust dots behind car */}
              <span className="font-mono text-[10px] font-bold text-[#ba1a1a] mr-1 hidden sm:inline-block">
                ::: 💨
              </span>

              {/* Pixel Car Body */}
              <div className="relative w-7 h-4 bg-[#ffd84d] border-[1.5px] border-[#1c1b1b] shadow-[1px_1px_0px_#1c1b1b] flex items-center justify-center">
                {/* Windshield */}
                <div className="absolute -top-1.5 left-1.5 right-1 h-1.5 bg-[#ffd84d] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-[#1c1b1b]">
                  <div className="w-2 h-1 bg-[#69c9f0] border-[0.5px] border-[#1c1b1b] ml-0.5" />
                </div>
                {/* Wheels */}
                <div className="absolute -bottom-1 left-0.5 w-2 h-2 rounded-full bg-[#1c1b1b]" />
                <div className="absolute -bottom-1 right-0.5 w-2 h-2 rounded-full bg-[#1c1b1b]" />
                {/* Headlight */}
                <div className="absolute right-0 top-1 w-0.5 h-1 bg-white" />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <span className="font-headline font-black text-sm text-[#1c1b1b] dark:text-[#F5F1E8] shrink-0">
            &gt;&gt;
          </span>
        </div>
      </div>
    </section>
  );
};
