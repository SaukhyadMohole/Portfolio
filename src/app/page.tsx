"use client";

import LoadingScreen from "@/components/effects/LoadingScreen";
import AuroraBackground from "@/components/effects/AuroraBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import GitHubSection from "@/components/sections/GitHubSection";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <ScrollProgress />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Certifications />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
