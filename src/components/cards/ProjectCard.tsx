import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-lg bg-surface border border-surface-border p-6 sm:p-8 shadow-hairline transition-all duration-200 hover:shadow-subtle hover:border-secondary/40 font-sans",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" size="sm">
            {project.category}
          </Badge>
          {project.period && (
            <span className="text-caption font-medium text-text-muted">
              {project.period}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-h3 font-normal text-primary group-hover:text-secondary transition-colors leading-snug">
          <Link href={`/work/${project.slug}`} className="focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>

        {project.tagline && (
          <p className="mt-1.5 text-body-small font-medium text-secondary-dark leading-normal">
            {project.tagline}
          </p>
        )}

        <p className="mt-3.5 text-body-small text-text-secondary line-clamp-3 leading-relaxed">
          {project.overview}
        </p>

        {project.outcomes && project.outcomes.length > 0 && (
          <div className="mt-5 border-t border-surface-border-subtle pt-3.5">
            <span className="text-eyebrow font-semibold uppercase tracking-wider text-text-muted">
              Key Documented Outcome
            </span>
            <p className="mt-1 text-body-small text-text font-medium line-clamp-2 leading-relaxed">
              {project.outcomes[0]}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-surface-border-subtle flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-body-small font-semibold text-primary group-hover:text-secondary transition-colors focus-visible:ring-1 focus-visible:ring-secondary rounded-sm"
        >
          Explore Case Study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
};
