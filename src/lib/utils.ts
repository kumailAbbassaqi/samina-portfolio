import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names and resolves Tailwind CSS class conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date string to display format (e.g., "Jan 2024" or "2023 – Present")
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  if (dateString.toLowerCase() === "present") return "Present";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
