import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Volume2, VolumeX } from "lucide-react";
import { useLang, MAPS_URL, PHONE_TEL } from "@/lib/i18n";
import interior from "@/assets/shop-interior-wide.png.asset.json";
import headerVideo from "@/assets/headervideo.mp4.asset.json";

type HeroState = "playing" | "revealed" | "fallback";

export function Hero() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [heroState, setHeroState] = useState<HeroState>("playing");
  const [soundOn, setSoundOn] = useState(false);
  const isRevealed = heroState !== "playing";

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    video.muted = !next;
    setSoundOn(next);
    if (next && (video.ended || video.paused)) {
      // Replay the intro from the top so visitors hear it in full.
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const useStaticFallback = () => setHeroState("fallback");

    if (motionQuery.matches) {
      useStaticFallback();
      return;
    }

    const video = videoRef.current;
    if (!video) {
      useStaticFallback();
      return;
    }

    const playback = video.play();
    if (playback) playback.catch(useStaticFallback);

    const playbackWatchdog = window.setTimeout(() => {
      if (video.currentTime < 0.1) useStaticFallback();
    }, 4000);

    motionQuery.addEventListener("change", useStaticFallback, { once: true });

    return () => {
      window.clearTimeout(playbackWatchdog);
      motionQuery.removeEventListener("change", useStaticFallback);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={interior.url}
          alt="Inside Clipper King's Barbershop"
          className={`absolute inset-0 h-full w-full object-cover motion-reduce:opacity-100 ${
            heroState === "fallback" ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
        {heroState !== "fallback" && (
          <video
            ref={videoRef}
            src={headerVideo.url}
            poster={interior.url}
            autoPlay
            muted={!soundOn}
            playsInline
            loop={false}
            preload="auto"
            aria-hidden="true"
            onEnded={() => setHeroState("revealed")}
            onError={() => setHeroState("fallback")}
            onStalled={() => setHeroState("fallback")}
            onAbort={() => setHeroState("fallback")}
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20 motion-reduce:opacity-100 ${
            heroState === "revealed" ? "opacity-100 transition-opacity duration-700 ease-out" : isRevealed ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent motion-reduce:opacity-100 ${
            heroState === "revealed" ? "opacity-100 transition-opacity duration-700 ease-out" : isRevealed ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        data-testid="hero-content"
        aria-hidden={!isRevealed}
        className={`relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pt-28 pb-10 motion-reduce:pointer-events-auto motion-reduce:opacity-100 sm:px-6 sm:pb-14 ${
          heroState === "revealed"
            ? "pointer-events-auto opacity-100 transition-opacity duration-700 ease-out"
            : isRevealed
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
        }`}
      >
        <div className="max-w-3xl">
          <p className="section-label mb-4 inline-flex items-center gap-2 rounded-full border border-neon/40 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
            {t.hero.est}
          </p>
          <h1 className="font-display text-6xl leading-[0.9] tracking-wide uppercase sm:text-8xl lg:text-9xl">
            {t.hero.titleA}
            <br />
            <span className="neon-text">{t.hero.titleB}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_TEL}
              tabIndex={isRevealed ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-widest uppercase text-primary-foreground neon-ring transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              {t.hero.book}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              tabIndex={isRevealed ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 font-display text-xl tracking-widest uppercase text-foreground backdrop-blur-sm transition-colors hover:border-neon hover:text-neon"
            >
              <MapPin className="h-5 w-5" />
              {t.hero.directions}
            </a>
          </div>

          <p className="mt-6 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            {t.hero.walkins}
          </p>
        </div>
      </div>

      {heroState !== "fallback" && (
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? t.hero.soundOff : t.hero.soundOn}
          title={soundOn ? t.hero.soundOff : t.hero.soundOn}
          className="absolute right-4 bottom-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/80 backdrop-blur-sm transition-colors hover:border-neon hover:text-neon sm:right-6"
        >
          {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      )}
    </section>
  );
}
