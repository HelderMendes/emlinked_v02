import "server-only";
import type { Dictionary, Locale } from "@/lib/content-types";
import { locales } from "@/lib/content-types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  nl: () => import("./dictionaries/nl").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as string[]).includes(locale);

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
