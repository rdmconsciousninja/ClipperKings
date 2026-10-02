import { useEffect, useState } from "react";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useLang, PHONE_TEL } from "@/lib/i18n";
import logo from "@/assets/clipper-kings-logo-faded.webp.asset.json";

function ThemeToggle() {
  const { t } = useLang();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("ck-theme");
    if (stored === "light") setDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("ck-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      aria-label={t.nav.themeToggle}
      onClick={() => setDark((d) => !d)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-neon hover:text-neon"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.nearby, href: "#nearby" },
    { label: t.nav.visit, href: "#visit" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center" aria-label="Clipper Kings Barbershop — home">
          <img
            src={logo.url}
            alt="Clipper King's Barbershop"
            width={1402}
            height={1122}
            className="h-16 w-auto shrink-0 object-contain sm:h-20"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide uppercase text-muted-foreground transition-colors hover:text-neon"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex h-10 items-center rounded-full border border-border bg-card/60 px-3 text-xs font-bold tracking-widest uppercase transition-colors hover:border-neon hover:text-neon"
          >
            {t.nav.langToggle}
          </button>
          <ThemeToggle />
          <a
            href={PHONE_TEL}
            className="hidden h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold uppercase tracking-wide text-primary-foreground neon-ring sm:flex"
          >
            <Phone className="h-4 w-4" />
            {t.nav.book}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-accent hover:text-neon"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {t.nav.book}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
