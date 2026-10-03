import React from 'react';
import { ArrowUp, FileText, Sparkles } from 'lucide-react';
import { sfx } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    sfx.blip(800, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full block bg-[#1c1b1b] dark:bg-[#101114] border-t-[4px] border-dashed border-[#ffd84d] dark:border-[#FFD43B] mt-16 text-white pb-20 md:pb-8 transition-colors">
      <div className="w-full py-8 px-4 text-center flex flex-col items-center justify-center gap-5 max-w-5xl mx-auto">
        {/* Brand Logo */}
        <div className="font-headline text-xl font-black text-white flex items-center gap-2">
          <span className="bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-2 py-0.5 border-2 border-white dark:border-[#353842] font-black shadow-[2px_2px_0px_#ffffff] dark:shadow-[2px_2px_0px_#000000]">
            D.
          </span>
          <span>DHANUSH S • DATA ENGINEER | DATA ANALYTICS | PYTHON DEVELOPER</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 font-code text-xs tracking-wider uppercase">
          <a
            href="https://github.com/Dhanush-734/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.blip(500, 0.04)}
            className="text-white/80 hover:text-[#ffd84d] dark:hover:text-[#FFD43B] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-s-970376392/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.blip(500, 0.04)}
            className="text-white/80 hover:text-[#ffd84d] dark:hover:text-[#FFD43B] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#69c9f0] dark:text-[#55DFFF]" />
            <span>LINKEDIN</span>
          </a>
          <button
            onClick={() => {
              sfx.blip(500, 0.04);
              onOpenResume();
            }}
            className="text-white/80 hover:text-[#ffd84d] dark:hover:text-[#FFD43B] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
          <a
            href="#projects"
            onClick={() => sfx.blip(500, 0.04)}
            className="text-white/80 hover:text-[#ffd84d] dark:hover:text-[#FFD43B] transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9be5c3] dark:text-[#4ade80]" />
            <span>PROJECTS</span>
          </a>
        </div>

        {/* Philosophy */}
        <p className="font-code text-xs tracking-wider uppercase text-[#ffd84d] dark:text-[#FFD43B] font-bold">
          BUILD → LEARN → GROW → REPEAT • © DHANUSH S 2026 • CRAFTED WITH INK &amp; DATA
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-1 inline-flex items-center gap-1.5 font-code text-xs uppercase font-black px-3.5 py-1.5 bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] border-2 border-white dark:border-[#353842] shadow-[2px_2px_0px_#ffffff] dark:shadow-[2px_2px_0px_#000000] hover:translate-y-[-2px] active:translate-y-[1px] transition-transform cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
