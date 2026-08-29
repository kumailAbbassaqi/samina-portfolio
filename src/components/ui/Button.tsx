import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "accent" | "ghost" | "ghost-light" | "white" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  style,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary disabled:opacity-50 disabled:pointer-events-none rounded-md cursor-pointer";

  const variants = {
    primary:
      "bg-primary !text-white hover:bg-secondary hover:!text-white transition-colors focus-visible:ring-secondary shadow-hairline hover:shadow-subtle border border-primary hover:border-secondary",
    secondary:
      "bg-secondary !text-white hover:bg-secondary-dark hover:!text-white focus-visible:ring-secondary border border-secondary shadow-hairline hover:shadow-subtle",
    outline:
      "border-2 border-primary !text-primary hover:border-secondary hover:!text-secondary hover:bg-secondary/10 focus-visible:ring-secondary bg-transparent",
    "outline-light":
      "border-2 border-white/85 !text-white hover:border-white hover:bg-white/15 hover:!text-white focus-visible:ring-white bg-transparent",
    accent:
      "bg-accent !text-primary hover:bg-accent-dark hover:!text-primary focus-visible:ring-accent shadow-hairline hover:shadow-subtle border border-accent",
    ghost:
      "!text-primary hover:!text-secondary hover:bg-secondary/10 focus-visible:ring-secondary bg-transparent",
    "ghost-light":
      "!text-white hover:!text-secondary-subtle hover:bg-white/10 focus-visible:ring-white bg-transparent",
    white:
      "bg-white !text-primary hover:bg-background hover:!text-secondary shadow-hairline border border-white",
    link:
      "!text-primary hover:!text-secondary underline-offset-4 hover:underline p-0 h-auto rounded-none",
  };

  const sizes = {
    sm: "px-4.5 py-2 text-caption font-semibold",
    md: "px-6 py-2.5 sm:py-3 text-body-small font-medium tracking-wide",
    lg: "px-8 py-3.5 sm:py-4 text-body font-medium tracking-wide",
  };

  const combinedClasses = cn(baseStyles, variants[variant], variant !== "link" && sizes[size], className);

  // Guarantee color for light/dark button variants
  const isWhiteTextVariant =
    variant === "primary" ||
    variant === "secondary" ||
    variant === "outline-light" ||
    variant === "ghost-light";

  const buttonStyle: React.CSSProperties = {
    ...(isWhiteTextVariant ? { color: "#FFFFFF" } : {}),
    ...style,
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedClasses}
          style={buttonStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} style={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};
