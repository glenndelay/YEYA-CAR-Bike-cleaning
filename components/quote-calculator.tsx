"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/button";
import { quoteOptions } from "@/lib/site";

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
  const [selected, setSelected] = useState<string[]>(["Interieur", "Exterieur"]);
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

  const price = useMemo(() => {
    const base = type === "Motor" ? 60 : 95;
    const options = quoteOptions.filter((item) => selected.includes(item.label)).reduce((sum, item) => sum + item.value, 0);
    return base + options;
  }, [selected, type]);

  function toggle(label: string) {
    setSelected((current) => (current.includes(label) ? current.filter((item) => item !== label) : [...current, label]));
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
            <p className="mt-1 text-ink/[0.65] dark:text-white/[0.65]">Kies je voertuig en opties voor een directe prijsindicatie.</p>
          </div>
        </div>
        <fieldset className="mb-6 grid gap-3 sm:grid-cols-2">
          <legend className="sr-only">Voertuigtype</legend>
          {["Auto", "Motor"].map((item) => (
            <label key={item} className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold rounded-2xl border border-ink/10 p-4 dark:border-white/10">
              <input type="radio" value={item} className="mr-2 accent-gold" {...register("customerType")} />
              <span className="font-semibold text-ink dark:text-white">{item}</span>
            </label>
          ))}
        </fieldset>
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {quoteOptions.map((option) => {
            const active = selected.includes(option.label);
            return (
              <button
                key={option.label}
                type="button"
                onClick={() => toggle(option.label)}
                className={`focus-ring flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                  active
                    ? "border-gold bg-gold/[0.14] text-ink dark:text-white"
                    : "border-ink/10 bg-white text-ink/75 hover:border-gold dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                }`}
              >
                <span className="font-semibold">{option.label}</span>
                {active ? <Check size={18} /> : <span className="text-sm">+€{option.value}</span>}
              </button>
            );
          })}
        </div>
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
        <p className="mt-5 font-display text-5xl font-semibold">€{price}</p>
        <p className="mt-4 text-white/70 dark:text-ink/[0.65]">Indicatie op basis van je selectie. Definitieve prijs volgt na inspectie van lak, interieur en vervuiling.</p>
        <div className="mt-8 grid gap-3">
          {[type, ...selected].map((item) => (
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

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-red-600 dark:text-red-300">{error}</span> : null}
    </label>
  );
}
