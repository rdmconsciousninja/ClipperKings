import { Phone } from "lucide-react";
import { useLang, PHONE_TEL } from "@/lib/i18n";
import { RevealGroup, TiltSurface } from "@/components/site/interactive-surface";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="scroll-mt-24 bg-asphalt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">{t.services.kicker}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide uppercase sm:text-7xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.services.note}
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.services.items.map((s, i) => (
            <TiltSurface key={s.name} className="reveal-item glass-panel group">
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-display text-2xl tracking-wider uppercase transition-colors group-hover:text-neon sm:text-3xl">
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <span className="font-display text-3xl text-neon/40 transition-colors group-hover:text-neon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </TiltSurface>
          ))}
        </RevealGroup>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold text-gold">{t.services.pricing}</p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-lg tracking-widest uppercase text-primary-foreground neon-ring transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            {t.nav.book}
          </a>
        </div>
      </div>
    </section>
  );
}
