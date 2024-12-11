import ExperienceSection from "./ExperienceSection";
import TechSection from "./TechSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main>
        <HeroSection />
        <TechSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
