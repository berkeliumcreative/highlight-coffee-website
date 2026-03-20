// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export function NewsletterSignup({
  heading = "Stay Updated",
  description = "Subscribe to get the latest updates.",
  buttonText = "Subscribe",
  className,
}: NewsletterSignupProps) {
  return (
    <div className={cn("text-center max-w-md mx-auto", className)}>
      <h3 className="text-lg font-semibold">{heading}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--theme-accent)]/30"
        />
        <button
          type="submit"
          className="rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--theme-accent)" }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
