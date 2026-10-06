/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Fixed/Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero />

        {/* 2. ABOUT */}
        <About />

        {/* 3. EDUCATION */}
        <Education />

        {/* 4. SKILLS */}
        <Skills />

        {/* 5. PROJECTS */}
        <Projects />

        {/* 6. CERTIFICATIONS */}
        <Certifications />

        {/* 7. EXPERIENCE */}
        <Experience />

        {/* 8. CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
