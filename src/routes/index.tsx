import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { HairMarquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Reviews } from "@/components/site/reviews";
import { Nearby } from "@/components/site/nearby";
import { Contact } from "@/components/site/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clipper King's Barbershop | Pembroke Pines, FL" },
      {
        name: "description",
        content:
          "Clipper King's Barbershop on 17019 Pines Blvd, Pembroke Pines, FL. Precision fades, hot towel shaves and beard grooming in an automotive-lounge barbershop. Walk-ins accepted. Call (954) 443-4671.",
      },
      { property: "og:title", content: "Clipper King's Barbershop | Pembroke Pines, FL" },
      {
        property: "og:description",
        content:
          "Classic barbering with a modern edge. Fades, shaves and beard grooming in Pembroke Pines' automotive barbershop lounge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <HairMarquee />
          <About />
          <Services />
          <Reviews />
          <Nearby />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
