import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about L&LL courses, levels, DELF/DALF, schedules, online learning, and corporate training.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clarity before you begin."
        description="Levels, certificates, formats, and timelines—answered with the same precision we bring to every lesson."
        ctaLabel="Still have questions?"
      />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
