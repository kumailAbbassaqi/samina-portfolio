import React from "react";
import { Navbar } from "@/components/navigation/Navbar";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-surface shadow-hairline transition-colors duration-200">
      <Navbar />
    </header>
  );
};
