import TechCard from "@/components/TechCard";

export default function TechSection() {
  return (
    <section
      id="Technologies"
      className="flex min-h-[80vh] flex-col justify-center"
    >
      <h1 className="w-max uppercase text-muted-foreground">
        Current Technologies
      </h1>
      <div className="mt-4 grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TechCard
          name="TypeScript"
          description="Javascript but better"
          color="bg-blue-400/15"
        />
        <TechCard
          name="React"
          description="Javascript Library"
          color="bg-sky-400/15"
        />
        <TechCard
          name="Next.js"
          description="React Framework"
          color="bg-gray-400/20"
        />
        <TechCard
          name="HTML"
          description="Markup Language"
          color="bg-orange-400/15"
        />
        <TechCard
          name="Tailwind CSS"
          description="CSS Framework"
          color="bg-cyan-400/15"
        />
        <TechCard
          name="Figma"
          description="Design Tool"
          color="bg-green-400/15"
        />
      </div>
    </section>
  );
}
