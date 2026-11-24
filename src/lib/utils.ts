import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("sq-XK").format(value);
}

export const SITE = {
  name: "L&LL",
  fullName: "L&LL – Qendra e Kurseve të Gjuhës Frënge",
  tagline: "Mësoni Frëngjisht. Hapni Mundësi të Reja.",
  description:
    "Mësoni gjuhën frënge përmes kurseve interaktive nga niveli A1 deri në B2, përgatitje për DELF, dhe mësim online. Prishtinë, Kosovë.",
  url: "https://ll-french.center",
  phone: "+383 48 631 432",
  whatsapp: "https://wa.me/38348631432",
  address: "Prishtinë, Kosovë",
  locale: "sq",
  social: {
    instagram: "https://www.instagram.com/llkursefrengjisht/",
  },
} as const;
