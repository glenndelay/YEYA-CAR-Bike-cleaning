import { ArrowRight, Check, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { company, workExamples } from "@/lib/site";

export const templateTwoNav = [
  { label: "Home", href: "/template-2" },
  { label: "Wassen & Poetsen", href: "/template-2/wassen-poetsen" },
  { label: "Detailing", href: "/template-2/detailing" },
  { label: "Over ons", href: "/template-2/over-ons" },
  { label: "Waarom kiezen", href: "/template-2/waarom-kiezen" }
];

export function TemplateTwoNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1f2926]/10 bg-[#f7f4ee]/92 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="container-premium flex items-center justify-between gap-4">
        <Link href="/template-2" className="focus-ring flex items-center gap-3 rounded-full">
          <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} width={52} height={52} className="rounded-full bg-[#1f2926]" priority />
          <span className="font-display text-sm font-semibold text-[#1f2926] sm:text-base">{company.shortName}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {templateTwoNav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-[#1f2926]/70 transition hover:bg-white hover:text-[#1f2926]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/" className="focus-ring rounded-full border border-[#1f2926]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1f2926] transition hover:border-[#b46b4a]">
            Bekijk layout 1
          </Link>
          <Link href="/template-2#contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f5f55] px-6 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(47,95,85,.22)] transition hover:-translate-y-0.5 hover:bg-[#264e46]">
            Contact
            <ArrowRight size={17} />
          </Link>
        </div>
        <details className="group relative lg:hidden">
          <summary className="focus-ring grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full bg-[#1f2926] text-white">
            <Menu className="group-open:hidden" size={19} />
            <X className="hidden group-open:block" size={19} />
          </summary>
          <div className="absolute right-0 mt-3 grid w-72 gap-1 rounded-[22px] border border-[#1f2926]/10 bg-white p-3 shadow-[0_18px_54px_rgba(31,41,38,.18)]">
            {templateTwoNav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-semibold text-[#1f2926]/78">
                {item.label}
              </Link>
            ))}
            <Link href="/" className="rounded-2xl px-4 py-3 font-semibold text-[#b46b4a]">Layout 1 bekijken</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function TemplateTwoFooter() {
  return (
    <footer className="bg-[#1f2926] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="container-premium grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} width={84} height={84} className="rounded-full bg-black" />
          <p className="mt-5 font-display text-2xl font-semibold">{company.name}</p>
          <p className="mt-3 max-w-md text-white/70">{company.slogan} Poetsen en detailen voor gewone auto's, motoren, leaseauto's, bedrijfsbussen en gezinswagens.</p>
        </div>
        <div>
          <p className="mb-4 font-display font-semibold">Template 2</p>
          <div className="grid gap-2 text-white/70">
            {templateTwoNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#f1c36b]">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-display font-semibold">Contact</p>
          <div className="grid gap-3 text-white/70">
            <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2 hover:text-[#f1c36b]"><Phone size={16} /> {company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-[#f1c36b]"><Mail size={16} /> {company.email}</a>
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> {company.address}</p>
          </div>
        </div>
      </div>
      <div className="container-premium mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
        © {new Date().getFullYear()} {company.name}. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}

export function T2SectionIntro({ label, title, text, centered = false, light = false }: { label: string; title: string; text?: string; centered?: boolean; light?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`mb-3 font-display text-sm font-semibold uppercase tracking-[0.22em] ${light ? "text-[#f1c36b]" : "text-[#2f5f55]"}`}>{label}</p>
      <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-[#1f2926]"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${light ? "text-white/72" : "text-[#1f2926]/70"}`}>{text}</p> : null}
    </div>
  );
}

export function T2PageHero({ label, title, text, image, imageAlt }: { label: string; title: string; text: string; image: string; imageAlt: string }) {
  return (
    <section className="bg-[#f7f4ee] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="container-premium grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#2f5f55]">{label}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[#1f2926] sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1f2926]/72">{text}</p>
          <Link href="/template-2#contact" className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f5f55] px-6 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(47,95,85,.22)] transition hover:-translate-y-0.5">
            Neem contact op
            <ArrowRight size={17} />
          </Link>
        </div>
        <Image src={image} alt={imageAlt} width={1000} height={780} className="aspect-[4/3] w-full rounded-[30px] object-cover shadow-[0_24px_70px_rgba(31,41,38,.16)]" />
      </div>
    </section>
  );
}

export function T2Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-[18px] bg-white p-4 shadow-[0_14px_34px_rgba(31,41,38,.08)]">
          <Check className="mt-1 shrink-0 text-[#b46b4a]" size={18} />
          <span className="font-medium leading-7 text-[#1f2926]/78">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function T2WorkGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {workExamples.map((example, index) => (
        <article key={example.src} className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/8">
            {example.type === "image" ? (
              <Image src={example.src} alt={example.alt} width={900} height={1200} className="aspect-[4/5] w-full object-cover" />
            ) : (
              <video className="aspect-[4/5] w-full object-cover" controls muted playsInline preload="metadata" aria-label={example.alt}>
                <source src={example.src} />
              </video>
            )}
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold text-white">{example.title}</h3>
        </article>
      ))}
    </div>
  );
}

export function T2ContactBand() {
  return (
    <section id="contact" className="bg-[#e7eee6] px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium grid items-center gap-8 lg:grid-cols-[1fr_.85fr]">
        <T2SectionIntro label="Contact" title="Benieuwd wat past bij jouw auto of motor?" text="Stuur gerust een bericht. We denken eerlijk mee over wassen, poetsen, detailing, polijsten en bescherming." />
        <div className="rounded-[26px] bg-white p-6 shadow-[0_18px_48px_rgba(31,41,38,.1)]">
          <a href={`tel:${company.phoneHref}`} className="focus-ring flex items-center gap-3 rounded-2xl p-3 font-semibold text-[#1f2926]">
            <Phone className="text-[#2f5f55]" />
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="focus-ring flex items-center gap-3 rounded-2xl p-3 font-semibold text-[#1f2926]">
            <Mail className="text-[#2f5f55]" />
            {company.email}
          </a>
          <p className="flex items-start gap-3 rounded-2xl p-3 font-semibold text-[#1f2926]">
            <MapPin className="mt-1 shrink-0 text-[#2f5f55]" />
            {company.address}
          </p>
        </div>
      </div>
    </section>
  );
}

export function T2TextSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="container-premium max-w-4xl">
        <h2 className="font-display text-3xl font-semibold text-[#1f2926] sm:text-4xl">{title}</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-[#1f2926]/72">{children}</div>
      </div>
    </section>
  );
}
