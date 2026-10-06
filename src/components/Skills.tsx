import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Terminal, Globe, Layers, Database, PenTool, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  accent: string;
  glow: string;
  skills: { name: string; highlight?: boolean }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: <Terminal className="w-4 h-4 text-violet-400" />,
    accent: 'border-violet-500/30 text-violet-300',
    glow: 'rgba(124, 58, 237, 0.2)',
    skills: [
      { name: 'C', highlight: true },
      { name: 'C++', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Perl' },
      { name: 'SQL', highlight: true },
      { name: 'PHP' },
    ],
  },
  {
    id: 'web',
    name: 'Web Technologies',
    icon: <Globe className="w-4 h-4 text-cyan-400" />,
    accent: 'border-cyan-500/30 text-cyan-300',
    glow: 'rgba(34, 211, 238, 0.2)',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'JavaScript (Advanced)', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'AJAX' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    icon: <Layers className="w-4 h-4 text-indigo-400" />,
    accent: 'border-indigo-500/30 text-indigo-300',
    glow: 'rgba(99, 102, 241, 0.2)',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'Electron.js', highlight: true },
      { name: 'Django' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    accent: 'border-emerald-500/30 text-emerald-300',
    glow: 'rgba(16, 185, 129, 0.2)',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'PostgreSQL', highlight: true },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Design',
    icon: <PenTool className="w-4 h-4 text-amber-400" />,
    accent: 'border-amber-500/30 text-amber-300',
    glow: 'rgba(245, 158, 11, 0.2)',
    skills: [
      { name: 'Figma', highlight: true },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  const totalSkillCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
        </div>

        {/* Total Count Metric */}
        <div className="text-xs font-mono text-slate-400 self-center sm:self-end">
          <span className="text-cyan-300 font-semibold">{totalSkillCount}</span> competencies across{' '}
          <span className="text-white font-semibold">5</span> domains
        </div>
      </motion.div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 bg-white/[0.03] border border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
          }`}
        >
          All Domains
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 bg-white/[0.03] border border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <TiltCard glowColor={category.glow} className="p-6 h-full flex flex-col justify-between border-white/[0.08]">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {category.skills.length} items
                  </span>
                </div>

                {/* Monospace Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all cursor-default select-none flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-slate-900/90 text-slate-100 border-cyan-500/35 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-950/40 shadow-sm'
                          : 'bg-slate-900/50 text-slate-300 border-slate-700/50 hover:border-slate-500 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative hint */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>domain: {category.id}</span>
                <span className="text-emerald-400/80 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> verified
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
