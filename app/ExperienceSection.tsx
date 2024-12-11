import CCMIcon from "@/components/CCMIcon";
import PureMittiIcon from "@/components/PureMittiIcon";

export default function ExperienceSection() {
  return (
    <section
      id="Experience"
      className="flex min-h-[80vh] flex-col justify-center"
    >
      <h1 className="uppercase text-muted-foreground">Experience</h1>
      <div
        id="main-experience-content"
        className="mt-4 flex w-full flex-col gap-32 text-lg font-semibold"
      >
        <div className="flex items-start justify-between max-lg:flex-col max-lg:space-y-4">
          <h2 className="flex items-center gap-2 text-foreground">
            <div className="h-6 w-1 rounded-md bg-red-400" />
            Work
          </h2>
          <div
            id="Work-Info"
            className="w-[36.68rem] rounded-lg border-2 border-popover bg-card p-6"
          >
            <figure className="flex w-full justify-between">
              <div className="flex gap-2">
                <PureMittiIcon />
                <span>
                  <h2 className="text-base text-primary-foreground">
                    JavaScript Developer
                  </h2>
                  <p className="text-base font-bold tracking-[0.0125em] text-muted-foreground">
                    Pure Mitti
                  </p>
                </span>
              </div>
              <div className="mr-3 flex flex-col text-base text-secondary-foreground">
                <p>Oct 2023 - Sep 2024</p>
              </div>
            </figure>
            <p className="ml-[3.25rem] mt-4 w-[46ch] text-base font-normal text-secondary-foreground">
              Developed custom dashboards and tools to automate e-commerce
              workflows and deliver data-driven insights.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between max-lg:flex-col max-lg:space-y-4">
          <h2 className="flex items-center gap-2 text-foreground">
            <div className="h-6 w-1 rounded-md bg-red-400" />
            Education
          </h2>
          <div
            id="Work-Info"
            className="w-[36.68rem] rounded-lg border-2 border-popover bg-card p-6"
          >
            <figure className="flex w-full justify-between">
              <div className="flex gap-2">
                <CCMIcon />
                <span>
                  <h2 className="text-base text-primary-foreground">
                    Web Development Certificate
                  </h2>
                  <p className="text-base font-bold tracking-[0.0125em] text-muted-foreground">
                    County College of Morris
                  </p>
                </span>
              </div>
              <div className="mr-3 flex flex-col text-base text-secondary-foreground">
                <p>Sep 2024 - May 2025</p>
              </div>
            </figure>
            <p className="ml-[3.3rem] mt-4 w-[47ch] text-base font-normal text-secondary-foreground">
              Formed a strong foundation in computer science and web development
              by studying HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
