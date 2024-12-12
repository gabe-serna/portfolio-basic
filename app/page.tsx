"use client";

import ExperienceSection from "./ExperienceSection";
import TechSection from "./TechSection";
import { useEffect } from "react";
import { useRef } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import Lenis from "@studio-freight/lenis";
import LinkedInIcon from "@/components/LinkedInIcon";
import GitHubIcon from "@/components/GitHubIcon";
import { Download, Mail } from "lucide-react";

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
      className="relative grid min-h-screen items-center justify-items-center gap-16 p-8 pb-0 max-sm:w-screen sm:p-20 sm:pb-0"
    >
      <nav className="fixed top-0 z-50 flex h-20 w-screen items-center justify-center bg-background px-8 sm:w-full sm:px-20">
        <span className="flex w-full max-w-[1022.4px] items-center justify-between text-muted-foreground [font-family:var(--font-heading)] *:uppercase max-sm:text-xs">
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
      <div className="h-20 w-full" />
      <footer className="absolute bottom-0 flex min-h-20 w-full items-center justify-center bg-card p-8 sm:px-20">
        <span className="flex w-full max-w-[1022.4px] flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Gabe Serna
          </p>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <p>Let's Get in Touch!</p>
            <span className="flex gap-2">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-visible:outline-none"
              >
                <LinkedInIcon className="text-muted-foreground transition-colors [transition-duration:250ms] group-hover:text-secondary-foreground group-focus-visible:text-secondary-foreground" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-visible:outline-none"
              >
                <GitHubIcon className="text-muted-foreground transition-colors [transition-duration:250ms] group-hover:text-secondary-foreground group-focus-visible:text-secondary-foreground" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_EMAIL}
                className="group focus-visible:outline-none"
              >
                <Mail className="size-6 stroke-muted-foreground transition-colors [transition-duration:250ms] group-hover:stroke-secondary-foreground group-focus-visible:stroke-secondary-foreground" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus-visible:outline-none"
              >
                <Download className="size-[1.6rem] stroke-muted-foreground stroke-[2.5] p-0.5 transition-colors [transition-duration:250ms] group-hover:stroke-secondary-foreground group-focus-visible:stroke-secondary-foreground" />
              </a>
            </span>
          </div>
        </span>
      </footer>
    </div>
  );
}
