import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display, Space_Grotesk } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { ClientShell } from "@/components/layout/client-shell";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} | Premium French Education`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "French language school",
    "DELF",
    "DALF",
    "learn French",
    "Business French",
    "Paris French courses",
    "L&LL",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.fullName,
    title: SITE.tagline,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.tagline,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.fullName,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue de Rivoli",
    addressLocality: "Paris",
    postalCode: "75001",
    addressCountry: "FR",
  },
  sameAs: Object.values(SITE.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-full focus:bg-luxury-gold focus:px-4 focus:py-2 focus:text-dark-navy"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProviders>
          <ClientShell>{children}</ClientShell>
        </AppProviders>
      </body>
    </html>
  );
}
