import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { sfx } from '../utils/sound';

export const Journey: React.FC = () => {
  const milestones = [
    {
      num: 1,
      badge: '2020 - 2023',
      badgeColor: 'text-[#725c00] dark:text-[#FFD43B] bg-[#ffe07e] dark:bg-[#191B20]',
      nodeColor: 'bg-[#ffd84d] dark:bg-[#FFD43B] dark:text-[#101114]',
      title: 'BCA at Canara College',
      desc: 'Built foundational software engineering discipline: algorithms, data structures, relational database management, and object-oriented paradigms. Graduated with academic distinction.',
      skills: ['C++', 'Java', 'SQL', 'DBMS', 'Software Engineering'],
    },
    {
      num: 2,
      badge: '2023 - PRESENT',
      badgeColor: 'text-[#006783] dark:text-[#55DFFF] bg-[#bce9ff] dark:bg-[#191B20]',
      nodeColor: 'bg-[#69c9f0] dark:bg-[#55DFFF] dark:text-[#101114]',
      title: 'MCA at Canara College',
      desc: 'Advanced computer applications, focusing strictly on data ecosystem architectures, cloud deployments, and scalable system design. Spearheading academic data projects.',
      skills: ['Cloud Computing', 'Distributed Systems', 'Advanced Databases', 'System Design'],
    },
    {
      num: 3,
      badge: 'PIPELINE SPECIALIZATION',
      badgeColor: 'text-[#1c1b1b] dark:text-[#4ade80] bg-[#9be5c3] dark:bg-[#191B20]',
      nodeColor: 'bg-[#9be5c3] dark:bg-[#4ade80] dark:text-[#101114]',
      title: 'Diving Deep into Data Engineering',
      desc: 'Orchestrating production workflows with Apache Airflow, crafting high-speed SQL queries, and designing multi-layered Medallion Lakehouse schema structures.',
      skills: ['Apache Airflow', 'Docker', 'Snowflake', 'PySpark', 'dbt'],
    },
    {
      num: 4,
      badge: 'LOOKING AHEAD',
      badgeColor: 'text-[#a8363a] dark:text-[#ff7777] bg-[#ffd0ce] dark:bg-[#191B20]',
      nodeColor: 'bg-[#ff7777] dark:bg-[#ff7777] dark:text-[#101114]',
      title: 'Enterprise Cloud & Scalable Architectures',
      desc: 'Preparing for full-time Data Engineer roles, building production-grade Lakehouse prototypes, and contributing to open-source data tooling.',
      skills: ['Full-Time DE Roles', 'Real-Time Streaming', 'Lakehouse Architectures'],
    },
  ];

  return (
    <section className="space-y-4 pt-2" id="journey">
      {/* Title */}
      <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000]">
        <Compass className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
        <span className="font-headline text-lg font-black">
          The Journey So Far 🗺️
        </span>
      </div>

      {/* Comic Book Panel Container */}
      <div className="bg-white dark:bg-[#191B20] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[5px_5px_0px_#1c1b1b] dark:shadow-[5px_5px_0px_#000000] p-4 sm:p-6 transition-colors">
        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-1 before:bg-[#1c1b1b] dark:before:bg-[#353842] before:border-l-2 before:border-dashed before:border-[#1c1b1b] dark:before:border-[#353842]">
          {milestones.map((ms, index) => (
            <motion.div
              key={ms.num}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="relative"
            >
              {/* Number Circle Node */}
              <span
                onClick={() => sfx.blip(500 + index * 100, 0.05)}
                className={`absolute -left-[27px] top-1 w-5 h-5 rounded-full ${ms.nodeColor} border-2 border-[#1c1b1b] dark:border-[#353842] flex items-center justify-center font-bold text-[10px] text-[#1c1b1b] cursor-pointer hover:scale-125 transition-transform shadow-[1px_1px_0px_#000000]`}
              >
                {ms.num}
              </span>

              {/* Milestone Card */}
              <div className="bg-[#fcf9f8] dark:bg-[#24262D] p-3.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] transition-transform">
                <span className={`font-code text-[10px] uppercase font-black px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] ${ms.badgeColor} inline-block`}>
                  {ms.badge}
                </span>

                <h4 className="font-headline text-lg font-black mt-1.5 text-[#1c1b1b] dark:text-[#F5F1E8]">
                  {ms.title}
                </h4>

                <p className="font-body text-xs sm:text-sm text-[#1c1b1b] dark:text-[#d0cbbf] mt-1 leading-relaxed">
                  {ms.desc}
                </p>

                {/* Milestone Tags */}
                <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-dashed border-[#1c1b1b]/30 dark:border-[#353842]">
                  {ms.skills.map((s, i) => (
                    <span
                      key={i}
                      className="font-code text-[10px] bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#55DFFF] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]"
                    >
                      #{s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
