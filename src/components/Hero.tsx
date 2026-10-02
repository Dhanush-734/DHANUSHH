import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Send, Mail, Sparkles, Activity, ShieldCheck, Play } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sfx } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [comicBurst, setComicBurst] = useState<string | null>(null);
  const [burstCount, setBurstCount] = useState(0);

  const burstWords = ['POW! 💥', 'KAPOW! ⚡', 'PIPELINE ACTIVE! 🚀', 'DAG SUCCESS! 🟢', 'SQL COMPILED! 📊', 'LAKEHOUSE SYNC! 🌊'];

  const triggerHeroBurst = (e: React.MouseEvent) => {
    sfx.pop();
    const nextWord = burstWords[burstCount % burstWords.length];
    setBurstCount(prev => prev + 1);
    setComicBurst(nextWord);

    // Confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#ffd84d', '#69c9f0', '#9be5c3', '#ff7777', '#1c1b1b']
    });

    setTimeout(() => {
      setComicBurst(null);
    }, 1200);
  };

  return (
    <section className="space-y-6 pt-2" id="home">
      {/* Comic speech bubble badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block relative"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] -rotate-2 hover:rotate-0 transition-transform cursor-pointer"
          onClick={() => sfx.blip(500, 0.05)}>
          <span className="font-code text-xs font-bold text-[#1c1b1b]">Hi there! 👋</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-3"
      >
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1c1b1b] leading-tight">
          I'm{' '}
          <span className="bg-[#ffd84d] px-3 py-0.5 border-[3px] border-[#1c1b1b] shadow-[4.5px_4.5px_0px_#1c1b1b] inline-block -rotate-1 hover:rotate-1 transition-transform cursor-pointer"
            onClick={triggerHeroBurst}>
            Dhanush.
          </span>
        </h1>

        <div className="inline-block">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#bce9ff] border-2 border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] font-code text-xs uppercase font-extrabold text-[#1c1b1b]">
            <Database className="w-3.5 h-3.5 text-[#006783]" />
            Aspiring Data Engineer • Cloud & Data Enthusiast
          </span>
        </div>
      </motion.div>

      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-body text-base md:text-lg text-[#1c1b1b] max-w-2xl leading-relaxed"
      >
        I love architecting reliable data pipelines, transforming chaotic raw data streams into sharp analytical insights, and building playful yet pragmatic technology solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-3.5 pt-1"
      >
        <a
          href="#postcard"
          onClick={() => sfx.blip(650, 0.08)}
          className="font-code text-xs uppercase font-extrabold bg-[#ffd84d] text-[#1c1b1b] px-5 py-3 border-[2.5px] border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[5.5px_5.5px_0px_#1c1b1b] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Get in Touch</span>
          <Send className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => {
            sfx.blip(750, 0.08);
            onOpenResumeModal();
          }}
          className="font-code text-xs uppercase font-extrabold bg-white text-[#1c1b1b] px-4 py-3 border-[2.5px] border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] hover:bg-[#9be5c3] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[4.5px_4.5px_0px_#1c1b1b] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>View Resume</span>
          <FileText className="w-3.5 h-3.5 text-[#006783]" />
        </button>

        <a
          href="#pipeline-lab"
          onClick={() => sfx.pop()}
          className="font-code text-xs uppercase font-extrabold bg-white text-[#1c1b1b] px-4 py-3 border-[2.5px] border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] hover:bg-[#69c9f0] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[4.5px_4.5px_0px_#1c1b1b] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Test Pipeline Simulator</span>
          <Play className="w-3 h-3 fill-[#1c1b1b]" />
        </a>
      </motion.div>

      {/* Quick Social Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-2 pt-1"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sfx.blip(600, 0.04)}
          className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] flex items-center gap-1.5 hover:bg-[#ffd84d] transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sfx.blip(600, 0.04)}
          className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] flex items-center gap-1.5 hover:bg-[#bce9ff] transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5 text-[#006783]" />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:dhanush@example.com"
          onClick={() => sfx.blip(600, 0.04)}
          className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] flex items-center gap-1.5 hover:bg-[#ffd0ce] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-[#a8363a]" />
          <span>Email</span>
        </a>

        <span className="font-code text-xs text-[#4d4634] ml-1 sm:ml-2 italic flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#725c00]" />
          <span>Let's build something amazing!</span>
        </span>
      </motion.div>

      {/* HERO ILLUSTRATION PANEL (Exact Stitch Design) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative pt-4"
      >
        {/* Washi tape stickers */}
        <div className="absolute -top-1 left-8 w-20 h-5 washi-tape z-20 -rotate-3 hidden sm:block pointer-events-none" />
        <div className="absolute -top-1 right-8 w-20 h-5 washi-tape z-20 rotate-3 hidden sm:block pointer-events-none" />

        <div className="bg-white border-[3px] border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-3 sm:p-4 relative">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#1c1b1b]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ba1a1a] border border-[#1c1b1b]" />
              <span className="w-3 h-3 rounded-full bg-[#ffd84d] border border-[#1c1b1b]" />
              <span className="w-3 h-3 rounded-full bg-[#bce9ff] border border-[#1c1b1b]" />
            </div>

            <button
              onClick={triggerHeroBurst}
              className="font-code text-[11px] uppercase font-black bg-[#ffd84d] hover:bg-[#ffe07e] px-2.5 py-0.5 border border-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b] active:translate-x-[1px] active:translate-y-[1px] flex items-center gap-1 cursor-pointer"
            >
              <span>⚡ LIVE FROM THE DATA LAB</span>
            </button>
          </div>

          {/* Interactive Comic Burst floating tag */}
          {comicBurst && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-bounce">
              <div className="bg-[#ffd84d] text-[#1c1b1b] font-headline text-2xl md:text-3xl font-black px-4 py-2 border-[3px] border-[#1c1b1b] shadow-[5px_5px_0px_#1c1b1b] rotate-[-4deg]">
                {comicBurst}
              </div>
            </div>
          )}

          {/* Image Container */}
          <div className="flex justify-center w-full my-1">
            <div
              onClick={triggerHeroBurst}
              className="w-full max-w-[560px] aspect-square border-2 border-[#1c1b1b] overflow-hidden relative bg-[#fcf9f8] shadow-[3px_3px_0px_#1c1b1b] group cursor-pointer"
            >
              <img
                src="/hero-comic.png"
                alt="Dhanush - Comic Pop Art Developer Portrait with Python, Databricks, SQL, and Power BI"
                className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Caption Strip */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-code text-xs text-[#1c1b1b]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#725c00] animate-pulse" />
              <span>PIPELINE_STATUS:</span>
              <span className="bg-[#ffe07e] px-1.5 py-0.5 border border-[#1c1b1b] font-black text-[10px] text-[#231b00] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#006d32]" />
                HEALTHY
              </span>
            </span>

            <span className="font-code text-xs text-[#4d4634] font-bold">
              CANARA_COLLEGE // MCA_2025
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
