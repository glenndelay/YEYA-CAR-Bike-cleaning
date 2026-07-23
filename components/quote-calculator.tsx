"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/button";
import { pricingSections } from "@/lib/site";

const schema = z.object({
  customerType: z.enum(["Auto", "Motor"]),
  name: z.string().min(2, "Vul je naam in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  phone: z.string().min(8, "Vul een telefoonnummer in."),
  vehicle: z.string().min(2, "Vul je voertuig in."),
  message: z.string().optional()
});

type QuoteData = z.infer<typeof schema>;

export function QuoteCalculator() {
  const [selectedPackage, setSelectedPackage] = useState("Bronze");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<QuoteData>({
    resolver: zodResolver(schema),
    defaultValues: { customerType: "Auto" }
  });
  const type = watch("customerType");
  const section = useMemo(() => pricingSections.find((item) => (type === "Auto" ? item.id === "auto-detailing" : item.id === "motor-detailing")) ?? pricingSections[0], [type]);
  const activePackage = section.packages.find((item) => item.name === selectedPackage) ?? section.packages[0];

  const price = useMemo(() => {
    const packagePrice = getPriceValue(activePackage.price);
    const extrasPrice = section.extras
      .filter((item) => selectedExtras.includes(item.title))
      .reduce((sum, item) => sum + getPriceValue(item.price), 0);

    return packagePrice + extrasPrice;
  }, [activePackage.price, section.extras, selectedExtras]);

  function toggleExtra(title: string) {
    setSelectedExtras((current) => (current.includes(title) ? current.filter((item) => item !== title) : [...current, title]));
  }

  function onSubmit() {
    setSent(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-[30px] border border-ink/10 bg-white p-6 shadow-luxury dark:border-white/10 dark:bg-white/5 sm:p-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink">
            <Calculator size={22} />
          </span>
          <div>
            <h1 className="font-display text-3xl font-semibold text-ink dark:text-white">Offerte aanvragen</h1>
            <p className="mt-1 text-ink/[0.65] dark:text-white/[0.65]">Kies je voertuig, pakket en extra&apos;s voor een directe prijsindicatie.</p>
          </div>
        </div>
        <fieldset className="mb-8 grid gap-3 sm:grid-cols-2">
          <legend className="sr-only">Voertuigtype</legend>
          {["Auto", "Motor"].map((item) => (
            <label
              key={item}
              className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold rounded-2xl border border-ink/10 p-4 dark:border-white/10"
              onChange={() => {
                setSelectedPackage("Bronze");
                setSelectedExtras([]);
              }}
            >
              <input type="radio" value={item} className="mr-2 accent-gold" {...register("customerType")} />
              <span className="font-semibold text-ink dark:text-white">{item}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className="mb-8">
          <legend className="mb-3 font-display text-lg font-semibold text-ink dark:text-white">Kies een pakket</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.packages.map((pkg) => {
              const active = activePackage.name === pkg.name;

              return (
                <button
                  key={pkg.name}
                  type="button"
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`focus-ring rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-gold bg-gold/[0.14] text-ink dark:text-white"
                      : "border-ink/10 bg-white text-ink/75 hover:border-gold dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                  }`}
                  aria-pressed={active}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-display text-lg font-semibold">{pkg.name}</span>
                    <span className="shrink-0 text-sm font-semibold text-gold">{formatFromPrice(pkg.price)}</span>
                  </span>
                  <span className="mt-3 grid gap-1 text-sm leading-6">
                    {pkg.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="flex gap-2">
                        <Check size={15} className="mt-1 shrink-0 text-gold" />
                        {feature}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="mb-8">
          <legend className="mb-3 font-display text-lg font-semibold text-ink dark:text-white">Extra opties uit de prijslijst</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.extras.map((extra) => {
              const active = selectedExtras.includes(extra.title);

              return (
                <button
                  key={extra.title}
                  type="button"
                  onClick={() => toggleExtra(extra.title)}
                  className={`focus-ring flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-gold bg-gold/[0.14] text-ink dark:text-white"
                      : "border-ink/10 bg-white text-ink/75 hover:border-gold dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                  }`}
                  aria-pressed={active}
                >
                  <span>
                    <span className="block font-semibold">{extra.title}</span>
                    <span className="mt-1 block text-sm opacity-70">{extra.description}</span>
                  </span>
                  {active ? <Check size={18} className="shrink-0" /> : <span className="shrink-0 text-sm font-semibold text-gold">+{formatFromPrice(extra.price)}</span>}
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Naam" error={errors.name?.message}>
            <input className={inputClass} {...register("name")} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input className={inputClass} type="email" {...register("email")} />
          </Field>
          <Field label="Telefoon" error={errors.phone?.message}>
            <input className={inputClass} {...register("phone")} />
          </Field>
          <Field label="Voertuig" error={errors.vehicle?.message}>
            <input className={inputClass} placeholder="Merk, model, bouwjaar" {...register("vehicle")} />
          </Field>
        </div>
        <Field label="Bericht" error={errors.message?.message}>
          <textarea className={`${inputClass} mt-4 min-h-28`} {...register("message")} />
        </Field>
        {sent ? <p className="mt-4 rounded-2xl bg-gold/15 px-4 py-3 text-sm font-semibold text-ink dark:text-white">Je offerteaanvraag is succesvol klaargezet.</p> : null}
        <Button type="submit" className="mt-6 w-full sm:w-auto">Vraag offerte aan</Button>
      </form>
      <aside className="self-start rounded-[30px] bg-ink p-6 text-white shadow-luxury dark:bg-white dark:text-ink sm:p-8 lg:sticky lg:top-28">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-gold">Prijsindicatie</p>
        <p className="mt-5 font-display text-5xl font-semibold">Vanaf €{price}</p>
        <p className="mt-4 text-white/70 dark:text-ink/[0.65]">Indicatie op basis van je selectie. Definitieve prijs volgt na inspectie van lak, interieur en vervuiling.</p>
        <div className="mt-8 grid gap-3">
          {[type, activePackage.name, ...selectedExtras].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.08] px-4 py-3 dark:bg-ink/[0.08]">
              <Check size={17} className="text-gold" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

const inputClass =
  "focus-ring w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink/40 dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:placeholder:text-white/[0.45]";

function getPriceValue(price: string) {
  const match = price.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function formatFromPrice(price: string) {
  return price.startsWith("Vanaf") ? price : `Vanaf ${price}`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-red-600 dark:text-red-300">{error}</span> : null}
    </label>
  );
}
