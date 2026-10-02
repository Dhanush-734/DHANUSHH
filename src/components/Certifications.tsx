import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { sfx } from '../utils/sound';

export const Certifications: React.FC = () => {
  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 border-2 border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b]">
          <Award className="w-4 h-4 text-[#725c00]" />
          <span className="font-headline text-lg font-black">
            Achievements & Certifications 🏆
          </span>
        </div>
        <span className="font-code text-xs uppercase bg-[#ffd84d] text-[#1c1b1b] px-2 py-0.5 border border-[#1c1b1b] font-black shadow-[1px_1px_0px_#1c1b1b]">
          ⭐ SCORE: 84%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cert 1 */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => sfx.blip(700, 0.05)}
          className="bg-white p-4 border-[2.5px] border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] relative cursor-pointer"
        >
          {/* Washi Tape */}
          <div className="w-12 h-3.5 washi-tape absolute -top-1.5 right-6 -rotate-2" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#ffd84d] border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#1c1b1b]" />
            </div>
            <div>
              <span className="font-code text-[10px] uppercase text-[#725c00] font-black bg-[#ffe07e] px-1.5 py-0.5 border border-[#1c1b1b]">
                NPTEL VERIFIED
              </span>
              <h4 className="font-headline text-xl font-black mt-1.5 text-[#1c1b1b]">
                Cloud Computing
              </h4>
              <p className="font-body text-xs text-[#4d4634] mt-1 leading-relaxed">
                Comprehensive study of virtualization, cloud architecture, storage protocols, and distributed service models.
              </p>
              <div className="mt-2.5 flex items-center gap-2 font-code text-[10px] font-bold text-[#1c1b1b]">
                <span className="bg-[#f0eded] px-1.5 py-0.5 border border-[#1c1b1b]">Score: 84%</span>
                <span className="bg-[#bce9ff] px-1.5 py-0.5 border border-[#1c1b1b]">IIT Kharagpur</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cert 2 */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => sfx.blip(750, 0.05)}
          className="bg-white p-4 border-[2.5px] border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] relative cursor-pointer"
        >
          {/* Washi Tape */}
          <div className="w-12 h-3.5 washi-tape-blue absolute -top-1.5 right-6 rotate-2" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#69c9f0] border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] shrink-0">
              <Sparkles className="w-6 h-6 text-[#1c1b1b]" />
            </div>
            <div>
              <span className="font-code text-[10px] uppercase text-[#006783] font-black bg-[#bce9ff] px-1.5 py-0.5 border border-[#1c1b1b]">
                NPTEL ELITE ACHIEVEMENT
              </span>
              <h4 className="font-headline text-xl font-black mt-1.5 text-[#1c1b1b]">
                Distributed Systems
              </h4>
              <p className="font-body text-xs text-[#4d4634] mt-1 leading-relaxed">
                In-depth coverage of fault tolerance, consensus algorithms, partition tolerance, and peer-to-peer data coordination.
              </p>
              <div className="mt-2.5 flex items-center gap-2 font-code text-[10px] font-bold text-[#1c1b1b]">
                <span className="bg-[#ffd84d] px-1.5 py-0.5 border border-[#1c1b1b]">ELITE BADGE</span>
                <span className="bg-[#f0eded] px-1.5 py-0.5 border border-[#1c1b1b]">IIT Madras</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
