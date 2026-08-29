import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Saheli Circles — Decentralized Community Mobilization",
  description:
    "Saheli Circles: decentralized safe spaces for girls' confidence, life skills, and grassroots leadership across Saltoro Valley, Gilgit-Baltistan.",
};

export default function SaheliCirclesPage() {
  const project = projects.find((p) => p.slug === "saheli-circles")!;

  const circleNetwork = [
    "Goma", "Saith", "Khani", "Malon", "Manik", "Heldi",
  ];

  const mentors = [
    { name: "Rashida", role: "Lead Facilitator" },
    { name: "Sakina Anum", role: "Core LT Member" },
    { name: "Sara Fida", role: "Core LT Member" },
    { name: "Suriya Abbas", role: "Core LT Member" },
    { name: "Tahira Bano", role: "Core LT Member" },
    { name: "Hina", role: "Facilitator" },
    { name: "Miss Khadija", role: "Teacher Facilitator" },
  ];

  const lifeSkillsAreas = [
    {
      title: "Voice & Questioning",
      description:
        "Overcoming fear and cultural hesitation to ask questions in classrooms. Building the confidence to hold teachers accountable for active learning and to challenge passive instruction methods.",
    },
    {
      title: "Communication",
      description:
        "Developing the ability to express needs clearly, participate in public discussions, and engage with community elders, parents, and officials with confidence and respect.",
    },
    {
      title: "Decision-Making",
      description:
        "Empowering girls to make informed choices about their education, health, and civic participation — moving from passive acceptance to active agency.",
    },
    {
      title: "Negotiation",
      description:
        "Learning to advocate for resources, negotiate with school authorities for functional bathrooms and teaching quality, and navigate community power dynamics constructively.",
    },
    {
      title: "Leadership & Peer Support",
      description:
        "Building solidarity among girls through shared experiences, mutual mentorship, and collective action planning. Each circle functions as a support network and organizing unit.",
    },
    {
      title: "Climate Consciousness",
      description:
        "Differentiating weather from climate through daily observation tracking. Three student teams conduct morning, afternoon, and evening weather observations to build scientific literacy.",
    },
    {
      title: "Emotional Calmness",
      description:
        "Breathing exercises, mental resilience techniques, and stress management strategies — critical skills for adolescent girls navigating high-pressure exam seasons and social challenges.",
    },
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
            <span className="text-text-secondary truncate">Saheli Circles</span>
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

      {/* ===== 02. THE SYSTEMIC PROBLEM ===== */}
      <section className="py-16 sm:py-20 bg-surface border-b border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            01 The Core Problem
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Classroom Silence & Cultural Hesitation
          </h2>
          <p className="mt-5 text-body sm:text-body-large text-text-secondary leading-relaxed font-normal">
            In the remote mountain villages of Saltoro, adolescent girls face
            deep-rooted cultural hesitation that prevents them from asking
            questions in classrooms, participating in public discussions, or
            expressing their needs. This silence — reinforced by social norms,
            geographic isolation, and a historic lack of safe spaces — limits
            their educational outcomes, civic participation, and personal
            development.
          </p>
        </Container>
      </section>

      {/* ===== 03. THE TRANSFORMATIVE CIRCLE MODEL ===== */}
      <section className="py-16 sm:py-24 bg-background font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            02 Transformative Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Decentralized Safe Spaces for Mountain Girls
          </h2>
          <p className="mt-5 text-body text-text-secondary leading-relaxed font-normal">
            {project.overview}
          </p>
        </Container>
      </section>

      {/* ===== 04. 7 LIFE SKILLS PILLARS ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="03 Experiential Curriculum"
            title="Seven Essential Life Skills"
            subtitle="Core competency areas addressed through peer dialogue and structured experiential exercises."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifeSkillsAreas.map((area, i) => (
              <div
                key={area.title}
                className="rounded-lg border border-surface-border bg-background p-6 shadow-hairline hover:border-secondary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-base font-normal text-secondary">
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-normal text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 text-body-small text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 05. CIRCLE OBJECTIVES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="04 Goals"
            title="Circle Objectives & Strategy"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(project.objectives || []).map((obj, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg border border-surface-border bg-surface p-6 shadow-hairline"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-background font-display text-base font-normal shadow-sm">
                  {i + 1}
                </div>
                <p className="text-body-small text-text-secondary leading-relaxed font-medium pt-0.5">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 06. VILLAGE CIRCLE NETWORK ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="05 Geographic Footprint"
            title="Active Village Circle Network"
            subtitle="Operational circles across Saltoro Valley serving as grassroots nodes for peer mobilization and emergency preparedness."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {circleNetwork.map((village) => (
              <div
                key={village}
                className="flex flex-col items-center justify-center rounded-lg border border-surface-border bg-background p-5 shadow-hairline text-center hover:border-secondary/40 transition-colors"
              >
                <MapPin className="h-6 w-6 text-secondary" />
                <p className="mt-2.5 text-body-small font-bold text-primary">
                  {village}
                </p>
                <p className="text-[11px] text-text-muted mt-0.5 font-medium">Active Node</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 07. LOCAL MENTORS & FACILITATORS ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="06 Local Leadership"
            title="Saheli Circle Mentors & Facilitators"
            subtitle="Trained local young women who independently facilitate and sustain village circles."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="rounded-lg border border-surface-border bg-surface p-5 text-center shadow-hairline"
              >
                <p className="text-body-small font-bold text-primary">
                  {mentor.name}
                </p>
                <p className="mt-1 text-caption text-text-muted">
                  {mentor.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 08. KEY ACTIVITIES ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="07 Implementation"
            title="Circle Activities & Weekly Practice"
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

      {/* ===== 09. DOCUMENTED OUTCOMES ===== */}
      <section className="py-16 sm:py-24 bg-background border-t border-surface-border font-sans">
        <Container size="standard">
          <SectionHeading
            eyebrow="08 Results"
            title="Documented Circle Outcomes"
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

      {/* ===== 10. BASE BUILDING & SNOWFLAKE INTEGRATION ===== */}
      <section className="py-16 sm:py-24 bg-surface border-t border-surface-border font-sans">
        <Container size="reading">
          <span className="text-eyebrow font-bold uppercase tracking-widest text-strong-accent">
            09 Organizing Strategy
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-primary">
            Base-Building & Snowflake Structure Integration
          </h2>
          <p className="mt-5 text-body text-text-secondary leading-relaxed font-normal">
            Each Saheli Circle functions as an entry point into the broader
            Snowflake organizing network. Through circles, adolescent girls are
            connected to their mothers, fathers, and brothers — building
            intergenerational solidarity. Trained mentors independently manage
            each village node, enabling scalable community organizing across
            remote, disconnected mountain settlements.
          </p>
        </Container>
      </section>

      {/* ===== 11. CASE STUDY NAVIGATION ===== */}
      <section className="py-12 bg-background border-t border-surface-border font-sans">
        <Container size="editorial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/work/saheli-first-responder"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: Saheli First Responder</span>
            </Link>
            <div className="flex gap-3">
              <Button href="/impact" variant="ghost" size="sm">
                View Impact
              </Button>
              <Button href="/work" variant="ghost" size="sm">
                All Projects
              </Button>
            </div>
            <Link
              href="/work/koh-e-zan"
              className="flex items-center gap-2 text-caption font-bold text-primary hover:text-secondary transition-colors"
            >
              <span>Next: KOH-E-ZAN</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
