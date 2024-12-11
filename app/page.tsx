import ExperienceSection from "./ExperienceSection";
import TechSection from "./TechSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-center bg-background px-20">
        <span className="flex w-full max-w-[1022.4px] items-center justify-between text-muted-foreground [font-family:var(--font-heading)]">
          <a href="#Hero" className="text-secondary-foreground">
            GABE SERNA
          </a>
          <div className="flex gap-8 *:uppercase">
            <a href="#Technologies">Technologies</a>
            <a href="#Experience">Experience</a>
            <a href="#Projects">Projects</a>
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
