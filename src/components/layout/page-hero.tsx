import { MagneticButton } from "@/components/ui/magnetic-button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Start Learning",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,58,113,0.12),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(200,166,70,0.12),transparent_45%)]" />
      <div className="container-luxury relative">
        <p className="font-heading text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] text-dark-navy md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-dark-navy/65 md:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <MagneticButton href={ctaHref} variant="primary">
            {ctaLabel}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
