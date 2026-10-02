import { useLang } from "@/lib/i18n";
import storefront from "@/assets/shop-storefront.png.asset.json";
import laAntioquena from "@/assets/restaurants/la-antioquena.jpg";
import laGranja from "@/assets/restaurants/la-granja.jpg";
import superarepa from "@/assets/restaurants/superarepa.jpg";
import flanigans from "@/assets/restaurants/flanigans.jpg";
import { RevealGroup, TiltSurface } from "@/components/site/interactive-surface";

const restaurantImages = [laAntioquena, laGranja, superarepa, flanigans];

export function Nearby() {
  const { t } = useLang();

  return (
    <section id="nearby" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={storefront.url}
            alt="Clipper King's Barbershop storefront on Pines Blvd"
            loading="lazy"
            className="h-56 w-full object-cover object-center sm:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="section-label">{t.nearby.kicker}</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide uppercase sm:text-6xl">
              {t.nearby.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base">
              {t.nearby.sub}
            </p>
          </div>
        </div>

        <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.nearby.items.map((n, index) => (
            <TiltSurface
              key={n.name}
              className="reveal-item glass-panel restaurant-card group min-h-80"
            >
              <img
                src={restaurantImages[index]}
                alt=""
                loading="lazy"
                width={1280}
                height={960}
                className="restaurant-card-image absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="restaurant-card-scrim absolute inset-0" />
              <div className="relative z-10 flex min-h-80 flex-col justify-end p-6">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold">
                  {t.nearby.tag}
                </p>
                <h3 className="mt-1.5 font-display text-3xl leading-tight tracking-wider uppercase text-on-image transition-colors group-hover:text-neon">
                  {n.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-image-muted">{n.desc}</p>
              </div>
            </TiltSurface>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
