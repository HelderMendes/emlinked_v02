import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "./dictionaries";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import ProductShowcase from "@/components/sections/product-showcase";
import AppsGrid from "@/components/sections/apps-grid";
import ErpIntegration from "@/components/sections/erp-integration";
import Testimonials from "@/components/sections/testimonials";
import Box3Cta from "@/components/sections/box3-cta";
import FinalCta from "@/components/sections/final-cta";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <TrustBar dict={dict} />
      <ProductShowcase lang={lang} dict={dict} />
      <AppsGrid dict={dict} />
      <ErpIntegration dict={dict} />
      <Testimonials dict={dict} />
      <Box3Cta lang={lang} dict={dict} />
      <FinalCta lang={lang} dict={dict} />
    </>
  );
}
