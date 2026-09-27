import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-padding pt-32 md:pt-40">
      <div className="container-luxury max-w-3xl">
        <p className="font-heading text-xs tracking-[0.28em] text-luxury-gold uppercase">
          {post.category} · {post.readTime}
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight text-dark-navy md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-dark-navy/45">{post.date}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-dark-navy/70 md:text-lg">
          <p>{post.excerpt}</p>
          <p>
            At L&LL, we treat language learning as craft. Strategy matters—but so does the feeling of being heard,
            corrected with care, and invited into the cultural texture of French life.
          </p>
          <p>
            Whether you are preparing for DELF, refining boardroom register, or simply wanting to belong in a Parisian
            conversation, the pathway begins with clarity: where you are, where you want to go, and the deliberate
            practice that bridges the two.
          </p>
          <p>
            Book a complimentary placement conversation. Leave with a plan that feels as elegant as the language itself.
          </p>
        </div>
        <div className="mt-10">
          <MagneticButton href="/contact" variant="primary">
            Start your pathway
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}
