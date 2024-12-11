import { Globe } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

interface Props {
  name: string;
  link: string;
  disabled?: boolean;
}

export default function ProjectLink({ name, link, disabled = false }: Props) {
  const icon =
    name === "Website" ? (
      <Globe
        className={`size-4 ${!disabled ? "stroke-secondary-foreground" : "stroke-muted-foreground"}`}
      />
    ) : (
      <GitHubIcon className="size-4" />
    );

  if (!disabled)
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group focus-visible:outline-none"
      >
        <div className="mb-4 mt-1 flex w-fit items-center gap-1 rounded-md bg-muted-foreground px-2 py-1.5 text-xs text-primary-foreground group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-red-400">
          {icon}
          {name}
        </div>
      </a>
    );
  else
    return (
      <div className="mb-4 mt-1 flex w-fit select-none items-center gap-1 rounded-md bg-popover px-2 py-1.5 text-xs text-secondary-foreground/75 group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-red-400">
        {icon}
        {name}
      </div>
    );
}
