import { Check } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/motion";
import { company } from "@/lib/site";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, image, imageAlt, children }: PageShellProps) {
  return (
    <main className="bg-white pt-32 dark:bg-ink">
      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <Reveal>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-purple dark:text-gold">{eyebrow}</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/72">{intro}</p>
            <ButtonLink href="/contact" className="mt-8">Neem vrijblijvend contact op</ButtonLink>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[28px] shadow-luxury">
              <Image src={image} alt={imageAlt} width={900} height={680} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      {children}
      <SimpleFooter />
    </main>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
          <Check className="mt-1 shrink-0 text-red" size={18} />
          <span className="font-medium leading-7 text-ink/78 dark:text-white/78">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function TextBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section-padding">
      <div className="container-premium max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">{title}</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-ink/72 dark:text-white/72">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

function SimpleFooter() {
  return (
    <footer className="bg-navy px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="container-premium flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-semibold">{company.name}</p>
          <p className="mt-1 text-white/70">{company.slogan}</p>
        </div>
        <ButtonLink href="/contact">Vraag advies</ButtonLink>
      </div>
    </footer>
  );
}
