import {
  BadgeCheck,
  Bike,
  Brush,
  Car,
  Clock,
  Crown,
  Droplets,
  Gem,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Wrench
} from "lucide-react";

export const company = {
  name: "YEYA CAR & Bike Detailing",
  shortName: "YEYA CAR",
  slogan: "Elke auto en elke motor verdient aandacht.",
  phone: "+31 6 12 34 56 78",
  email: "info@yeyacar.nl",
  address: "Voorbeeldstraat 12, 1234 AB Amsterdam",
  whatsapp: "31612345678",
  hours: ["Ma - Vr: 08:30 - 18:00", "Za: 09:00 - 16:00", "Zo: op afspraak"],
  instagram: "@yeyacar"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Wassen & Poetsen", href: "/wassen-poetsen" },
  { label: "Detailing", href: "/detailing" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" }
];

export const benefits = [
  "Persoonlijk contact",
  "Voor auto's en motoren",
  "Op afspraak of op locatie",
  "Eerlijke uitleg vooraf"
];

export const services = [
  {
    title: "Wassen & poetsen",
    icon: Car,
    image: "/images/detailing1.jpg",
    href: "/wassen-poetsen",
    items: ["Handwas", "Velgen reinigen", "Interieur stofzuigen", "Beschermende wax"]
  },
  {
    title: "Interieur verzorgen",
    icon: SprayCan,
    image: "/images/interior.jpg",
    href: "/wassen-poetsen",
    items: ["Dashboard reinigen", "Ramen schoonmaken", "Kunststof verzorgen", "Fris resultaat"]
  },
  {
    title: "Motor poetsen",
    icon: Bike,
    image: "/images/motor.jpg",
    href: "/wassen-poetsen",
    items: ["Handmatige reiniging", "Velgen", "Kettingzone", "Bescherming"]
  },
  {
    title: "Detailing & polijsten",
    icon: Sparkles,
    image: "/images/polishing.jpg",
    href: "/detailing",
    items: ["Lakinspectie", "Kleien", "Polijsten", "Lakcorrectie"]
  }
];

export const priceGroups = [
  {
    category: "Auto klein",
    plans: [
      { name: "Basis", price: "vanaf €89", features: ["Handwas", "Velgen", "Interieur quick clean"] },
      { name: "Poetsbeurt", price: "vanaf €179", features: ["Grondiger reinigen", "Wax", "Kunststof verzorgen"], featured: true },
      { name: "Detailing", price: "op aanvraag", features: ["Interieur & exterieur", "Polijsten", "Bescherming"] }
    ]
  },
  {
    category: "SUV",
    plans: [
      { name: "Basis", price: "vanaf €119", features: ["Handwas", "Velgen", "Stofzuigen"] },
      { name: "Poetsbeurt", price: "vanaf €229", features: ["Leerzorg", "Wax", "Geurbehandeling"], featured: true },
      { name: "Detailing", price: "op aanvraag", features: ["Lakcorrectie", "Bescherming", "Detail interieur"] }
    ]
  },
  {
    category: "Motor",
    plans: [
      { name: "Basis", price: "vanaf €79", features: ["Handreiniging", "Velgen", "Ketting ontvetten"] },
      { name: "Detailing", price: "vanaf €159", features: ["Polijstwerk", "Bescherming", "Chroom & kunststof"], featured: true }
    ]
  }
];

export const pricingSections = [
  {
    id: "auto-detailing",
    label: "Auto Detailing",
    description: "Bekijk alle behandelingen en pakketten voor auto's.",
    icon: Car,
    packages: [
      {
        name: "Bronze",
        price: "€49",
        icon: Droplets,
        features: ["Handwas", "Drogen", "Velgen reinigen", "Banden dressing", "Ramen buiten reinigen", "Waxlaag aanbrengen"]
      },
      {
        name: "Silver",
        price: "€99",
        icon: ShieldCheck,
        features: ["Alles uit Bronze", "Interieur stofzuigen", "Dashboard reinigen", "Kunststof verzorgen", "Ramen binnen en buiten"]
      },
      {
        name: "Gold",
        price: "Vanaf €160",
        icon: Sparkles,
        featured: true,
        features: ["Alles uit Silver", "Lak kleien", "1-staps polijsten", "Waxlaag aanbrengen", "Motorruimte reinigen"]
      },
      {
        name: "Diamond Detail",
        price: "Vanaf €499",
        icon: Gem,
        diamond: true,
        features: [
          "Meerstaps polijsten",
          "Professionele keramische coating",
          "Interieur dieptereiniging",
          "Kunststof beschermen",
          "Velgen gecoat",
          "12, 36 of 60 maanden lakbescherming"
        ]
      }
    ],
    extras: [
      { title: "Huisdierharen verwijderen", price: "Vanaf €30", icon: Brush, description: "Voor bekleding, matten en kofferbak." },
      { title: "Hardnekkige vervuiling", price: "Vanaf €25", icon: SprayCan, description: "Extra aandacht voor ingeslagen vuil." },
      { title: "Geurbehandeling / ozon", price: "€50", icon: Sparkles, description: "Voor nare geuren in het interieur." },
      { title: "Motorruimte reinigen", price: "€35", icon: Wrench, description: "Zorgvuldig reinigen waar mogelijk." },
      { title: "Banden dressing", price: "€15", icon: Shield, description: "Verzorgde, diepe afwerking van banden." },
      { title: "Kunststof exterieur herstellen", price: "Vanaf €40", icon: Crown, description: "Frisser uiterlijk voor verweerde delen." }
    ]
  },
  {
    id: "motor-detailing",
    label: "Motor Detailing",
    description: "Bekijk alle behandelingen en pakketten voor motoren.",
    icon: Bike,
    packages: [
      {
        name: "Bronze",
        price: "€39",
        icon: Droplets,
        features: ["Handwas", "Velgen reinigen", "Waxlaag aanbrengen"]
      },
      {
        name: "Silver",
        price: "€79",
        icon: ShieldCheck,
        features: ["Alles uit Bronze", "Tank 1-staps polijsten", "Kunststofdelen reinigen", "Kuipdelen reinigen", "Chroom oppoetsen"]
      },
      {
        name: "Gold",
        price: "Vanaf €120",
        icon: Sparkles,
        featured: true,
        features: ["Alles uit Silver", "Lak kleien", "1-staps polijsten", "Waxlaag aanbrengen", "Motorblok reinigen", "Kunststof en rubber beschermen"]
      },
      {
        name: "Diamond Detail",
        price: "Vanaf €349",
        icon: Gem,
        diamond: true,
        features: [
          "Meerstaps polijsten",
          "Professionele keramische coating",
          "Volledige dieptereiniging",
          "Velgen keramisch beschermd",
          "Chroom hoogglans gepolijst",
          "Kunststof en rubber langdurig beschermd",
          "12, 36 of 60 maanden lakbescherming"
        ]
      }
    ],
    extras: [
      { title: "Ketting reinigen & smeren", price: "€20", icon: Wrench, description: "Netjes reinigen en opnieuw smeren." },
      { title: "Motorblok diep reinigen", price: "Vanaf €35", icon: SprayCan, description: "Voor vuil op lastigere plekken." },
      { title: "Chroom polijsten", price: "Vanaf €30", icon: Sparkles, description: "Meer glans op chromen onderdelen." },
      { title: "Velgen keramisch coaten", price: "Vanaf €75", icon: ShieldCheck, description: "Langere bescherming tegen vuil." },
      { title: "Uitlaat polijsten", price: "€25", icon: Wrench, description: "Frissere afwerking van de uitlaat." },
      { title: "Kunststof herstellen", price: "Vanaf €35", icon: Shield, description: "Verweerde delen weer netter." },
      { title: "Ruit polijsten", price: "€25", icon: Sparkles, description: "Voor een helderder zicht." },
      { title: "Zadel reinigen & beschermen", price: "€20", icon: Brush, description: "Reiniging en verzorging van het zadel." }
    ]
  }
];

export const beforeAfter = [
  { title: "Lak opfrissen", before: "/images/before-1.jpg", after: "/images/after-1.jpg" },
  { title: "Motor detail", before: "/images/before-2.jpg", after: "/images/after-2.jpg" },
  { title: "Interieur herstel", before: "/images/before-3.jpg", after: "/images/after-3.jpg" }
];

export const reviews = [
  { name: "Sander de Vries", text: "Mijn leaseauto was weer netjes schoon. Fijn contact en duidelijke afspraken." },
  { name: "Nadia El Amrani", text: "Er werd rustig uitgelegd wat wel en niet nodig was. Mijn auto ziet er weer verzorgd uit." },
  { name: "Thomas Bakker", text: "Mijn motor is met zichtbaar veel aandacht behandeld. Ook de kleine hoekjes waren netjes." },
  { name: "Mila Janssen", text: "Geen poespas, gewoon eerlijk advies en goed werk. Precies wat ik zocht." },
  { name: "Ruben Koops", text: "Voor ons wagenpark een betrouwbare partner. Net resultaat, duidelijke planning." },
  { name: "Eva Meijer", text: "De interieurreiniging overtrof mijn verwachting. Frisse geur zonder chemische walm." }
];

export const processSteps = [
  { title: "Afspraak maken", icon: Clock },
  { title: "Voertuig brengen", icon: MapPin },
  { title: "Professioneel reinigen", icon: Brush },
  { title: "Ophalen", icon: BadgeCheck }
];

export const workflowSteps = [
  {
    title: "Kennismaken & advies",
    text: "We bespreken wat je wensen zijn en bekijken samen de staat van de auto of motor. Zo kunnen we een behandeling adviseren die echt past bij jouw voertuig en budget."
  },
  {
    title: "Inspectie",
    text: "Voor we beginnen controleren we de lak, velgen, kunststofdelen en het interieur. Eventuele beschadigingen of aandachtspunten bespreken we vooraf, zodat je nooit voor verrassingen komt te staan."
  },
  {
    title: "Grondige reiniging",
    text: "We starten altijd met een veilige handwas. Vuil, remstof, insecten en andere vervuiling worden zorgvuldig verwijderd zonder de lak onnodig te belasten."
  },
  {
    title: "De behandeling",
    text: "Afhankelijk van de gekozen dienst gaan we verder met een uitgebreide poetsbeurt of een volledige detailbehandeling. Hierbij besteden we aandacht aan ieder onderdeel, van lak tot velgen en van kunststof tot glas."
  },
  {
    title: "Bescherming",
    text: "Na de behandeling brengen we indien gewenst een beschermlaag aan, zoals een wax of sealant. Hierdoor blijft het resultaat langer mooi en is de lak beter beschermd tegen weersinvloeden."
  },
  {
    title: "Oplevering",
    text: "Samen lopen we het eindresultaat na. We geven indien gewenst tips om je auto of motor zo lang mogelijk schoon en netjes te houden."
  }
];

export const workExamples = [
  {
    title: "Werkvoorbeeld video",
    type: "video",
    src: "/work/werkvoorbeeld-hoofd.mov",
    alt: "Video van uitgevoerd poets- en detailwerk"
  },
  {
    title: "Werkvoorbeeld video 1",
    type: "video",
    src: "/work/werkvoorbeeld-1.mov",
    alt: "Video van poetswerk door YEYA CAR"
  },
  {
    title: "Werkvoorbeeld video 2",
    type: "video",
    src: "/work/werkvoorbeeld-2.mov",
    alt: "Video van auto- of motorreiniging"
  },
  {
    title: "Werkvoorbeeld video 3",
    type: "video",
    src: "/work/werkvoorbeeld-3.mov",
    alt: "Video van detailing resultaat"
  },
  {
    title: "Werkvoorbeeld video 4",
    type: "video",
    src: "/work/werkvoorbeeld-4.mov",
    alt: "Video van poets- en detailwerk"
  }
];

export const faqs = [
  {
    question: "Hoe lang duurt een poetsbeurt?",
    answer: "Een gewone poetsbeurt duurt meestal 2 tot 4 uur. Detailing en polijstwerk plannen we ruimer, omdat dit meer aandacht en stappen vraagt."
  },
  {
    question: "Welke producten gebruiken jullie?",
    answer: "We werken met veilige reinigers, goede microvezelmaterialen en kwaliteitsproducten voor lak, leer, kunststof en velgen."
  },
  {
    question: "Moet ik een afspraak maken?",
    answer: "Ja, zo reserveren we voldoende tijd en kunnen we de behandeling afstemmen op de staat van jouw auto of motor."
  },
  {
    question: "Kan ik wachten?",
    answer: "Bij korte behandelingen kan dat in overleg. Voor detailing adviseren we het voertuig te brengen en later op te halen."
  }
];

export const stats = [
  { label: "Behandelde voertuigen", value: 1250, suffix: "+" },
  { label: "Klanttevredenheid", value: 98, suffix: "%" },
  { label: "Jaren ervaring", value: 9, suffix: "+" }
];

export const whyChooseUs = [
  "Persoonlijk contact",
  "Kleinschalige aanpak",
  "Voor alle auto's en motoren",
  "Geen onderscheid tussen dagelijks of bijzonder gebruik",
  "Mogelijk op locatie",
  "Werken met kwaliteitsproducten",
  "Aandacht voor detail",
  "Transparante prijzen"
];

export const partners = ["Auto poetsen", "Motor poetsen", "Auto detailing", "Lakcorrectie", "Keramische coating"];

export const quoteOptions = [
  { label: "Interieur", value: 85 },
  { label: "Exterieur", value: 95 },
  { label: "Polijsten", value: 175 },
  { label: "Keramische coating", value: 395 },
  { label: "Koplamprestauratie", value: 75 },
  { label: "Bekleding reinigen", value: 120 },
  { label: "Ozonbehandeling", value: 55 }
];

export const trustIcons = [ShieldCheck, Star, Brush, Phone];
