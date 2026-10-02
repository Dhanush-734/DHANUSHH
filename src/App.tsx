import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreCompetencies } from './components/CoreCompetencies';
import { About } from './components/About';
import { SkillsMarquee } from './components/SkillsMarquee';
import { Projects } from './components/Projects';
import { PipelineSimulator } from './components/PipelineSimulator';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Postcard } from './components/Postcard';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackgroundDragonTattoo } from './components/BackgroundDragonTattoo';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] dark:bg-[#101114] dark:text-[#F5F1E8] flex flex-col font-body selection:bg-[#ffd84d] selection:text-[#1c1b1b] dark:selection:bg-[#FFD43B] dark:selection:text-[#101114] relative">
      {/* Background Dragon Tattoo Watermark (Black for Light Mode, White for Dark Mode) */}
      <BackgroundDragonTattoo />

      {/* Top Application Bar */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Content Sections */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 space-y-12 relative z-10">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setResumeOpen(true)} />

        {/* Core Competencies Strip */}
        <CoreCompetencies />

        {/* About Me Scrapbook Section */}
        <About />

        {/* Continuously Vertically Moving Skills Columns */}
        <SkillsMarquee />

        {/* Things I've Built / Projects */}
        <Projects />

        {/* Interactive Data Lab Pipeline Simulator */}
        <PipelineSimulator />

        {/* The Journey So Far / Timeline */}
        <Journey />

        {/* Achievements & NPTEL Certifications */}
        <Certifications />

        {/* Contact Section / Postcard */}
        <Postcard />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
