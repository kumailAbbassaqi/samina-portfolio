import React from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Document } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface DocumentCardProps {
  document: Document;
  className?: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-5 rounded-xl bg-surface border border-surface-border shadow-soft transition-all duration-200 hover:shadow-card hover:border-primary/30",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/70 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          {document.category && (
            <Badge variant="secondary" size="sm">
              {document.category}
            </Badge>
          )}
        </div>

        <h3 className="mt-4 font-display text-base font-bold text-primary">
          {document.title}
        </h3>

        {document.description && (
          <p className="mt-1.5 text-xs text-text-secondary line-clamp-2">
            {document.description}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2 text-[11px] text-text-muted">
          <span>{document.fileType}</span>
          {document.fileSize && (
            <>
              <span>•</span>
              <span>{document.fileSize}</span>
            </>
          )}
          {document.datePublished && (
            <>
              <span>•</span>
              <span>{document.datePublished}</span>
            </>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-surface-border/60">
        <a
          href={document.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
        >
          <Download className="h-3.5 w-3.5" />
          View Document
          <ExternalLink className="h-3 w-3 ml-0.5" />
        </a>
      </div>
    </div>
  );
};
