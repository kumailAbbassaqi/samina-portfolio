"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className,
}) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpanded);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3 font-sans", className)}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-surface-border rounded-lg bg-surface transition-colors overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-4 text-left font-medium text-primary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
            >
              <span className="text-body font-semibold text-primary">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-text-muted transition-transform duration-200",
                  isExpanded && "rotate-180 text-secondary"
                )}
                aria-hidden="true"
              />
            </button>

            {isExpanded && (
              <div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
                className="px-4 pb-4 pt-1 text-body-small text-text-secondary border-t border-surface-border/50 animate-in fade-in duration-150"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
