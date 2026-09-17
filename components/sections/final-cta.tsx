import type { Dictionary, Locale } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

export default function FinalCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { finalCta } = dict;

  return (
    <section className="relative overflow-hidden bg-sand py-20 text-ink lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />
      <Container className="relative mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">{finalCta.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/65">{finalCta.body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`/${lang}${finalCta.ctaPrimaryHref}`} variant="primary">
            {finalCta.ctaPrimaryLabel}
          </Button>
          <Button href={`/${lang}${finalCta.ctaPrimaryHref}`} variant="outline">
            {finalCta.ctaSecondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
