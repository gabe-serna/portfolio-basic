import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main>
        <section className="flex flex-col items-center gap-2 sm:items-start">
          <h1 className="text-sm uppercase text-secondary-foreground">
            About Me
          </h1>
          <h2 className="text-5xl leading-tight">
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
              <MapPin className="stroke-secondary-foreground" /> Randolph, NJ
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
