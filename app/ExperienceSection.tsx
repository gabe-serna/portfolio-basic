import CCMIcon from "@/components/CCMIcon";
import PureMittiIcon from "@/components/PureMittiIcon";
import BlurFade from "@/components/ui/blur-fade";

export default function ExperienceSection() {
  return (
    <section
      id="Experience"
      className="max-w-screen flex min-h-[120vh] w-full flex-col justify-center sm:min-h-screen"
    >
      <BlurFade delay={0.2} inView>
        <h1 className="w-fit uppercase text-muted-foreground">Experience</h1>
      </BlurFade>
      <div
        id="main-experience-content"
        className="mt-4 flex w-full flex-col gap-32 text-lg font-semibold"
      >
        <BlurFade delay={0.2 * 2} inView>
          <div className="flex items-start justify-between max-lg:flex-col max-lg:space-y-4">
            <h2 className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-1 rounded-md bg-red-400" />
              Work
            </h2>
            <div
              id="work"
              className="rounded-lg border-2 border-popover bg-card p-4 sm:p-6 md:w-[36.68rem]"
            >
              <figure className="flex w-full gap-2">
                <PureMittiIcon />
                <div className="grid sm:grid-cols-2">
                  <h2 className="text-sm text-primary-foreground sm:text-base">
                    JavaScript Developer
                  </h2>
                  <p className="text-sm font-bold tracking-[0.0125em] text-muted-foreground sm:col-start-1 sm:text-base">
                    Pure Mitti
                  </p>
                  <div className="text-sm text-secondary-foreground max-sm:mt-2 sm:col-start-2 sm:row-start-1 sm:mb-auto sm:ml-auto sm:text-base">
                    <p>Oct 2023 - Sep 2024</p>
                  </div>
                  <p className="mt-4 text-sm font-normal text-secondary-foreground sm:row-start-3 sm:w-[46ch] md:text-base">
                    Developed custom dashboards and tools to automate e-commerce
                    workflows and deliver data-driven insights.
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.2 * 3} inView inViewMargin="50px">
          <div className="flex items-start justify-between max-lg:flex-col max-lg:space-y-4">
            <h2 className="flex items-center gap-2 text-foreground">
              <div className="h-6 w-1 rounded-md bg-red-400" />
              Education
            </h2>
            <div
              id="education"
              className="w-full rounded-lg border-2 border-popover bg-card p-4 sm:p-6 md:w-[36.68rem]"
            >
              <figure className="flex w-full gap-2">
                <CCMIcon />
                <div className="grid sm:grid-cols-2">
                  <h2 className="text-sm text-primary-foreground sm:text-base">
                    Web Development Certificate
                  </h2>
                  <p className="text-sm font-bold tracking-[0.0125em] text-muted-foreground sm:col-start-1 sm:text-base">
                    County College of Morris
                  </p>
                  <div className="text-sm text-secondary-foreground max-sm:mt-2 sm:col-start-2 sm:row-start-1 sm:mb-auto sm:ml-auto sm:text-base">
                    <p>Sep 2024 - May 2025</p>
                  </div>
                  <p className="mt-4 text-sm font-normal text-secondary-foreground sm:row-start-3 sm:w-[47ch] md:text-base">
                    Formed a strong foundation in computer science and web
                    development by studying HTML, CSS, and JavaScript.
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
