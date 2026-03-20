// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface HoursTableProps {
  hours: Record<string, string>;
  className?: string;
}

export function HoursTable({ hours, className }: HoursTableProps) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
      <table className="w-full text-sm">
        <tbody>
          {Object.entries(hours).map(([day, time]) => (
            <tr
              key={day}
              className={cn(
                "border-b border-border last:border-0",
                day === today && "bg-primary/5"
              )}
            >
              <td className={cn("px-4 py-3 font-medium", day === today && "text-foreground")}>
                {day}
                {day === today && (
                  <span className="ml-2 text-xs text-muted-foreground">(Today)</span>
                )}
              </td>
              <td className="px-4 py-3 text-right text-muted-foreground">{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
