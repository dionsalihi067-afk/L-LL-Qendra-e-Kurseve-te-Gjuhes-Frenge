import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { BLOG_POSTS } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on learning French, DELF strategy, business communication, and life in francophone cultures from L&LL.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Ideas for fluent living."
        description="Essays and guides from our faculty—exam strategy, professional register, and the quiet craft of sounding at home in French."
        ctaHref="/contact"
        ctaLabel="Talk to an advisor"
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-soft backdrop-blur transition-shadow hover:shadow-lift">
                <div className="h-36 bg-gradient-to-br from-french-blue via-[#1a4f8f] to-luxury-gold/80" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs tracking-[0.18em] text-luxury-gold uppercase">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-dark-navy transition-colors group-hover:text-french-blue">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-dark-navy/60">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-dark-navy/40">{post.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
