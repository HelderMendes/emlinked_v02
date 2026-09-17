import type { Dictionary } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Badge from "@/components/ui/badge";

export default function AppsGrid({ dict }: { dict: Dictionary }) {
  const { apps } = dict;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{apps.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {apps.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{apps.body}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {apps.apps.map((app) => (
            <div
              key={app.index}
              className="group flex flex-col rounded-card border border-ink/8 bg-paper p-7 transition-colors hover:border-ink/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-semibold text-ink/15">
                  {app.index}
                </span>
                <Badge tone="emerald">{app.tag}</Badge>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{app.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{app.body}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
              >
                {app.ctaLabel}
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
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
