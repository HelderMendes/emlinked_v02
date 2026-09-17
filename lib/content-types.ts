export type Locale = "nl" | "en" | "fr";

export const locales: Locale[] = ["nl", "en", "fr"];
export const defaultLocale: Locale = "nl";

export type NavChild = {
  label: string;
  description: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: NavChild[];
};

export type NavDictionary = {
  items: NavItem[];
  demoLabel: string;
  portalLabel: string;
  demoHref: string;
  portalHref: string;
};

export type Quote = {
  name: string;
  role: string;
  rating: number;
};

export type HeroDictionary = {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type TrustDictionary = {
  intro: string;
  quotes: Quote[];
  highlights: string[];
};

export type ShowcaseDictionary = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type AppCard = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  tag: string;
  ctaLabel: string;
};

export type AppsDictionary = {
  eyebrow: string;
  heading: string;
  body: string;
  apps: AppCard[];
};

export type IntegrationCard = {
  feedLabel: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  footerLeft: string;
  footerRight: string;
};

export type ErpDictionary = {
  eyebrow: string;
  heading: string;
  body: string;
  cards: IntegrationCard[];
};

export type TestimonialCard = {
  index: string;
  name: string;
  role: string;
  quote: string;
  extra?: string;
  tag: string;
  ctaLabel: string;
};

export type TestimonialsDictionary = {
  eyebrow: string;
  heading: string;
  body: string;
  items: TestimonialCard[];
};

export type Box3Dictionary = {
  tag: string;
  headline: string;
  subheadline: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
};

export type FinalCtaDictionary = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterDictionary = {
  contactEyebrow: string;
  sendLabel: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  address: string;
  columns: FooterColumn[];
  copyright: string;
  legalLinks: FooterLink[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  skipToContent: string;
  languageNames: Record<Locale, string>;
  nav: NavDictionary;
  hero: HeroDictionary;
  trust: TrustDictionary;
  showcase: ShowcaseDictionary;
  apps: AppsDictionary;
  erp: ErpDictionary;
  testimonials: TestimonialsDictionary;
  box3: Box3Dictionary;
  finalCta: FinalCtaDictionary;
  footer: FooterDictionary;
};
