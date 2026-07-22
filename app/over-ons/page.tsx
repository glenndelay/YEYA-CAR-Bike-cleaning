import type { Metadata } from "next";
import { PageShell, TextBlock } from "@/components/page-shell";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Maak kennis met YEYA CAR & Bike Detailing: een kleinschalig poets- en detailingbedrijf voor auto's en motoren."
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Over ons"
      title="Klein van opzet, groot in aandacht."
      intro={`${company.name} is geen groot bedrijf met tientallen medewerkers. We werken bewust kleinschalig, omdat kwaliteit en persoonlijk contact voor ons belangrijk zijn.`}
      image="/images/interior.jpg"
      imageAlt="Interieur van een auto wordt netjes gereinigd"
    >
      <TextBlock title="Persoonlijk contact en netjes werk">
        <p>
          Bij ons heb je direct contact met degene die jouw auto of motor behandelt. Dat maakt het makkelijk om je wensen te bespreken en eerlijk advies te krijgen.
        </p>
        <p>
          We werken niet vanuit snelle productie. Iedere auto en motor krijgt de tijd en aandacht die nodig is. Soms is een gewone poetsbeurt genoeg. Soms vraagt een voertuig om detailing of polijsten.
        </p>
        <p>
          We denken graag mee met de klant en willen werk afleveren waar jij tevreden mee bent en waar wij zelf trots op zijn.
        </p>
      </TextBlock>
    </PageShell>
  );
}
