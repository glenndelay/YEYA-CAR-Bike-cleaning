import type { Metadata } from "next";
import { Bike, Car, Check, ClipboardCheck, HeartHandshake, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { T2ContactBand, T2SectionIntro, T2WorkGrid } from "@/components/template-two";
import { company, services, whyChooseUs, workflowSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Template 2",
  description: "Tweede volledige website-layout voor YEYA CAR & Bike Detailing met rustige kleuren, subpagina's, werkwijze en werkvoorbeelden."
};

const introCards = [
  {
    icon: Car,
    title: "Alle auto's welkom",
    text: "Stadsauto, gezinswagen, leaseauto, oldtimer of bedrijfsbus: we maken geen onderscheid."
  },
  {
    icon: Bike,
    title: "Ook voor motoren",
    text: "Motor poetsen en motor detailing met aandacht voor lak, velgen, kunststof en kleine hoekjes."
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijk contact",
    text: "Je spreekt direct met degene die jouw voertuig behandelt. Dat houdt het duidelijk en vertrouwd."
  }
];

export default function TemplateTwoHome() {
  return (
    <main>
      <Hero />
      <IntroCards />
      <Services />
      <PoetsenVsDetailing />
      <Workflow />
      <Work />
      <Why />
      <T2ContactBand />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(47,95,85,.16),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(180,107,74,.15),transparent_28%)]" />
      <div className="container-premium relative grid items-center gap-10 lg:grid-cols-[.94fr_1.06fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2f5f55] shadow-[0_10px_30px_rgba(31,41,38,.08)]">
            Tweede volledige website
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[#1f2926] sm:text-5xl lg:text-6xl">
            Warme, rustige website voor auto poetsen en motor detailing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1f2926]/72">
            {company.slogan} Bij deze template ligt de nadruk op vertrouwen, uitleg en echt werk. Geen harde kleuren, maar een rustige uitstraling met veel ruimte.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/template-2/wassen-poetsen" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#2f5f55] px-6 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(47,95,85,.22)] transition hover:-translate-y-0.5">
              Bekijk diensten
            </Link>
            <Link href="/template-2#werkwijze" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[#1f2926]/15 bg-white px-6 text-sm font-semibold text-[#1f2926] transition hover:border-[#b46b4a]">
              Onze werkwijze
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[.75fr_1fr]">
          <Image src="/work/mercedes-resultaat.jpg" alt="Zwarte Mercedes na poetswerk" width={900} height={1200} priority className="aspect-[4/5] w-full rounded-[30px] object-cover shadow-[0_24px_70px_rgba(31,41,38,.16)] sm:translate-y-10" />
          <div className="grid gap-4">
            <div className="rounded-[30px] bg-white p-5 shadow-[0_18px_48px_rgba(31,41,38,.1)]">
              <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} width={420} height={420} className="rounded-[24px] bg-[#1f2926]" />
            </div>
            <div className="rounded-[30px] bg-[#1f2926] p-6 text-white">
              <p className="font-display text-2xl font-semibold">Poetsen en detailen</p>
              <p className="mt-3 leading-7 text-white/70">Voor normale auto's, motoren en dagelijks gebruik.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroCards() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12">
      <div className="container-premium grid gap-5 md:grid-cols-3">
        {introCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="rounded-[26px] bg-white p-6 shadow-[0_16px_44px_rgba(31,41,38,.08)]">
              <Icon className="mb-5 text-[#2f5f55]" />
              <h2 className="font-display text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 leading-7 text-[#1f2926]/70">{card.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="diensten" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium">
        <T2SectionIntro centered label="Diensten" title="Een duidelijke keuze tussen poetsen en detailen." text="We bieden regulier onderhoud en uitgebreidere detailbehandelingen. Samen kijken we wat jouw auto of motor nodig heeft." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const href = service.title.includes("Detailing") ? "/template-2/detailing" : "/template-2/wassen-poetsen";
            return (
              <Link key={service.title} href={href} className="group rounded-[24px] bg-[#f7f4ee] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(31,41,38,.12)]">
                <Icon className="mb-5 text-[#b46b4a]" />
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <ul className="mt-5 grid gap-2 text-sm text-[#1f2926]/70">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check size={15} className="mt-0.5 shrink-0 text-[#2f5f55]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PoetsenVsDetailing() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium grid gap-6 lg:grid-cols-2">
        <article className="rounded-[30px] bg-white p-8 shadow-[0_18px_48px_rgba(31,41,38,.1)]">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#2f5f55]">Wassen & Poetsen</p>
          <h2 className="font-display text-3xl font-semibold">Voor fris en verzorgd onderhoud.</h2>
          <p className="mt-4 leading-8 text-[#1f2926]/70">Denk aan handwas, velgen reinigen, interieur stofzuigen, ramen schoonmaken, kunststof verzorgen en eventueel een beschermende wax.</p>
        </article>
        <article className="rounded-[30px] bg-[#1f2926] p-8 text-white shadow-[0_18px_48px_rgba(31,41,38,.18)]">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#f1c36b]">Detailing</p>
          <h2 className="font-display text-3xl font-semibold">Voor meer diepte, herstel en bescherming.</h2>
          <p className="mt-4 leading-8 text-white/72">Detailing gaat verder met lakinspectie, kleien, polijsten, lichte krasjes verminderen, glansherstel en bescherming met wax, sealant of coating.</p>
        </article>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="werkwijze" className="bg-[#e7eee6] px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium">
        <T2SectionIntro centered label="Onze werkwijze" title="Rustig, duidelijk en zonder verrassingen." text="Van kennismaken tot oplevering: je weet waar je aan toe bent." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="grid gap-4 rounded-[24px] bg-white p-6 shadow-[0_16px_44px_rgba(31,41,38,.08)] sm:grid-cols-[64px_1fr]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f7f4ee] font-display text-xl font-semibold text-[#2f5f55]">{index + 1}</div>
              <div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-7 text-[#1f2926]/70">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="werk" className="bg-[#1f2926] px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium">
        <T2SectionIntro light label="Voorbeelden" title="Jouw werk zichtbaar op de website." text="Deze template gebruikt jouw foto en video's als bewijs van echt uitgevoerd werk." />
        <div className="mt-12">
          <T2WorkGrid />
        </div>
      </div>
    </section>
  );
}

function Why() {
  const icons = [HeartHandshake, Shield, ClipboardCheck, Sparkles];
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <T2SectionIntro label="Waarom kiezen" title="Kleinschalig, eerlijk en voor iedereen." text="Deze uitstraling voelt meer als een betrouwbaar lokaal bedrijf: persoonlijk, helder en toegankelijk." />
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_16px_44px_rgba(31,41,38,.08)]">
                <Icon className="mt-1 shrink-0 text-[#b46b4a]" size={18} />
                <span className="font-semibold">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
