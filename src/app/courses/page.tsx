import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CoursesShowcase } from "@/components/sections/courses-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore A1–C2, DELF, DALF, Business French, private mentorship, kids programs, and corporate training at L&LL.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Programs shaped around your horizon."
        description="Whether you need conversational confidence, official certification, or boardroom fluency—there is a precise L&LL pathway waiting."
        ctaHref="/contact"
        ctaLabel="Find my level"
      />
      <CoursesShowcase />
      <CtaBanner />
    </>
  );
}
