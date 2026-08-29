import React from "react";
import { Experience } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-surface border border-surface-border p-6 sm:p-7 shadow-hairline transition-all duration-200 hover:border-secondary/40 font-sans",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-display text-2xl font-normal text-primary">
          {experience.role}
        </h3>
        <span className="text-caption font-semibold text-secondary-dark tracking-wide">
          {experience.startDate} – {experience.endDate || "Present"}
        </span>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-2 text-body-small font-medium text-text-secondary">
        <span>{experience.organization}</span>
        {experience.location && (
          <>
            <span className="text-surface-border">•</span>
            <span className="text-xs text-text-muted">{experience.location}</span>
          </>
        )}
      </div>

      {experience.summary && (
        <p className="mt-3 text-body-small text-text-secondary leading-relaxed">
          {experience.summary}
        </p>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            Key Responsibilities
          </h4>
          <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-body-small text-text-secondary">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="leading-relaxed">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      )}

      {experience.skills && experience.skills.length > 0 && (
        <div className="mt-4 pt-4 border-t border-surface-border-subtle flex flex-wrap gap-1.5">
          {experience.skills.map((skill) => (
            <Badge key={skill} variant="muted" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
