import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  BookOpen,
  Users,
  Shield,
  GraduationCap,
  Heart,
  Megaphone,
  FileText,
  Award,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { impactMetrics } from "@/data/impact";
import { experiences } from "@/data/experience";
import { documents } from "@/data/documents";
import { awards } from "@/data/achievements";
import { fieldStories } from "@/data/stories";
import { exposureVisits } from "@/data/learning";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* ===== 01. EDITORIAL HERO SECTION ===== */}
      <section className="relative overflow-hidden border-b border-surface-border bg-background pt-14 pb-18 sm:pt-20 sm:pb-28 lg:pt-4 lg:pb-32 font-sans">
        <Container size="reading" className="text-center flex flex-col items-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-6">
            <MapPin className="h-3.5 w-3.5 text-strong-accent" />
            <span>Saltoro Valley, Gilgit-Baltistan</span>
          </div>

          {/* Main Name (Dominant Typographic Anchor) */}
          <h1 className="font-display text-hero-name font-normal tracking-tight text-primary leading-[1.02]">
            Samina Batool
          </h1>

          {/* Role Subtitle */}
          <p className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl text-primary font-normal leading-snug max-w-2xl text-balance">
            Community Development<br className="hidden sm:inline" /> Practitioner & Education Reform Advocate
          </p>

          {/* Core Description */}
          <p className="mt-6 text-body sm:text-body-large text-text-secondary leading-relaxed max-w-2xl font-normal text-pretty">
            Bridging the gap between grassroots leadership and global strategies to build climate resilience, advance gender justice, and reform education in marginalized communities.
          </p>

          {/* Centered CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/work"
              size="lg"
              variant="primary"
            >
              Explore Work
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 02. PROFESSIONAL THESIS STATEMENT ===== */}
      <section className="py-14 sm:py-18 bg-surface border-b border-surface-border font-sans">
        <Container size="reading">
          <div className="border-l-2 border-secondary pl-6 sm:pl-8 py-2">
            <span className="text-eyebrow font-bold uppercase tracking-widest text-text-muted">
              Professional Mission
            </span>
            <blockquote className="mt-3 font-display text-xl sm:text-2xl text-primary leading-relaxed italic font-normal">
              &ldquo;{siteConfig.author.objective}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ===== 03. VERIFIED IMPACT SNAPSHOT ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Quantitative Indicators"
            title="Verified Impact at a Ghanche"
            subtitle="Every indicator below is traceable to a specific project report, field evaluation, or institutional record."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.slice(0, 4).map((metric) => (
              <div
                key={metric.id}
                className="rounded-lg border border-surface-border bg-surface p-6 shadow-hairline hover:border-secondary/40 transition-all duration-200"
              >
                <div className="flex items-baseline gap-1">
                  {metric.prefix && (
                    <span className="font-display text-2xl text-secondary">
                      {metric.prefix}
                    </span>
                  )}
                  <span className="font-display text-4xl sm:text-5xl font-normal text-primary tracking-tight">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="font-display text-2xl text-secondary">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-body-small font-bold text-primary">
                  {metric.label}
                </h3>
                {metric.sourceContext && (
                  <p className="mt-2 text-caption text-text-muted leading-relaxed">
                    {metric.sourceContext}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/impact" variant="ghost">
              <span>View All 12 Verified Impact Metrics</span>
              <ArrowRight className="ml-1.5 h-4 w-4 text-secondary" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 04. CORE THEMATIC AREAS OF WORK ===== */}
      <section className="py-16 sm:py-24 bg-surface border-y border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Areas of Practice"
            title="Three Pillars of Community Transformation"
            subtitle="Grounded in high-altitude mountain realities across the Saltoro–Siachen region."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: Shield,
                title: "Climate Resilience & Disaster Management",
                description: "Empowering frontline mountain communities in high-risk zones through participatory risk mapping, emergency Go-Bag preparedness, and CBDRMC formation.",
                points: [
                  "Go-Bag household emergency preparedness",
                  "15-member CBDRMC formed & trained",
                  "Community hazard risk mapping across 12 villages",
                  "FLARES multi-layer resilience framework",
                ],
              },
              {
                number: "02",
                icon: GraduationCap,
                title: "Education Reform & System Accountability",
                description: "Strengthening community governance of remote schools, restructuring Parent-Teacher Councils (PTCs/SMCs), and advocating for qualified science teachers.",
                points: [
                  "SMC restructuring & community activation",
                  "Science teacher placement advocacy to Finance Minister GB",
                  "Hands-on activity pedagogy & science labs",
                  "100% SSC board examination pass rate (Saith)",
                ],
              },
              {
                number: "03",
                icon: Heart,
                title: "Gender Justice & Community Organizing",
                description: "Creating decentralized safe spaces for adolescent girls to overcome classroom silence, build life skills, and lead community hygiene initiatives.",
                points: [
                  "Saheli Circles for girls across 6+ villages",
                  "MHM education reaching 350 women & girls",
                  "Snowflake decentralized leadership organizing",
                  "Team RESTRUNG 10-youth climate action unit",
                ],
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-surface-border bg-background p-7 shadow-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-normal text-secondary">
                      {area.number}
                    </span>
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-normal text-primary leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-body-small text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-surface-border-subtle">
                    {area.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-caption text-text-secondary"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 05. FEATURED PROGRAMS & INITIATIVES ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Initiatives"
            subtitle="Documented field campaigns with verified stakeholder records, timeline milestones, and audited expenditure statements."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline flex flex-col justify-between hover:border-secondary/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" size="sm">
                      {project.category}
                    </Badge>
                    <span className="text-caption text-text-muted font-medium">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-primary leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-caption font-semibold text-secondary">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-body-small text-text-secondary leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  {project.outcomes && project.outcomes.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-surface-border-subtle space-y-1.5">
                      {project.outcomes.slice(0, 2).map((outcome, idx) => (
                        <p key={idx} className="text-caption text-text-secondary flex items-start gap-1.5">
                          <span className="text-secondary font-bold">•</span>
                          <span className="line-clamp-2">{outcome}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border-subtle flex items-center justify-between">
                  <span className="text-caption text-text-muted">{project.location}</span>
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-caption font-bold text-primary hover:text-secondary transition-colors group"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 06. HOW SHE WORKS (ORGANIZING METHODOLOGY) ===== */}
      <section className="py-16 sm:py-24 bg-primary text-background font-sans">
        <Container size="standard">
          <div className="text-center mb-14">
            <span className="text-eyebrow font-bold uppercase tracking-widest text-highlight">
              Grassroots Organizing Methodology
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-normal tracking-tight text-background">
              How She Works
            </h2>
            <p className="mt-3 text-body-small text-primary-subtle/80 max-w-xl mx-auto">
              A 5-stage community mobilization framework grounded in relational organizing, capacity-building, and systemic advocacy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {[
              { step: "01", title: "Listen", desc: "170+ relational 1:1 meetings to identify felt community needs", icon: Users },
              { step: "02", title: "Organize", desc: "Saheli Circles & Snowflake nodes across 6+ remote villages", icon: Megaphone },
              { step: "03", title: "Build Capacity", desc: "MHM, Go-Bag drills, life skills & teacher pedagogy workshops", icon: BookOpen },
              { step: "04", title: "Advocate", desc: "Formal delegations to DDE Ghanche, AC & Finance Minister GB", icon: Globe },
              { step: "05", title: "Document", desc: "Rigorous field reports, financial accounts & knowledge guides", icon: FileText },
            ].map((item) => (
              <div key={item.step} className="relative text-center flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary-light/40 bg-primary-light/20 shadow-sm">
                  <item.icon className="h-6 w-6 text-highlight" />
                </div>
                <span className="mt-3 text-[11px] font-bold tracking-widest text-highlight uppercase">
                  Step {item.step}
                </span>
                <h3 className="mt-1 font-display text-lg font-normal text-background">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-caption text-primary-subtle/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 07. VOICES FROM THE FIELD ===== */}
      <section className="py-16 sm:py-24 bg-surface border-b border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Qualitative Evidence"
            title="Stories of Transformation"
            subtitle="Documented field accounts demonstrating behavioral and social shifts within mountain communities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fieldStories.slice(0, 2).map((story) => (
              <article
                key={story.id}
                className="rounded-lg border border-surface-border bg-background p-7 shadow-hairline flex flex-col justify-between"
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

      {/* ===== 08. EXPERIENCE PREVIEW ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Professional Track Record"
            title="Institutional & Research Appointments"
            subtitle="Experience spanning international agencies (UNICEF), academic institutions, and public education systems."
          />
          <div className="space-y-4">
            {experiences.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="rounded-lg border border-surface-border bg-surface p-6 shadow-hairline hover:border-secondary/40 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-display text-xl font-normal text-primary">
                    {exp.role}
                  </h3>
                  <span className="text-caption font-semibold text-secondary">
                    {exp.startDate} – {exp.endDate || "Present"}
                  </span>
                </div>
                <p className="mt-1 text-body-small font-medium text-text-secondary">
                  {exp.organization} · {exp.location}
                </p>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {exp.responsibilities.slice(0, 2).map((resp, i) => (
                      <li key={i} className="text-caption text-text-secondary flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/experience" variant="outline">
              <span>View Full Career History (5 Appointments)</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 09. LEARNING & CREDENTIALS PREVIEW ===== */}
      <section className="py-16 sm:py-24 bg-surface border-y border-surface-border font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Credentials & Global Learning"
            title="Academic Degrees & Exposure Visits"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Awards & Honors */}
            <div className="rounded-lg border border-surface-border bg-background p-7 shadow-hairline">
              <h3 className="flex items-center gap-2 font-display text-xl font-normal text-primary mb-4 pb-2 border-b border-surface-border-subtle">
                <Award className="h-5 w-5 text-secondary" />
                <span>Awards & Institutional Recognitions</span>
              </h3>
              <div className="space-y-4">
                {awards.slice(0, 3).map((award) => (
                  <div key={award.id} className="pb-3 border-b border-surface-border-subtle last:border-0 last:pb-0">
                    <h4 className="text-body-small font-bold text-primary">
                      {award.title}
                    </h4>
                    <p className="text-caption text-text-muted mt-0.5">
                      {award.issuer}{award.year && ` · ${award.year}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exposure Visits & Certifications */}
            <div className="rounded-lg border border-surface-border bg-background p-7 shadow-hairline">
              <h3 className="flex items-center gap-2 font-display text-xl font-normal text-primary mb-4 pb-2 border-b border-surface-border-subtle">
                <Globe className="h-5 w-5 text-secondary" />
                <span>Exposure Tours & 13 Certifications</span>
              </h3>
              <div className="space-y-4">
                {exposureVisits.map((visit) => (
                  <div key={visit.id} className="pb-3 border-b border-surface-border-subtle last:border-0 last:pb-0">
                    <h4 className="text-body-small font-bold text-primary">
                      {visit.destination} — {visit.hostOrganization}
                    </h4>
                    <p className="text-caption text-text-secondary mt-0.5 line-clamp-2">
                      {visit.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button href="/learning" variant="outline">
              <span>Explore All Learning, 13 Certifications & Degrees</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 10. DOCUMENTATION ARCHIVE PREVIEW ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Evidence & Accountability"
            title="Documentation Archive"
            subtitle="Access primary field reports, audited financial records, and official credentials."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {documents.slice(0, 3).map((doc) => (
              <article
                key={doc.id}
                className="rounded-lg border border-surface-border bg-surface p-6 shadow-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <FileText className="h-5 w-5 text-secondary" />
                    <Badge variant="muted" size="sm">
                      {doc.fileType}
                    </Badge>
                  </div>
                  <h3 className="text-body-small font-bold text-primary leading-snug">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-caption text-text-secondary leading-relaxed line-clamp-3">
                    {doc.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-border-subtle text-caption text-text-muted">
                  {doc.publisherOrOrg}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/documentation" variant="ghost">
              <span>Access Full Documentation & Financial Statements</span>
              <ArrowRight className="ml-1.5 h-4 w-4 text-secondary" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== 11. COLLABORATION CLOSING CTA ===== */}
      <CTA
        title="Let's Collaborate"
        description="Connect with Samina Batool for community development advisory, climate resilience research partnerships, girls' education consulting, or speaking engagements."
        buttonText="Get in Touch"
        buttonHref="/contact"
        secondaryButtonText="Download Official CV"
        secondaryButtonHref="/documents/Samina-Batool-CV.pdf"
      />
    </>
  );
}
