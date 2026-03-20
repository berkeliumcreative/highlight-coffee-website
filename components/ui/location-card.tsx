// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface LocationCardProps {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
  className?: string;
}

export function LocationCard({
  name,
  address,
  phone,
  email,
  hours,
  className,
}: LocationCardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      <h3 className="font-semibold text-lg mb-3">{name}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{address}</span>
        </div>
        {phone && (
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground">{phone}</a>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            <a href={`mailto:${email}`} className="hover:text-foreground">{email}</a>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>{hours}</span>
          </div>
        )}
      </div>
    </div>
  );
}
