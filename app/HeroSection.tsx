import Image from "next/image";
import SocialsCard from "@/components/SocialsCard";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { CodeXml } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="Hero"
      className="flex min-h-screen items-center sm:min-h-[80vh] sm:justify-center"
    >
      <div className="grid grid-cols-1 items-start sm:grid-cols-2">
        <div className="flex h-min w-min flex-col items-start gap-2">
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
          className="size-[200px] translate-y-6 max-sm:row-start-3 max-sm:mt-auto sm:ml-auto md:size-[300px] md:-translate-y-6"
          priority
        />
        <span className="row-start-4 mt-12 w-min text-primary-foreground lg:row-start-2">
          <p>
            I'm a <b>dispassionate</b>, uncaring web developer.
            <em> Just kidding.</em>
          </p>
          <p className="mt-6 min-w-[30ch] sm:w-[40ch] lg:w-[50ch]">
            With an eye for detail, I can help bridge the gap between
            <strong> design</strong> and
            <strong> development</strong> on your team.
          </p>
        </span>
        <span className="col-start-2 mt-12 flex w-fit gap-2 max-lg:col-start-1 max-lg:row-start-2 lg:ml-auto lg:mr-[calc(150px-72.8px)]">
          <SocialsCard name="LinkedIn" />
          <SocialsCard name="GitHub" />
          <SocialsCard name="Resume" />
        </span>
      </div>
    </section>
  );
}
