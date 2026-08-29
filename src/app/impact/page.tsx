import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { MetricCard } from "@/components/cards/MetricCard";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { impactMetrics } from "@/data/impact";
import { fieldStories } from "@/data/stories";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Verified Impact & Outcomes",
  description:
    "Evidence-based community indicators and documented social transformation from Samina Batool's field initiatives in Gilgit-Baltistan.",
};

export default function ImpactPage() {
  const categories = Array.from(
    new Set(impactMetrics.map((m) => m.category).filter(Boolean))
  );

  const metricsByCategory = categories.reduce((acc, cat) => {
    acc[cat!] = impactMetrics.filter((m) => m.category === cat);
    return acc;
  }, {} as Record<string, typeof impactMetrics>);

  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Evidence-Based Outcomes</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Verified Impact & Outcomes
            </h1>
            
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Every indicator below is traceable to a specific project field report, verified attendance log, or official institutional record. No artificial combined metrics are generated.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 02. ALL METRICS GRID ===== */}
      <section className="py-16 sm:py-24 bg-surface font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Quantitative Evidence"
            title="Complete Field Metrics Matrix"
            subtitle="Audited indicators across emergency preparedness, education reform, life skills, and community organizing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 03. IMPACT BY THEMATIC DOMAIN ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Thematic Breakdown"
            title="Indicators Grouped by Practice Area"
          />
          <div className="space-y-12">
            {Object.entries(metricsByCategory).map(([category, metrics]) => (
              <div key={category} className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline">
                <h3 className="font-display text-2xl font-normal text-primary mb-6 pb-2 border-b border-surface-border-subtle">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {metrics.map((m) => (
                    <div
                      key={m.id}
                      className="rounded-md border border-surface-border bg-background p-5 shadow-hairline flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline gap-0.5">
                          {m.prefix && (
                            <span className="font-display text-2xl font-normal text-secondary">
                              {m.prefix}
                            </span>
                          )}
                          <span className="font-display text-3xl sm:text-4xl font-normal text-primary tracking-tight">
                            {m.value}
                          </span>
                          {m.suffix && (
                            <span className="font-display text-2xl font-normal text-secondary">
                              {m.suffix}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-body-small font-bold text-primary">
                          {m.label}
                        </p>
                      </div>
                      {m.sourceContext && (
                        <p className="mt-3 text-caption text-text-muted pt-2 border-t border-surface-border-subtle leading-relaxed">
                          {m.sourceContext}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 04. QUALITATIVE ACHIEVEMENTS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Qualitative Achievements"
            title="Institutional & Community Breakthroughs"
            subtitle="Documented systemic shifts in community policy, school governance, and youth leadership."
          />
          <div className="space-y-4">
            {achievements.map((a) => (
              <div
                key={a.id}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline hover:border-secondary/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display text-xl font-normal text-primary">
                    {a.title}
                  </h3>
                  <span className="text-caption font-semibold text-text-muted">
                    {a.organization}{a.date && ` · ${a.date}`}
                  </span>
                </div>
                {a.description && (
                  <p className="mt-2.5 text-body-small text-text-secondary leading-relaxed">
                    {a.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 05. FIELD CASE STORIES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Voices from the Field"
            title="Documented Stories of Transformation"
            subtitle="First-hand accounts demonstrating personal growth, leadership agency, and community solidarity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fieldStories.map((story) => (
              <article
                key={story.id}
                className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline flex flex-col justify-between"
              >
                <div>
                  <Badge variant="accent" size="sm">
                    {story.category}
                  </Badge>
                  <h3 className="mt-3.5 font-display text-2xl font-normal text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-1 text-caption font-medium text-text-muted">
                    {story.protagonist} · {story.location}
                  </p>
                  <p className="mt-4 text-body-small text-text-secondary leading-relaxed">
                    {story.narrative}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-surface-border-subtle bg-surface-subtle -mx-7 -mb-7 p-6 rounded-b-lg">
                  <p className="text-caption font-bold text-secondary uppercase tracking-wider">
                    Key Transformation
                  </p>
                  <p className="mt-1 text-caption text-text-secondary leading-relaxed">
                    {story.keyTakeaway}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Explore Full Project Documentation"
        description="Access original field reports, itemized financial statements, and policy briefs."
        buttonText="Documentation Archive"
        buttonHref="/documentation"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
