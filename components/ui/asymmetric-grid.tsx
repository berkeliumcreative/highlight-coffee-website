// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface AsymmetricGridProps {
  children: React.ReactNode[];
  className?: string;
}

export function AsymmetricGrid({ children, className }: AsymmetricGridProps) {
  if (children.length < 2) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-6", className)}>
      <div className="md:col-span-7">{children[0]}</div>
      <div className="md:col-span-5 flex flex-col gap-6">
        {children.slice(1).map((child, i) => (
          <div key={i}>{child}</div>
        ))}
      </div>
    </div>
  );
}
