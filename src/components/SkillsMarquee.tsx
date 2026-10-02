import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Sparkles,
  Play,
  Pause,
  Zap,
} from 'lucide-react';
import { sfx } from '../utils/sound';

interface SkillItem {
  name: string;
  category: 'Programming' | 'Data Eng' | 'Cloud' | 'Analytics';
  level: 'Core' | 'Advanced' | 'Proficient';
  icon: string;
  badgeBg: string;
  note: string;
}

export const SkillsMarquee: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [scrollSpeed, setScrollSpeed] = useState<'normal' | 'fast'>('normal');

  // Column 1: Programming
  const col1Skills: SkillItem[] = [
    { name: 'Python', category: 'Programming', level: 'Core', icon: 'code', badgeBg: 'bg-[#ffd84d]', note: 'Data pipelines, PySpark, Pandas & backend scripting' },
    { name: 'SQL & MySQL', category: 'Programming', level: 'Core', icon: 'database', badgeBg: 'bg-[#69c9f0]', note: 'Complex analytical queries, indexing, CTEs & window functions' },
    { name: 'Java', category: 'Programming', level: 'Proficient', icon: 'coffee', badgeBg: 'bg-[#ffd0ce]', note: 'OOP patterns, JVM architectures & data structures' },
    { name: 'JavaScript / TS', category: 'Programming', level: 'Advanced', icon: 'javascript', badgeBg: 'bg-[#ffd84d]', note: 'Modern frontend, interactive dashboards & node scripting' },
    { name: 'HTML5 & CSS3', category: 'Programming', level: 'Advanced', icon: 'html', badgeBg: 'bg-[#ffdad8]', note: 'Responsive semantic layouts, Neo-Brutalist interfaces' },
    { name: 'Bash / Shell', category: 'Programming', level: 'Proficient', icon: 'terminal', badgeBg: 'bg-[#eae7e7]', note: 'Automated cron jobs, container scripts & environment orchestration' },
    { name: 'C / C++', category: 'Programming', level: 'Proficient', icon: 'memory', badgeBg: 'bg-[#d0c6ae]', note: 'System memory models, algorithmic computing foundations' },
  ];

  // Column 2: Data Engineering
  const col2Skills: SkillItem[] = [
    { name: 'Apache Airflow', category: 'Data Eng', level: 'Advanced', icon: 'air', badgeBg: 'bg-[#9be5c3]', note: 'Authoring DAGs, task dependencies, sensor alerts & backfills' },
    { name: 'PostgreSQL', category: 'Data Eng', level: 'Core', icon: 'dataset', badgeBg: 'bg-[#69c9f0]', note: 'Relational modeling, partitions, vacuuming & performance tuning' },
    { name: 'Snowflake', category: 'Data Eng', level: 'Advanced', icon: 'ac_unit', badgeBg: 'bg-[#bce9ff]', note: 'Virtual warehouses, zero-copy cloning, staging S3 pipes' },
    { name: 'ETL / ELT Pipelines', category: 'Data Eng', level: 'Core', icon: 'sync_alt', badgeBg: 'bg-[#ffd84d]', note: 'Batch & streaming ingestions, normalization & reconciliation' },
    { name: 'Data Warehousing', category: 'Data Eng', level: 'Core', icon: 'warehouse', badgeBg: 'bg-[#9be5c3]', note: 'Kimball dimensional modeling, star schemas & fact tables' },
    { name: 'PySpark', category: 'Data Eng', level: 'Advanced', icon: 'bolt', badgeBg: 'bg-[#ffd84d]', note: 'Distributed DataFrame transformations & cluster computing' },
    { name: 'dbt (Data Build Tool)', category: 'Data Eng', level: 'Proficient', icon: 'layers', badgeBg: 'bg-[#ffdad6]', note: 'Modular SQL transformations, test suites & documentation' },
    { name: 'Apache Kafka', category: 'Data Eng', level: 'Proficient', icon: 'stream', badgeBg: 'bg-[#ffd0ce]', note: 'Pub/sub streaming message brokers & event streaming' },
  ];

  // Column 3: Cloud & DevOps
  const col3Skills: SkillItem[] = [
    { name: 'AWS Services', category: 'Cloud', level: 'Advanced', icon: 'cloud', badgeBg: 'bg-[#ffe07e]', note: 'S3 storage buckets, EC2 compute instances, IAM roles & Lambda' },
    { name: 'Microsoft Fabric', category: 'Cloud', level: 'Advanced', icon: 'grid_view', badgeBg: 'bg-[#69c9f0]', note: 'OneLake architectures, Lakehouse pipelines & direct lake modes' },
    { name: 'Docker', category: 'Cloud', level: 'Core', icon: 'deployed_code', badgeBg: 'bg-[#bce9ff]', note: 'Containerizing ETL services, multi-stage Dockerfiles & compose' },
    { name: 'Git & GitHub', category: 'Cloud', level: 'Core', icon: 'device_hub', badgeBg: 'bg-[#ffd84d]', note: 'Branching workflows, semantic versioning, pull request reviews' },
    { name: 'CI/CD Pipelines', category: 'Cloud', level: 'Proficient', icon: 'settings_suggest', badgeBg: 'bg-[#9be5c3]', note: 'Automated test runners, linter pipelines & build triggers' },
    { name: 'Linux OS Admin', category: 'Cloud', level: 'Advanced', icon: 'computer', badgeBg: 'bg-[#e5e2e1]', note: 'SSH keys, permissions, systemd service daemons & monitoring' },
  ];

  // Column 4: Analytics & ML
  const col4Skills: SkillItem[] = [
    { name: 'Power BI', category: 'Analytics', level: 'Core', icon: 'query_stats', badgeBg: 'bg-[#ffd84d]', note: 'DAX calculated measures, interactive drill-downs & data models' },
    { name: 'Pandas & NumPy', category: 'Analytics', level: 'Core', icon: 'table_chart', badgeBg: 'bg-[#69c9f0]', note: 'Vectorized aggregations, reshaping, multi-indexing & cleaning' },
    { name: 'Scikit-Learn', category: 'Analytics', level: 'Advanced', icon: 'psychology', badgeBg: 'bg-[#ff7777]', note: 'Supervised classification, regression, clustering & metrics' },
    { name: 'FastAPI', category: 'Analytics', level: 'Advanced', icon: 'bolt', badgeBg: 'bg-[#9be5c3]', note: 'Pydantic models, asynchronous API endpoints & OpenAPI swagger' },
    { name: 'Data Visualization', category: 'Analytics', level: 'Advanced', icon: 'pie_chart', badgeBg: 'bg-[#ffd0ce]', note: 'Matplotlib, Seaborn, Plotly charts & narrative storytelling' },
    { name: 'Streamlit', category: 'Analytics', level: 'Core', icon: 'widgets', badgeBg: 'bg-[#ffd84d]', note: 'Rapid ML prototyping, interactive widgets & live sensor dashboards' },
  ];

  const handleCardClick = (skill: SkillItem) => {
    sfx.blip(850, 0.08);
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  // Speed class mapping
  const getSpeedClass = (direction: 'up' | 'down') => {
    if (isPaused) return '';
    if (direction === 'up') {
      return scrollSpeed === 'fast' ? 'animate-scroll-up-fast' : 'animate-scroll-up';
    } else {
      return scrollSpeed === 'fast' ? 'animate-scroll-down-fast' : 'animate-scroll-down';
    }
  };

  const columns = [
    { title: '01 // PROGRAMMING', headerBg: 'bg-[#ffd84d]', skills: col1Skills, direction: 'up' as const },
    { title: '02 // DATA ENG', headerBg: 'bg-[#9be5c3]', skills: col2Skills, direction: 'down' as const },
    { title: '03 // CLOUD & OPS', headerBg: 'bg-[#69c9f0]', skills: col3Skills, direction: 'up' as const },
    { title: '04 // ANALYTICS & ML', headerBg: 'bg-[#ff7777]', skills: col4Skills, direction: 'down' as const },
  ];

  return (
    <section className="space-y-4 pt-2" id="toolkit">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 border-2 border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b]">
          <Layers className="w-4 h-4 text-[#725c00]" />
          <span className="font-headline text-lg font-black">
            My Developer Toolkit 🛠️
          </span>
        </div>

        {/* Live marquee controls */}
        <div className="flex items-center gap-2">
          <span className="font-code text-[11px] text-[#4d4634] font-bold uppercase hidden sm:inline-block">
            CONTINUOUS STREAM
          </span>
          <button
            onClick={() => {
              sfx.blip(600, 0.05);
              setIsPaused(!isPaused);
            }}
            className="px-2.5 py-1 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] font-code text-xs font-bold flex items-center gap-1 hover:bg-[#ffd84d] transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3 text-[#006d32] fill-current" /> : <Pause className="w-3 h-3 text-[#ba1a1a] fill-current" />}
            <span>{isPaused ? 'RESUME' : 'PAUSE'}</span>
          </button>

          <button
            onClick={() => {
              sfx.blip(650, 0.05);
              setScrollSpeed(prev => prev === 'normal' ? 'fast' : 'normal');
            }}
            className="px-2.5 py-1 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] font-code text-xs font-bold flex items-center gap-1 hover:bg-[#bce9ff] transition-colors cursor-pointer"
          >
            <Zap className="w-3 h-3 text-[#725c00]" />
            <span>{scrollSpeed.toUpperCase()}</span>
          </button>
        </div>
      </div>

      {/* Main retro window container */}
      <div className="bg-white border-[3px] border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-3 sm:p-4 relative">
        {/* Retro Window Title Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b-2 border-[#1c1b1b]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] border border-[#1c1b1b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd84d] border border-[#1c1b1b]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9be5c3] border border-[#1c1b1b]" />
            <span className="font-code text-xs font-black text-[#1c1b1b] ml-2">
              skills_stream_engine.py
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-code text-[10px] uppercase font-bold bg-[#ffd84d] px-2 py-0.5 border border-[#1c1b1b]">
              4 VERTICAL LANES // 28 SKILLS
            </span>
          </div>
        </div>

        {/* Selected Skill Detail Popover / Inspector */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-3 overflow-hidden"
            >
              <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] p-3 shadow-[3px_3px_0px_#1c1b1b] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className={`px-2 py-1 border border-[#1c1b1b] font-headline text-sm font-black ${selectedSkill.badgeBg}`}>
                    {selectedSkill.name}
                  </span>
                  <span className="font-code text-[11px] uppercase bg-white px-2 py-0.5 border border-[#1c1b1b] font-bold">
                    {selectedSkill.category} • {selectedSkill.level}
                  </span>
                  <p className="font-body text-xs text-[#1c1b1b]">
                    {selectedSkill.note}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="font-code text-xs font-bold px-2 py-0.5 border border-[#1c1b1b] bg-white hover:bg-[#ff7777] cursor-pointer"
                >
                  ✕ CLOSE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4 Continuous Vertically Moving Columns */}
        <div className="marquee-container grid grid-cols-2 md:grid-cols-4 gap-3 h-[430px] overflow-hidden relative border-2 border-[#1c1b1b] bg-[#fcf9f8] p-2.5">
          {/* Top and Bottom Fade Vignette for comic polish */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#fcf9f8] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#fcf9f8] to-transparent z-10 pointer-events-none" />

          {columns.map((col, colIndex) => {
            // Duplicate skills to create an infinite loop
            const duplicatedSkills = [...col.skills, ...col.skills];
            const speedClass = getSpeedClass(col.direction);

            return (
              <div
                key={colIndex}
                className="flex flex-col h-full overflow-hidden border border-[#1c1b1b] bg-white shadow-[2px_2px_0px_#1c1b1b]"
              >
                {/* Column Header */}
                <div className={`px-2 py-1.5 border-b-2 border-[#1c1b1b] font-code text-[10px] font-black uppercase text-[#1c1b1b] ${col.headerBg} flex items-center justify-between shrink-0 z-20`}>
                  <span className="truncate">{col.title}</span>
                  <span className="text-[9px] opacity-75">{col.direction === 'up' ? '▲' : '▼'}</span>
                </div>

                {/* Animated Inner Strip */}
                <div className="flex-1 overflow-hidden relative">
                  <div className={`flex flex-col gap-2.5 p-2 ${speedClass}`}>
                    {duplicatedSkills.map((skill, itemIndex) => {
                      const isSelected = selectedSkill?.name === skill.name;

                      return (
                        <div
                          key={`${skill.name}-${itemIndex}`}
                          onClick={() => handleCardClick(skill)}
                          className={`p-2 border-[2px] border-[#1c1b1b] transition-all cursor-pointer select-none ${
                            isSelected
                              ? 'bg-[#ffd84d] shadow-[3px_3px_0px_#1c1b1b] scale-[1.02]'
                              : 'bg-white hover:bg-[#f6f3f2] hover:translate-x-[-1px] hover:translate-y-[-1px] shadow-[2px_2px_0px_#1c1b1b]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-headline text-xs font-black text-[#1c1b1b] truncate">
                              {skill.name}
                            </span>
                            <span className={`text-[9px] font-code uppercase font-bold px-1 py-0.2 border border-[#1c1b1b] ${skill.badgeBg} shrink-0`}>
                              {skill.level}
                            </span>
                          </div>

                          <p className="font-body text-[10px] text-[#4d4634] line-clamp-1">
                            {skill.note}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Hint */}
        <div className="mt-2.5 flex items-center justify-between font-code text-[11px] text-[#4d4634]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#725c00]" />
            <span>Hover columns to pause • Click any card for detailed specs</span>
          </span>
          <span className="bg-[#ffd84d] px-2 py-0.5 border border-[#1c1b1b] font-bold text-[#1c1b1b]">
            LIVE ENGINE READY
          </span>
        </div>
      </div>
    </section>
  );
};
