"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { FOOTER_LINKS } from "@/data/content";
import { SITE } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
      <div className="absolute -top-24 left-1/2 h-48 w-[60%] -translate-x-1/2 rounded-full bg-french-blue/40 blur-[80px]" />

      <div className="container-luxury relative section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-wide">L&LL</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Qendër e kurseve të gjuhës frënge në Prishtinë — mësim cilësor nga niveli A1 deri në B2, përgatitje
              për DELF, dhe kurse online.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p>{SITE.address}</p>
              <a href={`tel:${SITE.phone}`} className="block transition-colors hover:text-luxury-gold">
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-luxury-gold/30 px-4 py-2 mt-2 text-xs font-semibold text-luxury-gold transition-colors hover:bg-luxury-gold hover:text-dark-navy"
              >
                Na shkruani në WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-heading text-xs tracking-[0.22em] text-white/40 uppercase">Kurset</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.kurset.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-luxury-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-heading text-xs tracking-[0.22em] text-white/40 uppercase">Informacione</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-luxury-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.fullName}. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-luxury-gold/50 hover:text-luxury-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
