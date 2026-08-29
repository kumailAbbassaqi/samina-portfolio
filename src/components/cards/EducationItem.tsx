import React from "react";
import { Education } from "@/types";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationItemProps {
  education: Education;
  className?: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  education,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex gap-4 p-5 rounded-xl bg-surface border border-surface-border shadow-soft",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
        <GraduationCap className="h-5 w-5" />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="font-display text-lg font-bold text-primary">
            {education.degree} — {education.fieldOfStudy}
          </h3>
          {(education.startYear || education.endYear) && (
            <span className="text-xs font-semibold text-accent">
              {education.startYear ? `${education.startYear} – ` : ""}
              {education.endYear || "Present"}
            </span>
          )}
        </div>

        <p className="mt-0.5 text-sm font-medium text-text-secondary">
          {education.institution}
          {education.location && ` (${education.location})`}
        </p>

        {education.gradeOrDistinction && (
          <p className="mt-1 text-xs font-semibold text-accent">
            {education.gradeOrDistinction}
          </p>
        )}

        {education.description && (
          <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
            {education.description}
          </p>
        )}
      </div>
    </div>
  );
};
