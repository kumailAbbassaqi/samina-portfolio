import React from "react";
import { ImpactMetric } from "@/types";
import { MetricCard } from "@/components/cards/MetricCard";
import { cn } from "@/lib/utils";

interface ImpactMetricsVisualProps {
  metrics?: ImpactMetric[];
  title?: string;
  className?: string;
}

export const ImpactMetricsVisual: React.FC<ImpactMetricsVisualProps> = ({
  metrics = [],
  title,
  className,
}) => {
  if (metrics.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-surface-border p-8 text-center bg-surface/50">
        <p className="text-sm text-text-muted">
          Impact indicators will populate from verified project reports.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <h3 className="font-display text-xl font-bold text-primary">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};
