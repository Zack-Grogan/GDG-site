import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

import "./globals.css";

const familjen = Familjen_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-familjen",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grogan.dev"),
  title: {
    default: "Grogan Development Group | Website, forms, and invoices",
    template: "%s",
  },
  description:
    "Grogan Development Group LLC meets in the Tri-Cities. Zackariah Grogan fixes a page, the paperwork before a visit, and a quote that is typed twice.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={familjen.variable}>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
