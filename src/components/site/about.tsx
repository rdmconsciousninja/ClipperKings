import { Phone } from "lucide-react";
import { useLang, PHONE_TEL } from "@/lib/i18n";
import busy from "@/assets/shop-interior-busy.png.asset.json";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={busy.url}
              alt={t.about.imgAlt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
            />
          </div>
          <div className="checker pointer-events-none absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-xl text-neon/25" />
          <div className="checker pointer-events-none absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-lg text-gold/30" />
        </div>

        <div>
          <p className="section-label">{t.about.kicker}</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide uppercase sm:text-6xl">
            {t.about.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{t.about.p1}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.p2}</p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <p className="font-display text-4xl text-neon sm:text-5xl">{t.about.stat1v}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{t.about.stat1l}</p>
            </div>
            <div>
              <p className="font-display text-4xl text-neon sm:text-5xl">{t.about.stat2v}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{t.about.stat2l}</p>
            </div>
            <div>
              <p className="font-display text-4xl text-neon sm:text-5xl">{t.about.stat3v}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{t.about.stat3l}</p>
            </div>
          </div>

          <a
            href={PHONE_TEL}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-neon/60 px-6 py-3 font-display text-lg tracking-widest uppercase text-neon transition-colors hover:bg-neon hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            {t.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
