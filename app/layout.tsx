import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Playfair_Display,
  DM_Sans,
  Space_Grotesk,
  Montserrat,
  Lato,
  Cormorant_Garamond,
  Raleway,
  Outfit,
  Sora,
  Nunito,
} from "next/font/google";
import content from "../data/content.json";
import "./globals.css";
import { cn } from "@/lib/utils";

/* ============================================================
   DYNAMIC FONT SYSTEM
   content.json "theme.fontFamily" maps to a font pair.
   Heading font -> --font-display CSS variable
   Body font    -> --font-body CSS variable
   ============================================================ */

// Load all supported fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-lato", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

// All font variables combined
const allFontVars = cn(
  inter.variable, poppins.variable, playfairDisplay.variable,
  dmSans.variable, spaceGrotesk.variable, montserrat.variable,
  lato.variable, cormorant.variable, raleway.variable,
  outfit.variable, sora.variable, nunito.variable,
);

// Font pair definitions
const FONT_PAIRS: Record<string, { heading: string; body: string }> = {
  // Mapped by content.json theme.fontFamily value
  "modern":   { heading: "var(--font-poppins)",    body: "var(--font-inter)" },
  "elegant":  { heading: "var(--font-playfair)",   body: "var(--font-inter)" },
  "playful":  { heading: "var(--font-space-grotesk)", body: "var(--font-dm-sans)" },
  "minimal":  { heading: "var(--font-inter)",      body: "var(--font-inter)" },
  "bold":     { heading: "var(--font-montserrat)",  body: "var(--font-inter)" },
  "refined":  { heading: "var(--font-cormorant)",  body: "var(--font-lato)" },
  "clean":    { heading: "var(--font-raleway)",    body: "var(--font-inter)" },
  "friendly": { heading: "var(--font-nunito)",     body: "var(--font-inter)" },
  "techy":    { heading: "var(--font-sora)",       body: "var(--font-inter)" },
  "sharp":    { heading: "var(--font-outfit)",     body: "var(--font-inter)" },
  // Legacy support: direct font names
  "Poppins":  { heading: "var(--font-poppins)",    body: "var(--font-inter)" },
  "Inter":    { heading: "var(--font-inter)",      body: "var(--font-inter)" },
  "Playfair Display": { heading: "var(--font-playfair)", body: "var(--font-inter)" },
  "Montserrat": { heading: "var(--font-montserrat)", body: "var(--font-inter)" },
};

// Theme mode detection from content.json
function getThemeMode(): string {
  const themeMode = (content as any).theme?.mode;
  if (themeMode) return themeMode; // explicit override

  // Auto-detect from primaryColor darkness
  const primary = content.theme?.primaryColor || "#0f172a";
  const hex = primary.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance < 0.3) return "dark";
  if (luminance > 0.8) return "light";
  return "warm";
}

// Resolve font pair
const fontFamily = content.theme?.fontFamily || "modern";
const fontPair = FONT_PAIRS[fontFamily] || FONT_PAIRS["modern"];
const themeMode = getThemeMode();

// Theme color for browser chrome
const THEME_COLORS: Record<string, string> = {
  dark: "#030712",
  light: "#FAFAF8",
  warm: "#FFF8F0",
};

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords.join(", "),
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(allFontVars, themeMode)}>
      <head>
        <meta name="theme-color" content={THEME_COLORS[themeMode] || "#030712"} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --theme-accent: ${content.theme.accentColor};
                --font-display: ${fontPair.heading};
                --font-body: ${fontPair.body};
              }
              body { font-family: var(--font-body), system-ui, sans-serif; }
              h1, h2, h3, h4, h5, h6 { font-family: var(--font-display), system-ui, sans-serif; }
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
