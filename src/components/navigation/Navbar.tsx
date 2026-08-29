"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Brand logo / Name */}
      <Link
        href="/"
        className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
      >
        <span className="font-display text-2xl font-normal tracking-tight text-primary group-hover:text-secondary transition-colors">
          {siteConfig.name}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium font-sans">
        {primaryNavigation
          .filter((item) => item.href !== "/contact")
          .map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors hover:text-secondary",
                  isActive
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary"
                    : "text-text-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
      </nav>

      {/* Action / Contact CTA or Mobile Toggle */}
      <div className="flex items-center space-x-3">
        <Link
          href="/contact"
          style={{ color: "#ffffff" }}
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-7 py-2.5 text-xs font-semibold !text-white transition-colors hover:bg-secondary hover:!text-white focus-visible:ring-2 focus-visible:ring-secondary"
        >
          Contact
        </Link>
        <MobileNav />
      </div>
    </div>
  );
};
