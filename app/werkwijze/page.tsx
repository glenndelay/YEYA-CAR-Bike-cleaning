import type { Metadata } from "next";
import { BadgeCheck, CalendarCheck, Check, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/motion";
import { company, workflowSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Bekijk hoe YEYA CAR & Bike Detailing werkt: kennismaken, inspectie, grondige reiniging, behandeling, bescherming en oplevering."
};

const icons = [CalendarCheck, ClipboardCheck, Sparkles, Check, ShieldCheck, BadgeCheck];

export default function WorkflowPage() {
  return (
    <main className="overflow-hidden bg-[#0d0d0f] text-white">
      <section className="relative px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(246,195,19,.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(91,30,166,.16),transparent_30%),linear-gradient(180deg,#111111,#0d0d0f)]" />
        <div className="container-premium relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Werkwijze
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Van eerste advies tot nette oplevering.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
                Bij {company.shortName} werken we stap voor stap. Zo weet je vooraf wat we doen, waarom we het doen en welke behandeling past bij jouw auto of motor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="container-premium">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => {
              const Icon = icons[index] ?? Sparkles;

              return (
                <Reveal key={step.title} delay={index * 0.04}>
                  <article className="group h-full rounded-[28px] border border-gold/20 bg-gradient-to-br from-white/[0.10] to-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,.30)] transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_0_1px_rgba(246,195,19,.20),0_28px_90px_rgba(246,195,19,.12)]">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
                        <Icon size={25} aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                        Stap {index + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-semibold">{step.title}</h2>
                    <p className="mt-4 leading-8 text-white/70">{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl rounded-[30px] border border-gold/25 bg-gold/10 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,.28)]">
              <h2 className="font-display text-3xl font-semibold">Benieuwd wat past bij jouw voertuig?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/72">
                Neem gerust contact op. We kijken samen naar je wensen, de staat van je auto of motor en het pakket dat daarbij past.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact">Neem contact op</ButtonLink>
                <ButtonLink href="/prijzen" variant="secondary">
                  Bekijk prijzen
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
