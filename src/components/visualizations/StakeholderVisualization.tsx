import React from "react";
import { Stakeholder } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface StakeholderVisualizationProps {
  stakeholders?: Stakeholder[];
  className?: string;
}

export const StakeholderVisualization: React.FC<StakeholderVisualizationProps> = ({
  stakeholders = [],
  className,
}) => {
  if (stakeholders.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-surface-border p-8 text-center bg-surface/50 font-sans">
        <p className="text-body-small text-text-muted">
          Stakeholder engagement mapping will populate from verified document records.
        </p>
      </div>
    );
  }

  const grouped = stakeholders.reduce((acc, sh) => {
    acc[sh.type] = acc[sh.type] || [];
    acc[sh.type].push(sh);
    return acc;
  }, {} as Record<string, Stakeholder[]>);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans", className)}>
      {Object.entries(grouped).map(([type, list]) => (
        <div
          key={type}
          className="rounded-lg border border-surface-border bg-surface p-5 shadow-hairline"
        >
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <h3 className="font-display text-lg font-normal text-primary">{type}</h3>
            <Badge variant="secondary" size="sm">
              {list.length}
            </Badge>
          </div>

          <div className="mt-4 space-y-3">
            {list.map((sh) => (
              <div key={sh.id} className="text-body-small">
                <p className="font-semibold text-primary">{sh.name}</p>
                {sh.engagementDescription && (
                  <p className="mt-0.5 text-caption text-text-secondary">{sh.engagementDescription}</p>
                )}
                {sh.influenceLevel && (
                  <span className="mt-1 inline-block text-[11px] font-medium text-secondary-dark">
                    Scope: {sh.influenceLevel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
