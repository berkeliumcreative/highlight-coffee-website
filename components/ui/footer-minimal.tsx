// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterMinimalProps {
  businessName: string;
  links?: FooterLink[];
  className?: string;
}

export function FooterMinimal({ businessName, links = [], className }: FooterMinimalProps) {
  return (
    <footer className={cn("border-t border-border py-8", className)}>
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
        </p>
        {links.length > 0 && (
          <nav className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
