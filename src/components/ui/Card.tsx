import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface/60 backdrop-blur-xl p-6",
        hover && "transition-all duration-300 hover:border-neon-purple/30 hover:shadow-[0_0_30px_#b44dff15]",
        className
      )}
    >
      {children}
    </div>
  );
}
