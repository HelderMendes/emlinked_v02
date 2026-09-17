import type { Dictionary } from "@/lib/content-types";

const nl = {
  meta: {
    title: "Emlinked — Vastgoedbeheer en financiële administratie in Business Central",
    description:
      "Emlinked brengt vastgoedbeheer en financiële administratie samen in Microsoft Dynamics 365 Business Central. Voor portefeuilles vanaf 50 verhuureenheden.",
  },
  skipToContent: "Direct naar inhoud",
  languageNames: { nl: "Nederlands", en: "English", fr: "Français" },
  nav: {
    items: [
      {
        label: "Onze apps",
        href: "/apps",
        children: [
          {
            label: "Vastgoedbeheer software",
            description: "De core SaaS module voor vastgoedmanagement.",
            href: "/apps/vastgoedbeheer-software",
          },
          {
            label: "Huurdersportaal",
            description: "Self-service portaal voor communicatie & meldingen.",
            href: "/apps/huurdersportaal",
          },
          {
            label: "Payment software",
            description: "Geautomatiseerde betalingstransacties & bankaflettering.",
            href: "/apps/payment-software",
          },
        ],
      },
      { label: "Box3-check", href: "/box3-check", badge: "⚡" },
      { label: "Partners software", href: "/partners" },
      { label: "Prijzen", href: "/prijzen" },
      { label: "Referenties", href: "/referenties" },
      { label: "Over ons", href: "/over-ons" },
      { label: "Nieuws", href: "/nieuws" },
    ],
    demoLabel: "Demo aanvragen",
    demoHref: "/demo",
    portalLabel: "Mijn emlinked",
    portalHref: "https://portal.emlinked.com",
  },
  hero: {
    eyebrow: "Vastgoedbeheer × Business Central",
    headline:
      "Beheer je hele vastgoedportefeuille in één systeem — van huurcontract tot grootboek",
    body: "Emlinked brengt vastgoedbeheer en financiële administratie samen in Microsoft Dynamics 365 Business Central. Automatiseer huurcontracten, indexaties en bankaflettering — speciaal voor portefeuilles vanaf 50 verhuureenheden.",
    ctaLabel: "Gratis demo aanvragen",
    ctaHref: "/demo",
  },
  trust: {
    intro: "Professionele vastgoedbeheerders en controllers vertrouwen op Emlinked",
    quotes: [
      { name: "Levi Bosboom", role: "Eigenaar, Vastgoedbeheer Rotterdam", rating: 5 },
      { name: "Angelique van Doorn", role: "Vastgoedbeheerder, Van Overhagen", rating: 5 },
      { name: "Michel De Waal", role: "Directeur, M2 Capital Real Estate", rating: 5 },
      { name: "Sander Bot", role: "Mede-eigenaar, Baetland Vastgoed", rating: 5 },
    ],
    highlights: [
      "Gebouwd op Business Central",
      "Automatische bankaflettering via PSD2",
      "Eén centrale bron voor al je operationele data",
    ],
  },
  showcase: {
    eyebrow: "Het product in beeld",
    heading: "Je hele portefeuille in één overzicht",
    body: "Van huurcontracten en indexaties tot documentverwerking en bankaflettering: je volledige vastgoed- en financiële administratie in één scherm, native in Microsoft Dynamics 365 Business Central.",
    ctaLabel: "Vraag een demo aan",
    ctaHref: "/demo",
  },
  apps: {
    eyebrow: "Modulair en flexibel",
    heading: "Drie apps, één workflow",
    body: "Onze modules verbinden je dagelijkse beheer met je financiële administratie. Kies de apps die passen bij je portefeuille.",
    apps: [
      {
        index: "01",
        eyebrow: "App 01",
        title: "Vastgoedbeheer software",
        body: "Beheer je vastgoedobjecten, huurovereenkomsten en indexaties (CPI en WWS) in één systeem. Terugkerende processen zoals huurverhogingen en prolongaties automatiseer je volledig, kosten verdeel je automatisch over je verhuureenheden, en onderhoud regel je digitaal — van melding tot inkooporder.",
        tag: "Core SaaS module",
        ctaLabel: "Bekijk module",
      },
      {
        index: "02",
        eyebrow: "App 02",
        title: "Huurdersportaal",
        body: "Via het selfserviceportaal hebben huurders 24/7 toegang tot hun persoonlijke huurgegevens. Zij bekijken en downloaden eenvoudig facturen en documenten, zoals huurovereenkomsten, en dienen reparatieverzoeken in — alles centraal vastgelegd en inzichtelijk.",
        tag: "Self-service module",
        ctaLabel: "Bekijk module",
      },
      {
        index: "03",
        eyebrow: "App 03",
        title: "Payment software Paylinked",
        body: "Voeg een QR-code en betaallink toe aan je huurfacturen, zodat huurders snel, veilig en eenvoudig kunnen betalen. Dit verlaagt de kans op fouten en versnelt de ontvangst van huurbetalingen.",
        tag: "Primary operational module",
        ctaLabel: "Bekijk module",
      },
    ],
  },
  erp: {
    eyebrow: "ERP integratie",
    heading: "Emlinked draait binnen Microsoft Dynamics 365 Business Central, niet ernaast",
    body: "Geen handmatige exports, geen complexe API-koppelingen en geen dubbele gegevensstromen. Elke operationele mutatie wordt direct en gevalideerd verwerkt in het grootboek.",
    cards: [
      {
        feedLabel: "2-way sync",
        tag: "ERP core",
        title: "Business Central",
        subtitle: "Eén geïntegreerde omgeving",
        body: "Beheer je volledige financiële administratie en vastgoedportefeuille in één omgeving. Van huuradministratie en contractbeheer tot factuurverwerking, bankkoppelingen en rapportages — alle processen samengebracht in één platform.",
        footerLeft: "Direct DB schema",
        footerRight: "Core database",
      },
      {
        feedLabel: "Inbound feed",
        tag: "Efficiënt facturen verwerken",
        title: "Document Capture",
        subtitle: "Intelligente OCR-verwerking",
        body: "Bespaar tijd en voorkom fouten dankzij intelligente OCR die factuurgegevens automatisch herkent en verwerkt in Business Central. Facturen gaan direct naar de juiste goedkeuringsworkflow — altijd en overal goed te keuren. Ondersteunt elektronische facturen via Peppol.",
        footerLeft: "Continia OCR engine",
        footerRight: "Auto-matching",
      },
      {
        feedLabel: "Realtime feed",
        tag: "PSD2 bankkoppeling",
        title: "Direct Banking",
        subtitle: "Automatische aflettering",
        body: "Koppel je bank veilig en direct voor automatische aflettering van bankafschriften en efficiënte uitvoering van betalingen. Betaal veilig rechtstreeks vanuit het systeem, met ondersteuning voor circa 2.000 banken in 15 EU-landen.",
        footerLeft: "PSD2 / ISO 20022",
        footerRight: "Live reconciled",
      },
    ],
  },
  testimonials: {
    eyebrow: "Klantcases",
    heading: "Wat vastgoedbeheerders over Emlinked zeggen",
    body: "Professionele beheerders vertrouwen dagelijks op Emlinked voor hun vastgoedbeheer en administratie.",
    items: [
      {
        index: "01",
        name: "Levi Bosboom",
        role: "Vastgoedbeheer Rotterdam",
        quote:
          "Emlinked is de schakel tussen de beheerder en het vastgoed. Wij zijn zeer enthousiast en raden het zeker aan.",
        extra: "Maandafsluiting terug van 5 werkdagen naar 4 uur.",
        tag: "Core SaaS module",
        ctaLabel: "Lees meer",
      },
      {
        index: "02",
        name: "Angelique van Doorn-Franke",
        role: "Van Overhagen Vastgoed",
        quote:
          "Een zeer gebruiksvriendelijk en overzichtelijk vastgoedbeheerpakket. We zijn al ruim 5 jaar een tevreden gebruiker.",
        tag: "Self-service module",
        ctaLabel: "Lees meer",
      },
      {
        index: "03",
        name: "Michel De Waal",
        role: "M2 Capital Real Estate",
        quote:
          "Als commercieel vastgoedbeheerder is Emlinked een grote toegevoegde waarde. De support is snel, scherp en meedenkend.",
        tag: "Primary operational module",
        ctaLabel: "Lees meer",
      },
    ],
  },
  box3: {
    tag: "Box 3-wetgeving 2028",
    headline: "Vanaf 2028 word je in Box 3 belast op je werkelijke huurinkomsten min je kosten",
    subheadline:
      "Dat vraagt om een sluitende administratie per eenheid — Emlinked houdt je huurinkomsten, kosten en objectgegevens continu actueel.",
    body: "Box 3 gaat op de schop: vanaf 2028 telt je werkelijke rendement. Bereken in 2 minuten wat het voor jouw portefeuille betekent, zodat jij én je accountant klaar zijn als de nieuwe regels ingaan.",
    bullets: [
      "Bereken binnen 2 minuten je fiscale risico's",
      "Ontvang een concreet optimalisatierapport in je mailbox",
      "Ontdek hoe je je operationele kosten efficiënter kunt doorbelasten",
    ],
    ctaLabel: "Start de gratis Box 3-check ⚡",
  },
  finalCta: {
    eyebrow: "Digitalisering",
    heading: "Klaar om van losse systemen naar één overzicht te gaan?",
    body: "Vraag een demo van 30 minuten aan en ontdek hoe Emlinked je vastgoedbeheer en financiële administratie samenbrengt — afgestemd op jouw portefeuille.",
    ctaPrimaryLabel: "Vraag een gratis demo aan",
    ctaPrimaryHref: "/demo",
    ctaSecondaryLabel: "Vraag vrijblijvend een demo aan",
  },
  footer: {
    contactEyebrow: "Direct contact",
    sendLabel: "Stuur",
    tagline:
      "Emlinked brengt commercieel, technisch en administratief vastgoedbeheer samen in één overzichtelijk platform. Zo werk je efficiënter, met minder fouten en meer grip op je portefeuille.",
    phone: "+31 (0)88 707 7000",
    phoneHref: "tel:+31887077000",
    address: "Gooimeer 12, 1411 DE Naarden",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Vastgoedbeheer software", href: "/apps/vastgoedbeheer-software" },
          { label: "Huurdersportaal", href: "/apps/huurdersportaal" },
          { label: "Payment software", href: "/apps/payment-software" },
        ],
      },
      {
        title: "Integraties",
        links: [
          { label: "Dynamics 365 ERP sync", href: "/integraties/erp-sync" },
          { label: "Document Capture (OCR)", href: "/integraties/document-capture" },
          { label: "Direct Banking (PSD2)", href: "/integraties/direct-banking" },
          { label: "Box 3 calculator ⚡", href: "/box3-check" },
        ],
      },
      {
        title: "Organisatie",
        links: [
          { label: "Het team", href: "/over-ons" },
          { label: "Referenties", href: "/referenties" },
          { label: "Nieuws & blog", href: "/nieuws" },
          { label: "Contact opnemen", href: "/contact" },
        ],
      },
      {
        title: "Support & info",
        links: [
          { label: "Documentatiecenter", href: "/documentatie" },
          { label: "Help & ondersteuning", href: "/support" },
        ],
      },
    ],
    copyright: "© 2010 – 2026 Emlinked. Alle rechten voorbehouden.",
    legalLinks: [
      { label: "Privacybeleid", href: "/privacybeleid" },
      { label: "Algemene voorwaarden", href: "/voorwaarden" },
      { label: "Cookie-instellingen", href: "/cookies" },
    ],
  },
} satisfies Dictionary;

export default nl;
