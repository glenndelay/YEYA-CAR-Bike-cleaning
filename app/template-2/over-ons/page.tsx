import type { Metadata } from "next";
import { T2PageHero, T2TextSection } from "@/components/template-two";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons | Template 2",
  description: "Tweede template: persoonlijke over ons pagina voor YEYA CAR & Bike Detailing."
};

export default function TemplateTwoAboutPage() {
  return (
    <main>
      <T2PageHero
        label="Over ons"
        title="Klein van opzet, groot in aandacht."
        text={`${company.name} is geen groot bedrijf met snelle productie. We werken kleinschalig omdat persoonlijk contact en netjes werk voor ons belangrijk zijn.`}
        image="/images/interior.jpg"
        imageAlt="Interieur wordt netjes gereinigd"
      />
      <T2TextSection title="Waarom kleinschalig beter bij ons past">
        <p>Bij ons heb je direct contact met degene die jouw auto of motor behandelt. Dat maakt het makkelijk om je wensen te bespreken en eerlijk advies te krijgen.</p>
        <p>Iedere auto en motor krijgt de tijd en aandacht die nodig is. Soms is een gewone poetsbeurt genoeg. Soms vraagt een voertuig om detailing of polijsten.</p>
        <p>We denken graag mee met de klant en willen werk afleveren waar jij tevreden mee bent en waar wij zelf trots op zijn.</p>
      </T2TextSection>
    </main>
  );
}
