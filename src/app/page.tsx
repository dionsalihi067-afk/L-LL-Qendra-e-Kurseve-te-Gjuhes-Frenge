import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CoursesShowcase } from "@/components/sections/courses-showcase";
import { LearningJourney } from "@/components/sections/learning-journey";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TeachersSection } from "@/components/sections/teachers-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutTeaser />
      <WhyChooseUs />
      <CoursesShowcase limit={6} />
      <LearningJourney />
      <StatsSection />
      <TestimonialsSection />
      <TeachersSection limit={4} />
      <GallerySection />
      <FaqSection limit={4} />
      <CtaBanner />
    </>
  );
}
