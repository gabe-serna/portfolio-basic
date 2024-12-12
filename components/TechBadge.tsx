export default function TechBadge({ name }: { name: string }) {
  let background, text: string;

  switch (name) {
    case "TypeScript":
      background = "bg-blue-500/15";
      text = "text-blue-300/90";
      break;
    case "React":
      background = "bg-sky-500/15";
      text = "text-sky-300/80";
      break;
    case "Next.js":
      background = "bg-gray-400/20";
      text = "text-gray-300/75";
      break;
    case "Tailwind CSS":
      background = "bg-cyan-500/15";
      text = "text-cyan-300/75";
      break;
    case "Figma":
      background = "bg-green-500/15";
      text = "text-green-300/75";
      break;
    case "Python":
      background = "bg-yellow-500/15";
      text = "text-yellow-300/75";
      break;
    case "Three.js":
      background = "bg-neutral-500/15";
      text = "text-neutral-200/75";
      break;
    case "Docker":
      background = "bg-blue-500/15";
      text = "text-blue-300/90";
      break;
    default:
      background = "bg-gray-400/20";
      text = "text-gray-300/75";
  }

  return (
    <span
      className={`w-fit text-nowrap rounded-sm px-2 py-1.5 text-xs ${background} ${text}`}
    >
      {name}
    </span>
  );
}
