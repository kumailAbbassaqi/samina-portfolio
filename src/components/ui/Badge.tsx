import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "highlight" | "accent" | "strong-accent" | "outline" | "muted" | "eyebrow";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "secondary",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium font-sans transition-colors";

  const variants = {
    primary: "bg-primary text-white border border-primary rounded-full",
    secondary: "bg-secondary-subtle text-secondary-dark border border-secondary/30 rounded-full",
    highlight: "bg-highlight-subtle text-highlight-dark border border-highlight/40 rounded-full",
    accent: "bg-accent-subtle text-accent-dark border border-accent/40 rounded-full",
    "strong-accent": "bg-strong-accent-subtle text-strong-accent border border-strong-accent/30 rounded-full",
    outline: "border border-surface-border text-text-secondary bg-surface rounded-full",
    muted: "bg-background-subtle text-text-secondary border border-surface-border-subtle rounded-full",
    eyebrow: "bg-transparent text-strong-accent tracking-widest uppercase font-semibold text-eyebrow p-0",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-caption",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        variant !== "eyebrow" && sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
