import type { Metadata } from "next";
import { CheckList, PageShell, TextBlock } from "@/components/page-shell";
import { whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waarom kiezen voor ons",
  description: "Waarom kiezen voor YEYA CAR: persoonlijk contact, kleinschalige aanpak, transparante prijzen en aandacht voor iedere auto en motor."
};

export default function WhyChoosePage() {
  return (
    <PageShell
      eyebrow="Waarom kiezen"
      title="Omdat jouw voertuig gewoon aandacht verdient."
      intro="Bij YEYA CAR maken we geen onderscheid tussen bijzonder of dagelijks gebruik. Een stadsauto, gezinswagen, bedrijfsbus, oldtimer, motor of leaseauto is bij ons welkom."
      image="/images/motor.jpg"
      imageAlt="Motor wordt met aandacht schoongemaakt"
    >
      <TextBlock title="Eerlijk, duidelijk en toegankelijk">
        <p>
          We houden van duidelijkheid. Je hoort vooraf wat we kunnen doen, wat het ongeveer kost en welke behandeling past bij jouw auto of motor.
        </p>
        <p>
          We werken met kwaliteitsproducten, maar zonder overdreven verkooppraatjes. Het doel is simpel: jouw voertuig netjes, schoon en goed verzorgd afleveren.
        </p>
      </TextBlock>
      <section className="section-padding bg-[#f8f6fb] dark:bg-graphite">
        <div className="container-premium">
          <CheckList items={whyChooseUs} />
        </div>
      </section>
    </PageShell>
  );
}
