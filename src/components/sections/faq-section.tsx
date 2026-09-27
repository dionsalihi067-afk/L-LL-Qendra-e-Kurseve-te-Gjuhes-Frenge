"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding relative">
      <div className="container-luxury grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="FAQ"
            title={<span className="font-display">Answers, elegantly clear.</span>}
            description="Everything you need to begin—levels, certificates, schedules, and corporate options."
          />
          <MagneticButton href="/faq" variant="ghost">
            View all questions
          </MagneticButton>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-soft backdrop-blur"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm font-semibold text-dark-navy md:text-base">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-french-blue/8 text-french-blue">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-dark-navy/65">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
