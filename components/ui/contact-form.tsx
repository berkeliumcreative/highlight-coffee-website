// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  heading?: string;
  submitText?: string;
  fields?: Array<"name" | "email" | "phone" | "message">;
}

export function ContactForm({
  className,
  heading = "Get in Touch",
  submitText = "Send Message",
  fields = ["name", "email", "phone", "message"],
}: ContactFormProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 md:p-8", className)}>
      {heading && <h3 className="text-xl font-bold mb-6">{heading}</h3>}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {fields.includes("name") && (
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--theme-accent)]/30"
              placeholder="Your name"
            />
          </div>
        )}
        {fields.includes("email") && (
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--theme-accent)]/30"
              placeholder="your@email.com"
            />
          </div>
        )}
        {fields.includes("phone") && (
          <div>
            <label className="block text-sm font-medium mb-1.5">Phone</label>
            <input
              type="tel"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--theme-accent)]/30"
              placeholder="(555) 123-4567"
            />
          </div>
        )}
        {fields.includes("message") && (
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--theme-accent)]/30 resize-none"
              placeholder="How can we help?"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded-lg py-2.5 font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--theme-accent)" }}
        >
          {submitText}
        </button>
      </form>
    </div>
  );
}
