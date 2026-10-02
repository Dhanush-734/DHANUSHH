import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, BarChart3, Terminal, CheckCircle2 } from 'lucide-react';
import { sfx } from '../utils/sound';

export const CoreCompetencies: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      tag: 'MODULE 01',
      title: 'DATA ENGINEERING',
      bg: 'bg-[#9be5c3]',
      hoverBg: 'hover:bg-[#b0ecd2]',
      accentColor: 'text-[#006d32] dark:text-[#4ade80]',
      icon: Database,
      desc: 'Building robust batch and streaming pipelines, orchestrating DAGs, and modeling analytical lakehouses.',
      highlights: ['Airflow DAGs & ETL', 'PostgreSQL & Star Schema', 'Snowflake Lakehouses', 'Data Quality Checks'],
    },
    {
      id: 2,
      tag: 'MODULE 02',
      title: 'CLOUD COMPUTING',
      bg: 'bg-[#69c9f0]',
      hoverBg: 'hover:bg-[#85d5f5]',
      accentColor: 'text-[#006783] dark:text-[#55DFFF]',
      icon: Cloud,
      desc: 'Architecting scalable cloud infra on AWS & Fabric with Docker containers and continuous automation.',
      highlights: ['AWS S3, EC2 & IAM', 'Microsoft Fabric', 'Docker Containerization', 'CI/CD Automated Deployments'],
    },
    {
      id: 3,
      tag: 'MODULE 03',
      title: 'DATA ANALYTICS',
      bg: 'bg-[#ffd84d]',
      hoverBg: 'hover:bg-[#ffe07e]',
      accentColor: 'text-[#725c00] dark:text-[#FFD43B]',
      icon: BarChart3,
      desc: 'Distilling complex datasets into intuitive executive dashboards using SQL, Power BI, & Pandas.',
      highlights: ['Advanced SQL Aggregations', 'Interactive Power BI', 'Pandas & NumPy Analysis', 'Cohort Retention Modeling'],
    },
    {
      id: 4,
      tag: 'MODULE 04',
      title: 'FULL-STACK DEV',
      bg: 'bg-[#ff7777]',
      hoverBg: 'hover:bg-[#ff8f8f]',
      accentColor: 'text-[#ba1a1a] dark:text-[#ff7777]',
      icon: Terminal,
      desc: 'Developing clean Python APIs, backend services, and snappy micro-apps to deliver data tools.',
      highlights: ['FastAPI & RESTful APIs', 'Streamlit Interactive Apps', 'React & TypeScript UIs', 'Database Connection Pools'],
    },
  ];

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center gap-2">
        <span className="font-headline text-xl uppercase tracking-tight font-black text-[#1c1b1b] dark:text-[#F5F1E8]">
          Core Competencies
        </span>
        <div className="h-0.5 flex-1 bg-[#1c1b1b] dark:bg-[#353842]" />
        <span className="font-code text-[11px] text-[#4d4634] dark:text-[#d0cbbf] font-bold uppercase hidden sm:inline-block">
          ARCHITECTURAL PILLARS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map((mod, index) => {
          const Icon = mod.icon;
          const isExpanded = selectedModule === mod.id;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              onClick={() => {
                sfx.blip(500 + index * 100, 0.06);
                setSelectedModule(isExpanded ? null : mod.id);
              }}
              className={`${mod.bg} ${mod.hoverBg} dark:bg-[#24262D] dark:hover:bg-[#2a2d36] p-4 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[5.5px_5.5px_0px_#1c1b1b] dark:hover:shadow-[5.5px_5.5px_0px_#000000] dark:hover:border-[#FFD43B] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1c1b1b] dark:active:shadow-[1px_1px_0px_#000000] transition-all relative overflow-hidden cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <span className="font-code text-[11px] uppercase font-black bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#FFD43B] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
                  {mod.tag}
                </span>
                <div className="p-1.5 bg-white dark:bg-[#191B20] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5 text-[#1c1b1b] dark:text-[#55DFFF]" />
                </div>
              </div>

              <h3 className="font-headline text-lg font-black uppercase mt-3 mb-1 text-[#1c1b1b] dark:text-[#F5F1E8]">
                {mod.title}
              </h3>

              <p className="font-body text-sm text-[#1c1b1b] dark:text-[#d0cbbf] leading-relaxed">
                {mod.desc}
              </p>

              {/* Expandable Highlight checklist */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-[#1c1b1b]/40 dark:border-[#353842]">
                <div className="grid grid-cols-2 gap-1.5">
                  {mod.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1 font-code text-[10px] text-[#1c1b1b] dark:text-[#F5F1E8] font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#1c1b1b] dark:text-[#55DFFF] shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
