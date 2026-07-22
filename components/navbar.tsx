"use client";

import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button";
import { company, navItems } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (pathname.startsWith("/template-2")) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full pr-3 font-display text-sm font-bold tracking-wide text-ink dark:text-white sm:text-base">
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-ink">
            <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="hidden sm:inline">{company.shortName}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition hover:text-ink dark:text-white/75 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Wissel kleurmodus"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-gold dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <ButtonLink href="/contact">Neem contact op</ButtonLink>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            aria-label="Bel ons"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-gold text-ink md:hidden"
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Wissel kleurmodus"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open navigatie"
            aria-expanded={open}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-ink text-white dark:bg-white dark:text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-3 grid max-w-7xl gap-1 rounded-[24px] p-3 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-2xl px-4 py-3 font-medium text-ink dark:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-2">
            Vraag vrijblijvend advies
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
