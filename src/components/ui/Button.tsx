"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-laser-blue text-black font-semibold hover:bg-laser-blue/90 shadow-[0_0_20px_#00e5ff30] hover:shadow-[0_0_30px_#00e5ff50] transition-all",
  secondary:
    "bg-spark-orange text-white font-semibold hover:bg-spark-orange/90 shadow-[0_0_20px_#ff2d7830] hover:shadow-[0_0_30px_#ff2d7850] transition-all",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors",
  outline:
    "border border-border text-text-primary hover:border-spark-orange hover:text-spark-orange transition-colors",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const styles = cn(
    variantStyles[variant],
    sizeStyles[size],
    "inline-flex items-center justify-center gap-2 font-medium cursor-pointer",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
