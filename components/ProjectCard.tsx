import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import TechBadge from "./TechBadge";

interface Props {
  name: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ name, description, tech }: Props) {
  const src = `/projects/${name.replace(/\s/g, "")}Hero.png`;

  return (
    <Card className="flex flex-col overflow-clip group-focus-visible:border-red-400 group-focus-visible:bg-popover">
      <Image
        src={src}
        alt={`${name} Hero Image`}
        width={500}
        height={200}
        className="h-48 object-cover object-[50%_40%]"
      />
      <CardFooter className="mt-auto flex-row items-center gap-4 pt-4 text-left">
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription className="text-sm text-secondary-foreground">
            {description}
          </CardDescription>
          <div className="mt-4 flex gap-2">
            {tech.map((techName) => (
              <TechBadge key={techName} name={techName} />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
