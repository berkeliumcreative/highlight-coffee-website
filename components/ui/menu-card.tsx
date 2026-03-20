// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface MenuCardProps {
  categories: MenuCategory[];
  className?: string;
}

export function MenuCard({ categories, className }: MenuCardProps) {
  return (
    <div className={cn("space-y-10", className)}>
      {categories.map((cat, i) => (
        <div key={i}>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b border-border">
            {cat.category}
          </h3>
          <div className="space-y-4">
            {cat.items.map((item, j) => (
              <div key={j} className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--theme-accent)" }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
