// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  phone?: string;
  email?: string;
  address?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContactSection({
  phone,
  email,
  address,
  className,
  children,
}: ContactSectionProps) {
  return (
    <motion.div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {phone && (
        <a
          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-[var(--theme-accent)]"
        >
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Phone</p>
            <p className="font-medium">{phone}</p>
          </div>
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-[var(--theme-accent)]"
        >
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="font-medium">{email}</p>
          </div>
        </a>
      )}
      {address && (
        <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Address</p>
            <p className="font-medium">{address}</p>
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
}
