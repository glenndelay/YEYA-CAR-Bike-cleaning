import type { Metadata } from "next";
import { CheckList, PageShell, TextBlock } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Detailing",
  description: "Auto detailing en motor detailing: dieptereiniging, lakinspectie, kleien, polijsten, lakcorrectie en bescherming."
};

const items = [
  "Dieptereiniging",
  "Lakinspectie",
  "Kleien",
  "Polijsten in meerdere stappen",
  "Verwijderen of verminderen van lichte krasjes",
  "Lakcorrectie",
  "Glansherstel",
  "Bescherming met wax of keramische coating",
  "Interieur detailing",
  "Motorruimte reinigen indien gewenst"
];

export default function DetailingPage() {
  return (
    <PageShell
      eyebrow="Detailing"
      title="Detailing gaat verder dan normaal poetsen."
      intro="Detailing is bedoeld voor mensen die hun auto of motor echt in goede conditie willen brengen of houden. We kijken rustig naar wat jouw voertuig nodig heeft."
      image="/images/polishing.jpg"
      imageAlt="Lak wordt zorgvuldig gepolijst"
    >
      <TextBlock title="Maatwerk voor lak, interieur en bescherming">
        <p>
          Bij detailing nemen we meer tijd dan bij een gewone poetsbeurt. We inspecteren de lak, reinigen dieper en kiezen samen een aanpak die past bij de staat van je voertuig.
        </p>
        <p>
          Denk aan kleien, auto polijsten, lichte krasjes verminderen, lakcorrectie, glansherstel en bescherming met wax of keramische coating. Ook interieur detailing en motor detailing zijn mogelijk.
        </p>
        <p>
          Iedere auto en motor is anders. Daarom geven we vooraf eerlijk advies over wat zinvol is en wat niet nodig is.
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
