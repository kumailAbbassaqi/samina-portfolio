import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/ui/Timeline";
import { CTA } from "@/components/sections/CTA";
import { experiences } from "@/data/experience";
import { awards } from "@/data/achievements";
import { timelineEvents } from "@/data/timeline";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Samina Batool's complete professional history: institutional appointments with UNICEF, IEI Pakistan, AKHSP, teaching achievements, and research roles across Gilgit-Baltistan.",
};

export default function ExperiencePage() {
  const careerTimeline = timelineEvents.filter(
    (t) => t.category === "Career"
  );

  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Career History</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Professional Experience
            </h1>
            
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Institutional research appointments, public school science teaching, emergency first responder leadership, and community development roles across Gilgit-Baltistan.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 02. FULL APPOINTMENT CARDS ===== */}
      <section className="py-16 sm:py-24 bg-surface font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Institutional Roles"
            title="Complete Career Record"
            subtitle="Verified professional appointments with detailed responsibilities and source-documented achievements."
          />
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 03. CAREER TIMELINE ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Chronology"
            title="Career Progression Timeline"
            subtitle="Chronological sequence of major career milestones from 2022 to present."
          />
          <Timeline items={careerTimeline} />
        </Container>
      </section>

      {/* ===== 04. AWARDS & HONORS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Official Commendations"
            subtitle="Official recognitions awarded by government departments, youth assemblies, and civil society organizations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5">
                  <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-xl font-normal text-primary leading-snug">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-caption text-text-muted">
                      {award.issuer}
                      {award.year && ` · ${award.year}`}
                    </p>
                    {award.description && (
                      <p className="mt-2.5 text-body-small text-text-secondary leading-relaxed">
                        {award.description}
                      </p>
                    )}
                    {award.category && (
                      <Badge variant="muted" size="sm" className="mt-3">
                        {award.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="View Learning & Credentials"
        description="Explore academic qualifications, 13 professional certifications, and international exposure visits."
        buttonText="View Credentials"
        buttonHref="/learning"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
