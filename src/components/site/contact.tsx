import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { useLang, FB_URL, IG_URL, MAPS_URL, PHONE_TEL } from "@/lib/i18n";
import logo from "@/assets/clipper-kings-logo-faded.webp.asset.json";
import { RevealGroup, TiltSurface } from "@/components/site/interactive-surface";

export function Contact() {
  const { t } = useLang();

  return (
    <>
      <section id="visit" className="scroll-mt-24 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <RevealGroup>
            <TiltSurface className="reveal-item glass-panel glass-panel-feature neon-ring">
              <div className="checker pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-2xl text-neon/10" />
              <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="section-label">{t.contact.kicker}</p>
                <h2 className="mt-3 font-display text-5xl tracking-wide uppercase sm:text-7xl">
                  {t.contact.title}
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">{t.contact.sub}</p>

                <a
                  href={PHONE_TEL}
                  className="mx-auto mt-8 flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3.5 font-display text-xl tracking-widest uppercase text-primary-foreground transition-transform hover:scale-[1.02] sm:mx-0 sm:gap-3 sm:px-8 sm:py-4 sm:text-2xl"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  {t.contact.book}
                </a>
                <p className="mt-3 text-center text-xs tracking-wide text-muted-foreground uppercase sm:text-left">
                  {t.contact.bookSub}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide transition-colors hover:border-neon hover:text-neon sm:gap-2 sm:px-5 sm:text-sm"
                  >
                    <MapPin className="h-4 w-4" />
                    {t.contact.mapCta}
                  </a>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-neon hover:text-neon"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={FB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-neon hover:text-neon"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/45 p-6 backdrop-blur-lg sm:p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-neon" />
                  <h3 className="font-display text-2xl tracking-widest uppercase">
                    {t.contact.hoursTitle}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {t.contact.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span className="font-semibold uppercase tracking-wide">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">{t.contact.hoursNote}</p>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground/90">{t.contact.address}</p>
                </div>
              </div>
              </div>
            </TiltSurface>
          </RevealGroup>
        </div>
      </section>

      <footer className="border-t border-border bg-asphalt py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <img
            src={logo.url}
            alt="Clipper King's Barbershop"
            width={1402}
            height={1122}
            loading="lazy"
            className="h-32 w-auto object-contain sm:h-40"
          />
          <p className="font-display text-xl tracking-[0.2em] uppercase text-gold">
            {t.footer.tagline}
          </p>
          <p className="max-w-sm text-sm font-semibold uppercase tracking-[0.15em] text-foreground/90">
            {t.footer.follow}
          </p>
          <div className="flex gap-4">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-white/5 shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-neon hover:bg-primary hover:text-primary-foreground hover:shadow-neon sm:h-14 sm:w-14"
            >
              <Instagram className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 sm:h-6 sm:w-6" />
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-white/5 shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-neon hover:bg-primary hover:text-primary-foreground hover:shadow-neon sm:h-14 sm:w-14"
            >
              <Facebook className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 sm:h-6 sm:w-6" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            17019 Pines Blvd, Pembroke Pines, FL 33027 · (954) 443-4671
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Clipper King's Barbershop. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
