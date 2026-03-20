// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterColumnsProps {
  businessName: string;
  columns: FooterColumn[];
  description?: string;
  className?: string;
}

export function FooterColumns({
  businessName,
  columns,
  description,
  className,
}: FooterColumnsProps) {
  return (
    <footer className={cn("border-t border-border", className)}>
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="font-bold text-lg mb-2">{businessName}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
      </div>
    </footer>
  );
}
