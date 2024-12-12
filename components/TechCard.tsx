import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  name: string;
  color: string;
  description: string;
}

export default function TechCard({ name, color, description }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center gap-4">
        <span
          className={`flex size-14 items-center justify-center rounded-sm ${color}`}
        >
          <Image
            src={`/icons/${name}.png`}
            alt={name}
            width={35}
            height={35}
            className={
              "size-[30px] rounded-sm sm:size-[35px] " +
              (color === "bg-gray-400/20" ? " invert" : "")
            }
          />
        </span>
        <div>
          <CardTitle className="text-base sm:text-lg">{name}</CardTitle>
          <CardDescription className="text-xs text-secondary-foreground sm:text-sm">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
