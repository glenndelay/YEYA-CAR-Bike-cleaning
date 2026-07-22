import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FloatingActions } from "@/components/floating-actions";
import { PageIntro } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { company } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voorbeeld-detailing.nl"),
  title: {
    default: `${company.name} | Auto poetsen en motor detailing`,
    template: `%s | ${company.name}`
  },
  description:
    "Kleinschalig poets- en detailingbedrijf voor iedere auto en motor. Auto poetsen, motor poetsen, auto detailing, polijsten, lakcorrectie en poetsen op locatie.",
  keywords: ["auto poetsen", "auto detailing", "motor poetsen", "auto polijsten", "auto wassen", "lakcorrectie", "keramische coating", "auto poetsen op locatie", "auto detailer", "motor detailing"],
  openGraph: {
    title: `${company.name} | Elke auto en elke motor verdient aandacht`,
    description: "Eerlijk en persoonlijk poetsen en detailen voor auto's en motoren.",
    url: "https://www.voorbeeld-detailing.nl",
    siteName: company.name,
    images: [{ url: "/images/yeya-logo.png", width: 1280, height: 1280, alt: "YEYA CAR & Bike Detailing logo" }],
    locale: "nl_NL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Auto en motor poetsen`,
    description: company.slogan,
    images: ["/images/yeya-logo.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <PageIntro />
        <Navbar />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
