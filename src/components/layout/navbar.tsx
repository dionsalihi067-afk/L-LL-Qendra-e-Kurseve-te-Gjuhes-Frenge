"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useCursor } from "@/components/providers/cursor-provider";
import { cn, SITE } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const { setVariant, reset } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "container-luxury mx-auto flex items-center justify-between rounded-full px-4 transition-all duration-500 md:px-6",
          scrolled
            ? "glass py-2.5 shadow-soft"
            : "bg-transparent py-3",
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onMouseEnter={() => setVariant("hover")}
          onMouseLeave={reset}
          aria-label={`${SITE.name} home`}
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-french-blue text-white">
            <span className="font-display text-sm tracking-wider">L&LL</span>
            <span className="absolute inset-x-2 bottom-1.5 h-px origin-left scale-x-0 bg-luxury-gold transition-transform duration-500 group-hover:scale-x-100" />
          </span>
          <span className="hidden font-heading text-sm font-semibold tracking-wide text-dark-navy sm:block">
            French Language Center
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <button
                  className="group relative flex items-center gap-1 px-3 py-2 font-heading text-sm font-medium text-dark-navy/80 transition-colors hover:text-french-blue"
                  aria-expanded={mega}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      mega && "rotate-180",
                    )}
                  />
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-luxury-gold transition-transform duration-300 group-hover:scale-x-100" />
                </button>
                <AnimatePresence>
                  {mega ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="glass absolute top-full left-0 mt-3 min-w-[240px] overflow-hidden rounded-2xl p-2 shadow-lift"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 font-heading text-sm text-dark-navy/80 transition-colors hover:bg-french-blue/5 hover:text-french-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 font-heading text-sm font-medium text-dark-navy/80 transition-colors hover:text-french-blue"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={reset}
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-luxury-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <MagneticButton href="/contact" variant="gold" label="Join" className="!px-5 !py-2.5 text-xs">
              Start Learning
            </MagneticButton>
          </div>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-navy/10 bg-white/60 backdrop-blur lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass container-luxury mx-auto mt-2 overflow-hidden rounded-3xl p-6 shadow-lift lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 font-heading text-lg font-medium text-dark-navy"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children
                    ? link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-6 py-2 text-sm text-dark-navy/65"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))
                    : null}
                </div>
              ))}
              <MagneticButton href="/contact" variant="primary" className="mt-4 w-full">
                Start Learning
              </MagneticButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
