import type { Metadata } from "next";
import { MapPin, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/data/siteConfig";
import { skills } from "@/data/skills";
import { educationRecords } from "@/data/education";
import { awards } from "@/data/achievements";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about Samina Batool — ${siteConfig.author.role} from Gilgit-Baltistan, working at the intersection of education, gender equality, climate resilience, and youth engagement.`,
};

export default function AboutPage() {
  const skillsByCategory = skills.reduce((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Practitioner Profile</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Samina Batool
            </h1>
            
            <p className="mt-3 text-xl sm:text-2xl font-display text-secondary font-normal">
              {siteConfig.author.role}
            </p>
            
            <div className="mt-4 flex items-center gap-2 text-caption text-text-muted">
              <MapPin className="h-4 w-4 text-strong-accent shrink-0" />
              <span>{siteConfig.author.location}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 02. PROFESSIONAL OBJECTIVE ===== */}
      <section className="py-16 sm:py-20 bg-surface border-b border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            Professional Mission
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Advocacy & Mobilization Statement
          </h2>
          <div className="mt-6 border-l-2 border-secondary pl-6 sm:pl-8 py-2">
            <blockquote className="font-display text-xl sm:text-2xl text-primary leading-relaxed italic font-normal">
              &ldquo;{siteConfig.author.objective}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ===== 03. CORE COMPETENCIES MATRIX ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Competencies & Skills"
            title="Core Professional Skills Matrix"
            subtitle="Verified professional skills demonstrated across field campaigns, academic research, emergency response, and community organizing."
          />
          <div className="space-y-10">
            {Object.entries(skillsByCategory).map(([category, catSkills]) => (
              <div key={category} className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline">
                <h3 className="font-display text-2xl font-normal text-primary mb-4 pb-2 border-b border-surface-border-subtle">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catSkills.map((s) => (
                    <div
                      key={s.id}
                      className="rounded-md border border-surface-border bg-background p-4 shadow-hairline flex flex-col justify-between"
                    >
                      <div>
                        <p className="text-body-small font-bold text-primary">
                          {s.name}
                        </p>
                        {s.proficiencyLevel && (
                          <span className="inline-block mt-1 text-[11px] font-semibold text-secondary-dark uppercase tracking-wider bg-secondary-subtle px-2 py-0.5 rounded-full">
                            {s.proficiencyLevel}
                          </span>
                        )}
                      </div>
                      {s.highlightedInProjects && s.highlightedInProjects.length > 0 && (
                        <p className="mt-3 text-[11px] text-text-muted pt-2 border-t border-surface-border-subtle">
                          Applied in: {s.highlightedInProjects.join(", ")}
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

      {/* ===== 04. ACADEMIC EDUCATION ===== */}
      <section className="py-16 sm:py-24 bg-surface border-y border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Academic Qualifications"
            title="Education"
            subtitle="Multidisciplinary foundation spanning natural sciences, chemistry, and modern pedagogical methodologies."
          />
          <div className="space-y-4">
            {educationRecords.map((edu) => (
              <div
                key={edu.id}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline hover:border-secondary/40 transition-colors"
              >
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
                  <p className="text-caption text-text-muted mt-0.5">{edu.location}</p>
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
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 05. AWARDS & RECOGNITION ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Institutional Recognition"
            title="Awards & Official Commendations"
            subtitle="Honors awarded by public education departments, youth assemblies, and development organizations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="rounded-lg border border-surface-border bg-surface p-6 shadow-hairline flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-normal text-primary leading-snug">
                      {award.title}
                    </h3>
                    <Award className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  </div>
                  <p className="mt-1 text-caption text-text-muted">
                    {award.issuer}{award.year && ` · ${award.year}`}
                  </p>
                  {award.description && (
                    <p className="mt-3 text-body-small text-text-secondary leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 06. PERSONAL DETAILS ===== */}
      <section className="py-16 sm:py-20 bg-surface border-y border-surface-border font-sans">
        <Container size="reading">
          <SectionHeading eyebrow="Profile Overview" title="Personal Details" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Date of Birth", value: siteConfig.personalDetails.dateOfBirth },
              { label: "Nationality", value: siteConfig.personalDetails.nationality },
              { label: "Religion", value: siteConfig.personalDetails.religion },
              { label: "Marital Status", value: siteConfig.personalDetails.maritalStatus },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-surface-border bg-background p-4 text-center shadow-hairline"
              >
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="mt-1 text-body-small font-semibold text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <CTA
        title="Explore Professional Experience"
        description="View the complete career timeline, research appointments with UNICEF/CRSM, and community leadership roles."
        buttonText="View Experience"
        buttonHref="/experience"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
