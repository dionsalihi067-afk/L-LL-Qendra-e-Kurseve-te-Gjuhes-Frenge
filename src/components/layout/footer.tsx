"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { FOOTER_LINKS } from "@/data/content";
import { SITE, cn } from "@/lib/utils";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  return (
    <footer className="relative overflow-hidden bg-dark-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
      <div className="absolute -top-24 left-1/2 h-48 w-[60%] -translate-x-1/2 rounded-full bg-french-blue/40 blur-[80px]" />

      <div className="container-luxury relative section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-wide">L&LL</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Premium French education for curious minds—elegant methodology, certified pathways, and a community that
              opens doors worldwide.
            </p>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setStatus("ok");
                setEmail("");
              }}
            >
              <label htmlFor="newsletter" className="mb-2 block font-heading text-xs tracking-[0.2em] text-luxury-gold uppercase">
                Newsletter
              </label>
              <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/35"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-luxury-gold px-5 text-sm font-semibold text-dark-navy transition-opacity hover:opacity-90"
                  aria-label="Subscribe"
                >
                  Join <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {status === "ok" ? (
                <p className="mt-2 text-xs text-success" role="status">
                  Merci — you&apos;re on the list.
                </p>
              ) : null}
            </form>
          </div>

          {(
            [
              ["Learn", FOOTER_LINKS.learn],
              ["Discover", FOOTER_LINKS.discover],
              ["Connect", FOOTER_LINKS.connect],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 font-heading text-xs tracking-[0.22em] text-white/40 uppercase">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
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
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.fullName}. Crafted with intention in Paris.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
              { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
              { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: SITE.social.youtube, icon: Youtube, label: "YouTube" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-luxury-gold/50 hover:text-luxury-gold",
                )}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <label className="sr-only" htmlFor="lang">
              Language
            </label>
            <select
              id="lang"
              className="rounded-full border border-white/10 bg-transparent px-3 py-2 text-xs text-white/70 outline-none"
              defaultValue="en"
              aria-label="Language selector"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="sq">SQ</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
