"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterControlsProps {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  options,
  selectedValue,
  onChange,
  className,
}) => {
  return (
    <div
      role="group"
      aria-label="Filter options"
      className={cn("flex flex-wrap gap-2 py-2 font-sans", className)}
    >
      {options.map((option) => {
        const isSelected = option.value === selectedValue;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isSelected}
            className={cn(
              "inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer",
              isSelected
                ? "bg-primary text-white shadow-sm border border-primary"
                : "bg-surface text-primary border border-surface-border hover:bg-background hover:text-secondary"
            )}
          >
            {option.label}
            {typeof option.count !== "undefined" && (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold",
                  isSelected
                    ? "bg-secondary text-white"
                    : "bg-background text-text-muted"
                )}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
