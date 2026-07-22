import type { Metadata } from "next";
import { T2Checklist, T2PageHero, T2TextSection } from "@/components/template-two";

export const metadata: Metadata = {
  title: "Wassen & Poetsen | Template 2",
  description: "Tweede template: wassen en poetsen voor auto's en motoren, op afspraak of in overleg op locatie."
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

export default function TemplateTwoWashingPage() {
  return (
    <main>
      <T2PageHero
        label="Wassen & Poetsen"
        title="Voor een frisse, schone en verzorgde auto of motor."
        text="Deze behandeling is bedoeld voor regulier onderhoud. Ideaal als je voertuig weer netjes moet zijn voor dagelijks gebruik."
        image="/work/mercedes-resultaat.jpg"
        imageAlt="Zwarte Mercedes als voorbeeld van uitgevoerd werk"
      />
      <T2TextSection title="Netjes houden zonder ingewikkeld verhaal">
        <p>We reinigen je auto of motor met de hand en letten op de plekken die vaak worden overgeslagen. Denk aan velgen, ramen, dashboard, kunststofdelen en het interieur.</p>
        <p>Wassen en poetsen kan op afspraak op ons adres. In overleg is auto poetsen op locatie ook mogelijk.</p>
      </T2TextSection>
      <section className="bg-[#e7eee6] px-5 py-20 sm:px-8 lg:px-12">
        <div className="container-premium">
          <T2Checklist items={items} />
        </div>
      </section>
    </main>
  );
}
