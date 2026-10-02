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
      icon: Terminal,
      desc: 'Developing clean Python APIs, backend services, and snappy micro-apps to deliver data tools.',
      highlights: ['FastAPI & RESTful APIs', 'Streamlit Interactive Apps', 'React & TypeScript UIs', 'Database Connection Pools'],
    },
  ];

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center gap-2">
        <span className="font-headline text-xl uppercase tracking-tight font-black">
          Core Competencies
        </span>
        <div className="h-0.5 flex-1 bg-[#1c1b1b]" />
        <span className="font-code text-[11px] text-[#4d4634] font-bold uppercase hidden sm:inline-block">
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
              className={`${mod.bg} ${mod.hoverBg} p-4 border-[2.5px] border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[5.5px_5.5px_0px_#1c1b1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1c1b1b] transition-all relative overflow-hidden cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <span className="font-code text-[11px] uppercase font-black bg-white px-2 py-0.5 border border-[#1c1b1b] shadow-[1px_1px_0px_#1c1b1b]">
                  {mod.tag}
                </span>
                <div className="p-1.5 bg-white border border-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b] group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5 text-[#1c1b1b]" />
                </div>
              </div>

              <h3 className="font-headline text-lg font-black uppercase mt-3 mb-1 text-[#1c1b1b]">
                {mod.title}
              </h3>

              <p className="font-body text-sm text-[#1c1b1b] leading-relaxed">
                {mod.desc}
              </p>

              {/* Expandable Highlight checklist */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-[#1c1b1b]/40">
                <div className="grid grid-cols-2 gap-1.5">
                  {mod.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1 font-code text-[10px] text-[#1c1b1b] font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#1c1b1b] shrink-0" />
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
