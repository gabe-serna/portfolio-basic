import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Mail } from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function SocialsCard({ name }: { name: string }) {
  let icon: React.ReactNode;
  let href: string;

  switch (name) {
    case "LinkedIn":
      icon = (
        <LinkedInIcon className="text-muted-foreground transition-colors [transition-duration:250ms] group-hover:text-secondary-foreground group-focus-visible:text-secondary-foreground" />
      );
      href = process.env.NEXT_PUBLIC_LINKEDIN as string;
      break;
    case "GitHub":
      icon = (
        <GitHubIcon className="text-muted-foreground transition-colors [transition-duration:250ms] group-hover:text-secondary-foreground group-focus-visible:text-secondary-foreground" />
      );
      href = process.env.NEXT_PUBLIC_GITHUB as string;
      break;
    case "Resume":
      icon = (
        <Download className="stroke-muted-foreground stroke-[2.5] p-0.5 transition-colors [transition-duration:250ms] group-hover:stroke-secondary-foreground group-focus-visible:stroke-secondary-foreground" />
      );
      href = process.env.NEXT_PUBLIC_RESUME as string;
      break;
    case "Email":
      icon = (
        <Mail className="size-6 stroke-muted-foreground transition-colors [transition-duration:250ms] group-hover:stroke-secondary-foreground group-focus-visible:stroke-secondary-foreground" />
      );
      href = process.env.NEXT_PUBLIC_EMAIL as string;
      break;
    default:
      icon = null;
      href = "#";
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild className="group focus-visible:outline-none">
          {name !== "Email" ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus-visible:outline-none"
            >
              <Card className="cursor-pointer group-focus-visible:border-red-400 group-focus-visible:bg-popover">
                <CardHeader className="flex-row items-center p-2">
                  {icon}
                  <CardDescription className="sr-only text-sm text-secondary-foreground">
                    {name}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          ) : (
            <a
              href={`mailto:${href}`}
              className="group focus-visible:outline-none"
            >
              <Card className="cursor-pointer group-focus-visible:border-red-400 group-focus-visible:bg-popover">
                <CardHeader className="flex-row items-center p-2">
                  {icon}
                  <CardDescription className="sr-only text-sm text-secondary-foreground">
                    {name}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          )}
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
