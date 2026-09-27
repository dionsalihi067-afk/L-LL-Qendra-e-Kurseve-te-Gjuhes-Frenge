"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type SplitHeadlineProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

export function SplitHeadline({
  children,
  className,
  as: Tag = "h2",
}: SplitHeadlineProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0, rotateX: 40 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  return (
    <Tag
      ref={ref as never}
      className={cn("perspective-[800px]", className)}
      aria-label={children}
    >
      {children.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span data-word className="inline-block will-change-transform pr-[0.28em]">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 font-heading text-xs font-semibold tracking-[0.28em] text-luxury-gold uppercase">
          {eyebrow}
        </p>
      ) : null}
      <div className="font-display text-4xl leading-[1.05] text-dark-navy md:text-5xl lg:text-6xl">
        {title}
      </div>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-dark-navy/65 md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
