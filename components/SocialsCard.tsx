import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download } from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function SocialsCard({ name }: { name: string }) {
  let icon: React.ReactNode;
  let link: string;

  switch (name) {
    case "LinkedIn":
      icon = (
        <LinkedInIcon className="text-secondary-foreground transition-colors [transition-duration:250ms] group-hover:text-primary-foreground group-focus-visible:text-primary-foreground" />
      );
      link = "https://www.linkedin.com/in/gabe-serna/";
      break;
    case "GitHub":
      icon = (
        <GitHubIcon className="text-secondary-foreground transition-colors [transition-duration:250ms] group-hover:text-primary-foreground group-focus-visible:text-primary-foreground" />
      );
      link = "https://github.com/gabe-serna";
      break;
    case "Resume":
      icon = (
        <Download className="stroke-secondary-foreground stroke-[2.5] p-0.5 transition-colors [transition-duration:250ms] group-hover:stroke-primary-foreground group-focus-visible:stroke-primary-foreground" />
      );
      link = "https://example.com/resume";
      break;
    default:
      icon = null;
      link = "#";
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild className="group focus-visible:outline-none">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus-visible:outline-none"
          >
            <Card className="cursor-pointer border-popover bg-popover hover:bg-muted-foreground group-focus-visible:border-red-400 group-focus-visible:bg-muted-foreground">
              <CardHeader className="flex-row items-center p-2">
                {icon}
                <CardDescription className="sr-only text-sm text-secondary-foreground">
                  {name}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
