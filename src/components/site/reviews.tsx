import { Quote, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { RevealGroup, TiltSurface } from "@/components/site/interactive-surface";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label">{t.reviews.kicker}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide uppercase sm:text-7xl">
              {t.reviews.title}
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
            <Stars />
            <span className="text-sm font-bold">4.7</span>
            <span className="text-xs text-muted-foreground">· 310+ reviews</span>
          </div>
        </div>
      </div>

      <RevealGroup className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 pt-2 sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {t.reviews.items.map((r) => (
          <TiltSurface key={r.name} className="reveal-item glass-panel w-[19rem] shrink-0 snap-start sm:w-[22rem]">
            <figure className="relative flex h-full min-h-56 flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between">
                  <Stars />
                  <Quote className="h-5 w-5 text-neon/50 transition-colors group-hover:text-neon" />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border pt-4 font-display text-lg tracking-widest uppercase text-neon">
                {r.name}
              </figcaption>
            </figure>
          </TiltSurface>
        ))}
      </RevealGroup>
    </section>
  );
}
