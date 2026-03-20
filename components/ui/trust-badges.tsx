// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface TrustBadge {
  icon?: React.ReactNode;
  text: string;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

export function TrustBadges({ badges, className }: TrustBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 md:gap-10", className)}>
      {badges.map((badge, i) => (
        <div key={i} className="flex items-center gap-2 text-muted-foreground">
          {badge.icon || (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--theme-accent)" }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          )}
          <span className="text-sm font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
