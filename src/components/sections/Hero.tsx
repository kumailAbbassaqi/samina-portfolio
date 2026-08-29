import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  badge,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
  children,
}) => {
  return (
    <section className={cn("relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-background border-b border-surface-border/50", className)}>
      <Container size="xl">
        <div className="max-w-3xl">
          {badge && (
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-secondary">
              {badge}
            </div>
          )}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight sm:leading-tight lg:leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {(primaryCtaHref || secondaryCtaHref) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCtaHref && primaryCtaText && (
                <Button href={primaryCtaHref} size="lg">
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaHref && secondaryCtaText && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
};
