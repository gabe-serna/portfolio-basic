import SocialsCard from "@/components/SocialsCard";
import TechCard from "@/components/TechCard";
import {
  BriefcaseBusiness,
  CodeXml,
  MapPin,
  RectangleVertical,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main>
        <section
          id="hero"
          className="flex min-h-[80vh] items-center justify-center"
        >
          <div className="grid grid-cols-2 items-start">
            <div className="flex h-min flex-col items-center gap-2 sm:items-start">
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
              className="ml-auto -translate-y-6"
            />
            <span className="mt-12 text-primary-foreground">
              <p>
                I'm a <b>dispassionate</b>, uncaring web developer.{" "}
                <em>Just kidding.</em>
              </p>
              <p className="mt-6 w-[50ch]">
                I view web development as an art, and I strive to create
                beautiful websites with{" "}
                <span className="font-semibold">Next.js</span> and{" "}
                <span className="font-semibold">TypeScript</span>.
              </p>
            </span>
            <span className="ml-auto mr-[calc(150px-72.8px)] mt-12 flex w-fit gap-2">
              <SocialsCard name="LinkedIn" />
              <SocialsCard name="GitHub" />
              <SocialsCard name="Resume" />
            </span>
          </div>
        </section>
        <section
          id="technologies"
          className="flex min-h-[60vh] flex-col justify-center"
        >
          <h1 className="uppercase text-muted-foreground">
            Current Technologies
          </h1>
          <div className="mt-4 grid w-full grid-cols-3 gap-4">
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
        <section
          id="Experience"
          className="flex min-h-[60vh] flex-col justify-center"
        >
          <h1 className="uppercase text-muted-foreground">Experience</h1>
          <div className="mt-4 flex w-full text-lg font-semibold [font-family:var(--font-heading)]">
            <span>
              <ol className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-6 w-1 rounded-md bg-red-400" />
                  Work
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-6 w-1 rounded-md bg-popover" />
                  Education
                </li>
              </ol>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
