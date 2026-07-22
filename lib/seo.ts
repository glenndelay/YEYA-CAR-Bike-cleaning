import { company, faqs } from "@/lib/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: company.name,
  description: "Kleinschalig poets- en detailingbedrijf voor auto's en motoren. Auto poetsen, motor poetsen, auto detailing, polijsten en lakbescherming.",
  telephone: company.phone,
  email: company.email,
  openingHours: ["Mo-Fr 08:30-18:00", "Sa 09:00-16:00"],
  priceRange: "€€€",
  image: "https://yeya-car-bike-cleaning.vercel.app/images/yeya-logo.png",
  url: "https://yeya-car-bike-cleaning.vercel.app"
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
