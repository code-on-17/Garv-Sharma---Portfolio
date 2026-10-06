import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Database, Wallet, Compass, Cpu, Code } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  oneLineDescription: string;
  techStack: string[];
  glowColor: string;
  accentBorder: string;
}

const MAIN_PROJECTS: ProjectItem[] = [
  {
    id: 'sql-dev',
    title: 'SQL Dev',
    category: 'Desktop System Application',
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    oneLineDescription:
      'Desktop app (React + Electron) for managing local database servers (XAMPP/WAMP/PostgreSQL etc.) with authenticated access, a UI-based DB workspace, and an integrated coding area for fast, synchronous DB management.',
    techStack: ['React', 'Electron.js', 'SQL', 'PostgreSQL', 'Node.js'],
    glowColor: 'rgba(34, 211, 238, 0.22)',
    accentBorder: 'group-hover:border-cyan-500/40',
  },
  {
    id: 'wallet-trail',
    title: 'WalletTrail',
    category: 'Full-Stack Financial Platform',
    icon: <Wallet className="w-6 h-6 text-violet-400" />,
    oneLineDescription:
      'Expense and income tracking app built with React, TypeScript, Tailwind CSS, React Router, and MongoDB.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'MongoDB'],
    glowColor: 'rgba(124, 58, 237, 0.22)',
    accentBorder: 'group-hover:border-violet-500/40',
  },
  {
    id: 'career-atlas',
    title: 'Career Atlas',
    category: 'Intelligent Career Analytics',
    icon: <Compass className="w-6 h-6 text-amber-400" />,
    oneLineDescription:
      'Python mobile app that parses resumes into user profiles and recommends jobs, letting users track which required skills they have vs. need to learn.',
    techStack: ['Python', 'Resume Parsing', 'Skill Gap Analysis', 'Recommender System'],
    glowColor: 'rgba(245, 158, 11, 0.22)',
    accentBorder: 'group-hover:border-amber-500/40',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>04</span>
          <span aria-hidden="true">·</span>
          <span>Featured Implementations</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Engineered <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {/* 3 Main Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
        {MAIN_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <TiltCard
              glowColor={project.glowColor}
              className={`p-7 h-full flex flex-col justify-between border-white/[0.08] transition-colors ${project.accentBorder}`}
            >
              <div>
                {/* Card Header: Icon + Category */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-inner">
                    {project.icon}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h3>

                {/* One-Line Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {project.oneLineDescription}
                </p>
              </div>

              {/* Tech Stack Tags (Monospace) */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* "Also Built" Strip Row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-xl p-4 sm:p-5 border-white/[0.08] bg-white/[0.02]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 text-violet-400 shrink-0">
            <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-300">
              Also Built:
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed">
            Multiple C data-structure & algorithm projects (linked lists, trees, Dijkstra&apos;s, Kruskal&apos;s, Prim&apos;s, equation evaluator, etc.) plus various web dev practice projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
