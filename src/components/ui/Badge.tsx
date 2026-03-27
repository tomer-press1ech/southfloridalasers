import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "featured" | "orange";
  className?: string;
}

const variantStyles = {
  default: "bg-surface-elevated text-text-secondary border-border",
  new: "bg-laser-blue/10 text-laser-blue border-laser-blue/30",
  featured: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
  orange: "bg-spark-orange/10 text-spark-orange border-spark-orange/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
