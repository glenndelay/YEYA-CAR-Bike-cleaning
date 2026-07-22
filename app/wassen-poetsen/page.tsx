import type { Metadata } from "next";
import { CheckList, PageShell, TextBlock } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Wassen & Poetsen",
  description: "Auto wassen, auto poetsen en motor poetsen voor regulier onderhoud. Op afspraak of in overleg op locatie."
};

const items = [
  "Handwas",
  "Velgen reinigen",
  "Banden behandelen",
  "Interieur stofzuigen",
  "Dashboard reinigen",
  "Ramen schoonmaken",
  "Kunststofdelen verzorgen",
  "Lak opfrissen",
  "Eventueel een beschermende wax"
];

export default function WashingPage() {
  return (
    <PageShell
      eyebrow="Wassen & Poetsen"
      title="Voor een frisse, schone en verzorgde auto of motor."
      intro="Wassen en poetsen is geschikt wanneer je voertuig weer netjes moet zijn voor dagelijks gebruik. Geen ingewikkeld verhaal, maar gewoon goed onderhoud met aandacht."
      image="/images/detailing1.jpg"
      imageAlt="Auto wordt met de hand gewassen"
    >
      <TextBlock title="Regulier onderhoud dat je voertuig netjes houdt">
        <p>
          Deze behandeling is ideaal als je auto of motor vuil is geworden door dagelijks gebruik, woon-werkverkeer, vakantie, regen, stof of straatvuil.
        </p>
        <p>
          We maken je voertuig met de hand schoon en letten op de plekken die vaak worden overgeslagen. Denk aan velgen, ramen, dashboard, kunststofdelen en het interieur.
        </p>
        <p>
          Wassen en poetsen kan op afspraak op ons adres. In overleg is auto poetsen op locatie ook mogelijk.
        </p>
      </TextBlock>
      <section className="section-padding bg-[#f8f6fb] dark:bg-graphite">
        <div className="container-premium">
          <CheckList items={items} />
        </div>
      </section>
    </PageShell>
  );
}
