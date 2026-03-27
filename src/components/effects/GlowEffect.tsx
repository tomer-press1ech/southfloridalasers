import { cn } from "@/lib/utils";

interface GlowEffectProps {
  color?: "blue" | "orange" | "purple";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
};

const colorStyles = {
  blue: "bg-laser-blue/20",
  orange: "bg-spark-orange/20",
  purple: "bg-neon-purple/20",
};

export function GlowEffect({ color = "blue", className, size = "md" }: GlowEffectProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        sizeStyles[size],
        colorStyles[color],
        className
      )}
      aria-hidden="true"
    />
  );
}
