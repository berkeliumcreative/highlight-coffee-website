// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";
import { Accordion } from "./accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  className,
}: FAQSectionProps) {
  return (
    <div className={cn("max-w-3xl mx-auto", className)}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        )}
      </div>
      <Accordion
        items={items.map((item, i) => ({
          id: `faq-${i}`,
          title: item.question,
          content: <p>{item.answer}</p>,
        }))}
      />
    </div>
  );
}
