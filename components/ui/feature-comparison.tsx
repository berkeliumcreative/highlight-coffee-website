// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  us: boolean | string;
  others: boolean | string;
}

interface FeatureComparisonProps {
  rows: ComparisonRow[];
  ourLabel?: string;
  othersLabel?: string;
  className?: string;
}

export function FeatureComparison({
  rows,
  ourLabel = "Us",
  othersLabel = "Others",
  className,
}: FeatureComparisonProps) {
  const renderValue = (val: boolean | string) => {
    if (typeof val === "string") return val;
    return val ? (
      <span className="text-green-500 text-lg">✓</span>
    ) : (
      <span className="text-red-400 text-lg">✗</span>
    );
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-6 py-4 text-left font-medium">Feature</th>
            <th className="px-6 py-4 text-center font-bold" style={{ color: "var(--theme-accent)" }}>
              {ourLabel}
            </th>
            <th className="px-6 py-4 text-center font-medium text-muted-foreground">
              {othersLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              <td className="px-6 py-3">{row.feature}</td>
              <td className="px-6 py-3 text-center">{renderValue(row.us)}</td>
              <td className="px-6 py-3 text-center">{renderValue(row.others)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
