import type { Metadata } from "next";
import { GraduationCap, Globe, Award, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { educationRecords } from "@/data/education";
import { certifications } from "@/data/certifications";
import { exposureVisits, workshops } from "@/data/learning";

export const metadata: Metadata = {
  title: "Learning, Credentials & Exposure",
  description:
    "Samina Batool's academic degrees, 13 professional certifications, exposure visits, and facilitated capacity-building workshops.",
};

export default function LearningPage() {
  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Lifelong Learning & Global Exposure</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Learning, Credentials & Exposure
            </h1>
            
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Academic degrees, specialized professional certifications, international study tours, and facilitated capacity-building workshops.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 02. ACADEMIC EDUCATION ===== */}
      <section className="py-16 sm:py-24 bg-surface font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="01 Academic Background"
            title="Formal Degrees & Qualifications"
            subtitle="Multidisciplinary foundation spanning natural sciences, education, and inorganic chemistry."
          />
          <div className="space-y-4">
            {educationRecords.map((edu) => (
              <div
                key={edu.id}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline hover:border-secondary/40 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <GraduationCap className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-display text-2xl font-normal text-primary">
                        {edu.degree}
                      </h3>
                      {edu.endYear && (
                        <span className="text-caption font-bold text-secondary">
                          {edu.endYear}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-body-small font-medium text-text-secondary">
                      {edu.fieldOfStudy} — {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-caption text-text-muted mt-0.5">
                        {edu.location}
                      </p>
                    )}
                    {edu.gradeOrDistinction && (
                      <Badge variant="secondary" size="sm" className="mt-2.5">
                        {edu.gradeOrDistinction}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2.5 text-caption text-text-secondary leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 03. EXPOSURE VISITS ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="02 Study Tours"
            title="National & International Exposure Tours"
            subtitle="Knowledge exchanges on mountain climate resilience, civic governance, and youth leadership."
          />
          <div className="space-y-6">
            {exposureVisits.map((visit) => (
              <div
                key={visit.id}
                className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline"
              >
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-display text-2xl font-normal text-primary">
                        {visit.destination}
                      </h3>
                      {visit.date && (
                        <span className="text-caption font-bold text-secondary">
                          {visit.date}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-body-small font-medium text-text-secondary">
                      {visit.hostOrganization}
                    </p>
                    {visit.geographicScope && (
                      <Badge variant="muted" size="sm" className="mt-1.5">
                        {visit.geographicScope}
                      </Badge>
                    )}
                    <p className="mt-3.5 text-body-small text-text-secondary leading-relaxed">
                      {visit.purpose}
                    </p>
                    {visit.outcomes && visit.outcomes.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-surface-border-subtle">
                        <p className="text-caption font-bold text-text-muted uppercase tracking-wider mb-2">
                          Key Takeaways & Outcomes
                        </p>
                        <ul className="space-y-1.5 text-caption text-text-secondary">
                          {visit.outcomes.map((o, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 04. 13 CERTIFICATIONS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="03 Verified Credentials"
            title="Certifications & Specialized Trainings"
            subtitle={`${certifications.length} verified professional credentials across emergency response, feminist leadership, climate, and media.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-normal text-primary leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-caption text-text-muted">
                      {cert.issuingOrganization}
                      {cert.issueDate && ` · ${cert.issueDate}`}
                    </p>
                    {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-surface-border-subtle">
                        {cert.skillsCovered.map((skill) => (
                          <Badge key={skill} variant="muted" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 05. FACILITATED WORKSHOPS ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="04 Capacity Building"
            title="Facilitated Workshops & Field Trainings"
            subtitle="Workshops designed and facilitated by Samina for community leaders, school teachers, and youth units."
          />
          <div className="space-y-6">
            {workshops.map((ws) => (
              <div
                key={ws.id}
                className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-display text-2xl font-normal text-primary">
                        {ws.title}
                      </h3>
                      {ws.date && (
                        <span className="text-caption font-bold text-secondary">
                          {ws.date}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-body-small font-medium text-text-secondary">
                      {ws.organizer}
                      {ws.location && ` · ${ws.location}`}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {ws.role && (
                        <Badge variant="accent" size="sm">
                          {ws.role}
                        </Badge>
                      )}
                      {ws.duration && (
                        <Badge variant="muted" size="sm">
                          {ws.duration}
                        </Badge>
                      )}
                    </div>
                    {ws.topic && (
                      <p className="mt-3.5 text-body-small text-text-secondary leading-relaxed">
                        <strong>Topic:</strong> {ws.topic}
                      </p>
                    )}
                    {ws.keyLearnings && ws.keyLearnings.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-surface-border-subtle">
                        <p className="text-caption font-bold text-text-muted uppercase tracking-wider mb-2">
                          Key Workshop Outcomes
                        </p>
                        <ul className="space-y-1.5 text-caption text-text-secondary">
                          {ws.keyLearnings.map((l, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Explore Project Initiatives"
        description="View the complete case studies of community programs and field campaigns."
        buttonText="View Work"
        buttonHref="/work"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
