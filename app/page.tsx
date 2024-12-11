"use client";

import ExperienceSection from "./ExperienceSection";
import TechSection from "./TechSection";
import { useEffect } from "react";
import { useRef } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.5, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
    });

    const animate = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current?.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    lenis.current?.scrollTo(element!);
  };
  return (
    <div
      id="Top"
      className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20"
    >
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-center bg-background px-20">
        <span className="flex w-full max-w-[1022.4px] items-center justify-between text-muted-foreground [font-family:var(--font-heading)] *:uppercase">
          <button
            onClick={() => scrollToSection("Top")}
            className="text-secondary-foreground"
          >
            Gabe Serna
          </button>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection("Technologies")}>
              Technologies
            </button>
            <button onClick={() => scrollToSection("Experience")}>
              Experience
            </button>
            <button onClick={() => scrollToSection("Projects")}>
              Projects
            </button>
          </div>
        </span>
      </nav>
      <main>
        <HeroSection />
        <TechSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
