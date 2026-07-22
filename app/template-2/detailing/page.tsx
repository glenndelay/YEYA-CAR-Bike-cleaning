import type { Metadata } from "next";
import { T2Checklist, T2PageHero, T2TextSection } from "@/components/template-two";

export const metadata: Metadata = {
  title: "Detailing | Template 2",
  description: "Tweede template: auto detailing en motor detailing met lakinspectie, kleien, polijsten, lakcorrectie en bescherming."
};

const items = [
  "Dieptereiniging",
  "Lakinspectie",
  "Kleien",
  "Polijsten in meerdere stappen",
  "Verwijderen of verminderen van lichte krasjes",
  "Lakcorrectie",
  "Glansherstel",
  "Bescherming met wax, sealant of keramische coating",
  "Interieur detailing",
  "Motorruimte reinigen indien gewenst"
];

export default function TemplateTwoDetailingPage() {
  return (
    <main>
      <T2PageHero
        label="Detailing"
        title="Detailing gaat verder dan normaal poetsen."
        text="Detailing is maatwerk. We kijken naar de staat van de lak, het interieur en de details, en adviseren wat echt zinvol is."
        image="/images/polishing.jpg"
        imageAlt="Lak wordt zorgvuldig gepolijst"
      />
      <T2TextSection title="Voor wie zijn voertuig echt goed wil verzorgen">
        <p>Bij detailing nemen we meer tijd dan bij een gewone poetsbeurt. We inspecteren de lak, reinigen dieper en kiezen samen een aanpak die past bij jouw voertuig.</p>
        <p>Denk aan auto polijsten, lichte krasjes verminderen, lakcorrectie, glansherstel en bescherming met wax, sealant of keramische coating.</p>
      </T2TextSection>
      <section className="bg-[#e7eee6] px-5 py-20 sm:px-8 lg:px-12">
        <div className="container-premium">
          <T2Checklist items={items} />
        </div>
      </section>
    </main>
  );
}
