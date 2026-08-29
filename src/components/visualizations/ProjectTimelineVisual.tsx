import React from "react";
import { TimelineItem } from "@/types";
import { Timeline } from "@/components/ui/Timeline";
import { cn } from "@/lib/utils";

interface ProjectTimelineVisualProps {
  items?: TimelineItem[];
  title?: string;
  className?: string;
}

export const ProjectTimelineVisual: React.FC<ProjectTimelineVisualProps> = ({
  items = [],
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface border border-surface-border p-6 sm:p-8 shadow-soft",
        className
      )}
    >
      {title && (
        <h3 className="font-display text-xl font-bold text-primary mb-6">
          {title}
        </h3>
      )}
      <Timeline items={items} />
    </div>
  );
};
