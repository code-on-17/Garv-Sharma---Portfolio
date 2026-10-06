import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { GraduationCap, Code2, Cpu, MapPin, Compass, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>01</span>
          <span aria-hidden="true">·</span>
          <span>Background & Profile</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Core Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col"
        >
          <TiltCard className="p-6 sm:p-8 h-full flex flex-col justify-between border-white/[0.08]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">BTech CSE 3rd-Year Scholar</h3>
                  <p className="text-xs text-slate-400">IES IPS Academy, Indore, MP</p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-medium">BTech Computer Science & Engineering 3rd-year student</span> at{' '}
                  <span className="text-cyan-300 font-medium">IES IPS Academy, Indore, MP</span>. My primary focus is architecting robust, scalable{' '}
                  <span className="text-violet-300 font-medium">MERN stack</span> web applications with modern user interfaces and reliable server logic.
                </p>
                <p>
                  Prior to my BTech degree, I completed a rigorous <span className="text-white font-medium">Diploma in CSE</span> from{' '}
                  <span className="text-amber-300 font-medium">Government Polytechnic College Mandsaur, MP</span>. This foundational journey established my strong grounding in operating systems, discrete mathematics, and computer engineering essentials.
                </p>
                <p>
                  Beyond web development, I have actively developed solutions across <span className="text-white font-medium">C, C++, Java, and Python</span>, pairing classical data-structure algorithms with contemporary cloud practices learned through AWS training.
                </p>
              </div>
            </div>

            {/* Quick Location & Status Metadata */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Open for Technical Internships</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Column: 3 Structured Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4 justify-between"
        >
          {/* Card 1: Full-Stack MERN */}
          <TiltCard glowColor="rgba(34, 211, 238, 0.18)" className="p-5 border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">MERN Stack Engineering</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Building responsive React frontends paired with Node.js, Express RESTful backends, and MongoDB databases for synchronous, modern web experiences.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: Polyglot Foundations */}
          <TiltCard glowColor="rgba(124, 58, 237, 0.18)" className="p-5 border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Polyglot Problem Solving</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deep hands-on experience in C, C++, Java, and Python — applying data structures like binary trees, graph algorithms, and object-oriented architectures.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: Cloud & Security Awareness */}
          <TiltCard glowColor="rgba(245, 158, 11, 0.18)" className="p-5 border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Cloud & Operational Rigor</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  AWS Academy Cloud Operations graduate with 40 hours of cloud infrastructure training and IIT Jodhpur TISC cybersecurity fundamentals certification.
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
