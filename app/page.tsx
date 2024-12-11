import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main>
        <section id="hero">
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <h1 className="uppercase text-secondary-foreground">About Me</h1>
              <h2 className="w-[9ch] text-5xl leading-tight">
                Hey, I'm <span className="text-red-400">Gabe Serna</span>
              </h2>
              <ol className="space-y-2 text-primary-foreground">
                <li className="flex gap-4">
                  <CodeXml className="stroke-secondary-foreground" />
                  Front End Developer
                </li>
                <li className="flex gap-4">
                  <BriefcaseBusiness className="scale-90 stroke-secondary-foreground" />
                  1 Year Experience
                </li>
                <li className="flex gap-4">
                  <MapPin className="stroke-secondary-foreground" /> Randolph,
                  NJ
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
          <p className="mt-12">
            I'm a dispassionate, uncaring web developer. Just kidding.
          </p>
          <p className="mt-6 w-[50ch]">
            I view web development as an art, and I strive to create beautiful
            websites with Next.js and Typescript.
          </p>
        </section>
      </main>
    </div>
  );
}
