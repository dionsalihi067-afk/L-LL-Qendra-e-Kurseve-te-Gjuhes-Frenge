"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SITE } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-dark-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-[#0c1f33] to-french-blue" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/90 via-dark-navy/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-dark-navy/40" />

      <div className="container-luxury relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-32 md:justify-center md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-heading text-xs font-semibold tracking-[0.35em] text-luxury-gold uppercase"
        >
          {SITE.fullName}
        </motion.p>

        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          <motion.span
            className="block overflow-hidden"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Mësoni Frëngjisht.
          </motion.span>
          <motion.span
            className="mt-2 block overflow-hidden text-gradient-gold"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hapni Mundësi të Reja.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Kurse të gjuhës frënge nga niveli A1 deri në B2, përgatitje për DELF, dhe mësim online. Prishtinë, Kosovë.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/regjistrohu" variant="gold" label="Regjistrohu">
            Regjistrohu Tani
          </MagneticButton>
          <MagneticButton href="/kurset" variant="secondary" label="Kurset">
            Shiko Kurset
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#why"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Zbuloni më shumë"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase">Zbulo</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
