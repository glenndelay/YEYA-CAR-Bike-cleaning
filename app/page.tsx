import { ArrowRight, Check, ChevronDown, Mail, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { T2WorkGrid } from "@/components/template-two";
import { benefits, company, faqs, pricingSections, reviews, services, whyChooseUs } from "@/lib/site";
import { faqSchema, localBusinessSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <main id="home" className="overflow-hidden bg-white dark:bg-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Benefits />
      <Welcome />
      <Services />
      <Difference />
      <Packages />
      <Work />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden bg-[#fffaf1] px-5 pt-32 dark:bg-navy sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,195,19,.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(91,30,166,.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.92),rgba(255,255,255,.74))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(246,195,19,.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(225,25,25,.18),transparent_34%),linear-gradient(135deg,rgba(20,16,34,.95),rgba(20,16,34,.78))]" />
      <div className="container-premium relative z-10 grid min-h-[68svh] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.22em] text-purple dark:text-gold">{company.slogan}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            Auto poetsen en motor detailing met persoonlijke aandacht.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/75">
            Welkom bij {company.name}. Wij poetsen en detailen auto&apos;s en motoren. Groot of klein, nieuw of oud: iedereen is welkom.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/75">
            Je kunt op afspraak langskomen, en in overleg komen we ook op locatie poetsen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Neem vrijblijvend contact op</ButtonLink>
            <ButtonLink href="#wat-we-doen" variant="ghost">Bekijk wat we doen</ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-5 rounded-[36px] bg-purple/10 blur-2xl dark:bg-gold/10" />
            <div className="relative rounded-[32px] border border-ink/10 bg-white p-5 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
              <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} width={900} height={900} priority className="w-full rounded-[24px] bg-ink object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="container-premium grid gap-4 md:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit} delay={index * 0.04}>
            <div className="rounded-[22px] border border-ink/10 bg-white p-5 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
              <Check className="mb-4 text-red" />
              <p className="font-display text-lg font-semibold text-ink dark:text-white">{benefit}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="section-padding">
      <div className="container-premium grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] shadow-luxury">
            <Image src="/work/mercedes-resultaat.jpg" alt="Zwarte Mercedes als voorbeeld van uitgevoerd poetswerk" width={900} height={1100} className="aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Iedereen welkom"
            title="Hier is jouw auto of motor gewoon welkom."
            text="Veel poetsbedrijven laten vooral bijzondere sportauto's zien. Dat kan het gevoel geven dat een gewone stadsauto, gezinswagen, bedrijfsbus of motor niet past. Bij YEYA CAR denken we daar anders over."
          />
          <p className="mt-6 text-lg leading-8 text-ink/72 dark:text-white/72">
            Elke auto en elke motor verdient aandacht. Of je nu dagelijks naar je werk rijdt, met de motor op pad gaat, een leaseauto netjes wilt houden of een oudere auto weer frisser wilt maken: we denken graag met je mee.
          </p>
          <p className="mt-4 text-lg leading-8 text-ink/72 dark:text-white/72">
            Je hebt direct contact met degene die jouw voertuig behandelt. Geen snelle productie, maar rustig en netjes werk waar we achter staan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="wat-we-doen" className="section-padding scroll-mt-28 bg-[#f8f6fb] dark:bg-graphite">
      <div className="container-premium">
        <Reveal>
          <SectionHeading align="center" eyebrow="Wat we doen" title="Poetsen, wassen en detailen voor auto's en motoren." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link href={service.href} className="group block h-full rounded-[24px] border border-ink/10 bg-white p-6 shadow-luxury transition hover:-translate-y-1 hover:border-purple/35 dark:border-white/10 dark:bg-white/[0.06]">
                  <Icon className="mb-5 text-purple dark:text-gold" />
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{service.title}</h3>
                  <ul className="mt-5 grid gap-3 text-ink/70 dark:text-white/70">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check size={16} className="text-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <Reveal>
          <SectionHeading align="center" eyebrow="Poetsen of detailen" title="Wat is het verschil?" />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[26px] border border-ink/10 bg-white p-7 shadow-luxury dark:border-white/10 dark:bg-white/[0.06]">
              <h3 className="font-display text-2xl font-semibold text-ink dark:text-white">Wassen & poetsen</h3>
              <p className="mt-4 leading-8 text-ink/72 dark:text-white/72">
                Dit is bedoeld voor regulier onderhoud. Je voertuig wordt weer fris, schoon en verzorgd. Denk aan handwas, velgen reinigen, interieur stofzuigen, ramen schoonmaken en eventueel een beschermende wax.
              </p>
              <ButtonLink href="/wassen-poetsen" variant="ghost" className="mt-6">Lees meer</ButtonLink>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-[26px] border border-purple/20 bg-purple p-7 text-white shadow-luxury">
              <h3 className="font-display text-2xl font-semibold">Detailing</h3>
              <p className="mt-4 leading-8 text-white/82">
                Detailing gaat verder dan normaal poetsen. Hierbij kijken we naar de staat van lak, interieur en details. Denk aan kleien, polijsten, lichte krasjes verminderen, glansherstel en bescherming.
              </p>
              <ButtonLink href="/detailing" className="mt-6">Lees meer over detailing</ButtonLink>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="section-padding dark bg-[#0d0d0f] text-white">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Onze pakketten"
            title="Kies snel wat past bij jouw auto of motor."
            text="Een eerste indruk van onze pakketten. Op de prijzenpagina vind je alle details, extra opties en vanaf-prijzen."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pricingSections.map((section, index) => {
            const Icon = section.icon;
            const isAuto = section.id === "auto-detailing";

            return (
              <Reveal key={section.id} delay={index * 0.08}>
                <article className="group flex h-full flex-col rounded-[30px] border border-gold/25 bg-gradient-to-br from-white/[0.10] to-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_0_1px_rgba(246,195,19,.22),0_28px_90px_rgba(246,195,19,.12)] sm:p-8">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
                        <Icon size={27} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                          {isAuto ? "Auto" : "Motor"}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-semibold">{section.label}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {section.packages.map((pkg) => (
                      <div key={pkg.name} className="rounded-[22px] border border-white/10 bg-white/[0.055] p-5 transition group-hover:border-white/16">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                          <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                          <p className="font-display text-lg font-semibold text-gold">
                            {pkg.price.startsWith("Vanaf") ? pkg.price : `Vanaf ${pkg.price}`}
                          </p>
                        </div>
                        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/74">
                          {pkg.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <Check size={16} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/prijzen#${section.id}`}
                    className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#ffd449]"
                  >
                    {isAuto ? "Bekijk alle autoprijzen" : "Bekijk alle motorprijzen"}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl rounded-[26px] border border-white/10 bg-white/[0.055] p-6 text-center">
            <p className="text-white/72">
              Wil je eerst weten wat handig is voor jouw voertuig? We denken graag mee en geven eerlijk advies.
            </p>
            <ButtonLink href="/werkwijze" variant="secondary" className="mt-5">
              Bekijk onze werkwijze
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="werk" className="section-padding bg-ink text-white dark:bg-graphite">
      <div className="container-premium">
        <Reveal>
          <SectionHeading eyebrow="Voorbeelden" title="Een kijkje in ons werk." text="Hier zie je jouw eigen foto en video’s als bewijs van echt uitgevoerd poets- en detailwerk." />
        </Reveal>
        <div className="mt-12">
          <T2WorkGrid />
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section-padding">
      <div className="container-premium grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Waarom YEYA CAR"
            title="Kleinschalig, duidelijk en met aandacht."
            text="We vinden het belangrijk dat je weet wat er met je voertuig gebeurt. Daarom leggen we rustig uit wat nodig is, wat kan wachten en welke behandeling past bij jouw situatie."
          />
          <ButtonLink href="/waarom-kiezen" className="mt-8">Waarom kiezen voor ons</ButtonLink>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-luxury dark:bg-white/[0.06]">
                <Check className="text-red" size={19} />
                <span className="font-semibold text-ink dark:text-white">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section-padding bg-[#f8f6fb] dark:bg-graphite">
      <div className="container-premium">
        <Reveal>
          <SectionHeading align="center" eyebrow="Ervaringen" title="Klanten waarderen vooral het persoonlijke contact." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Reveal key={review.name}>
              <article className="rounded-[24px] bg-white p-6 shadow-luxury dark:bg-white/[0.06]">
                <div className="mb-5 flex text-gold" aria-label="5 van 5 sterren">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
                </div>
                <p className="leading-7 text-ink/72 dark:text-white/72">“{review.text}”</p>
                <p className="mt-5 font-display font-semibold text-ink dark:text-white">{review.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-padding">
      <div className="container-premium max-w-4xl">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title="Veelgestelde vragen." />
        </Reveal>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[22px] bg-white p-5 shadow-luxury dark:bg-white/[0.06]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink dark:text-white">
                {faq.question}
                <ChevronDown className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-ink/70 dark:text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#fffaf1] dark:bg-navy">
      <div className="container-premium grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Benieuwd wat we voor jouw auto of motor kunnen betekenen?"
            text="Neem vrijblijvend contact op. We denken graag met je mee, of het nu gaat om auto wassen, auto poetsen op locatie, motor poetsen, auto detailing, polijsten, lakcorrectie of keramische coating."
          />
          <div className="mt-8 grid gap-4 text-ink/75 dark:text-white/72">
            <a className="focus-ring flex items-center gap-3 rounded-2xl p-2" href={`tel:${company.phoneHref}`}><Phone className="text-purple dark:text-gold" /> {company.phone}</a>
            <a className="focus-ring flex items-center gap-3 rounded-2xl p-2" href={`mailto:${company.email}`}><Mail className="text-purple dark:text-gold" /> {company.email}</a>
            <p className="flex items-center gap-3 p-2"><MapPin className="text-purple dark:text-gold" /> {company.address}</p>
            <div className="rounded-[22px] bg-white p-5 dark:bg-white/[0.06]">
              {company.hours.map((hour) => <p key={hour} className="font-medium">{hour}</p>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="container-premium grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src="/images/yeya-logo.png" alt={`${company.name} logo`} width={92} height={92} className="rounded-full bg-ink" />
          <p className="mt-5 font-display text-2xl font-semibold">{company.name}</p>
          <p className="mt-3 max-w-md text-white/70">{company.slogan} Voor gewone auto&apos;s, motoren, leaseauto&apos;s, bedrijfsbussen, oldtimers en gezinswagens.</p>
        </div>
        <div>
          <p className="mb-4 font-display font-semibold">Pagina&apos;s</p>
          <div className="grid gap-2 text-white/70">
            <a href="/prijzen" className="hover:text-gold">Prijzen</a>
            <a href="/werkwijze" className="hover:text-gold">Werkwijze</a>
            <a href="/wassen-poetsen" className="hover:text-gold">Wassen & Poetsen</a>
            <a href="/detailing" className="hover:text-gold">Detailing</a>
            <a href="/over-ons" className="hover:text-gold">Over ons</a>
            <a href="/contact" className="hover:text-gold">Contact</a>
          </div>
        </div>
        <div>
          <p className="mb-4 font-display font-semibold">Contact</p>
          <div className="grid gap-2 text-white/70">
            <a href={`tel:${company.phoneHref}`} className="hover:text-gold">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
            <a href="https://www.instagram.com/" className="hover:text-gold">{company.instagram}</a>
          </div>
        </div>
      </div>
      <div className="container-premium mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
        © {new Date().getFullYear()} {company.name}. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
