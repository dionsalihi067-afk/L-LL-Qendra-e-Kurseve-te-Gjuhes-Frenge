import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { MILESTONES } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story of L&LL – French Language Center: elegant methodology, certified pathways, and a Paris-born atelier for the world.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About L&LL"
        title="An atelier for elegant French."
        description="Founded beside the Louvre, L&LL exists for learners who want more than vocabulary—they want presence, precision, and doors that open."
      />

      <section className="section-padding pt-0">
        <div className="container-luxury max-w-3xl">
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-dark-navy md:text-3xl">
              We believe French is not merely spoken—it is inhabited. Every lesson at L&LL is designed to make you sound
              like someone who belongs in the conversation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-dark-navy/65 md:text-lg">
              From teenagers preparing for campus life to executives negotiating in Lyon, from parents seeking joyful
              foundations for their children to candidates pursuing DELF and DALF—our faculty meets ambition with craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-dark-navy text-white">
        <div className="container-luxury">
          <p className="font-heading text-xs tracking-[0.3em] text-luxury-gold uppercase">Timeline</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Milestones that shaped us.</h2>
          <div className="mt-14 space-y-10 border-l border-white/15 pl-8">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05} as="article">
                <p className="font-numbers text-luxury-gold">{m.year}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">{m.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
