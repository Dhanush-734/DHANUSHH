import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MailCheck, Copy, Check, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sfx } from '../utils/sound';

export const Postcard: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Data Engineering Role',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.success();
    setSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffd84d', '#69c9f0', '#9be5c3', '#ff7777', '#1c1b1b'],
    });
  };

  const handleCopyEmail = () => {
    sfx.blip(900, 0.08);
    navigator.clipboard.writeText('dhanush.data@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-4 pt-2" id="postcard">
      {/* Title */}
      <div className="inline-flex items-center gap-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] px-3 py-1 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] -rotate-1">
        <MessageSquare className="w-4 h-4 text-[#725c00] dark:text-[#FFD43B]" />
        <span className="font-headline text-lg font-black">
          Let's Create Something Awesome! 📬
        </span>
      </div>

      {/* Retro Postcard Container */}
      <div className="bg-white dark:bg-[#191B20] border-[3px] border-[#1c1b1b] dark:border-[#353842] shadow-[6px_6px_0px_#1c1b1b] dark:shadow-[6px_6px_0px_#000000] p-4 sm:p-7 relative overflow-hidden bg-halftone transition-colors">
        <div className="bg-[#fcf9f8] dark:bg-[#24262D] p-4 sm:p-6 border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] transition-colors">
          {/* Postcard Stamp Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-dashed border-[#1c1b1b] dark:border-[#353842] pb-4 mb-5">
            <div>
              <span className="font-code text-[11px] uppercase font-black text-[#1c1b1b] dark:text-[#101114] bg-[#ffd84d] dark:bg-[#FFD43B] px-2 py-0.5 border border-[#1c1b1b] dark:border-[#353842]">
                PAR AVION / AIR MAIL ✈️
              </span>
              <h3 className="font-headline text-2xl font-black mt-1 text-[#1c1b1b] dark:text-[#F5F1E8]">
                DISPATCH A NOTE TO DHANUSH S
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#4d4634] dark:text-[#d0cbbf]">
                Looking for a data engineer, analytics developer, or full-stack collaborator?
              </p>
            </div>

            {/* Vintage Stamp Box */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              onClick={handleCopyEmail}
              className="w-20 h-24 border-2 border-dashed border-[#1c1b1b] dark:border-[#353842] bg-[#ffd84d] dark:bg-[#FFD43B] p-1.5 flex flex-col items-center justify-center text-center shadow-[3px_3px_0px_#1c1b1b] dark:shadow-[3px_3px_0px_#000000] rotate-2 cursor-pointer shrink-0"
              title="Click to copy email address"
            >
              <Send className="w-5 h-5 text-[#1c1b1b] dark:text-[#101114]" />
              <span className="font-code text-[10px] uppercase font-black leading-tight mt-1 text-[#1c1b1b] dark:text-[#101114]">
                DHANUSH S<br />DEV
              </span>
              <span className="text-[8px] font-code bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] px-1 border border-[#1c1b1b] dark:border-[#353842] mt-1">
                AIR_POST
              </span>
            </motion.div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 bg-[#9be5c3] dark:bg-[#191B20] border-2 border-[#1c1b1b] dark:border-[#4ade80] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] text-center space-y-3"
            >
              <div className="w-12 h-12 bg-white dark:bg-[#24262D] border-2 border-[#1c1b1b] dark:border-[#353842] rounded-full mx-auto flex items-center justify-center shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000]">
                <MailCheck className="w-6 h-6 text-[#006d32] dark:text-[#4ade80]" />
              </div>
              <h4 className="font-headline text-2xl font-black text-[#1c1b1b] dark:text-[#F5F1E8]">
                DISPATCH TRANSMITTED! 🚀
              </h4>
              <p className="font-body text-sm text-[#1c1b1b] dark:text-[#d0cbbf] max-w-md mx-auto">
                Thank you, <strong>{formState.name || 'Friend'}</strong>! Your note has been queued into Dhanush's inbox. Expect a response in under 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-code text-xs font-black uppercase px-4 py-2 bg-white dark:bg-[#24262D] text-[#1c1b1b] dark:text-[#F5F1E8] border-2 border-[#1c1b1b] dark:border-[#353842] shadow-[2px_2px_0px_#1c1b1b] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd84d] dark:hover:bg-[#353842] cursor-pointer"
              >
                Send Another Note ✍️
              </button>
            </motion.div>
          ) : (
            /* Postcard Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Alan Turing"
                    className="w-full bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] placeholder-[#7e7662] dark:placeholder-[#8e8a82] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] dark:focus:bg-[#15171c] focus:ring-2 focus:ring-[#ffd84d] dark:focus:ring-[#55DFFF] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] dark:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] rounded-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b] dark:text-[#F5F1E8]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alan@computing.org"
                    className="w-full bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] placeholder-[#7e7662] dark:placeholder-[#8e8a82] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] dark:focus:bg-[#15171c] focus:ring-2 focus:ring-[#ffd84d] dark:focus:ring-[#55DFFF] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] dark:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] rounded-none"
                  />
                </div>
              </div>

              {/* Inquiry Topic Dropdown */}
              <div className="space-y-1">
                <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b] dark:text-[#F5F1E8]">
                  Topic / Opportunity Type
                </label>
                <select
                  value={formState.topic}
                  onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                  className="w-full bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] p-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#ffd84d] dark:focus:ring-[#55DFFF] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] dark:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] rounded-none"
                >
                  <option value="Data Engineering Role" className="bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8]">Data Engineering Role / Internship</option>
                  <option value="Project Collaboration" className="bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8]">Open Source / Project Collaboration</option>
                  <option value="Cloud Architecture" className="bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8]">Cloud Architecture Brainstorming</option>
                  <option value="Coffee Chat" className="bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8]">Virtual Coffee Chat ☕</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b] dark:text-[#F5F1E8]">
                  Message / Project Inquiry *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hey Dhanush, I loved your pipeline architecture and would love to connect regarding an opportunity..."
                  className="w-full bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] placeholder-[#7e7662] dark:placeholder-[#8e8a82] border-[2.5px] border-[#1c1b1b] dark:border-[#353842] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] dark:focus:bg-[#15171c] focus:ring-2 focus:ring-[#ffd84d] dark:focus:ring-[#55DFFF] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] dark:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] rounded-none"
                />
              </div>

              {/* Action row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="font-code text-xs uppercase font-black bg-[#ffd84d] dark:bg-[#FFD43B] text-[#1c1b1b] dark:text-[#101114] px-6 py-3 border-[2.5px] border-[#1c1b1b] dark:border-[#353842] shadow-[4px_4px_0px_#1c1b1b] dark:shadow-[4px_4px_0px_#000000] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[5.5px_5.5px_0px_#1c1b1b] dark:hover:shadow-[5.5px_5.5px_0px_#000000] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-code text-xs text-[#1c1b1b] dark:text-[#d0cbbf]">
                    <Clock className="w-3.5 h-3.5 text-[#006783] dark:text-[#55DFFF]" />
                    <span>Response time: &lt; 24h</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white dark:bg-[#191B20] text-[#1c1b1b] dark:text-[#F5F1E8] border border-[#1c1b1b] dark:border-[#353842] shadow-[1.5px_1.5px_0px_#1c1b1b] dark:shadow-[1.5px_1.5px_0px_#000000] hover:bg-[#bce9ff] dark:hover:bg-[#353842] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#006d32] dark:text-[#4ade80]" /> : <Copy className="w-3 h-3 text-[#1c1b1b] dark:text-[#F5F1E8]" />}
                    <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
