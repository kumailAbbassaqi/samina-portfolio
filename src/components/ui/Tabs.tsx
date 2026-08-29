"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  onChange,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : "")
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={cn("w-full font-sans", className)}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex space-x-2 border-b border-surface-border overflow-x-auto pb-px"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "whitespace-nowrap px-5 py-3 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-t-md cursor-pointer",
                isActive
                  ? "border-b-2 border-secondary text-primary bg-background-subtle/60 font-semibold"
                  : "text-text-secondary hover:text-primary hover:bg-background-subtle/30"
              )}
            >
              {tab.label}
              {typeof tab.count !== "undefined" && (
                <span
                  className={cn(
                    "ml-2 rounded-full px-2 py-0.5 text-xs font-semibold",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-surface border border-surface-border text-text-secondary"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="pt-6 animate-in fade-in duration-200"
      >
        {activeContent}
      </div>
    </div>
  );
};
