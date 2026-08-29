import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work & Initiatives",
  description:
    "Explore Samina Batool's community-led programs: KOH-E-ZAN Educational Reforms, Saheli First Responder climate adaptation, and Saheli Circles decentralized mobilization in Gilgit-Baltistan.",
};

export default function WorkPage() {
  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Grassroots Programs & Campaigns</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Projects & Initiatives
            </h1>
            
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Community-led climate adaptation, educational accountability, and women&apos;s leadership programs across the Saltoro–Siachen belt of Gilgit-Baltistan.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 02. PROJECTS GRID ===== */}
      <section className="py-16 sm:py-24 bg-surface font-sans">
        <Container size="editorial">
          <SectionHeading
            eyebrow="Case Studies"
            title="Documented Community Initiatives"
            subtitle="Each project below is documented with verified field data, stakeholder records, and itemized financial transparency."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 03. ORGANIZING FRAMEWORKS ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="Methodologies"
            title="Core Organizing Frameworks"
            subtitle="Systematic, community-tested models underpinning all on-ground initiatives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline flex flex-col justify-between">
              <div>
                <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
                  Framework 01
                </span>
                <h3 className="mt-2 font-display text-2xl font-normal text-primary">
                  Snowflake Organizing Model
                </h3>
                <p className="mt-3.5 text-body-small text-text-secondary leading-relaxed">
                  A decentralized leadership structure where a central coordination hub connects village-level nodes, each led by trained local facilitators (Rashida, Sakina, Sara, Suriya, Tahira). Each node independently manages circles, 1:1 meetings, and mini-team initiatives — enabling scalable, resilient community organizing across remote geographies.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-surface-border bg-surface p-7 shadow-hairline flex flex-col justify-between">
              <div>
                <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
                  Framework 02
                </span>
                <h3 className="mt-2 font-display text-2xl font-normal text-primary">
                  FLARES Community Resilience Framework
                </h3>
                <p className="mt-3.5 text-body-small text-text-secondary leading-relaxed">
                  A structured disaster preparedness approach incorporating Go-Bag household assembly, school WASH advocacy, early warning systems via mosque speaker networks, CBDRMC safe zone identification, and community emergency savings pooling — creating layered resilience from household to village level.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Explore Verified Impact Data"
        description="View the complete evidence-based impact data across all community initiatives."
        buttonText="View Impact"
        buttonHref="/impact"
        secondaryButtonText="Contact Samina"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
