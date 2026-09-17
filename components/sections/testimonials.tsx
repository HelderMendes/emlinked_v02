import type { Dictionary } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Badge from "@/components/ui/badge";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{testimonials.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{testimonials.body}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <div
              key={item.index}
              className="flex flex-col rounded-card border border-ink/8 bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold text-ink/15">
                  {item.index}
                </span>
                <Badge tone="outline">{item.tag}</Badge>
              </div>

              <p className="mt-6 flex-1 text-base leading-relaxed text-ink">
                &ldquo;{item.quote}&rdquo;
              </p>

              {item.extra && (
                <p className="mt-4 text-sm font-semibold text-emerald">{item.extra}</p>
              )}

              <div className="mt-6 border-t border-ink/8 pt-4">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink"
              >
                {item.ctaLabel}
                <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden>
                  <path
                    d="M0 5h13M8 1l4.5 4L8 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
