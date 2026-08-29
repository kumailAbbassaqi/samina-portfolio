import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  eyebrow?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  eyebrow,
  align = "left",
  className,
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-8 md:mb-12 font-sans", alignment[align], className)}>
      {eyebrow && (
        <span className="mb-2.5 text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
          {eyebrow}
        </span>
      )}
      {badge && !eyebrow && (
        <span className="mb-3 inline-flex items-center rounded-full bg-secondary-subtle px-3 py-1 text-caption font-semibold uppercase tracking-wider text-secondary-dark border border-secondary/30">
          {badge}
        </span>
      )}
      <h2 className="font-display text-h2 font-normal tracking-tight text-primary text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-body-large text-text-secondary leading-relaxed font-normal text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
};
