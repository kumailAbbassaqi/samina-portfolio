import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "reading" | "standard" | "editorial" | "full" | "sm" | "md" | "lg" | "xl";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "editorial",
  ...props
}) => {
  const sizeClasses: Record<string, string> = {
    reading: "max-w-reading",
    sm: "max-w-reading",
    standard: "max-w-standard",
    md: "max-w-standard",
    editorial: "max-w-editorial",
    lg: "max-w-editorial",
    xl: "max-w-editorial",
    full: "max-w-editorial-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size] || sizeClasses.editorial,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
