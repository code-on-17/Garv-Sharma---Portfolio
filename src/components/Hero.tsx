import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Terminal, Layers, Cloud } from 'lucide-react';
import { AvatarDisplay } from './AvatarDisplay';
import { MagnifiedDescription } from './MagnifiedDescription';

export const Hero: React.FC = () => {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const garvLetters = 'Garv'.split('');
  const sharmaLetters = 'Sharma'.split('');

  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, #2563eb 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[110px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Subtle Grid Lines */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/25 text-xs text-slate-300 backdrop-blur-md mb-5 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-cyan-300">BTech CSE 3rd Year</span>
          <span className="text-slate-500" aria-hidden="true">·</span>
          <span>IES IPS Academy, Indore</span>
        </motion.div>

        {/* DP (Display Picture) Section with Organic Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <AvatarDisplay altText="Garv Sharma" />
        </motion.div>

        {/* Name with Responsive Non-wrapping Words and Interactive Hover/Touch Reactions */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 text-center select-none tracking-[0.03em] sm:tracking-[0.04em]">
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-1">
            {/* Word: Garv (unbroken unit) */}
            <span className="inline-block whitespace-nowrap">
              {garvLetters.map((char, index) => {
                const isHovered = activeLetter === index;
                return (
                  <motion.span
                    key={`garv-${index}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + index * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -6,
                      rotate: index % 2 === 0 ? -2 : 2,
                      transition: { duration: 0.15, ease: 'easeOut' },
                    }}
                    onTouchStart={() => setActiveLetter(index)}
                    onTouchEnd={() => setActiveLetter(null)}
                    className={`inline-block mx-[0.035em] sm:mx-[0.045em] cursor-pointer transition-colors duration-150 ${
                      isHovered
                        ? 'text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,0.7)]'
                        : 'hover:text-cyan-300 hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.7)]'
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>

            {/* Word: Sharma (unbroken unit) */}
            <span className="inline-block whitespace-nowrap">
              {sharmaLetters.map((char, index) => {
                const globalIndex = 4 + index;
                const isHovered = activeLetter === globalIndex;
                return (
                  <motion.span
                    key={`sharma-${index}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.28 + index * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -6,
                      rotate: index % 2 === 0 ? 2 : -2,
                      transition: { duration: 0.15, ease: 'easeOut' },
                    }}
                    onTouchStart={() => setActiveLetter(globalIndex)}
                    onTouchEnd={() => setActiveLetter(null)}
                    className={`inline-block mx-[0.035em] sm:mx-[0.045em] cursor-pointer transition-colors duration-150 ${
                      isHovered
                        ? 'text-violet-300 drop-shadow-[0_0_16px_rgba(124,58,237,0.7)]'
                        : 'hover:text-violet-300 hover:drop-shadow-[0_0_16px_rgba(124,58,237,0.7)]'
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          </div>
        </h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-5"
        >
          <span className="gradient-text">CSE Student & MERN Developer</span>
        </motion.div>

        {/* Tagline / Description with Interactive Proximity Lens Zoom Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-8 px-2"
        >
          <MagnifiedDescription
            text="BTech CSE scholar and MERN developer bridging high-performance web systems, polyglot software algorithms in C/C++/Java/Python, and cloud-aware AWS architectures."
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Primary CTA: View Projects (Blue with a subtle blue-purple shade at left, tilted rightwards) */}
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white border border-blue-400/30 rounded-xl shadow-lg shadow-blue-950/60 hover:shadow-blue-900/40 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
            style={{
              background: 'linear-gradient(102deg, #4338ca 0%, #3744c8 20%, #2563eb 62%, #1d4ed8 100%)',
            }}
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-200" />
          </button>

          {/* Secondary CTA: Contact Me */}
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 hover:border-amber-400/50 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Micro highlights strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mx-auto pt-6 border-t border-white/[0.08]"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">MERN Full-Stack</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">C / C++ / Java / Python</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <Cloud className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">AWS Cloud Operations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

