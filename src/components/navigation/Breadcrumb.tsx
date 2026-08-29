import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-xs text-text-muted py-3", className)}
    >
      <Link
        href="/"
        className="flex items-center text-text-secondary hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
        aria-label="Home"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.label}>
            <ChevronRight className="h-3 w-3 text-text-muted/60" aria-hidden="true" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-text" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
