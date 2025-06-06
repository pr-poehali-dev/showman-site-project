import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    (Icons as Record<string, LucideIcon>)[name] ||
    (Icons as Record<string, LucideIcon>)[fallback];

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" not found. Fallback "${fallback}" also not found.`,
    );
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
