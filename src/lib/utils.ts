import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export const SITE = {
  name: "L&LL",
  fullName: "L&LL – French Language Center",
  tagline: "Master French. Open New Opportunities.",
  description:
    "Learn French with experienced instructors through interactive lessons, internationally recognized programs, and personalized support.",
  url: "https://ll-french.center",
  email: "bonjour@ll-french.center",
  phone: "+33 1 42 00 00 00",
  address: "12 Rue de Rivoli, 75001 Paris, France",
  locale: "en",
  social: {
    instagram: "https://instagram.com/llfrench",
    facebook: "https://facebook.com/llfrench",
    linkedin: "https://linkedin.com/company/llfrench",
    youtube: "https://youtube.com/@llfrench",
  },
} as const;
