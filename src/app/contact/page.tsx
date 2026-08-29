import type { Metadata } from "next";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Connect with Samina Batool for community development advisory, climate resilience research partnerships, education reform consulting, or speaking engagements.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===== 01. EDITORIAL HERO ===== */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-background border-b border-surface-border font-sans">
        <Container size="editorial">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-widest text-strong-accent mb-4">
              <span>Partnership & Advisory</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Contact & Collaboration
            </h1>
            
            <p className="mt-4 text-body sm:text-body-large text-text-secondary leading-relaxed">
              Connect with Samina Batool for institutional advisory, field research partnerships, girls&apos; education consulting, and climate adaptation speaking engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 02. CONTACT & ADVISORY SECTION ===== */}
      <section className="py-16 sm:py-24 bg-surface font-sans">
        <Container size="standard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Direct Channels */}
            <div>
              <SectionHeading
                eyebrow="Direct Channels"
                title="Professional Connection"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${siteConfig.author.email}`}
                      className="mt-1 block text-body-small font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {siteConfig.author.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                      Direct Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.author.phone}`}
                      className="mt-1 block text-body-small font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {siteConfig.author.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                      Location
                    </p>
                    <p className="mt-1 text-body-small font-medium text-primary leading-relaxed">
                      {siteConfig.author.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Advisory Scope */}
              <div className="mt-8 rounded-lg border border-surface-border bg-background p-6 shadow-hairline">
                <h3 className="font-display text-xl font-normal text-primary mb-3">
                  Advisory & Collaboration Scope
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Grassroots Community Mobilization & Snowflake Organizing",
                    "Climate Resilience & Disaster Risk Reduction (DRR) Program Design",
                    "Girls' Education Advocacy & SMC Capacity Building",
                    "Field Research, Evaluation & Data Collection in Gilgit-Baltistan",
                    "MHM & Women's Health Leadership Training",
                    "Youth Climate Action & Environmental Education",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 items-start text-caption text-text-secondary"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CV Download */}
              <div className="mt-6">
                <Button href="/documents/Samina-Batool-CV.pdf" variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4 text-secondary" />
                  <span>Download Official CV (PDF)</span>
                </Button>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div>
              <SectionHeading
                eyebrow="Direct Message"
                title="Send an Inquiry"
              />
              <div className="rounded-lg border border-surface-border bg-background p-7 sm:p-8 shadow-hairline">
                <form
                  className="space-y-5"
                  action={`mailto:${siteConfig.author.email}`}
                  method="POST"
                  encType="text/plain"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full rounded-md border border-surface-border bg-surface px-4 py-2.5 text-body-small text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full rounded-md border border-surface-border bg-surface px-4 py-2.5 text-body-small text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5"
                    >
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="contact-org"
                      name="organization"
                      className="w-full rounded-md border border-surface-border bg-surface px-4 py-2.5 text-body-small text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                      placeholder="Your institution or organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1.5"
                    >
                      Message / Inquiry Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-md border border-surface-border bg-surface px-4 py-2.5 text-body-small text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors resize-y"
                      placeholder="Describe the advisory, research partnership, or speaking engagement..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto shadow-sm">
                    <Send className="mr-2 h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
