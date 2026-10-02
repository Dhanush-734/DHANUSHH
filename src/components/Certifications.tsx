import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { sfx } from '../utils/sound';

export const Certifications: React.FC = () => {
  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000]">
          <Award className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
          <span className="font-headline text-lg font-black">
            Achievements & Certifications 🏆
          </span>
        </div>
        <span className="font-code text-xs uppercase bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842] font-black shadow-[1px_1px_0px_#1c1b1b] dark:shadow-[1px_1px_0px_#000000]">
          ⭐ SCORE: 84%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cert 1 */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => sfx.blip(700, 0.05)}
          className="bg-white dark:bg-[#24262D] p-4 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] relative cursor-pointer transition-colors"
        >
          {/* Washi Tape */}
          <div className="w-12 h-3.5 washi-tape absolute -top-1.5 right-6 -rotate-2" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#1c1b1b] dark:text-[#101114]" />
            </div>
            <div>
              <span className="font-code text-[10px] uppercase text-[#725c00] dark:text-[#FFD43B] font-black bg-[#ffe07e] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                NPTEL VERIFIED
              </span>
              <h4 className="font-headline text-xl font-black mt-1.5 text-[#1c1b1b] dark:text-[#F5F1E8]">
                Cloud Computing
              </h4>
              <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] mt-1 leading-relaxed">
                Comprehensive study of virtualization, cloud architecture, storage protocols, and distributed service models.
              </p>
              <div className="mt-2.5 flex items-center gap-2 font-code text-[10px] font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                <span className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">Score: 84%</span>
                <span className="bg-[#bce9ff] dark:bg-[#191B20] dark:text-[#55DFFF] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">IIT Kharagpur</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cert 2 */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => sfx.blip(750, 0.05)}
          className="bg-white dark:bg-[#24262D] p-4 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] relative cursor-pointer transition-colors"
        >
          {/* Washi Tape */}
          <div className="w-12 h-3.5 washi-tape-blue absolute -top-1.5 right-6 rotate-2" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#69c9f0] dark:bg-[#55DFFF] text-[#1c1b1b] dark:text-[#101114] border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] shrink-0">
              <Sparkles className="w-6 h-6 text-[#1c1b1b] dark:text-[#101114]" />
            </div>
            <div>
              <span className="font-code text-[10px] uppercase text-[#006783] dark:text-[#55DFFF] font-black bg-[#bce9ff] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                NPTEL ELITE ACHIEVEMENT
              </span>
              <h4 className="font-headline text-xl font-black mt-1.5 text-[#1c1b1b] dark:text-[#F5F1E8]">
                Distributed Systems
              </h4>
              <p className="font-body text-xs text-[#4d4634] dark:text-[#d0cbbf] mt-1 leading-relaxed">
                In-depth coverage of fault tolerance, consensus algorithms, partition tolerance, and peer-to-peer data coordination.
              </p>
              <div className="mt-2.5 flex items-center gap-2 font-code text-[10px] font-bold text-[#1c1b1b] dark:text-[#F5F1E8]">
                <span className="bg-[#ffd84d] dark:bg-[#FFD43B] dark:text-[#101114] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">ELITE BADGE</span>
                <span className="bg-[#f0eded] dark:bg-[#191B20] px-1.5 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">IIT Madras</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
