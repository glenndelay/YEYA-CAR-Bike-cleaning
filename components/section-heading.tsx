type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-lg leading-8 text-ink/70 dark:text-white/[0.68]">{text}</p> : null}
    </div>
  );
}
