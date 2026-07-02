"use client";

import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { AIHighlights } from "@/components/ai/AIHighlights";
import { AIFeatures } from "@/components/ai/AIFeatures";
import { Certifications } from "@/components/certifications/Certifications";
import { Achievements } from "@/components/achievements/Achievements";
import { Education } from "@/components/education/Education";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Blog } from "@/components/blog/Blog";
import { Contact } from "@/components/contact/Contact";
import { AIChat } from "@/components/ai/AIChat";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AIHighlights />
      <AIFeatures />
      <Certifications />
      <Achievements />
      <Education />
      <Testimonials />
      <Blog />
      <Contact />
      <AIChat />
    </>
  );
}
