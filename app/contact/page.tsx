import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met YEYA CAR & Bike Detailing voor auto poetsen, motor poetsen, detailing, polijsten en bescherming."
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white pt-32 dark:bg-ink">
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="container-premium grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-gold">Contact</p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl">
                Benieuwd wat we voor jouw auto of motor kunnen betekenen?
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink/72 dark:text-white/72">
                Stuur gerust een bericht. We denken graag met je mee over wassen, poetsen, detailing, polijsten en bescherming.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-ink/75 dark:text-white/72">
              <a className="focus-ring flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-luxury transition hover:-translate-y-0.5 hover:border-gold dark:border-white/10 dark:bg-white/[0.06]" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Phone className="text-gold" />
                {company.phone}
              </a>
              <a className="focus-ring flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-luxury transition hover:-translate-y-0.5 hover:border-gold dark:border-white/10 dark:bg-white/[0.06]" href={`mailto:${company.email}`}>
                <Mail className="text-gold" />
                {company.email}
              </a>
              <p className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
                <MapPin className="text-gold" />
                {company.address}
              </p>
              <div className="rounded-[24px] border border-ink/10 bg-white p-5 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
                {company.hours.map((hour) => (
                  <p key={hour} className="font-medium text-ink/75 dark:text-white/72">
                    {hour}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
