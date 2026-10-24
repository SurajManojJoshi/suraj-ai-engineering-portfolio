import { useState } from "react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Philosophy from "./components/Philosophy";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectDetail from "./components/ProjectDetail";
import ResumeDialog from "./components/ResumeDialog";
import type { Project } from "./data/portfolio";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-paper"
      >
        Skip to content
      </a>

      <Background />
      <Nav onOpenResume={() => setResumeOpen(true)} />

      <main id="main">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Marquee />
        <Philosophy />
        <Showcase onSelect={setSelectedProject} />
        <Skills />
        <Services />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeDialog open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
