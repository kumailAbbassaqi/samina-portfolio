import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
}) => {
  return (
    <section className={cn("py-16 sm:py-20 bg-primary text-background font-sans", className)}>
      <Container size="standard" className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-background">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body sm:text-body-large text-primary-subtle/90 leading-relaxed font-normal">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={buttonHref} variant="secondary" size="lg">
            {buttonText}
          </Button>
          {secondaryButtonHref && secondaryButtonText && (
            <Button
              href={secondaryButtonHref}
              variant="outline-light"
              size="lg"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
