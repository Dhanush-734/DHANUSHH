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
      <div className="inline-flex items-center gap-2 bg-white px-3 py-1 border-2 border-[#1c1b1b] shadow-[3px_3px_0px_#1c1b1b] -rotate-1">
        <MessageSquare className="w-4 h-4 text-[#725c00]" />
        <span className="font-headline text-lg font-black">
          Let's Create Something Awesome! 📬
        </span>
      </div>

      {/* Retro Postcard Container */}
      <div className="bg-white border-[3px] border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-4 sm:p-7 relative overflow-hidden bg-halftone">
        <div className="bg-[#fcf9f8] p-4 sm:p-6 border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b]">
          {/* Postcard Stamp Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-dashed border-[#1c1b1b] pb-4 mb-5">
            <div>
              <span className="font-code text-[11px] uppercase font-black text-[#1c1b1b] bg-[#ffd84d] px-2 py-0.5 border border-[#1c1b1b]">
                PAR AVION / AIR MAIL ✈️
              </span>
              <h3 className="font-headline text-2xl font-black mt-1 text-[#1c1b1b]">
                DISPATCH A NOTE TO DHANUSH
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#4d4634]">
                Looking for a full-time data engineer, pipeline collaborator, or tech brainstorm?
              </p>
            </div>

            {/* Vintage Stamp Box */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              onClick={handleCopyEmail}
              className="w-20 h-24 border-2 border-dashed border-[#1c1b1b] bg-[#ffd84d] p-1.5 flex flex-col items-center justify-center text-center shadow-[3px_3px_0px_#1c1b1b] rotate-2 cursor-pointer shrink-0"
              title="Click to copy email address"
            >
              <Send className="w-5 h-5 text-[#1c1b1b]" />
              <span className="font-code text-[10px] uppercase font-black leading-tight mt-1 text-[#1c1b1b]">
                DHANUSH<br />DEV
              </span>
              <span className="text-[8px] font-code bg-white px-1 border border-[#1c1b1b] mt-1">
                AIR_POST
              </span>
            </motion.div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 bg-[#9be5c3] border-2 border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] text-center space-y-3"
            >
              <div className="w-12 h-12 bg-white border-2 border-[#1c1b1b] rounded-full mx-auto flex items-center justify-center shadow-[2px_2px_0px_#1c1b1b]">
                <MailCheck className="w-6 h-6 text-[#006d32]" />
              </div>
              <h4 className="font-headline text-2xl font-black text-[#1c1b1b]">
                DISPATCH TRANSMITTED! 🚀
              </h4>
              <p className="font-body text-sm text-[#1c1b1b] max-w-md mx-auto">
                Thank you, <strong>{formState.name || 'Friend'}</strong>! Your note has been queued into Dhanush's inbox. Expect a response in under 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-code text-xs font-black uppercase px-4 py-2 bg-white border-2 border-[#1c1b1b] shadow-[2px_2px_0px_#1c1b1b] hover:bg-[#ffd84d] cursor-pointer"
              >
                Send Another Note ✍️
              </button>
            </motion.div>
          ) : (
            /* Postcard Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Alan Turing"
                    className="w-full bg-white border-[2.5px] border-[#1c1b1b] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] focus:ring-2 focus:ring-[#ffd84d] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] rounded-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alan@computing.org"
                    className="w-full bg-white border-[2.5px] border-[#1c1b1b] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] focus:ring-2 focus:ring-[#ffd84d] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] rounded-none"
                  />
                </div>
              </div>

              {/* Inquiry Topic Dropdown */}
              <div className="space-y-1">
                <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b]">
                  Topic / Opportunity Type
                </label>
                <select
                  value={formState.topic}
                  onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                  className="w-full bg-white border-[2.5px] border-[#1c1b1b] p-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#ffd84d] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] rounded-none"
                >
                  <option value="Data Engineering Role">Data Engineering Role / Internship</option>
                  <option value="Project Collaboration">Open Source / Project Collaboration</option>
                  <option value="Cloud Architecture">Cloud Architecture Brainstorming</option>
                  <option value="Coffee Chat">Virtual Coffee Chat ☕</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="font-code text-xs uppercase font-extrabold text-[#1c1b1b]">
                  Message / Project Inquiry *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hey Dhanush, I loved your pipeline architecture and would love to connect regarding an opportunity..."
                  className="w-full bg-white border-[2.5px] border-[#1c1b1b] p-2.5 font-body text-sm focus:outline-none focus:bg-[#fffdf6] focus:ring-2 focus:ring-[#ffd84d] shadow-[inset_2px_2px_0px_rgba(28,27,27,0.1)] rounded-none"
                />
              </div>

              {/* Action row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="font-code text-xs uppercase font-black bg-[#ffd84d] text-[#1c1b1b] px-6 py-3 border-[2.5px] border-[#1c1b1b] shadow-[4px_4px_0px_#1c1b1b] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[5.5px_5.5px_0px_#1c1b1b] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-code text-xs text-[#1c1b1b]">
                    <Clock className="w-3.5 h-3.5 text-[#006783]" />
                    <span>Response time: &lt; 24h</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-code text-[11px] uppercase font-bold px-2.5 py-1 bg-white border border-[#1c1b1b] shadow-[1.5px_1.5px_0px_#1c1b1b] hover:bg-[#bce9ff] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#006d32]" /> : <Copy className="w-3 h-3 text-[#1c1b1b]" />}
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
