import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { Cloud, Globe, Shield, Award, CheckCircle } from 'lucide-react';

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeType: string;
  duration?: string;
  icon: React.ReactNode;
  glowColor: string;
  description: string;
  skillsLearned: string[];
}

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'aws-cloud-ops',
    title: 'AWS Academy Graduate — Cloud Operations',
    issuer: 'Amazon Web Services (AWS)',
    badgeType: 'Official Training Badge',
    duration: '40 Hours Comprehensive',
    icon: <Cloud className="w-5 h-5 text-amber-400" />,
    glowColor: 'rgba(245, 158, 11, 0.22)',
    description:
      'In-depth cloud operations training covering resource provisioning, systems monitoring, automated deployments, access management, and infrastructure resilience on AWS.',
    skillsLearned: ['Cloud Architecture', 'AWS IAM & Security', 'EC2 & S3 Operations', 'Monitoring & Billing'],
  },
  {
    id: 'elewayte-web-dev',
    title: 'Web Development Certification',
    issuer: 'Elewayte',
    badgeType: 'Technical Coursework',
    duration: 'Industry Mentored',
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    glowColor: 'rgba(34, 211, 238, 0.22)',
    description:
      'Rigorous project-driven curriculum focused on responsive frontend development, REST APIs, asynchronous programming, modern component structures, and state management.',
    skillsLearned: ['Modern JavaScript', 'Frontend Engineering', 'REST APIs', 'UI Component Design'],
  },
  {
    id: 'iit-jodhpur-cybersec',
    title: 'Cybersecurity Certification',
    issuer: 'IIT Jodhpur TISC',
    badgeType: 'Institutional Credential',
    duration: 'Technology Innovation & Start-up Center',
    icon: <Shield className="w-5 h-5 text-violet-400" />,
    glowColor: 'rgba(124, 58, 237, 0.22)',
    description:
      'Hands-on technical certification covering computer network defense, vulnerability identification, secure coding practices, cryptography fundamentals, and threat modeling.',
    skillsLearned: ['Network Defense', 'Secure Coding', 'Vulnerability Assessment', 'Cryptography Basics'],
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          <span>05</span>
          <span aria-hidden="true">·</span>
          <span>Credentials & Badges</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Certified <span className="gradient-text">Competencies</span>
        </h2>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <TiltCard
              glowColor={cert.glowColor}
              className="p-6 sm:p-7 h-full flex flex-col justify-between border-white/[0.08]"
            >
              <div>
                {/* Header: Icon + Badge Type */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer & Duration */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400 mb-4">
                  <span className="text-cyan-300">{cert.issuer}</span>
                  {cert.duration && (
                    <>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="text-amber-400/90">{cert.duration}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
