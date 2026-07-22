import type { Metadata } from "next";
import { QuoteCalculator } from "@/components/quote-calculator";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag direct een offerte aan voor auto detailing, motor detailing, polijsten, interieurreiniging of keramische coating.",
  alternates: {
    canonical: "/offerte-aanvragen"
  },
  openGraph: {
    title: `Offerte aanvragen | ${company.name}`,
    description: "Bereken direct een prijsindicatie voor jouw auto of motor.",
    images: ["/images/hero.jpg"]
  }
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] px-5 pb-20 pt-32 dark:bg-ink sm:px-8 lg:px-12">
      <div className="container-premium">
        <QuoteCalculator />
      </div>
    </main>
  );
}
