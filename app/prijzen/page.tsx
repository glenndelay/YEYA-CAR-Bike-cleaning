import type { Metadata } from "next";
import { ArrowDown, Check, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";
import { company, pricingSections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prijzen Auto & Motor Detailing",
  description:
    "Bekijk de vanaf-prijzen voor auto detailing, motor detailing, lakcorrectie, keramische coatings en extra behandelingen bij YEYA CAR & Bike Detailing.",
  alternates: {
    canonical: "/prijzen"
  },
  openGraph: {
    title: `Prijzen Auto & Motor Detailing | ${company.name}`,
    description: "Professionele detailing, lakcorrectie en keramische coatings voor auto's en motoren.",
    images: ["/images/yeya-logo.png"]
  }
};

export default function PricingPage() {
  return (
    <main className="overflow-hidden bg-[#0d0d0f] text-white">
      <Hero />
      <ChoiceCards />
      {pricingSections.map((section) => (
        <PricingSection key={section.id} section={section} />
      ))}
    </main>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(212,175,55,.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(91,30,166,.20),transparent_30%),linear-gradient(180deg,#111111,#0d0d0f)]" />
      <div className="container-premium relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Prijzen
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Prijzen Auto & Motor Detailing
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">
              Professionele detailing, lakcorrectie en keramische coatings voor auto&apos;s en motoren.
            </p>
            <p className="mx-auto mt-5 max-w-3xl rounded-[24px] border border-white/10 bg-white/[0.06] p-5 leading-8 text-white/68 backdrop-blur">
              Alle prijzen zijn vanaf-prijzen en afhankelijk van de grootte en staat van het voertuig. Voor sterk vervuilde voertuigen maken wij graag vooraf een vrijblijvende offerte.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChoiceCards() {
  return (
    <section aria-labelledby="keuze-prijzen" className="px-5 pb-20 sm:px-8 lg:px-12">
      <div className="container-premium">
        <h2 id="keuze-prijzen" className="sr-only">Kies tussen auto detailing en motor detailing</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {pricingSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Reveal key={section.id} delay={index * 0.08}>
                <a
                  href={`#${section.id}`}
                  className="group block rounded-[30px] border border-[#D4AF37]/25 bg-gradient-to-br from-white/[0.11] to-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_0_0_1px_rgba(212,175,55,.28),0_28px_90px_rgba(212,175,55,.14)]"
                >
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#D4AF37] text-[#111111]">
                      <Icon size={30} aria-hidden="true" />
                    </span>
                    <ArrowDown className="text-[#D4AF37] transition group-hover:translate-y-1" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold">{section.label}</h3>
                  <p className="mt-4 text-lg leading-8 text-white/70">{section.description}</p>
                  <span className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#111111] transition group-hover:bg-[#f1cf63]">
                    Bekijk {section.label.startsWith("Auto") ? "Auto" : "Motor"}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type PricingSectionData = (typeof pricingSections)[number];
type PackageData = PricingSectionData["packages"][number];
type ExtraData = PricingSectionData["extras"][number];

function PricingSection({ section }: { section: PricingSectionData }) {
  const Icon = section.icon;

  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                <Icon size={20} aria-hidden="true" />
                {section.label}
              </p>
              <h2 id={`${section.id}-heading`} className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Complete pakketten
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/68">{section.description}</p>
            </div>
            <a
              href="/offerte-aanvragen"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#111111] shadow-[0_18px_46px_rgba(212,175,55,.18)] transition hover:-translate-y-0.5 hover:bg-[#f1cf63]"
            >
              Plan direct een afspraak
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.05}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="text-[#D4AF37]" aria-hidden="true" />
              <h3 className="font-display text-2xl font-semibold">Extra&apos;s</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.extras.map((extra) => (
                <ExtraCard key={extra.title} extra={extra} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 rounded-[30px] border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/16 to-white/[0.04] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,.32)]">
            <h3 className="font-display text-3xl font-semibold">Klaar om jouw voertuig weer als nieuw te laten stralen?</h3>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              Stuur ons gerust een bericht. We denken graag mee over het pakket dat past bij jouw auto of motor.
            </p>
            <a
              href="/offerte-aanvragen"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-[#111111] shadow-[0_18px_46px_rgba(212,175,55,.20)] transition hover:-translate-y-0.5 hover:bg-[#f1cf63]"
            >
              Plan direct een afspraak
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: PackageData }) {
  const Icon = pkg.icon as LucideIcon;
  const glow = pkg.diamond
    ? "border-[#D4AF37] bg-[linear-gradient(145deg,rgba(212,175,55,.18),rgba(255,255,255,.06))] shadow-[0_0_0_1px_rgba(212,175,55,.24),0_26px_80px_rgba(212,175,55,.18)]"
    : pkg.featured
      ? "border-[#D4AF37]/70 bg-white/[0.075]"
      : "border-[#D4AF37]/25 bg-white/[0.045]";

  return (
    <article
      className={`group flex h-full flex-col rounded-[28px] border p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_0_1px_rgba(212,175,55,.22),0_28px_90px_rgba(212,175,55,.14)] ${glow}`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[#D4AF37] text-[#111111]">
          <Icon size={24} aria-hidden="true" />
        </span>
        {pkg.diamond ? (
          <span className="rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
            Meest compleet
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-2xl font-semibold">{pkg.name}</h3>
      <p className="mt-3 font-display text-3xl font-semibold text-[#D4AF37]">{pkg.price}</p>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/74">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check size={17} className="mt-0.5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ExtraCard({ extra }: { extra: ExtraData }) {
  const Icon = extra.icon as LucideIcon;

  return (
    <article className="group rounded-[22px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:bg-white/[0.07] hover:shadow-[0_18px_50px_rgba(212,175,55,.10)]">
      <Icon className="mb-4 text-[#D4AF37]" size={23} aria-hidden="true" />
      <h4 className="font-display text-lg font-semibold">{extra.title}</h4>
      <p className="mt-2 font-semibold text-[#D4AF37]">{extra.price}</p>
      <p className="mt-3 text-sm leading-6 text-white/62">{extra.description}</p>
    </article>
  );
}
