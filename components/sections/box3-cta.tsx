import type { Dictionary, Locale } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function Box3Cta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { box3 } = dict;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-accent/25 bg-accent-soft px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-accent/25 blur-[110px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Badge tone="ink">{box3.tag}</Badge>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
                {box3.headline}
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink/80">
                {box3.subheadline}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60">{box3.body}</p>
            </div>

            <div className="flex flex-col justify-center gap-5">
              <ul className="space-y-3">
                {box3.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-ink/80">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      className="mt-0.5 shrink-0 text-ink"
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
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button href={`/${lang}/box3-check`} variant="primary" className="w-fit">
                {box3.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
