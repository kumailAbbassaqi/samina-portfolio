import React from "react";
import { TimelineItem } from "@/types";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-text-muted font-sans">
        No timeline entries available.
      </div>
    );
  }

  return (
    <div className={cn("relative border-l-2 border-secondary/40 ml-3 md:ml-4 space-y-8 font-sans", className)}>
      {items.map((item) => (
        <div key={item.id} className="relative pl-6 md:pl-8 group">
          {/* Timeline bullet dot */}
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-secondary group-hover:scale-110 group-hover:bg-primary transition-all duration-200" />

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-display text-xl font-normal text-primary">
              {item.title}
            </h3>
            <span className="text-xs font-semibold text-secondary-dark tracking-wide">
              {item.date}
            </span>
          </div>

          {item.subtitle && (
            <p className="text-body-small font-medium text-text-secondary mt-0.5">
              {item.subtitle}
            </p>
          )}

          {item.category && (
            <div className="mt-1.5">
              <Badge variant="muted" size="sm">
                {item.category}
              </Badge>
            </div>
          )}

          {item.description && (
            <p className="text-body-small text-text-secondary mt-2 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-text-secondary">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
