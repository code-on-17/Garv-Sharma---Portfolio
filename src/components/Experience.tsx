import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Briefcase, Building, Globe, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  modality: 'in-office' | 'online';
  description: string;
  contributions: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'workholics',
    role: 'MERN Stack Developer Intern',
    company: 'Workholics InfoCorp',
    location: 'Indore, Madhya Pradesh',
    duration: '~2 Months',
    modality: 'in-office',
    description:
      'Worked as an in-office MERN stack engineering intern, collaborating directly with senior developers to build and enhance full-stack web applications and micro-features.',
    contributions: [
      'Developed modular, responsive React components styled with Tailwind CSS',
      'Engineered Node.js/Express server endpoints and integrated MongoDB collections',
      'Debugged asynchronous API requests and streamlined state management workflows',
      'Participated in daily in-office engineering standups, code reviews, and testing',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    id: 'elewayte',
    role: 'Web Development Trainee / Intern',
    company: 'Elewayte',
    location: 'Remote',
    duration: 'Structured Program',
    modality: 'online',
    description:
      'Participated in intensive online web development practical engineering modules, implementing web interfaces, DOM interactions, and backend connectivity.',
    contributions: [
      'Built multi-page responsive web applications adhering to web accessibility standards',
      'Implemented dynamic client-side interactivity using modern ES6+ JavaScript',
      'Connected client interfaces with third-party web services and data endpoints',
    ],
    techStack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'AJAX'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>06</span>
          <span aria-hidden="true">·</span>
          <span>Industry Engagement</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Practical <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {EXPERIENCES.map((exp, index) => {
          const isInOffice = exp.modality === 'in-office';
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <TiltCard
                glowColor={isInOffice ? 'rgba(34, 211, 238, 0.18)' : 'rgba(124, 58, 237, 0.18)'}
                className="p-6 sm:p-8 h-full flex flex-col justify-between border-white/[0.08]"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isInOffice
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                            : 'bg-violet-500/10 border-violet-500/30 text-violet-400'
                        }`}
                      >
                        {isInOffice ? <Building className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-md border ${
                        isInOffice
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                      }`}
                    >
                      {exp.modality}
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-5 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2 mb-6">
                    {exp.contributions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
