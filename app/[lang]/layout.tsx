import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "./dictionaries";
import { locales } from "@/lib/content-types";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL("https://emlinked.com"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        nl: "/nl",
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.skipToContent}
        </a>
        <Header lang={lang} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
