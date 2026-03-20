// @ts-nocheck
"use client";

/**
 * MASTER TEMPLATE — BUILD VERIFICATION PAGE
 *
 * Imports ALL 200 components to verify they compile.
 * For each business, Claude replaces this with a custom page.tsx.
 * Next.js tree-shakes unused components — zero bundle bloat.
 */

// --- Buttons ---
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PulseButton } from "@/components/ui/pulse-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowButton } from "@/components/ui/arrow-button";
import { IconButton } from "@/components/ui/icon-button";

// --- Cards ---
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientCard } from "@/components/ui/gradient-card";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { HoverGlowCard } from "@/components/ui/hover-glow-card";
import { HoverLiftCard } from "@/components/ui/hover-lift-card";
import { HoverBorderCard } from "@/components/ui/hover-border-card";
import { HoverRevealCard } from "@/components/ui/hover-reveal-card";
import { IconCard } from "@/components/ui/icon-card";
import { ImageOverlayCard } from "@/components/ui/image-overlay-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatedBorderCard } from "@/components/ui/animated-border-card";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { StackedCards } from "@/components/ui/stacked-cards";
import { HighlightCard } from "@/components/ui/highlight-card";
import { ChecklistCard } from "@/components/ui/checklist-card";
import { EmbossedCard } from "@/components/ui/embossed-card";
import { StatCard } from "@/components/ui/stat-card";
import { ContentCard } from "@/components/ui/content-card";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { CardStack } from "@/components/ui/card-stack";

// --- Text & Animation Effects ---
import { BlurFade } from "@/components/ui/blur-fade";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextRotate } from "@/components/ui/text-rotate";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { TextHighlight } from "@/components/ui/text-highlight";
import { TextReveal } from "@/components/ui/text-reveal";
import { TextBadge } from "@/components/ui/text-badge";
import { TextBlock } from "@/components/ui/text-block";
import { TextLoop } from "@/components/ui/text-loop";
import { GradientText } from "@/components/ui/gradient-text";
import { LetterPullup } from "@/components/ui/letter-pullup";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { StaggerText } from "@/components/ui/stagger-text";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Typewriter } from "@/components/ui/typewriter";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { ParallaxText } from "@/components/ui/parallax-text";
import { MarqueeText } from "@/components/ui/marquee-text";
import { MultiColumnText } from "@/components/ui/multi-column-text";

// --- Counters & Numbers ---
import { CountUp } from "@/components/ui/count-up";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { NumberGrid } from "@/components/ui/number-grid";

// --- Scroll & Reveal ---
import { InView } from "@/components/ui/in-view";
import { SpringReveal } from "@/components/ui/spring-reveal";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ScrollSnapSection } from "@/components/ui/scroll-snap-section";
import { HoverScale } from "@/components/ui/hover-scale";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollToSection } from "@/components/ui/scroll-to-section";

// --- Heroes ---
import { HeroSimple } from "@/components/ui/hero-simple";
import { HeroGradient } from "@/components/ui/hero-gradient";
import { HeroSplit } from "@/components/ui/hero-split";
import { HeroVideo } from "@/components/ui/hero-video";
import { HeroMinimal } from "@/components/ui/hero-minimal";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { HeroCentered } from "@/components/ui/hero-centered";
import { HeroFullscreen } from "@/components/ui/hero-fullscreen";
import { HeroWithFeatures } from "@/components/ui/hero-with-features";
import { SplitHeroImage } from "@/components/ui/split-hero-image";

// --- Navigation ---
import { FloatingNav } from "@/components/ui/floating-nav";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { TransparentNav } from "@/components/ui/transparent-nav";
import { MobileMenu } from "@/components/ui/mobile-menu";

// --- Layout & Sections ---
import { Container } from "@/components/ui/container";
import { SplitSection } from "@/components/ui/split-section";
import { StickySection } from "@/components/ui/sticky-section";
import { FullBleedSection } from "@/components/ui/full-bleed-section";
import { OverlaySection } from "@/components/ui/overlay-section";
import { GradientSection } from "@/components/ui/gradient-section";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageWithText } from "@/components/ui/image-with-text";
import { AsymmetricGrid } from "@/components/ui/asymmetric-grid";
import { MasonryLayout } from "@/components/ui/masonry-layout";
import { TwoColumnText } from "@/components/ui/two-column-text";
import { GridShowcase } from "@/components/ui/grid-showcase";
import { DiagonalSection } from "@/components/ui/diagonal-section";
import { BorderedSection } from "@/components/ui/bordered-section";
import { ZigzagSections } from "@/components/ui/zigzag-sections";
import { Spacer } from "@/components/ui/spacer";

// --- Backgrounds & Patterns ---
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { GradientBlurBackground } from "@/components/ui/gradient-blur-background";
import { AnimatedBackground } from "@/components/ui/animated-background";

