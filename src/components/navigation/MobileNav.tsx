"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-primary hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-surface flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200 font-sans border-t border-surface-border shadow-card">
          <nav className="flex flex-col space-y-4">
            {primaryNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    className={cn(
                      "py-2 text-lg font-medium transition-colors hover:text-secondary",
                      isActive ? "text-primary font-semibold border-l-2 border-secondary pl-3" : "text-primary/85"
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-col space-y-2 border-l border-surface-border pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "text-sm py-1 transition-colors hover:text-secondary",
                            pathname === child.href
                              ? "text-primary font-semibold"
                              : "text-text-secondary"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-8 border-t border-surface-border pt-4 text-xs text-text-muted">
            <p className="font-display text-base font-normal text-primary">{siteConfig.name}</p>
            <p className="text-caption mt-0.5">{siteConfig.author.role}</p>
          </div>
        </div>
      )}
    </div>
  );
};
