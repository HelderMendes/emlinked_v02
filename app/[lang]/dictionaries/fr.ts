import type { Dictionary } from "@/lib/content-types";

const fr = {
  meta: {
    title: "Emlinked — Gestion immobilière et administration financière dans Business Central",
    description:
      "Emlinked réunit la gestion immobilière et l'administration financière dans Microsoft Dynamics 365 Business Central. Conçu pour les portefeuilles à partir de 50 unités locatives.",
  },
  skipToContent: "Aller au contenu",
  languageNames: { nl: "Nederlands", en: "English", fr: "Français" },
  nav: {
    items: [
      {
        label: "Nos applications",
        href: "/apps",
        children: [
          {
            label: "Logiciel de gestion immobilière",
            description: "Le module SaaS central pour la gestion immobilière.",
            href: "/apps/vastgoedbeheer-software",
          },
          {
            label: "Portail locataires",
            description: "Portail libre-service pour la communication et les demandes.",
            href: "/apps/huurdersportaal",
          },
          {
            label: "Logiciel de paiement",
            description: "Transactions de paiement automatisées et rapprochement bancaire.",
            href: "/apps/payment-software",
          },
        ],
      },
      { label: "Box 3-check", href: "/box3-check", badge: "⚡" },
      { label: "Logiciels partenaires", href: "/partners" },
      { label: "Tarifs", href: "/prijzen" },
      { label: "Références", href: "/referenties" },
      { label: "À propos", href: "/over-ons" },
      { label: "Actualités", href: "/nieuws" },
    ],
    demoLabel: "Demander une démo",
    demoHref: "/demo",
    portalLabel: "Mon emlinked",
    portalHref: "https://portal.emlinked.com",
  },
  hero: {
    eyebrow: "Gestion immobilière × Business Central",
    headline:
      "Gérez tout votre portefeuille immobilier dans un seul système — du bail au grand livre",
    body: "Emlinked réunit la gestion immobilière et l'administration financière dans Microsoft Dynamics 365 Business Central. Automatisez les baux, les indexations et le rapprochement bancaire — conçu pour les portefeuilles à partir de 50 unités locatives.",
    ctaLabel: "Demander une démo gratuite",
    ctaHref: "/demo",
  },
  trust: {
    intro: "Les gestionnaires immobiliers et contrôleurs professionnels font confiance à Emlinked",
    quotes: [
      { name: "Levi Bosboom", role: "Propriétaire, Vastgoedbeheer Rotterdam", rating: 5 },
      { name: "Angelique van Doorn", role: "Gestionnaire immobilière, Van Overhagen", rating: 5 },
      { name: "Michel De Waal", role: "Directeur, M2 Capital Real Estate", rating: 5 },
      { name: "Sander Bot", role: "Copropriétaire, Baetland Vastgoed", rating: 5 },
    ],
    highlights: [
      "Construit sur Business Central",
      "Rapprochement bancaire automatique via PSD2",
      "Une source centrale unique pour toutes vos données opérationnelles",
    ],
  },
  showcase: {
    eyebrow: "Le produit en image",
    heading: "Tout votre portefeuille en un seul aperçu",
    body: "Des baux et indexations au traitement documentaire et au rapprochement bancaire : toute votre administration immobilière et financière dans un seul écran, nativement dans Microsoft Dynamics 365 Business Central.",
    ctaLabel: "Demander une démo",
    ctaHref: "/demo",
  },
  apps: {
    eyebrow: "Modulaire et flexible",
    heading: "Trois applications, un seul workflow",
    body: "Nos modules relient votre gestion quotidienne à votre administration financière. Choisissez les applications adaptées à votre portefeuille.",
    apps: [
      {
        index: "01",
        eyebrow: "App 01",
        title: "Logiciel de gestion immobilière",
        body: "Gérez vos biens, vos baux et vos indexations (CPI et WWS) dans un seul système. Automatisez entièrement les processus récurrents tels que les augmentations de loyer et les renouvellements, répartissez automatiquement les coûts entre vos unités, et gérez l'entretien numériquement — du signalement au bon de commande.",
        tag: "Module SaaS central",
        ctaLabel: "Voir le module",
      },
      {
        index: "02",
        eyebrow: "App 02",
        title: "Portail locataires",
        body: "Le portail libre-service donne aux locataires un accès 24/7 à leurs données locatives personnelles. Ils consultent et téléchargent facilement factures et documents, comme les baux, et soumettent des demandes de réparation — tout est centralisé et suivi.",
        tag: "Module libre-service",
        ctaLabel: "Voir le module",
      },
      {
        index: "03",
        eyebrow: "App 03",
        title: "Logiciel de paiement Paylinked",
        body: "Ajoutez un QR code et un lien de paiement à vos factures de loyer pour que les locataires puissent payer rapidement, en toute sécurité et facilement. Cela réduit le risque d'erreurs et accélère la réception des paiements de loyer.",
        tag: "Module opérationnel principal",
        ctaLabel: "Voir le module",
      },
    ],
  },
  erp: {
    eyebrow: "Intégration ERP",
    heading: "Emlinked fonctionne au sein de Microsoft Dynamics 365 Business Central, pas à côté",
    body: "Pas d'exports manuels, pas de connexions API complexes, pas de flux de données en double. Chaque mutation opérationnelle est traitée directement et validée dans le grand livre.",
    cards: [
      {
        feedLabel: "Synchronisation bidirectionnelle",
        tag: "Cœur ERP",
        title: "Business Central",
        subtitle: "Un environnement intégré",
        body: "Gérez toute votre administration financière et votre portefeuille immobilier dans un seul environnement. De la gestion locative et des contrats au traitement des factures, aux connexions bancaires et aux rapports — tous les processus réunis dans une seule plateforme.",
        footerLeft: "Schéma DB direct",
        footerRight: "Base de données centrale",
      },
      {
        feedLabel: "Flux entrant",
        tag: "Traitement efficace des factures",
        title: "Document Capture",
        subtitle: "Traitement OCR intelligent",
        body: "Gagnez du temps et évitez les erreurs grâce à l'OCR intelligent qui reconnaît et traite automatiquement les données de facture dans Business Central. Les factures sont envoyées directement au bon flux d'approbation — approuvez à tout moment, partout. Prend en charge la facturation électronique via Peppol.",
        footerLeft: "Moteur OCR Continia",
        footerRight: "Rapprochement automatique",
      },
      {
        feedLabel: "Flux en temps réel",
        tag: "Connexion bancaire PSD2",
        title: "Direct Banking",
        subtitle: "Rapprochement automatique",
        body: "Connectez votre banque directement et en toute sécurité pour un rapprochement automatique des relevés bancaires et une exécution efficace des paiements. Payez en toute sécurité directement depuis le système, avec une prise en charge d'environ 2 000 banques dans 15 pays de l'UE.",
        footerLeft: "PSD2 / ISO 20022",
        footerRight: "Rapproché en temps réel",
      },
    ],
  },
  testimonials: {
    eyebrow: "Témoignages clients",
    heading: "Ce que disent les gestionnaires immobiliers d'Emlinked",
    body: "Des gestionnaires professionnels font confiance chaque jour à Emlinked pour leur gestion immobilière et leur administration.",
    items: [
      {
        index: "01",
        name: "Levi Bosboom",
        role: "Vastgoedbeheer Rotterdam",
        quote:
          "Emlinked est le lien entre le gestionnaire et le bien immobilier. Nous sommes très enthousiastes et le recommandons vivement.",
        extra: "Clôture mensuelle réduite de 5 jours ouvrés à 4 heures.",
        tag: "Module SaaS central",
        ctaLabel: "Lire la suite",
      },
      {
        index: "02",
        name: "Angelique van Doorn-Franke",
        role: "Van Overhagen Vastgoed",
        quote:
          "Un logiciel de gestion immobilière très convivial et clair. Nous sommes utilisateurs satisfaits depuis plus de 5 ans.",
        tag: "Module libre-service",
        ctaLabel: "Lire la suite",
      },
      {
        index: "03",
        name: "Michel De Waal",
        role: "M2 Capital Real Estate",
        quote:
          "En tant que gestionnaire immobilier commercial, Emlinked apporte une réelle valeur ajoutée. Le support est rapide, précis et proactif.",
        tag: "Module opérationnel principal",
        ctaLabel: "Lire la suite",
      },
    ],
  },
  box3: {
    tag: "Législation Box 3 — 2028",
    headline: "Dès 2028, la Box 3 taxera vos revenus locatifs réels diminués de vos coûts",
    subheadline:
      "Cela exige une administration rigoureuse par unité — Emlinked tient vos revenus locatifs, coûts et données de biens continuellement à jour.",
    body: "La Box 3 est en pleine refonte : dès 2028, c'est votre rendement réel qui compte. Calculez en 2 minutes ce que cela signifie pour votre portefeuille, pour que vous et votre comptable soyez prêts quand les nouvelles règles entreront en vigueur.",
    bullets: [
      "Calculez votre exposition fiscale en moins de 2 minutes",
      "Recevez un rapport d'optimisation concret dans votre boîte mail",
      "Découvrez comment refacturer vos coûts opérationnels plus efficacement",
    ],
    ctaLabel: "Lancer le Box 3-check gratuit ⚡",
  },
  finalCta: {
    eyebrow: "Digitalisation",
    heading: "Prêt à passer de systèmes isolés à une vue d'ensemble unique ?",
    body: "Demandez une démo de 30 minutes et découvrez comment Emlinked réunit votre gestion immobilière et votre administration financière — adapté à votre portefeuille.",
    ctaPrimaryLabel: "Demander une démo gratuite",
    ctaPrimaryHref: "/demo",
    ctaSecondaryLabel: "Demander une démo sans engagement",
  },
  footer: {
    contactEyebrow: "Contact direct",
    sendLabel: "Envoyer",
    tagline:
      "Emlinked réunit la gestion immobilière commerciale, technique et administrative sur une seule plateforme claire. Travaillez plus efficacement, avec moins d'erreurs et plus de maîtrise de votre portefeuille.",
    phone: "+31 (0)88 707 7000",
    phoneHref: "tel:+31887077000",
    address: "Gooimeer 12, 1411 DE Naarden, Pays-Bas",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "Logiciel de gestion immobilière", href: "/apps/vastgoedbeheer-software" },
          { label: "Portail locataires", href: "/apps/huurdersportaal" },
          { label: "Logiciel de paiement", href: "/apps/payment-software" },
        ],
      },
      {
        title: "Intégrations",
        links: [
          { label: "Synchronisation ERP Dynamics 365", href: "/integraties/erp-sync" },
          { label: "Document Capture (OCR)", href: "/integraties/document-capture" },
          { label: "Direct Banking (PSD2)", href: "/integraties/direct-banking" },
          { label: "Calculateur Box 3 ⚡", href: "/box3-check" },
        ],
      },
      {
        title: "Organisation",
        links: [
          { label: "L'équipe", href: "/over-ons" },
          { label: "Références", href: "/referenties" },
          { label: "Actualités & blog", href: "/nieuws" },
          { label: "Nous contacter", href: "/contact" },
        ],
      },
      {
        title: "Support & infos",
        links: [
          { label: "Centre de documentation", href: "/documentatie" },
          { label: "Aide & assistance", href: "/support" },
        ],
      },
    ],
    copyright: "© 2010 – 2026 Emlinked. Tous droits réservés.",
    legalLinks: [
      { label: "Politique de confidentialité", href: "/privacybeleid" },
      { label: "Conditions générales", href: "/voorwaarden" },
      { label: "Paramètres des cookies", href: "/cookies" },
    ],
  },
} satisfies Dictionary;

export default fr;
