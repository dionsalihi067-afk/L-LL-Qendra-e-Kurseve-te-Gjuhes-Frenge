import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real outcomes from L&LL learners—exam passes, career promotions, immigration milestones, and new lives in French.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success"
        title="Proof lives in the people we teach."
        description="Behind every statistic is a voice that found its place—in a university hall, a boardroom, a préfecture, or a dinner table in France."
      />
      <StatsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
