# YEYA CAR & Bike Detailing Website

Productieklare Next.js website voor een kleinschalig auto- en motorpoetsbedrijf.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide icons

## Installatie

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Productie

```bash
npm run build
npm run start
```

## Aanpassen

- Bedrijfsgegevens: `lib/site.ts`
- SEO en structured data: `lib/seo.ts`, `app/layout.tsx`
- Afbeeldingen: vervang de placeholders in `public/images`
- Kleuren en design tokens: `tailwind.config.ts`, `app/globals.css`

## Afbeeldingen

De website gebruikt duidelijke placeholderbestanden zoals:

- `/images/hero.jpg`
- `/images/detailing1.jpg`
- `/images/motor.jpg`
- `/images/before-1.jpg`
- `/images/after-1.jpg`

Vervang deze door eigen professionele fotografie voor het meest persoonlijke resultaat.

## Formulieren

De contact- en offerteformulieren valideren client-side en tonen succesmeldingen. Koppel ze in productie aan een API route, CRM, e-mailservice of webhook.

## SEO

Inbegrepen:

- Meta title en description
- Open Graph
- Sitemap en robots
- Schema.org LocalBusiness
- FAQ schema
- Semantische HTML en toegankelijke labels
