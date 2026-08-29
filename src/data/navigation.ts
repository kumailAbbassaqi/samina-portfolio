import { NavItem } from "@/types";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Overview", href: "/work" },
      { label: "Koh-e-Zan", href: "/work/koh-e-zan" },
      { label: "Saheli First Responder", href: "/work/saheli-first-responder" },
      { label: "Saheli Circles", href: "/work/saheli-circles" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Experience", href: "/experience" },
  { label: "Learning & Visits", href: "/learning" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  main: primaryNavigation,
  projects: [
    { label: "Koh-e-Zan", href: "/work/koh-e-zan" },
    { label: "Saheli First Responder", href: "/work/saheli-first-responder" },
    { label: "Saheli Circles", href: "/work/saheli-circles" },
  ],
};
