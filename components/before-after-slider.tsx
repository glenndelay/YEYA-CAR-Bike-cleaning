"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  title: string;
  before: string;
  after: string;
};

export function BeforeAfterSlider({ title, before, after }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);

  return (
    <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-luxury dark:border-white/10 dark:bg-white/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={after} alt={`${title} na behandeling`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <Image src={before} alt={`${title} voor behandeling`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="max-w-none object-cover" />
        </div>
        <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,.45)]" style={{ left: `${value}%` }} />
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white">Voor</span>
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">Na</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{title}</h3>
        <input
          aria-label={`Vergelijk voor en na voor ${title}`}
          type="range"
          min="8"
          max="92"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="mt-4 w-full accent-gold"
        />
      </div>
    </div>
  );
}
