import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Private Lessons",
  description:
    "1:1 French mentorship tailored to your goals, schedule, and learning style—accelerated, elegant, personal.",
};

export default function PrivateLessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private"
        title="One learner. One mentor. Unlimited precision."
        description="Private lessons at L&LL are crafted like couture—curriculum, pace, and feedback shaped exclusively around you."
        ctaLabel="Book a private session"
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Goal-aligned curriculum",
              body: "Immigration, university, career, or pure passion—your syllabus follows the destination.",
            },
            {
              title: "Flexible cadence",
              body: "Morning intensity or evening refinement. Online, in-person, or hybrid.",
            },
            {
              title: "Rapid feedback loops",
              body: "Every session ends with clear next steps, recordings when useful, and measurable progress.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="rounded-[1.75rem] border border-white/60 bg-white/70 p-7 shadow-soft backdrop-blur">
                <h2 className="font-heading text-xl font-semibold text-dark-navy">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-dark-navy/65">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
