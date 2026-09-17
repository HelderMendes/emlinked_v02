import type { Dictionary } from "@/lib/content-types";

const en = {
  meta: {
    title: "Emlinked — Property management and financial administration in Business Central",
    description:
      "Emlinked unites property management and financial administration in Microsoft Dynamics 365 Business Central. Built for portfolios from 50 rental units.",
  },
  skipToContent: "Skip to content",
  languageNames: { nl: "Nederlands", en: "English", fr: "Français" },
  nav: {
    items: [
      {
        label: "Our apps",
        href: "/apps",
        children: [
          {
            label: "Property management software",
            description: "The core SaaS module for real estate management.",
            href: "/apps/vastgoedbeheer-software",
          },
          {
            label: "Tenant portal",
            description: "Self-service portal for communication & requests.",
            href: "/apps/huurdersportaal",
          },
          {
            label: "Payment software",
            description: "Automated payment transactions & bank reconciliation.",
            href: "/apps/payment-software",
          },
        ],
      },
      { label: "Box 3 check", href: "/box3-check", badge: "⚡" },
      { label: "Partner software", href: "/partners" },
      { label: "Pricing", href: "/prijzen" },
      { label: "References", href: "/referenties" },
      { label: "About us", href: "/over-ons" },
      { label: "News", href: "/nieuws" },
    ],
    demoLabel: "Request a demo",
    demoHref: "/demo",
    portalLabel: "My emlinked",
    portalHref: "https://portal.emlinked.com",
  },
  hero: {
    eyebrow: "Property management × Business Central",
    headline:
      "Run your entire property portfolio in one system — from lease to ledger",
    body: "Emlinked unites property management and financial administration in Microsoft Dynamics 365 Business Central. Automate leases, indexations and bank reconciliation — built for portfolios from 50 rental units.",
    ctaLabel: "Request a free demo",
    ctaHref: "/demo",
  },
  trust: {
    intro: "Professional property managers and controllers trust Emlinked",
    quotes: [
      { name: "Levi Bosboom", role: "Owner, Vastgoedbeheer Rotterdam", rating: 5 },
      { name: "Angelique van Doorn", role: "Property manager, Van Overhagen", rating: 5 },
      { name: "Michel De Waal", role: "Director, M2 Capital Real Estate", rating: 5 },
      { name: "Sander Bot", role: "Co-owner, Baetland Vastgoed", rating: 5 },
    ],
    highlights: [
      "Built on Business Central",
      "Automatic bank reconciliation via PSD2",
      "One central source for all your operational data",
    ],
  },
  showcase: {
    eyebrow: "The product in view",
    heading: "Your whole portfolio in one overview",
    body: "From leases and indexations to document processing and bank reconciliation: your entire real estate and financial administration in one screen, native to Microsoft Dynamics 365 Business Central.",
    ctaLabel: "Request a demo",
    ctaHref: "/demo",
  },
  apps: {
    eyebrow: "Modular and flexible",
    heading: "Three apps, one workflow",
    body: "Our modules connect your day-to-day management with your financial administration. Choose the apps that fit your portfolio.",
    apps: [
      {
        index: "01",
        eyebrow: "App 01",
        title: "Property management software",
        body: "Manage your properties, leases and indexations (CPI and WWS) in one system. Fully automate recurring processes such as rent increases and renewals, allocate costs automatically across your units, and handle maintenance digitally — from report to purchase order.",
        tag: "Core SaaS module",
        ctaLabel: "View module",
      },
      {
        index: "02",
        eyebrow: "App 02",
        title: "Tenant portal",
        body: "The self-service portal gives tenants 24/7 access to their personal rental data. They view and download invoices and documents, such as lease agreements, and submit repair requests — all logged and tracked centrally.",
        tag: "Self-service module",
        ctaLabel: "View module",
      },
      {
        index: "03",
        eyebrow: "App 03",
        title: "Payment software Paylinked",
        body: "Add a QR code and payment link to your rent invoices so tenants can pay quickly, securely and easily. This reduces the risk of errors and speeds up the receipt of rent payments.",
        tag: "Primary operational module",
        ctaLabel: "View module",
      },
    ],
  },
  erp: {
    eyebrow: "ERP integration",
    heading: "Emlinked runs inside Microsoft Dynamics 365 Business Central, not alongside it",
    body: "No manual exports, no complex API connections, and no duplicate data flows. Every operational mutation is processed directly and validated in the general ledger.",
    cards: [
      {
        feedLabel: "2-way sync",
        tag: "ERP core",
        title: "Business Central",
        subtitle: "One integrated environment",
        body: "Manage your entire financial administration and property portfolio in one environment. From rent administration and contract management to invoice processing, bank connections and reporting — every process brought together in a single platform.",
        footerLeft: "Direct DB schema",
        footerRight: "Core database",
      },
      {
        feedLabel: "Inbound feed",
        tag: "Efficient invoice processing",
        title: "Document Capture",
        subtitle: "Intelligent OCR processing",
        body: "Save time and prevent errors with intelligent OCR that automatically recognizes and processes invoice data in Business Central. Invoices go straight to the right approval workflow — approve anytime, anywhere. Supports electronic invoicing via Peppol.",
        footerLeft: "Continia OCR engine",
        footerRight: "Auto-matching",
      },
      {
        feedLabel: "Realtime feed",
        tag: "PSD2 bank connection",
        title: "Direct Banking",
        subtitle: "Automatic reconciliation",
        body: "Connect your bank securely and directly for automatic reconciliation of bank statements and efficient payment execution. Pay securely straight from the system, with support for roughly 2,000 banks across 15 EU countries.",
        footerLeft: "PSD2 / ISO 20022",
        footerRight: "Live reconciled",
      },
    ],
  },
  testimonials: {
    eyebrow: "Customer stories",
    heading: "What property managers say about Emlinked",
    body: "Professional managers rely on Emlinked every day for their property management and administration.",
    items: [
      {
        index: "01",
        name: "Levi Bosboom",
        role: "Vastgoedbeheer Rotterdam",
        quote:
          "Emlinked is the link between the manager and the property. We're genuinely enthusiastic and would definitely recommend it.",
        extra: "Month-end close down from 5 working days to 4 hours.",
        tag: "Core SaaS module",
        ctaLabel: "Read more",
      },
      {
        index: "02",
        name: "Angelique van Doorn-Franke",
        role: "Van Overhagen Vastgoed",
        quote:
          "A very user-friendly and clear property management package. We've been a satisfied user for over 5 years.",
        tag: "Self-service module",
        ctaLabel: "Read more",
      },
      {
        index: "03",
        name: "Michel De Waal",
        role: "M2 Capital Real Estate",
        quote:
          "As a commercial property manager, Emlinked is a major added value. Support is fast, sharp and proactive.",
        tag: "Primary operational module",
        ctaLabel: "Read more",
      },
    ],
  },
  box3: {
    tag: "Box 3 legislation 2028",
    headline: "From 2028, Box 3 tax is based on your actual rental income minus costs",
    subheadline:
      "That calls for airtight administration per unit — Emlinked keeps your rental income, costs and property data continuously up to date.",
    body: "Box 3 is being overhauled: from 2028, your actual return counts. Calculate in 2 minutes what it means for your portfolio, so you and your accountant are ready when the new rules take effect.",
    bullets: [
      "Calculate your tax exposure in under 2 minutes",
      "Receive a concrete optimization report in your inbox",
      "Discover how to allocate operational costs more efficiently",
    ],
    ctaLabel: "Start the free Box 3 check ⚡",
  },
  finalCta: {
    eyebrow: "Digitalization",
    heading: "Ready to move from separate systems to one overview?",
    body: "Request a 30-minute demo and discover how Emlinked brings your property management and financial administration together — tailored to your portfolio.",
    ctaPrimaryLabel: "Request a free demo",
    ctaPrimaryHref: "/demo",
    ctaSecondaryLabel: "Request a no-obligation demo",
  },
  footer: {
    contactEyebrow: "Direct contact",
    sendLabel: "Send",
    tagline:
      "Emlinked brings commercial, technical and administrative property management together in one clear platform. Work more efficiently, with fewer errors and more grip on your portfolio.",
    phone: "+31 (0)88 707 7000",
    phoneHref: "tel:+31887077000",
    address: "Gooimeer 12, 1411 DE Naarden, The Netherlands",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Property management software", href: "/apps/vastgoedbeheer-software" },
          { label: "Tenant portal", href: "/apps/huurdersportaal" },
          { label: "Payment software", href: "/apps/payment-software" },
        ],
      },
      {
        title: "Integrations",
        links: [
          { label: "Dynamics 365 ERP sync", href: "/integraties/erp-sync" },
          { label: "Document Capture (OCR)", href: "/integraties/document-capture" },
          { label: "Direct Banking (PSD2)", href: "/integraties/direct-banking" },
          { label: "Box 3 calculator ⚡", href: "/box3-check" },
        ],
      },
      {
        title: "Organization",
        links: [
          { label: "The team", href: "/over-ons" },
          { label: "References", href: "/referenties" },
          { label: "News & blog", href: "/nieuws" },
          { label: "Get in touch", href: "/contact" },
        ],
      },
      {
        title: "Support & info",
        links: [
          { label: "Documentation center", href: "/documentatie" },
          { label: "Help & support", href: "/support" },
        ],
      },
    ],
    copyright: "© 2010 – 2026 Emlinked. All rights reserved.",
    legalLinks: [
      { label: "Privacy policy", href: "/privacybeleid" },
      { label: "Terms & conditions", href: "/voorwaarden" },
      { label: "Cookie settings", href: "/cookies" },
    ],
  },
} satisfies Dictionary;

export default en;
