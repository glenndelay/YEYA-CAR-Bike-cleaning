"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/button";

const schema = z.object({
  name: z.string().min(2, "Vul je naam in."),
  phone: z.string().min(8, "Vul een geldig telefoonnummer in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  vehicle: z.string().min(2, "Vul je voertuig in."),
  plate: z.string().optional(),
  preferredDate: z.string().min(1, "Kies een gewenste datum."),
  message: z.string().min(10, "Vertel kort wat je wilt laten doen.")
});

type ContactFormData = z.infer<typeof schema>;

const inputClass =
  "focus-ring w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink/40 dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:placeholder:text-white/[0.45]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  function onSubmit() {
    setSent(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-[28px] border border-ink/10 bg-white p-6 shadow-luxury dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Naam" error={errors.name?.message}>
          <input className={inputClass} autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Telefoon" error={errors.phone?.message}>
          <input className={inputClass} autoComplete="tel" {...register("phone")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input className={inputClass} type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Gewenste datum" error={errors.preferredDate?.message}>
          <input className={inputClass} type="date" {...register("preferredDate")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Voertuig" error={errors.vehicle?.message}>
          <input className={inputClass} placeholder="Bijv. Porsche 911 of BMW GS" {...register("vehicle")} />
        </Field>
        <Field label="Kenteken" error={errors.plate?.message}>
          <input className={inputClass} placeholder="Optioneel" {...register("plate")} />
        </Field>
      </div>
      <Field label="Bericht" error={errors.message?.message}>
        <textarea className={`${inputClass} min-h-32 resize-y`} {...register("message")} />
      </Field>
      {sent ? <p className="rounded-2xl bg-gold/15 px-4 py-3 text-sm font-semibold text-ink dark:text-white">Bedankt. Je aanvraag is succesvol klaargezet.</p> : null}
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        <Send size={18} />
        Verstuur aanvraag
      </Button>
    </form>
  );
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
