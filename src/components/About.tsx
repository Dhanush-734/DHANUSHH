import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, MapPin, Award, BookOpen, Quote } from 'lucide-react';
import { sfx } from '../utils/sound';

export const About: React.FC = () => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const developerQuotes = [
    "\"Raw data is like unrefined gold—messy, bulky, and full of impurities. The magic happens inside the pipeline.\" ⚡",
    "\"Any query that takes more than 500ms is an urgent mystery waiting to be solved with an index.\" 🔍",
    "\"Clean schemas, atomic writes, and hot filter coffee make for an unbeatable morning.\" ☕",
  ];

  const handleShuffleQuote = () => {
    sfx.blip(700, 0.06);
    setActiveQuoteIdx((prev) => (prev + 1) % developerQuotes.length);
  };

  return (
    <section className="space-y-4 pt-2" id="about">
      {/* Title Badge */}
      <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] -rotate-1">
        <BookOpen className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
        <span className="font-headline text-lg font-black">A Little About Me 📖</span>
      </div>

      {/* Scrapbook Container */}
      <div className="bg-white dark:bg-[#191B20] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[5px_5px_0px_#1c1b1b] dark:shadow-[5px_5px_0px_#000000] p-4 sm:p-6 space-y-6 relative bg-halftone transition-colors">
        <div className="bg-white dark:bg-[#24262D] p-4 sm:p-6 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] space-y-5 transition-colors">
          {/* Scrapbook Header with Avatar Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#1c1b1b] dark:border-[#353842] pb-3">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 border-2 border-[#1c1b1b] dark:border-[#353842] bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] flex items-center justify-center font-headline text-2xl font-black shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]">
                D
              </span>
              <div>
                <h4 className="font-headline text-xl font-black text-[#1c1b1b] dark:text-[#F5F1E8]">DHANUSH S</h4>
                <p className="font-code text-xs uppercase text-[#725c00] dark:text-[#FFD43B] font-black tracking-wide">
                  DATA ENGINEER • DATA ANALYTICS • PYTHON DEV
                </p>
              </div>
            </div>

            <span className="font-code text-[11px] uppercase font-bold bg-[#eae7e7] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-2.5 py-1 border border-[#1c1b1b] dark:border-[#353842] flex items-center gap-1 shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
              <MapPin className="w-3 h-3 text-[#ba1a1a] dark:text-[#ff7777]" />
              MANGALURU, INDIA
            </span>
          </div>

          {/* Bio paragraph */}
          <p className="font-body text-base leading-relaxed text-[#1c1b1b] dark:text-[#F5F1E8]">
            I am currently an MCA student at <strong className="underline decoration-[#ffd84d] dark:decoration-[#FFD43B] decoration-4 font-bold">Canara College</strong>, fueled by a relentless curiosity for distributed computing and efficient database architectures. My journey began with core computer application fundamentals in BCA, and rapidly evolved into building automated data pipelines, writing performant SQL queries, and dissecting cloud data architectures.
          </p>

          {/* Education Journey Polaroids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Postgraduate Polaroid */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-[#fcf9f8] dark:bg-[#191B20] p-3.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] rotate-1 transition-transform"
            >
              <div className="flex items-center justify-between text-[#725c00] dark:text-[#FFD43B] font-code text-xs uppercase font-extrabold pb-1.5 border-b border-[#1c1b1b] dark:border-[#353842]">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  POSTGRADUATE
                </span>
                <span className="text-[10px] bg-[#ffe07e] dark:bg-[#24262D] dark:text-[#FFD43B] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">ACTIVE</span>
              </div>
              <h5 className="font-headline text-xl font-black mt-2 text-[#1c1b1b] dark:text-[#F5F1E8]">MCA (Master of Computer Applications)</h5>
              <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] font-medium mt-0.5">Canara College, Mangaluru</p>
              <span className="inline-block mt-2.5 font-code text-[11px] font-bold bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
                CURRENTLY PURSUING (2023 - 2025)
              </span>
            </motion.div>

            {/* Undergraduate Polaroid */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-[#fcf9f8] dark:bg-[#191B20] p-3.5 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] -rotate-1 transition-transform"
            >
              <div className="flex items-center justify-between text-[#006783] dark:text-[#55DFFF] font-code text-xs uppercase font-extrabold pb-1.5 border-b border-[#1c1b1b] dark:border-[#353842]">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  UNDERGRADUATE
                </span>
                <span className="text-[10px] bg-[#bce9ff] dark:bg-[#24262D] dark:text-[#55DFFF] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">HONORS</span>
              </div>
              <h5 className="font-headline text-xl font-black mt-2 text-[#1c1b1b] dark:text-[#F5F1E8]">BCA (Bachelor of Computer Applications)</h5>
              <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] font-medium mt-0.5">Canara College, Mangaluru</p>
              <span className="inline-block mt-2.5 font-code text-[11px] font-bold bg-[#bce9ff] dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#55DFFF] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
                GRADUATED WITH DISTINCTION
              </span>
            </motion.div>
          </div>

          {/* Sticky Note Widget (Fun facts) */}
          <div className="bg-[#ffd84d] dark:bg-[#191B20] p-3.5 sm:p-4 border-2 border-[#1c1b1b] dark:border-[#FFD43B] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] rotate-[-0.5deg]">
            <div className="font-code text-xs uppercase font-black border-b border-[#1c1b1b] dark:border-[#353842] pb-1.5 mb-2.5 flex items-center justify-between text-[#1c1b1b] dark:text-[#FFD43B]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1c1b1b] dark:text-[#FFD43B]" />
                NOTEBOOK SNIPPET • FUN FACTS
              </span>
              <span className="text-[10px] text-[#231b00] dark:text-[#55DFFF] underline">VERIFIED DATA</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-code text-xs text-[#1c1b1b] dark:text-[#F5F1E8]">
              <div className="bg-white/70 dark:bg-[#24262D] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                <strong>Fuel:</strong> Filter Coffee ☕
              </div>
              <div className="bg-white/70 dark:bg-[#24262D] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                <strong>Obsession:</strong> Distributed DAGs & Snowflake ❄️
              </div>
              <div className="bg-white/70 dark:bg-[#24262D] p-2 border border-[#1c1b1b] dark:border-[#353842]">
                <strong>Current Quest:</strong> Real-time Stream Engine 🚀
              </div>
            </div>
          </div>

          {/* Interactive Comic Thought Bubble */}
          <div
            onClick={handleShuffleQuote}
            className="comic-tail bg-white dark:bg-[#191B20] p-3 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] cursor-pointer hover:bg-[#f6f3f2] dark:hover:bg-[#24262D] transition-colors"
          >
            <div className="flex items-start gap-2">
              <Quote className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B] shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-code text-xs italic text-[#1c1b1b] dark:text-[#F5F1E8]">
                  {developerQuotes[activeQuoteIdx]}
                </p>
                <span className="font-code text-[10px] text-[#725c00] dark:text-[#55DFFF] font-bold mt-1 inline-block">
                  (Click bubble to flip thought 💭)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
