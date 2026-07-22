import { company, faqs } from "@/lib/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: company.name,
  description: "Kleinschalig poets- en detailingbedrijf voor auto's en motoren. Auto poetsen, motor poetsen, auto detailing, polijsten en lakbescherming.",
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Voorbeeldstraat 12",
    postalCode: "1234 AB",
    addressLocality: "Amsterdam",
    addressCountry: "NL"
  },
  openingHours: ["Mo-Fr 08:30-18:00", "Sa 09:00-16:00"],
  priceRange: "€€€",
  image: "https://www.voorbeeld-detailing.nl/images/yeya-logo.png",
  url: "https://www.voorbeeld-detailing.nl"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};
