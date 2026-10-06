import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  statusType: 'current' | 'completed';
  description: string;
  highlights: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BTech in Computer Science & Engineering',
    institution: 'IES IPS Academy',
    location: 'Indore, Madhya Pradesh',
    period: 'Current · 3rd Year',
    status: 'In Progress',
    statusType: 'current',
    description:
      'Pursuing Bachelor of Technology with specialized focus on modern web engineering, distributed databases, cloud computing paradigms, and software design.',
    highlights: [
      'Advanced Full-Stack Development (MERN)',
      'Database Management Systems & SQL/NoSQL',
      'Operating Systems & Computer Networks',
    ],
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Government Polytechnic College',
    location: 'Mandsaur, Madhya Pradesh',
    period: '2022 – 2025',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Three-year technical diploma laying comprehensive foundations in programming logic, digital electronics, data structures, and computer organization.',
    highlights: [
      'Core Programming: C, C++, and Java',
      'Data Structures & Algorithm Implementations',
      'System Architecture & Assembly Basics',
    ],
  },
  {
    degree: 'Secondary School Education (CBSE 10th)',
    institution: 'Central Board of Secondary Education',
    location: 'Madhya Pradesh',
    period: 'Completed 2022',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Foundational secondary education with a rigorous curriculum in science, analytical mathematics, and technical fundamentals.',
    highlights: [
      'Strong Academic Performance in Mathematics & Science',
      'Early Interest in Computational Problem Solving',
    ],
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>02</span>
          <span aria-hidden="true">·</span>
          <span>Academic Milestones</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Education <span className="gradient-text">Journey</span>
        </h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Continuous Timeline Vertical Line */}
        <div
          className="absolute left-2.5 sm:left-4 top-6 bottom-6 w-0.5 -translate-x-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #7c3aed 0%, #22d3ee 50%, rgba(34, 211, 238, 0.2) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-12">
          {EDUCATION_DATA.map((item, index) => {
            const isCurrent = item.statusType === 'current';
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline Node Indicator - Perfectly centered on the vertical line */}
                <div
                  className={`absolute left-2.5 sm:left-4 top-7 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'bg-cyan-400 border-cyan-200 ring-4 ring-cyan-500/25 shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-900 border-violet-400 ring-2 ring-violet-500/20'
                  }`}
                  aria-hidden="true"
                />

                {/* Milestone Card */}
                <TiltCard
                  glowColor={isCurrent ? 'rgba(34, 211, 238, 0.2)' : 'rgba(124, 58, 237, 0.15)'}
                  className="p-5 sm:p-7 border-white/[0.08]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`font-mono text-xs px-2.5 py-0.5 rounded-md border ${
                            isCurrent
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                              : 'bg-white/[0.04] text-slate-300 border-white/[0.08]'
                          }`}
                        >
                          {item.period}
                        </span>
                        <span className="text-slate-500 text-xs" aria-hidden="true">·</span>
                        <span className="font-mono text-xs text-amber-400">{item.status}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="text-slate-200 font-medium">{item.institution}</span>
                        <span className="text-slate-600" aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="self-start">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                          isCurrent
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                            : 'bg-violet-500/10 border-violet-500/30 text-violet-400'
                        }`}
                      >
                        {isCurrent ? <GraduationCap className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
