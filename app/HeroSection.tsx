import Image from "next/image";
import SocialsCard from "@/components/SocialsCard";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { CodeXml } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="Hero"
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
            I'm a <b>dispassionate</b>, uncaring web developer.
            <em> Just kidding.</em>
          </p>
          <p className="mt-6 w-[50ch]">
            With an eye for detail, I can help bridge the gap between
            <strong> design</strong> and
            <strong> development</strong> on your team.
          </p>
        </span>
        <span className="ml-auto mr-[calc(150px-72.8px)] mt-12 flex w-fit gap-2">
          <SocialsCard name="LinkedIn" />
          <SocialsCard name="GitHub" />
          <SocialsCard name="Resume" />
        </span>
      </div>
    </section>
  );
}
