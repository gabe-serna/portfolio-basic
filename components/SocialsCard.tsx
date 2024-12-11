import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download } from "lucide-react";
import Image from "next/image";
import Github from "@/public/icons/GitHub.svg";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function SocialsCard({ name }: { name: string }) {
  let icon: React.ReactNode;

  switch (name) {
    case "LinkedIn":
      icon = <LinkedInIcon className="text-secondary-foreground" />;
      break;
    case "GitHub":
      icon = <GitHubIcon className="text-secondary-foreground" />;
      break;
    case "Resume":
      icon = (
        <Download className="stroke-secondary-foreground stroke-[2.5] p-0.5" />
      );
      break;
    default:
      icon = null;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="group focus-visible:outline-none">
          <Card className="cursor-pointer border-[#493d3f] bg-[#493d3f] hover:bg-muted-foreground group-focus-visible:border-red-400 group-focus-visible:bg-muted-foreground">
            <CardHeader className="flex-row items-center p-2">
              {icon}
              <CardDescription className="sr-only text-sm text-secondary-foreground">
                {name}
              </CardDescription>
            </CardHeader>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
