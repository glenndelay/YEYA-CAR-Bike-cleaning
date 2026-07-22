import type { Metadata } from "next";
import { T2Checklist, T2PageHero, T2TextSection } from "@/components/template-two";
import { whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waarom kiezen | Template 2",
  description: "Tweede template: waarom kiezen voor YEYA CAR, met persoonlijke aanpak en duidelijke prijzen."
};

export default function TemplateTwoWhyPage() {
  return (
    <main>
      <T2PageHero
        label="Waarom kiezen"
        title="Omdat jouw voertuig gewoon aandacht verdient."
        text="We maken geen onderscheid tussen bijzonder of dagelijks gebruik. Je bent welkom met een stadsauto, gezinswagen, bedrijfsbus, oldtimer, motor of leaseauto."
        image="/images/motor.jpg"
        imageAlt="Motor wordt met aandacht schoongemaakt"
      />
      <T2TextSection title="Eerlijk, duidelijk en toegankelijk">
        <p>We houden van duidelijkheid. Je hoort vooraf wat we kunnen doen, wat het ongeveer kost en welke behandeling past bij jouw auto of motor.</p>
        <p>We werken met kwaliteitsproducten, maar zonder overdreven verkooppraatjes. Het doel is simpel: jouw voertuig netjes, schoon en goed verzorgd afleveren.</p>
      </T2TextSection>
      <section className="bg-[#e7eee6] px-5 py-20 sm:px-8 lg:px-12">
        <div className="container-premium">
          <T2Checklist items={whyChooseUs} />
        </div>
      </section>
    </main>
  );
}
