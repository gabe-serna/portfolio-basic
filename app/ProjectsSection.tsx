import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { Globe } from "lucide-react";
import GitHubIcon from "@/components/GitHubIcon";
import TechBadge from "@/components/TechBadge";
import ProjectLink from "@/components/ProjectLink";

export default function ProjectsSection() {
  const songscribeTech = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
  ];

  return (
    <section
      id="Projects"
      className="flex min-h-[80vh] flex-col justify-center"
    >
      <h1 className="w-fit uppercase text-muted-foreground">
        Personal Projects
      </h1>
      <div className="grid-col-1 mt-4 grid w-min gap-8 md:grid-cols-2 md:gap-4">
        <Dialog>
          <DialogTrigger className="group focus-visible:outline-0">
            <ProjectCard
              name="Songscribe"
              description="The fastest way to turn any song into sheet music."
              tech={songscribeTech}
            />
          </DialogTrigger>
          <DialogContent className="flex flex-col sm:flex-row">
            <DialogHeader className="text-left">
              <DialogTitle>Songscribe</DialogTitle>
              <span className="flex gap-2">
                <ProjectLink name="Website" link="https://songscribe.xyz" />
                <ProjectLink
                  name="GitHub"
                  link="https://github.com/gabe-serna/songscribe"
                />
              </span>
              <DialogDescription className="mr-4 sm:w-[40ch]">
                A web app for musicians to jump start the process of
                transcribing music.
                <br /> <br />
                Songscribe is a web app that uses machine learning algorithms to
                instantly generate sheet music for any song. Refine the MIDI
                transcription with several adjustable parameters, and export the
                final score for further adjustment.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col">
              <Image
                src="/projects/SongscribeHero.png"
                alt={`Songscribe Hero Image`}
                width={500}
                height={200}
                className="h-48 rounded-lg object-cover object-[50%_40%]"
              />
              <h2 className="mt-8">Frontend:</h2>
              <span className="mt-1 flex flex-wrap gap-2">
                <TechBadge name="TypeScript" />
                <TechBadge name="React" />
                <TechBadge name="Next.js" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="Figma" />
              </span>
              <h2 className="mt-4">Backend:</h2>
              <span className="mt-1 flex gap-2">
                <TechBadge name="Python" />
                <TechBadge name="Docker" />
              </span>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="group focus-visible:outline-0">
            <ProjectCard
              name="Where to Live"
              description="Find the perfect place in world to live based on your preferences."
              tech={[
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Three.js",
              ]}
            />
          </DialogTrigger>
          <DialogContent className="flex flex-col sm:flex-row">
            <DialogHeader className="text-left">
              <DialogTitle>Where to Live</DialogTitle>
              <span className="flex gap-2">
                <ProjectLink
                  name="Website"
                  link="https://whereto.live"
                  disabled
                />
                <ProjectLink
                  name="GitHub"
                  link="https://github.com/gabe-serna/where-to-live"
                />
              </span>
              <DialogDescription className="mr-4 sm:w-[40ch]">
                Find the perfect place in world to live based on your
                preferences
                <i className="text-secondary-foreground/60"> (coming soon)</i>.
                <br /> <br />
                Where to Live is a web app currently under development that will
                visualize the best places to live in the world based on your own
                preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col">
              <Image
                src="/projects/WheretoLiveHero.png"
                alt={`Where to Live Hero Image`}
                width={500}
                height={200}
                className="h-48 rounded-lg object-cover object-[50%_40%]"
              />
              <h2 className="mt-8">Frontend:</h2>
              <span className="mt-1 flex flex-wrap gap-2">
                <TechBadge name="TypeScript" />
                <TechBadge name="React" />
                <TechBadge name="Next.js" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="Three.js" />
              </span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
