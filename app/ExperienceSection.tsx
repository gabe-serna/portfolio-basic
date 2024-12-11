"use client";

import PureMittiIcon from "@/components/PureMittiIcon";
import Image from "next/image";
import { useState } from "react";

export default function ExperienceSection() {
  const [isSelected, setIsSelected] = useState("Work");

  return (
    <section
      id="Experience"
      className="flex min-h-[60vh] flex-col justify-center"
    >
      <h1 className="uppercase text-muted-foreground">Experience</h1>
      <div className="mt-4 flex w-full gap-52 text-lg font-semibold">
        <span>
          <ol className="space-y-2 [font-family:var(--font-heading)]">
            <li
              onClick={() => setIsSelected("Work")}
              className={`flex cursor-pointer items-center gap-2 transition-colors [transition-duration:250ms] ${isSelected === "Work" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <div
                className={`h-6 w-1 rounded-md ${isSelected === "Work" ? "bg-red-400" : "bg-popover"}`}
              />
              Work
            </li>
            <li
              onClick={() => setIsSelected("Education")}
              className={`flex cursor-pointer items-center gap-2 transition-colors [transition-duration:250ms] ${isSelected === "Education" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <div
                className={`h-6 w-1 rounded-md ${isSelected === "Education" ? "bg-red-400" : "bg-popover"}`}
              />
              Education
            </li>
          </ol>
        </span>
        <div className="w-full rounded-lg border-2 border-popover bg-card p-6">
          <figure className="flex w-full justify-between">
            <div className="flex gap-2">
              <PureMittiIcon />
              <span>
                <figcaption className="[font-family:var(--font-heading)]">
                  Pure Mitti
                </figcaption>
                <h2 className="text-base text-primary-foreground">
                  JavaScript Developer
                </h2>
              </span>
            </div>
            <div className="mr-3 flex flex-col text-base text-secondary-foreground">
              <p>Oct 2023 - Sep 2024</p>
            </div>
          </figure>
          <p className="ml-[3.125rem] mt-4 w-[46ch] text-base font-normal text-secondary-foreground">
            Developed custom dashboards and tools to automate e-commerce
            workflows and deliver data-driven insights.
          </p>
        </div>
      </div>
    </section>
  );
}
