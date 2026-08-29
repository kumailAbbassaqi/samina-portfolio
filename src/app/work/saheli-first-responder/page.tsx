import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/cards/MetricCard";
import { Timeline } from "@/components/ui/Timeline";
import { Accordion } from "@/components/ui/Accordion";
import { StakeholderVisualization } from "@/components/visualizations/StakeholderVisualization";
import { projects } from "@/data/projects";
import { impactMetrics } from "@/data/impact";
import { stakeholders } from "@/data/stakeholders";
import { financialRecords } from "@/data/financials";
import { climateMyths, careEthicsPrinciples } from "@/data/myths";
import { fieldStories } from "@/data/stories";
import { timelineEvents } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Saheli First Responder — Climate Resilience & Emergency Response",
  description:
    "Detailed case study of the Saheli First Responder program — empowering mountain women and youth as frontline climate leaders and disaster responders in the Saltoro–Siachen belt.",
};

export default function SaheliFirstResponderPage() {
  const project = projects.find((p) => p.slug === "saheli-first-responder")!;
  const projectMetrics = impactMetrics.filter((m) =>
    m.sourceContext?.includes("Saheli First Responder")
  );
  const projectStakeholders = stakeholders.filter((s) =>
    s.initiativesInvolved?.includes("Saheli First Responder")
  );
  const financials = financialRecords.find((f) =>
    f.reportName.includes("Saheli First Responder")
  );
  const sfrTimeline = timelineEvents.filter(
    (t) =>
      t.id.includes("2025-11") ||
      t.id.includes("2025-12")
  );

  const mythAccordionItems = climateMyths.map((m) => ({
    id: `myth-${m.id}`,
    title: `Myth ${m.id}: ${m.myth}`,
    content: (
      <div className="space-y-3 pt-2 font-sans">
        <div className="rounded-lg bg-surface-subtle p-3.5 border border-surface-border-subtle">
          <p className="text-caption font-bold text-text-muted uppercase tracking-wider mb-1">
            Community Perspective / Traditional Belief
          </p>
          <p className="text-body-small text-text-secondary leading-relaxed italic">
            &ldquo;{m.communityBelief}&rdquo;
          </p>
        </div>
        <div className="rounded-lg bg-secondary-subtle p-3.5 border border-secondary/20">
          <p className="text-caption font-bold text-secondary-dark uppercase tracking-wider mb-1">
            Care Ethics Dialogue Approach
          </p>
          <p className="text-body-small text-text-secondary leading-relaxed">
            {m.dialogueApproach}
          </p>
        </div>
      </div>
    ),
  }));

  const mhmBreakdown = [
    { location: "Goma", count: 150 },
    { location: "High School Saith", count: 70 },
    { location: "Saheli Circle Saith", count: 32 },
    { location: "Khani", count: 21 },
    { location: "Malon", count: 15 },
    { location: "Manik", count: 11 },
    { location: "MHM & Go-Bag Workshop", count: 45 },
    { location: "Siachen Public School Teachers", count: 6 },
  ];

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="border-b border-surface-border bg-background-subtle font-sans">
        <Container size="editorial" className="py-3.5">
          <nav className="flex items-center gap-2 text-caption text-text-muted">
            <Link href="/work" className="hover:text-secondary transition-colors flex items-center gap-1.5 font-medium">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Initiatives</span>
            </Link>
            <span className="text-surface-border">•</span>
            <span className="text-text-secondary truncate">Saheli First Responder</span>
          </nav>
        </Container>
      </div>

      {/* ===== 01. EDITORIAL CASE STUDY HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-secondary-dark bg-secondary-subtle px-3 py-1 rounded-full border border-secondary/30 mb-4">
              <span>{project.category}</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              {project.title}
            </h1>
            
            <p className="mt-3 font-display text-2xl sm:text-3xl text-secondary-dark font-normal">
              {project.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-caption text-text-secondary bg-surface p-4 rounded-lg border border-surface-border">
              <span className="flex items-center gap-1.5 font-medium">
                <Users className="h-4 w-4 text-secondary" />
                <span>Role: <strong>{project.role}</strong></span>
              </span>
              <span className="text-surface-border">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Period: <strong>{project.period}</strong></span>
              </span>
              <span className="text-surface-border">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Location: <strong>{project.location}</strong></span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 02. HIGH-ALTITUDE CLIMATE CONTEXT ===== */}
      <section className="py-16 sm:py-20 bg-surface border-b border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            01 Geographic Context
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Mountain Climate Vulnerability
          </h2>
          <p className="mt-5 text-body sm:text-body-large text-text-secondary leading-relaxed font-normal">
            {project.overview}
          </p>
        </Container>
      </section>

      {/* ===== 03. PROJECT OBJECTIVES ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="02 Strategy"
            title="Six Core Project Objectives"
            subtitle="Grounding community disaster preparedness in women's frontline leadership and youth emergency response."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(project.objectives || []).map((obj, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg border border-surface-border bg-surface p-6 shadow-hairline hover:border-secondary/40 transition-colors"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-background font-display text-base font-normal shadow-sm">
                  {i + 1}
                </div>
                <p className="text-body-small text-text-secondary leading-relaxed pt-0.5 font-medium">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 04. ACTIVITY TIMELINE ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="03 Chronology"
            title="Chronological Activity Timeline"
            subtitle="Verified milestone sequence documented in the official Saheli First Responder project report."
          />
          <Timeline items={sfrTimeline} />
        </Container>
      </section>

      {/* ===== 05. KEY ACTIVITIES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="04 On-Ground Execution"
            title="Key Field Activities & Interventions"
            subtitle="Direct disaster risk reduction, school drills, and community mobilization actions."
          />
          <div className="grid grid-cols-1 gap-3">
            {(project.keyActivities || []).map((activity, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start rounded-lg border border-surface-border bg-surface p-4 shadow-hairline"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <p className="text-body-small text-text-secondary leading-relaxed">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 06. MHM OUTREACH BREAKDOWN ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="05 Health & Hygiene"
            title="MHM Direct Outreach Across 8 Locations"
            subtitle="350 women and adolescent girls directly reached through menstrual hygiene and emergency healthcare workshops."
          />
          <div className="overflow-x-auto rounded-lg border border-surface-border bg-background shadow-card">
            <table className="w-full text-left text-body-small">
              <thead>
                <tr className="border-b border-surface-border bg-background-subtle">
                  <th className="px-4 py-3.5 text-caption font-bold text-text-muted uppercase tracking-wider">
                    Location / Target Cohort
                  </th>
                  <th className="px-4 py-3.5 text-caption font-bold text-text-muted uppercase tracking-wider text-right">
                    Women & Girls Reached
                  </th>
                </tr>
              </thead>
              <tbody>
                {mhmBreakdown.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-surface-border/50 last:border-0 hover:bg-surface/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-text font-medium">
                      {row.location}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-primary tabular-nums">
                      {row.count}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-primary/20 bg-primary-subtle">
                  <td className="px-4 py-3.5 font-bold text-primary">Total Verified Outreach</td>
                  <td className="px-4 py-3.5 text-right font-bold text-primary tabular-nums text-body">
                    350
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Container>
      </section>

      {/* ===== 07. LOCAL CLIMATE MYTHS ACCORDION ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="06 Indigenous Knowledge"
            title="Deconstructing 8 Local Climate Myths"
            subtitle="Documented community beliefs and culturally respectful, science-based dialogue approaches."
          />
          <Accordion items={mythAccordionItems} allowMultiple />
        </Container>
      </section>

      {/* ===== 08. CARE ETHICS WITH ELDERS ===== */}
      <section className="py-16 sm:py-20 bg-surface border-t border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            07 Care Ethics
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Intergenerational Respect & Dialogue
          </h2>
          <div className="mt-6 border-l-2 border-secondary pl-6 sm:pl-8 py-2">
            <blockquote className="font-display text-xl sm:text-2xl text-primary leading-relaxed italic font-normal">
              &ldquo;{careEthicsPrinciples.dialogueWithElders}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ===== 09. TEAM RESTRUNG YOUTH UNIT ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="08 Youth Emergency Unit"
            title="Team RESTRUNG"
            subtitle="Grassroots youth emergency response unit mobilized during the initiative."
          />
          <div className="flex flex-wrap gap-2.5">
            {[
              "Sakina Bano (Lead)",
              "Irfan Hassan (Lead)",
              "Najaf Ali",
              "M. Naeem",
              "Haider Ali",
              "M. Iraq",
              "Tehreem Zahra",
              "Surya",
            ].map((name) => (
              <Badge key={name} variant="secondary" size="md">
                {name}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-body-small text-text-secondary leading-relaxed bg-surface p-5 rounded-lg border border-surface-border">
            Led on-ground hazard risk mapping across village paths, community cleanliness drives, waste bin installation, and emergency logistics support during simulated drills.
          </p>
        </Container>
      </section>

      {/* ===== 10. STAKEHOLDER NETWORK ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="09 Collaboration Network"
            title="Multi-Tier Stakeholder Engagement"
            subtitle="Collaborative response network spanning local administration, military units, emergency services, schools, and health workers."
          />
          <StakeholderVisualization stakeholders={projectStakeholders} />
        </Container>
      </section>

      {/* ===== 11. VOICES FROM THE FIELD ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="10 Field Case Studies"
            title="Transformative Stories from the Valley"
            subtitle="Qualitative documentation of real social and behavioral shifts."
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

      {/* ===== 12. PROJECT IMPACT METRICS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="11 Verified Evidence"
            title="Project Impact Metrics"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 13. DOCUMENTED OUTCOMES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="12 Wins & Results"
            title="Documented Project Outcomes"
          />
          <div className="space-y-3">
            {(project.outcomes || []).map((outcome, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start rounded-lg border border-surface-border bg-surface p-5 shadow-hairline"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <p className="text-body-small text-text-secondary leading-relaxed font-medium">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 14. FINANCIAL TRANSPARENCY ===== */}
      {financials && (
        <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
          <Container size="standard">
            <SectionHeading
              eyebrow="13 Audit & Transparency"
              title="Itemized Expenditure Statement"
              subtitle={`${financials.reportName} — ${financials.period}`}
            />
            <div className="overflow-x-auto rounded-lg border border-surface-border bg-background shadow-card">
              <table className="w-full text-left text-body-small">
                <thead>
                  <tr className="border-b border-surface-border bg-background-subtle">
                    <th className="px-4 py-3.5 text-caption font-bold text-text-muted uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-4 py-3.5 text-caption font-bold text-text-muted uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-4 py-3.5 text-caption font-bold text-text-muted uppercase tracking-wider text-right">
                      Amount ({financials.currency})
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {financials.items.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-surface-border/50 last:border-0 hover:bg-surface/50 transition-colors"
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
                      <td className="px-4 py-3 text-right font-semibold text-text tabular-nums">
                        {item.totalPkr.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary/20 bg-primary-subtle">
                    <td
                      colSpan={2}
                      className="px-4 py-3.5 font-bold text-primary"
                    >
                      Total Expenditure
                    </td>
                    <td className="px-4 py-3.5 text-right font-bold text-primary tabular-nums">
                      {financials.currency}{" "}
                      {financials.totalBudgetOrExpense.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* ===== 15. CASE STUDY NAVIGATION ===== */}
      <section className="py-12 bg-background border-t border-surface-border font-sans">
        <Container size="editorial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/work/koh-e-zan"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: KOH-E-ZAN</span>
            </Link>
            <div className="flex gap-3">
              <Button href="/impact" variant="ghost" size="sm">
                View Impact
              </Button>
              <Button href="/documentation" variant="ghost" size="sm">
                Documentation
              </Button>
            </div>
            <Link
              href="/work/saheli-circles"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <span>Next: Saheli Circles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
