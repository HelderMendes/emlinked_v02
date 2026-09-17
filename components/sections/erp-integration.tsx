import type { Dictionary } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

export default function ErpIntegration({ dict }: { dict: Dictionary }) {
  const { erp } = dict;

  return (
    <section className="bg-emerald-soft py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{erp.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {erp.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">{erp.body}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {erp.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-card border border-ink/8 bg-surface p-7"
            >
              <span className="w-fit rounded-badge bg-emerald-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-emerald">
                {card.feedLabel}
              </span>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                {card.tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">{card.body}</p>

              <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4 text-[0.7rem] font-medium text-muted">
                <span>{card.footerLeft}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  {card.footerRight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
