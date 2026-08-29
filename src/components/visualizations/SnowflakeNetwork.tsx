"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SnowflakeNode {
  id: string;
  label: string;
  role?: string;
  tier?: number;
}

interface SnowflakeNetworkProps {
  centerLabel?: string;
  nodes?: SnowflakeNode[];
  className?: string;
}

export const SnowflakeNetwork: React.FC<SnowflakeNetworkProps> = ({
  centerLabel = "Central Coordination Hub",
  nodes = [],
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-8 rounded-lg bg-surface border border-surface-border shadow-hairline overflow-hidden min-h-[360px] font-sans",
        className
      )}
    >
      {/* Central Node */}
      <div className="z-10 flex flex-col items-center justify-center rounded-lg bg-primary px-6 py-4 text-center text-background shadow-card border-2 border-secondary">
        <span className="text-caption font-semibold uppercase tracking-wider text-secondary">
          Snowflake Model
        </span>
        <h4 className="font-display text-lg font-normal text-background mt-1">
          {centerLabel}
        </h4>
      </div>

      {nodes.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="flex flex-col items-center justify-center p-3.5 rounded-md border border-surface-border bg-background text-center text-xs"
            >
              <span className="font-semibold text-primary">{node.label}</span>
              {node.role && <span className="text-text-muted mt-0.5">{node.role}</span>}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-caption text-text-muted text-center max-w-md">
          Snowflake community leadership model topology (decentralized responder circles and localized focal points).
        </p>
      )}
    </div>
  );
};
