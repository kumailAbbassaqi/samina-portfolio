import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-dark/20 bg-primary text-background font-sans">
      <Container size="editorial" className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand Col */}
          <div className="md:col-span-2 lg:col-span-5">
            <h2 className="font-display text-3xl font-normal tracking-tight text-background">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-body-small text-primary-subtle/80 max-w-sm leading-relaxed">
              {siteConfig.author.role}
            </p>
            <p className="mt-3 text-caption text-primary-subtle/60 max-w-sm">
              Saltoro Valley, Ghanche, Gilgit-Baltistan, Pakistan
            </p>
          </div>

          {/* Primary Navigation */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-eyebrow font-bold uppercase tracking-widest text-secondary">
              Core Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-body-small">
              {primaryNavigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-subtle/80 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Evidence */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="text-eyebrow font-bold uppercase tracking-widest text-secondary">
              Evidence & Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-body-small">
              {primaryNavigation.slice(5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-subtle/80 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/documents/Samina-Batool-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-white font-medium transition-colors"
                >
                  Download CV (PDF) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-light/20 pt-8 flex flex-col md:flex-row items-center justify-between text-caption text-primary-subtle/60">
          <p>© {currentYear} {siteConfig.name}. Official Portfolio & Documentation Archive.</p>
          <p className="mt-2 md:mt-0">100% verified against on-ground development records.</p>
        </div>
      </Container>
    </footer>
  );
};
