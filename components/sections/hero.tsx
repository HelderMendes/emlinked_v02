import type { Dictionary, Locale } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

function localize(lang: Locale, href: string) {
  if (href.startsWith("http")) return href;
  return `/${lang}${href}`;
}

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero, trust } = dict;

  return (
    <section className="relative overflow-hidden bg-sand text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-emerald/15 blur-[120px]"
      />

      <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl wrap-break-word font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:text-[3.4rem]">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
          {hero.body}
        </p>
        <div className="mt-9">
          <Button href={localize(lang, hero.ctaHref)} variant="primary">
            {hero.ctaLabel}
          </Button>
        </div>
      </Container>

      <Container className="relative border-t border-ink/10 py-8">
        <ul className="grid gap-6 sm:grid-cols-3">
          {trust.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="mt-0.5 shrink-0 text-accent-strong"
                aria-hidden
              >
                <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M5.5 9.3l2.2 2.2 4.8-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
