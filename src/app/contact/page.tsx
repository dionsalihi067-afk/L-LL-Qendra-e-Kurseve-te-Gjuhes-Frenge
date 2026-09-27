import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact L&LL – French Language Center. Book a placement conversation, ask about courses, or plan corporate training.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's begin the conversation."
        description="Tell us where you are and where you want to go. We'll reply with a clear pathway—usually within one business day."
        ctaHref="#contact-form"
        ctaLabel="Write to us"
      />
      <section id="contact-form" className="section-padding pt-0">
        <div className="container-luxury">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
