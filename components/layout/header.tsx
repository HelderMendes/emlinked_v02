"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/content-types";
import { locales } from "@/lib/content-types";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

function localize(lang: Locale, href: string) {
  if (href.startsWith("http")) return href;
  return `/${lang}${href}`;
}

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const switchHref = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/95 backdrop-blur-md">
      <div className="hidden border-b border-ink/8 bg-sand-soft lg:block">
        <div className="mx-auto flex h-11 w-full max-w-480 items-center justify-end gap-5 px-6 xl:px-10">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-muted">
            {locales.map((locale, i) => (
              <span key={locale} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-ink/15">/</span>}
                <Link
                  href={switchHref(locale)}
                  className={locale === lang ? "text-ink" : "hover:text-ink"}
                >
                  {locale}
                </Link>
              </span>
            ))}
          </div>
          <span className="h-4 w-px bg-ink/10" aria-hidden />
          <Button href={dict.nav.portalHref} variant="ghost" size="sm">
            {dict.nav.portalLabel}
          </Button>
          <Button href={localize(lang, dict.nav.demoHref)} variant="primary" size="sm">
            {dict.nav.demoLabel}
          </Button>
        </div>
      </div>

      <div className="mx-auto flex h-20 w-full max-w-480 items-center justify-between px-6 xl:px-10">
        <Link href={`/${lang}`} className="shrink-0" aria-label="Emlinked">
          <Image
            src="/Emlinked_logo__liggend.svg"
            alt="Emlinked"
            width={168}
            height={43}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Hoofdmenu">
          {dict.nav.items.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap rounded-button px-3 py-2 text-sm font-medium text-ink/80 hover:text-ink"
                  aria-expanded={openDropdown === item.label}
                  onClick={() =>
                    setOpenDropdown((current) => (current === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={localize(lang, item.href)}
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-button px-3 py-2 text-sm font-medium text-ink/80 hover:text-ink"
                >
                  {item.label}
                  {item.badge && (
                    <Badge tone="accent" className="px-1.5 py-0.5 text-[0.6rem]">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3">
                  <div className="rounded-card border border-ink/8 bg-surface p-2 shadow-xl shadow-ink/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localize(lang, child.href)}
                        className="block rounded-[calc(var(--radius-card)-8px)] px-4 py-3 hover:bg-ink/4"
                      >
                        <p className="text-sm font-semibold text-ink">{child.label}</p>
                        <p className="mt-0.5 text-xs text-muted">{child.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-button border border-ink/10 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/8 bg-paper px-6 pb-6 lg:hidden">
          <nav className="flex flex-col divide-y divide-ink/8" aria-label="Mobiel menu">
            {dict.nav.items.map((item) =>
              item.children ? (
                <details key={item.label} className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink">
                    {item.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      className="transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </summary>
                  <div className="mt-2 flex flex-col gap-1 pb-1 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localize(lang, child.href)}
                        className="rounded-badge py-2 text-sm text-muted hover:text-ink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={localize(lang, item.href)}
                  className="flex items-center gap-2 py-3 text-sm font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <Badge tone="accent" className="px-1.5 py-0.5 text-[0.6rem]">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={dict.nav.portalHref} variant="outline">
              {dict.nav.portalLabel}
            </Button>
            <Button href={localize(lang, dict.nav.demoHref)} variant="primary">
              {dict.nav.demoLabel}
            </Button>
            <div className="flex items-center justify-center gap-3 pt-2 text-xs font-semibold uppercase text-muted">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={switchHref(locale)}
                  className={locale === lang ? "text-ink" : "hover:text-ink"}
                >
                  {locale}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
