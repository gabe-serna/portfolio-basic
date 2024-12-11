import SocialsCard from "@/components/SocialsCard";
import TechCard from "@/components/TechCard";
import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main>
        <section id="hero">
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <h1 className="uppercase text-muted-foreground">About Me</h1>
              <h2 className="w-[9ch] text-5xl leading-tight">
                Hey, I'm <span className="text-red-400">Gabe Serna</span>
              </h2>
              <ol className="space-y-2 text-secondary-foreground">
                <li className="flex gap-4">
                  <CodeXml className="stroke-muted-foreground" />
                  Front End Developer
                </li>
                <li className="flex gap-4">
                  <BriefcaseBusiness className="scale-90 stroke-muted-foreground" />
                  1 Year Experience
                </li>
                <li className="flex gap-4">
                  <MapPin className="stroke-muted-foreground" /> Randolph, NJ
                </li>
              </ol>
            </div>
            <Image
              src="/headshot.png"
              alt="Gabe Serna Headshot"
              width={300}
              height={300}
              className="ml-24 -translate-y-6"
            />
          </div>
          <div className="flex items-start justify-between">
            <span className="mt-12 text-primary-foreground">
              <p>I'm a dispassionate, uncaring web developer. Just kidding.</p>
              <p className="mt-6 w-[50ch]">
                I view web development as an art, and I strive to create
                beautiful websites with Next.js and Typescript.
              </p>
            </span>
            <span className="mt-12 flex gap-2">
              <SocialsCard name="LinkedInDark" />
              <SocialsCard name="GitHub" />
              <SocialsCard name="Resume" />
            </span>
          </div>
        </section>
        <section id="technologies" className="mt-72">
          <h1 className="uppercase text-muted-foreground">
            Current Technologies
          </h1>
          <div className="mt-4 grid w-[800px] grid-cols-3 gap-4">
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
      </main>
    </div>
  );
}
