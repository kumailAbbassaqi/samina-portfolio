import type { Metadata } from "next";
import { FileText, Download, ExternalLink, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { documents } from "@/data/documents";
import { financialRecords } from "@/data/financials";

export const metadata: Metadata = {
  title: "Documentation & Reports Archive",
  description:
    "Access Samina Batool's field reports, campaign documentation, policy briefs, and verified financial transparency statements.",
};

export default function DocumentationPage() {
  const availableFiles = [
    "/documents/Samina-Batool-CV.pdf",
    "/documents/SFR-Report-November-January.pdf",
    "/documents/KOH-E-ZAN-Campaign-Progress-Report.docx",
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Evidence & Reports</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Documentation & Reports Archive
            </h1>
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Access official field reports, campaign documentation, policy
              briefs, and verified professional references.
            </p>
          </div>
        </Container>
      </section>

      {/* Primary Documents */}
      <section className="py-16 sm:py-20 bg-surface font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Primary Documents"
            title="Reports & References"
            subtitle="Verified documentation traceable to on-ground field execution."
          />
          <div className="space-y-5">
            {documents.map((doc) => {
              const isAvailable = availableFiles.includes(doc.fileUrl);

              return (
                <article
                  key={doc.id}
                  className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-subtle">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="font-display text-xl font-normal text-primary leading-snug">
                          {doc.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="muted" size="sm">
                            {doc.fileType}
                          </Badge>
                          {doc.fileSize && (
                            <span className="text-caption text-text-muted">
                              {doc.fileSize}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-1 text-caption text-text-muted">
                        {doc.publisherOrOrg}
                        {doc.datePublished && ` · ${doc.datePublished}`}
                      </p>
                      {doc.description && (
                        <p className="mt-3 text-body-small text-text-secondary leading-relaxed">
                          {doc.description}
                        </p>
                      )}
                      
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-border-subtle">
                        {doc.category && (
                          <Badge variant="secondary" size="sm">
                            {doc.category}
                          </Badge>
                        )}

                        {isAvailable ? (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-caption font-semibold text-primary hover:text-secondary transition-colors"
                          >
                            <Download className="h-3.5 w-3.5 text-secondary" />
                            <span>Download / View Document</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-caption text-text-muted italic">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Document in Digitalization Process</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 sm:py-20 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Financial Accountability"
            title="Project Expenditure Records"
            subtitle="Complete itemized budget breakdowns preserved from original field reports."
          />
          <div className="space-y-10">
            {financialRecords.map((record) => (
              <div key={record.reportName}>
                <h3 className="font-display text-2xl font-normal text-primary mb-2">
                  {record.reportName}
                </h3>
                <p className="text-caption text-text-muted mb-4">
                  Period: {record.period} · Currency: {record.currency}
                </p>
                <div className="overflow-x-auto rounded-lg border border-surface-border bg-surface shadow-hairline">
                  <table className="w-full text-left text-body-small">
                    <thead>
                      <tr className="border-b border-surface-border bg-background-subtle">
                        <th className="px-4 py-3 text-caption font-bold text-text-muted uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-4 py-3 text-caption font-bold text-text-muted uppercase tracking-wider">
                          Item
                        </th>
                        <th className="px-4 py-3 text-caption font-bold text-text-muted uppercase tracking-wider text-right">
                          Amount ({record.currency})
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.items.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b border-surface-border/50 last:border-0"
                        >
                          <td className="px-4 py-3 text-text-muted font-medium">
                            {item.srNo}
                          </td>
                          <td className="px-4 py-3 text-text">
                            {item.item}
                            {item.calculation && (
                              <span className="ml-1 text-caption text-text-muted">
                            ({item.calculation})
                          </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right font-medium text-text tabular-nums">
                            {item.totalPkr.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-primary/20 bg-primary-subtle">
                        <td
                          colSpan={2}
                          className="px-4 py-3 font-bold text-primary"
                        >
                          Total Expenditure
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-primary tabular-nums">
                          {record.currency}{" "}
                          {record.totalBudgetOrExpense.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Learn More About the Initiatives"
        description="Explore the detailed case studies behind each documented project."
        buttonText="View Projects"
        buttonHref="/work"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
