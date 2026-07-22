"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        aria-label="Stuur WhatsApp"
        className="focus-ring grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:-translate-y-1"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${company.phoneHref}`}
        aria-label="Bel direct"
        className="focus-ring grid h-[52px] w-[52px] place-items-center rounded-full bg-ink text-white shadow-luxury transition hover:-translate-y-1 md:hidden"
      >
        <Phone size={22} />
      </a>
      {visible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Terug naar boven"
          className="focus-ring grid h-[52px] w-[52px] place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-luxury transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          <ArrowUp size={22} />
        </button>
      ) : null}
    </div>
  );
}
