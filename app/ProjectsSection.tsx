import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-[80vh] flex-col justify-center"
    >
      <h1 className="uppercase text-muted-foreground">Personal Projects</h1>
      <div className="mt-4 grid w-full grid-cols-2 gap-4">
        <ProjectCard
          name="Songscribe"
          description="The fastest way to turn any song into sheet music."
          tech={["TypeScript", "React", "Next.js", "Tailwind CSS", "Python"]}
        />
        <ProjectCard
          name="Where to Live"
          description="Find the perfect place in world to live based on your preferences."
          tech={["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js"]}
        />
      </div>
    </section>
  );
}
