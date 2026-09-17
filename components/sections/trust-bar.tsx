import type { Dictionary } from "@/lib/content-types";
import Container from "@/components/ui/container";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustBar({ dict }: { dict: Dictionary }) {
  const { trust } = dict;

  return (
    <section className="border-b border-ink/8 bg-surface py-14">
      <Container>
        <p className="text-center text-sm font-medium text-muted">{trust.intro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.quotes.map((quote) => (
            <div
              key={quote.name}
              className="rounded-card border border-ink/8 p-5"
            >
              <Stars count={quote.rating} />
              <p className="mt-3 text-sm font-semibold text-ink">{quote.name}</p>
              <p className="text-xs text-muted">{quote.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