// --- Business Sections ---
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PricingCard } from "@/components/ui/pricing-card";
import { PricingTable } from "@/components/ui/pricing-table";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { FeatureComparison } from "@/components/ui/feature-comparison";
import { FeatureShowcase } from "@/components/ui/feature-showcase";
import { FeatureList } from "@/components/ui/feature-list";
import { ContactSection } from "@/components/ui/contact-section";
import { ContactForm } from "@/components/ui/contact-form";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { MiniMap } from "@/components/ui/mini-map";
import { FAQSection } from "@/components/ui/faq-section";
import { CTABanner } from "@/components/ui/cta-banner";
import { MenuCard } from "@/components/ui/menu-card";
import { ServiceCard } from "@/components/ui/service-card";
import { ServiceList } from "@/components/ui/service-list";
import { ServiceGrid } from "@/components/ui/service-grid";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { BookingPrompt } from "@/components/ui/booking-prompt";
import { BeforeAfter } from "@/components/ui/before-after";
import { ReviewStars } from "@/components/ui/review-stars";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";
import { RatingSummary } from "@/components/ui/rating-summary";
import { StepsSection } from "@/components/ui/steps-section";
import { QuoteBlock } from "@/components/ui/quote-block";
import { AwardsSection } from "@/components/ui/awards-section";
import { ExperienceBadge } from "@/components/ui/experience-badge";
import { LocationCard } from "@/components/ui/location-card";
import { PhoneCTA } from "@/components/ui/phone-cta";
import { VideoSection } from "@/components/ui/video-section";

// --- Lists, Badges & Social ---
import { Badge } from "@/components/ui/badge";
import { BadgeGroup } from "@/components/ui/badge-group";
import { BadgeList } from "@/components/ui/badge-list";
import { RibbonBadge } from "@/components/ui/ribbon-badge";
import { RotatingBadge } from "@/components/ui/rotating-badge";
import { TrustBadges } from "@/components/ui/trust-badges";
import { IconList } from "@/components/ui/icon-list";
import { IconGrid } from "@/components/ui/icon-grid";
import { SocialLinks } from "@/components/ui/social-links";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { NumberedList } from "@/components/ui/numbered-list";
import { ComparisonSlider } from "@/components/ui/comparison-slider";

// --- Galleries & Carousels ---
import { ImageGallery } from "@/components/ui/image-gallery";
import { MasonryGallery } from "@/components/ui/masonry-gallery";
import { GalleryStrip } from "@/components/ui/gallery-strip";
import { PhotoStrip } from "@/components/ui/photo-strip";
import { ScrollCarousel } from "@/components/ui/scroll-carousel";
import { Carousel } from "@/components/ui/carousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Marquee } from "@/components/ui/marquee";
import { ImageCompare } from "@/components/ui/image-compare";
import { HoverImageCard } from "@/components/ui/hover-image-card";

// --- UI Primitives ---
import { Separator } from "@/components/ui/separator";
import { Accordion } from "@/components/ui/accordion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { TabContent } from "@/components/ui/tab-content";
import { AnimatedDivider } from "@/components/ui/animated-divider";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { BackToTop } from "@/components/ui/back-to-top";
import { Timeline } from "@/components/ui/timeline";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { FullWidthImage } from "@/components/ui/full-width-image";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { HoverCardGroup } from "@/components/ui/hover-card-group";
import { CategoryFilter } from "@/components/ui/category-filter";
import { Modal } from "@/components/ui/modal";
import { Drawer } from "@/components/ui/drawer";
import { TooltipWrapper } from "@/components/ui/tooltip-wrapper";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NotificationBadge } from "@/components/ui/notification-badge";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { NewsletterSignup } from "@/components/ui/newsletter-signup";
import { Banner } from "@/components/ui/banner";
import { InfoBar } from "@/components/ui/info-bar";
import { LabeledDivider } from "@/components/ui/labeled-divider";
import { WaveDivider } from "@/components/ui/wave-divider";
import { AccentLine } from "@/components/ui/accent-line";
import { CircleStat } from "@/components/ui/circle-stat";

// --- Special Effects ---
import { Globe } from "@/components/ui/globe";
import { LampContainer } from "@/components/ui/lamp";
import { Particles } from "@/components/ui/particles";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

// --- Footers ---
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { FooterColumns } from "@/components/ui/footer-columns";
import { FooterGradient } from "@/components/ui/footer-gradient";

// --- Content ---
import content from "../data/content.json";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Basic hero with content.json data */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <BlurFade delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {content.hero.heading}
          </h1>
        </BlurFade>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          {content.hero.subheading}
        </p>
        <Button asChild>
          <a href={content.hero.ctaLink}>{content.hero.ctaText}</a>
        </Button>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">{content.about.heading}</h2>
        {content.about.paragraphs.map((p: string, i: number) => (
          <p key={i} className="text-muted-foreground text-lg mb-4">{p}</p>
        ))}
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.services.map((s: any, i: number) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-muted-foreground text-lg">{content.contact.address}</p>
        <p className="text-muted-foreground text-lg">{content.contact.phone}</p>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {content.businessName}. All rights reserved.</p>
      </footer>
    </main>
  );
}
