import { useLang } from "@/lib/i18n";

const haircutImages = Object.values(
  import.meta.glob("../../assets/haircuts/*.webp", {
    eager: true,
    import: "default",
    query: "?url",
  }),
) as string[];

function PortraitSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-2 pr-2" aria-hidden={hidden || undefined}>
      {haircutImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={hidden ? "" : `Contemporary men's haircut style ${index + 1}`}
          loading="lazy"
          width={512}
          height={512}
          className="aspect-square h-44 w-44 shrink-0 object-cover sm:h-60 sm:w-60 lg:h-72 lg:w-72"
        />
      ))}
    </div>
  );
}

export function HairMarquee() {
  const { t } = useLang();

  return (
    <section
      aria-label={t.services.kicker}
      className="overflow-hidden border-y border-border bg-card py-5"
    >
      <div className="marquee-track">
        <PortraitSet />
        <PortraitSet hidden />
      </div>
    </section>
  );
}
