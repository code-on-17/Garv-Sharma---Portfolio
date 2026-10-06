import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactLink {
  name: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  value: string;
  glowColor: string;
  accent: string;
  isEmail?: boolean;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    name: 'Email',
    label: 'Direct Correspondence',
    href: 'mailto:garvsharma1706@gmail.com',
    icon: <Mail className="w-6 h-6 text-amber-400" />,
    value: 'garvsharma1706@gmail.com',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    accent: 'hover:border-amber-500/40 text-amber-300',
    isEmail: true,
  },
  {
    name: 'LinkedIn',
    label: 'Professional Network',
    href: 'https://www.linkedin.com/in/garv-sharma1706',
    icon: <Linkedin className="w-6 h-6 text-cyan-400" />,
    value: 'in/garv-sharma1706',
    glowColor: 'rgba(34, 211, 238, 0.22)',
    accent: 'hover:border-cyan-500/40 text-cyan-300',
  },
  {
    name: 'GitHub',
    label: 'Code Repositories',
    href: 'https://github.com/garv-sharma1706',
    icon: <Github className="w-6 h-6 text-violet-400" />,
    value: 'github.com/garv-sharma1706',
    glowColor: 'rgba(124, 58, 237, 0.22)',
    accent: 'hover:border-violet-500/40 text-violet-300',
  },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('garvsharma1706@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, #22d3ee 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>07</span>
          <span aria-hidden="true">·</span>
          <span>Get In Touch</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Connect With <span className="gradient-text">Garv</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Open for technical internships, engineering collaborations, and discussions on full-stack architecture. Reach out directly through the verified channels below.
        </p>
      </motion.div>

      {/* Icon Links Grid (No form, as strictly required) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {CONTACT_LINKS.map((contact, index) => (
          <motion.div
            key={contact.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={contact.href}
              target={contact.isEmail ? undefined : '_blank'}
              rel={contact.isEmail ? undefined : 'noopener noreferrer'}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
            >
              <TiltCard
                glowColor={contact.glowColor}
                className="p-6 h-full flex flex-col justify-between border-white/[0.08] transition-all group-hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {contact.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    {contact.label}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {contact.name}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-slate-300 truncate">
                    {contact.value}
                  </span>

                  {contact.isEmail && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </TiltCard>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
