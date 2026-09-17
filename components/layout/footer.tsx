import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/content-types";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";

function localize(lang: Locale, href: string) {
  if (href.startsWith("http")) return href;
  return `/${lang}${href}`;
}

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { footer } = dict;

  return (
    <footer className="border-t border-ink/8 bg-sand-soft text-ink">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div>
            <Eyebrow>{footer.contactEyebrow}</Eyebrow>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/65">{footer.tagline}</p>

            <div className="mt-8 space-y-2 text-sm text-ink/75">
              <p>
                <a href={footer.phoneHref} className="hover:text-ink">
                  {footer.phone}
                </a>
              </p>
              <p>{footer.address}</p>
            </div>

            <form
              className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              aria-label={footer.contactEyebrow}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="jij@bedrijf.nl"
                className="w-full rounded-button border border-ink/15 bg-surface px-[0.85rem] py-[0.6rem] text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
              />
              <Button type="submit" variant="primary" className="shrink-0">
                {footer.sendLabel}
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:justify-items-end">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={localize(lang, link.href)}
                        className="text-sm text-ink/75 hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row">
          <Image
            src="/Emlinked_logo__liggend.svg"
            alt="Emlinked"
            width={140}
            height={36}
            className="h-8 w-auto"
          />
          <p className="text-xs text-muted">{footer.copyright}</p>
          <div className="flex items-center gap-5 text-xs text-ink/60">
            {footer.legalLinks.map((link) => (
              <Link key={link.label} href={localize(lang, link.href)} className="hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
