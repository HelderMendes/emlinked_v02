import type { Dictionary, Locale } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

function localize(lang: Locale, href: string) {
  if (href.startsWith("http")) return href;
  return `/${lang}${href}`;
}

export default function ProductShowcase({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { showcase } = dict;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{showcase.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {showcase.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{showcase.body}</p>
          <div className="mt-8 flex justify-center">
            <Button href={localize(lang, showcase.ctaHref)} variant="soft">
              {showcase.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-card border border-ink/8 bg-surface p-3 shadow-2xl shadow-ink/10">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="grid gap-3 rounded-[calc(var(--radius-card)-8px)] bg-paper p-4 lg:grid-cols-[220px_1fr]">
            <div className="space-y-2">
              {["Portefeuille", "Huurcontracten", "Indexaties", "Onderhoud", "Bankaflettering"].map(
                (label, i) => (
                  <div
                    key={label}
                    className={`rounded-badge px-3 py-2.5 text-xs font-medium ${
                      i === 0 ? "bg-ink text-white" : "bg-surface text-ink/70"
                    }`}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Verhuureenheden", value: "1.284" },
                  { label: "Bezettingsgraad", value: "97,2%" },
                  { label: "Openstaand", value: "€ 12.4k" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-badge bg-surface p-4"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold text-ink">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-badge bg-surface p-4">
                <div className="flex items-end gap-2">
                  {[40, 65, 50, 80, 60, 95, 72, 88].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-full rounded-t-md ${
                        i === 5 ? "bg-accent" : "bg-ink/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2 rounded-badge bg-surface p-4">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-emerald-soft" />
                    <div className="h-2.5 flex-1 rounded-full bg-ink/8" />
                    <div className="h-2.5 w-14 rounded-full bg-ink/8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
