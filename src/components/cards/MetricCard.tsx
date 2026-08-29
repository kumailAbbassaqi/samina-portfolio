import React from "react";
import { ImpactMetric } from "@/types";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  metric: ImpactMetric;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-surface border border-surface-border shadow-hairline transition-all duration-200 hover:shadow-subtle hover:border-secondary/40 font-sans",
        className
      )}
    >
      <div>
        <div className="flex items-baseline gap-0.5">
          {metric.prefix && (
            <span className="font-display text-2xl font-normal text-secondary">
              {metric.prefix}
            </span>
          )}
          <span className="font-display text-4xl sm:text-5xl font-normal text-primary tracking-tight leading-none">
            {metric.value}
          </span>
          {metric.suffix && (
            <span className="font-display text-2xl font-normal text-secondary ml-0.5">
              {metric.suffix}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-body font-semibold text-primary leading-snug">
          {metric.label}
        </h3>

        {metric.description && (
          <p className="mt-2 text-body-small text-text-secondary leading-relaxed">
            {metric.description}
          </p>
        )}
      </div>

      {metric.sourceContext && (
        <div className="mt-4 pt-3 border-t border-surface-border-subtle">
          <span className="text-[11px] font-medium text-text-muted tracking-normal">
            {metric.sourceContext}
          </span>
        </div>
      )}
    </div>
  );
};
