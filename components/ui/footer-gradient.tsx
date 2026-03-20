// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface FooterGradientProps {
  businessName: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  className?: string;
  children?: React.ReactNode;
}

export function FooterGradient({
  businessName,
  tagline,
  phone,
  email,
  address,
  className,
  children,
}: FooterGradientProps) {
  return (
    <footer
      className={cn("relative overflow-hidden pt-16 pb-8", className)}
      style={{
        background: `linear-gradient(to bottom, var(--background), var(--theme-accent)08)`,
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold">{businessName}</h3>
            {tagline && <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>}
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              {phone && <p>{phone}</p>}
              {email && <p>{email}</p>}
              {address && <p>{address}</p>}
            </div>
          </div>
          <div>{children}</div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
