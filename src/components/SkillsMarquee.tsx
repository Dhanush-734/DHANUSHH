import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { sfx } from '../utils/sound';

export interface ToolItem {
  id: string;
  name: string;
  accentBg: string;
  accentBorder: string;
  badgeContent: React.ReactNode;
  image: string;
}

export const SkillsMarquee: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // The STRICT 11 tools with high-definition realistic 3D / glossy logos
  const tools: ToolItem[] = [
    {
      id: 'python',
      name: 'PYTHON',
      accentBg: 'bg-[#ffd84d]',
      accentBorder: '#ffd84d',
      badgeContent: <span className="text-[#ffd84d] font-code font-black text-[10px]">&gt;_</span>,
      image: '/assets/tools/realistic_python.png'
    },
    {
      id: 'sql',
      name: 'SQL',
      accentBg: 'bg-[#69c9f0]',
      accentBorder: '#69c9f0',
      badgeContent: <span className="text-[#55DFFF] font-code font-black text-[9px]">SQL</span>,
      image: '/assets/tools/realistic_sql.png'
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
      image: '/assets/tools/realistic_airflow.png'
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
      image: '/assets/tools/realistic_docker.png'
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
      image: '/assets/tools/realistic_cloud.png'
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
      image: '/assets/tools/realistic_alteryx.png'
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
      image: '/assets/tools/realistic_snowflake.png'
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
      image: '/assets/tools/realistic_excel.png'
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
      image: '/assets/tools/realistic_powerbi.png'
    },
    {
      id: 'flask',
      name: 'FLASK',
      accentBg: 'bg-[#ff7777]',
      accentBorder: '#ff7777',
      badgeContent: <span className="text-white font-code font-black text-[9px]">&lt;/&gt;</span>,
      image: '/assets/tools/realistic_flask.png'
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
      image: '/assets/tools/realistic_streamlit.png'
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
                  <div className="pt-3 px-2 flex flex-col items-center justify-center flex-1">
                    {/* Realistic 3D floating tool logo */}
                    <div className="h-12 flex items-center justify-center animate-retro-float-icon group-hover:scale-115 transition-transform duration-300">
                      <img
                        src={tool.image}
                        alt={`${tool.name} Logo`}
                        loading="lazy"
                        className="max-h-11 max-w-[54px] object-contain drop-shadow-[0_2.5px_4px_rgba(0,0,0,0.18)] select-none"
                      />
                    </div>

                    {/* Tool Name */}
                    <span className="font-code text-[11px] sm:text-xs font-black tracking-wider text-[#1c1b1b] dark:text-[#F5F1E8] text-center mt-2 leading-tight">
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
