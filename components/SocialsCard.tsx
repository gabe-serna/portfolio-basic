import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download } from "lucide-react";
import Image from "next/image";

export default function SocialsCard({ name }: { name: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Card className="cursor-pointer bg-[#493d3f] hover:bg-muted-foreground">
            <CardHeader className="flex-row items-center p-2">
              {name != "Resume" ? (
                <Image
                  src={`/icons/${name}.png`}
                  alt={name}
                  width={25}
                  height={25}
                  className="invert"
                />
              ) : (
                <Download className="stroke-secondary-foreground stroke-[2.5]" />
              )}
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
