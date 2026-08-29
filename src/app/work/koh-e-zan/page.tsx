import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/cards/MetricCard";
import { Timeline } from "@/components/ui/Timeline";
import { SnowflakeNetwork } from "@/components/visualizations/SnowflakeNetwork";
import { StakeholderVisualization } from "@/components/visualizations/StakeholderVisualization";
import { projects } from "@/data/projects";
import { stakeholders } from "@/data/stakeholders";
import { impactMetrics } from "@/data/impact";
import { financialRecords } from "@/data/financials";
import { timelineEvents } from "@/data/timeline";

export const metadata: Metadata = {
  title: "KOH-E-ZAN Educational Reforms Campaign",
  description:
    "Detailed case study of the KOH-E-ZAN Educational Reforms Campaign — building a culture of accountability in education across Saltoro Valley, Gilgit-Baltistan.",
};

export default function KohEZanPage() {
  const project = projects.find((p) => p.slug === "koh-e-zan")!;
  const projectStakeholders = stakeholders.filter((s) =>
    s.initiativesInvolved?.includes("KOH-E-ZAN Educational Reforms")
  );
  const projectTimeline = timelineEvents.filter(
    (t) =>
      t.id.includes("2025-07") ||
      t.id.includes("2025-08") ||
      t.id === "tl-2025-05-iei-fellowship"
  );
  const financials = financialRecords.find((f) =>
    f.reportName.includes("KOH-E-ZAN")
  );
  const projectMetrics = impactMetrics.filter((m) =>
    m.sourceContext?.includes("KOH-E-ZAN")
  );

  const snowflakeNodes = [
    { id: "rashida", label: "Rashida", role: "Core LT Member / Circle Facilitator" },
    { id: "sakina", label: "Sakina Anum", role: "Core LT Member" },
    { id: "sara", label: "Sara Fida", role: "Core LT Member" },
    { id: "suriya", label: "Suriya Abbas", role: "Core LT Member" },
    { id: "tahira", label: "Tahira Bano", role: "Core LT Member" },
    { id: "fiza", label: "Fiza Bano", role: "Core LT Member" },
    { id: "khadija", label: "Miss Khadija", role: "Teacher / Circle Facilitator" },
    { id: "shujaat", label: "Sir Shujaat Ali", role: "Teacher Champion" },
    { id: "goma", label: "Goma Node", role: "Village Mini-Team", tier: 2 },
    { id: "saith", label: "Saith Node", role: "Village Mini-Team / Library Circle", tier: 2 },
    { id: "gabkhorr", label: "Gabkhorr Node", role: "Village Mini-Team", tier: 2 },
    { id: "heldi", label: "Heldi Node", role: "Village Mini-Team", tier: 2 },
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
            <span className="text-text-secondary truncate">KOH-E-ZAN Educational Reforms</span>
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

      {/* ===== 02. CONTEXT & MISSION ===== */}
      <section className="py-16 sm:py-20 bg-surface border-b border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            01 Context & Background
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Mission & Theoretical Framework
          </h2>
          <p className="mt-5 text-body sm:text-body-large text-text-secondary leading-relaxed font-normal">
            {project.overview}
          </p>
        </Container>
      </section>

      {/* ===== 03. THE 5 PILLARS OF CHANGE ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="02 Theory of Change"
            title="The Five Pillars of Educational Accountability"
            subtitle="A systemic framework grounding the campaign in community governance, teacher motivation, and student agency."
          />
          <div className="space-y-4">
            {(project.objectives || []).map((obj, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg border border-surface-border bg-surface p-6 shadow-hairline hover:border-secondary/40 transition-colors"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-background font-display text-base font-normal shadow-sm">
                  {i + 1}
                </div>
                <p className="text-body-small text-text-secondary leading-relaxed pt-1">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 04. STEP-BY-STEP CAMPAIGN ACTIVITIES ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="03 Field Implementation"
            title="Step-by-Step Campaign Actions"
            subtitle="Verified actions executed across Saltoro Valley schools, community centers, and administrative offices."
          />
          <div className="grid grid-cols-1 gap-3">
            {(project.keyActivities || []).map((activity, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start rounded-lg border border-surface-border bg-background p-4 shadow-hairline"
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

      {/* ===== 05. CAMPAIGN TIMELINE ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="04 Chronology"
            title="Campaign Milestones"
            subtitle="Chronological sequence of key organizing meetings, PTMs, and institutional delegations."
          />
          <Timeline items={projectTimeline} />
        </Container>
      </section>

      {/* ===== 06. STAKEHOLDER POWER ANALYSIS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="05 Power Analysis"
            title="Stakeholder Engagement Network"
            subtitle="Multi-tier analysis of institutional actors, community leaders, and grassroots participants engaged through the campaign."
          />
          <StakeholderVisualization stakeholders={projectStakeholders} />
        </Container>
      </section>

      {/* ===== 07. SNOWFLAKE LEADERSHIP TOPOLOGY ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="06 Decentralized Structure"
            title="Snowflake Organizing Topology"
            subtitle="Decentralized organizing model with Samina as central hub connecting village-level nodes."
          />
          <SnowflakeNetwork
            centerLabel="Samina Batool — Central Coordinator"
            nodes={snowflakeNodes}
          />

          {/* Accessible text fallback */}
          <details className="mt-6">
            <summary className="text-caption font-bold text-primary hover:text-secondary cursor-pointer transition-colors">
              ▶ View Complete Network Roster (Screen Reader Accessible Text List)
            </summary>
            <div className="mt-3 rounded-lg border border-surface-border bg-surface p-5 text-caption">
              <h4 className="font-bold text-text-muted uppercase tracking-wider mb-2">
                Core Leadership Team
              </h4>
              <ul className="space-y-1.5 text-text-secondary">
                {snowflakeNodes
                  .filter((n) => !n.tier || n.tier < 2)
                  .map((n) => (
                    <li key={n.id}>
                      <strong>{n.label}</strong> — {n.role}
                    </li>
                  ))}
              </ul>
              <h4 className="font-bold text-text-muted uppercase tracking-wider mt-4 mb-2">
                Village Nodes
              </h4>
              <ul className="space-y-1.5 text-text-secondary">
                {snowflakeNodes
                  .filter((n) => n.tier === 2)
                  .map((n) => (
                    <li key={n.id}>
                      <strong>{n.label}</strong> — {n.role}
                    </li>
                  ))}
              </ul>
            </div>
          </details>
        </Container>
      </section>

      {/* ===== 08. VERIFIED METRICS ===== */}
      {projectMetrics.length > 0 && (
        <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
          <Container size="editorial">
            <SectionHeading
              eyebrow="07 Evidence"
              title="Campaign Metrics & Indicators"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ===== 09. DOCUMENTED OUTCOMES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="08 Wins & Results"
            title="Documented Outcomes"
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

      {/* ===== 10. CHALLENGES & STRATEGIC RESPONSES ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="reading">
          <SectionHeading
            eyebrow="09 Problem Solving"
            title="Obstacles & Strategic Responses"
          />
          <div className="space-y-5">
            <div className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
              <h3 className="font-display text-2xl font-normal text-primary">
                Weather & Travel Constraints
              </h3>
              <p className="mt-2.5 text-body-small text-text-secondary leading-relaxed">
                Heavy rains and harsh terrain made travel between villages
                unpredictable and expensive. Response: Allocated flexible
                transport budgets and rescheduled activities rather than
                canceling them entirely.
              </p>
            </div>
            <div className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
              <h3 className="font-display text-2xl font-normal text-primary">
                Conservative Social Norms
              </h3>
              <p className="mt-2.5 text-body-small text-text-secondary leading-relaxed">
                Initial resistance from some community elders regarding girls&apos;
                public participation and educational advocacy. Response:
                Engaged religious leaders (Sir Abdul Karim, Imam Juma Darvaish
                Ali) to publicly endorse girls&apos; education in Friday sermons,
                building trust through respected community voices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 11. FINANCIAL ACCOUNTABILITY ===== */}
      {financials && (
        <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
          <Container size="standard">
            <SectionHeading
              eyebrow="10 Audit & Transparency"
              title="Itemized Expenditure Statement"
              subtitle={`${financials.reportName} — ${financials.period}`}
            />
            <div className="overflow-x-auto rounded-lg border border-surface-border bg-surface shadow-card">
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
                      className="border-b border-surface-border/50 last:border-0 hover:bg-background/50 transition-colors"
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

      {/* ===== 12. METHODOLOGIES & TOOLS ===== */}
      <section className="py-16 sm:py-20 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="11 Toolset"
            title="Methodologies & Organizing Approaches Used"
          />
          <div className="flex flex-wrap gap-2.5">
            {(project.toolsAndMethodologies || []).map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 13. CASE STUDY NAVIGATION ===== */}
      <section className="py-12 bg-background border-t border-surface-border font-sans">
        <Container size="editorial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/work"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Initiatives</span>
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
              href="/work/saheli-first-responder"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <span>Next: Saheli First Responder</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
