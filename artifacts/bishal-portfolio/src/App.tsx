import { useEffect } from 'react';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { Header } from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Experience } from '@/components/experience/Experience';
import { Projects } from '@/components/projects/Projects';
import { AIHighlights } from '@/components/ai/AIHighlights';
import { AIFeatures } from '@/components/ai/AIFeatures';
import { JokeGenerator } from '@/components/jokes/JokeGenerator';
import { Certifications } from '@/components/certifications/Certifications';
import { Achievements } from '@/components/achievements/Achievements';
import { Education } from '@/components/education/Education';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { Blog } from '@/components/blog/Blog';
import { Contact } from '@/components/contact/Contact';
import { AIChat } from '@/components/ai/AIChat';
import { BackToTop } from '@/components/common/BackToTop';
import { Footer } from '@/components/footer/Footer';

export default function App() {
  useEffect(() => {
    // Force dark mode at the document level
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIHighlights />
        <AIFeatures />
        <JokeGenerator />
        <Certifications />
        <Achievements />
        <Education />
        <Testimonials />
        <Blog />
        <Contact />
        <AIChat />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
