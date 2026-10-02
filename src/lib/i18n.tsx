import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

const en = {
  nav: {
    about: "About",
    services: "Services",
    reviews: "Reviews",
    nearby: "The Plaza",
    visit: "Visit Us",
    book: "Book Now",
    themeToggle: "Toggle theme",
    langToggle: "Español",
  },
  hero: {
    est: "Since 2018 — Pembroke Pines, FL",
    titleA: "King-Level",
    titleB: "Cuts Only.",
    sub: "Classic barbering with a modern edge. Precision fades, sharp line-ups and straight-razor finishes inside our automotive lounge on Pines Blvd.",
    book: "Book Your Chair",
    directions: "Get Directions",
    videoTag: "CLIPPER KING'S — SHOWREEL",
    videoNote: "Cinematic video placeholder — drop in the real video anytime.",
    play: "Play video",
    soundOn: "Unmute intro video",
    soundOff: "Mute intro video",
    walkins: "Walk-ins accepted · Appointments preferred",
  },
  about: {
    kicker: "About the shop",
    title: "Classic Barbering, Built Different",
    p1: "Since 2018, Clipper King's has been the chair Pembroke Pines trusts when a haircut actually matters. Our barbers treat the craft like a trade to master, not a head to rush — precision fades, razor-sharp line-ups and straight-razor finishes, done with the patience your hair deserves. Every single time.",
    p2: "Every detail in here was placed with intention — the checkered ceiling, the tool-chest stations, the car lounge feel — because this shop is my life's work and I wanted it to feel that way. When you're in the chair, that time is yours: no assembly line, no rush, just a barber who genuinely cares how you look when you walk out that door. Come in as a customer. Leave as one of us.",
    stat1v: "2018",
    stat1l: "Serving Pembroke Pines",
    stat2v: "4.7★",
    stat2l: "310+ Google reviews",
    stat3v: "100%",
    stat3l: "Walk-ins welcome",
    imgAlt: "Inside the Clipper King's barbershop floor",
    cta: "Meet the crew in person",
  },
  services: {
    kicker: "Service menu",
    title: "The Menu",
    note: "Walk-ins accepted. Appointments preferred — call the shop to lock in your slot.",
    pricing: "Call (954) 443-4671 for current pricing.",
    items: [
      { name: "Signature Haircut", desc: "Consultation, precision cut and styled finish" },
      { name: "Fades & Tapers", desc: "Skin fades, blends and mohawks, razor-sharp edges" },
      { name: "Beard Grooming", desc: "Sculpt, trim and hot-lather line-up" },
      { name: "Hot Towel Shave", desc: "Straight-razor shave with steam towels and balm" },
      { name: "Kids Cuts", desc: "Patient, kid-approved cuts in the big chair" },
      { name: "Senior Cuts", desc: "Classic cut with the royal treatment" },
      { name: "Hair Styling", desc: "Full styling for events, photos and fresh fits" },
      { name: "Bigen Color", desc: "Gray coverage and color services" },
      { name: "Eyebrow Trimming", desc: "Clean, sharp brow line-up" },
      { name: "Facials", desc: "Deep-clean facial finish to top off the cut" },
    ],
  },
  reviews: {
    kicker: "Client reviews",
    title: "Word On The Street",
    items: [
      { name: "Brandon", text: "Best haircut I've ever had, I will go to it every time!" },
      { name: "Jenny", text: "Amazing service and great prices." },
      {
        name: "Manny L.",
        text: "Professional barbers all around. Great skills, cuts are on point. Always leave satisfied!! Nicely decorated and great ambiance.",
      },
      {
        name: "Luigi G.",
        text: "The search is finally over! The shop has a unique car theme decor and it's the cleanest shop I have ever seen.",
      },
      {
        name: "Iwan V.",
        text: "Their barbers were very professional and welcoming. The barber was precise, took his time, but yet seemed to be quick.",
      },
    ],
  },
  nearby: {
    kicker: "The plaza",
    title: "While You're Here",
    sub: "Clipper King's sits in a packed Pembroke Pines plaza. Make it a full errand run — the neighbors are worth it.",
    tag: "Same plaza",
    items: [
      { name: "La Antioqueña Bakery", desc: "Fresh pandebono and Colombian pastries before or after your cut." },
      { name: "La Granja", desc: "Hearty Colombian plates — grab lunch while you wait or take it home." },
      { name: "Superarepa", desc: "Arepas done right. Fast, fresh and right in the plaza." },
      { name: "Flanigan's Seafood Bar & Grill", desc: "Cold drinks, ribs and seafood — the classic post-cut dinner stop." },
    ],
  },
  contact: {
    kicker: "Book & visit",
    title: "Claim Your Chair",
    sub: "Call the shop, lock in your time, and pull up to Pines Blvd.",
    book: "Call (954) 443-4671",
    bookSub: "Fastest way to get a chair",
    directions: "Get Directions",
    addressLabel: "Address",
    address: "17019 Pines Blvd, Pembroke Pines, FL 33027",
    hoursTitle: "Shop hours",
    hours: [
      { day: "Monday – Saturday", time: "8:00 AM – 9:00 PM" },
      { day: "Sunday", time: "9:00 AM – 7:00 PM" },
    ],
    hoursNote: "Hours from public listings — confirm with the shop.",
    mapCta: "Open in Google Maps",
    follow: "Follow the shop",
  },
  footer: {
    tagline: "Same passion. Different lane.",
    follow: "Follow us on social media for a chance to win a free cut!",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;

const es: Dict = {
  nav: {
    about: "Nosotros",
    services: "Servicios",
    reviews: "Reseñas",
    nearby: "La Plaza",
    visit: "Visítanos",
    book: "Reservar",
    themeToggle: "Cambiar tema",
    langToggle: "English",
  },
  hero: {
    est: "Desde 2018 — Pembroke Pines, FL",
    titleA: "Cortes",
    titleB: "De Reyes.",
    sub: "Barbería clásica con estilo moderno. Fades de precisión, líneas afiladas y acabado con navaja en nuestro lounge automotriz en Pines Blvd.",
    book: "Reserva Tu Silla",
    directions: "Cómo Llegar",
    videoTag: "CLIPPER KING'S — VIDEO",
    videoNote: "Espacio para video cinematográfico — cambia el video real cuando quieras.",
    play: "Reproducir video",
    soundOn: "Activar sonido del video",
    soundOff: "Silenciar el video",
    walkins: "Walk-ins bienvenidos · Se prefiere cita",
  },
  about: {
    kicker: "Sobre la barbería",
    title: "Barbería Clásica, Hecha Diferente",
    p1: "Desde 2018, Clipper King's es la silla en la que Pembroke Pines confía cuando un corte de verdad importa. Nuestros barberos tratan el oficio como algo que se domina, no como una cabeza que apurar — fades de precisión, líneas afiladas y acabado con navaja, con la paciencia que tu cabello merece. Todas las veces.",
    p2: "Cada detalle aquí adentro está puesto con intención — el techo de cuadros, las estaciones estilo caja de herramientas, el aire de lounge de carros — porque esta barbería es la obra de mi vida y quería que se sintiera así. Cuando estás en la silla, ese tiempo es tuyo: sin prisa, sin línea de ensamblaje, solo un barbero que de verdad le importa cómo te ves al cruzar la puerta. Llega como cliente. Sal como uno de los nuestros.",
    stat1v: "2018",
    stat1l: "Sirviendo a Pembroke Pines",
    stat2v: "4.7★",
    stat2l: "310+ reseñas en Google",
    stat3v: "100%",
    stat3l: "Walk-ins bienvenidos",
    imgAlt: "Interior de la barbería Clipper King's",
    cta: "Conoce al equipo en persona",
  },
  services: {
    kicker: "Menú de servicios",
    title: "El Menú",
    note: "Walk-ins bienvenidos. Se prefiere cita — llama a la barbería para asegurar tu silla.",
    pricing: "Llama al (954) 443-4671 para precios actuales.",
    items: [
      { name: "Corte Firma", desc: "Consulta, corte de precisión y acabado peinado" },
      { name: "Fades y Tapers", desc: "Skin fades, degradados y mohawks con bordes afilados" },
      { name: "Cuidado de Barba", desc: "Diseño, arreglo y alineado con navaja" },
      { name: "Afeitado con Toalla Caliente", desc: "Navaja clásica con toallas calientes y bálsamo" },
      { name: "Cortes de Niños", desc: "Cortes con paciencia, aprobados por niños" },
      { name: "Cortes Adulto Mayor", desc: "Corte clásico con trato real" },
      { name: "Estilizado de Cabello", desc: "Peinado completo para eventos, fotos y looks frescos" },
      { name: "Color Bigen", desc: "Cobertura de canas y servicios de color" },
      { name: "Cejas", desc: "Línea de cejas limpia y definida" },
      { name: "Faciales", desc: "Limpieza facial profunda para coronar el corte" },
    ],
  },
  reviews: {
    kicker: "Reseñas de clientes",
    title: "Lo Que Se Dice En La Calle",
    items: [
      { name: "Brandon", text: "Best haircut I've ever had, I will go to it every time!" },
      { name: "Jenny", text: "Amazing service and great prices." },
      {
        name: "Manny L.",
        text: "Professional barbers all around. Great skills, cuts are on point. Always leave satisfied!! Nicely decorated and great ambiance.",
      },
      {
        name: "Luigi G.",
        text: "The search is finally over! The shop has a unique car theme decor and it's the cleanest shop I have ever seen.",
      },
      {
        name: "Iwan V.",
        text: "Their barbers were very professional and welcoming. The barber was precise, took his time, but yet seemed to be quick.",
      },
    ],
  },
  nearby: {
    kicker: "La plaza",
    title: "Mientras Estás Aquí",
    sub: "Clipper King's está en una plaza llena de vida en Pembroke Pines. Hazlo un recorrido completo — los vecinos valen la pena.",
    tag: "Misma plaza",
    items: [
      { name: "La Antioqueña Bakery", desc: "Pandebono fresco y pasteles colombianos antes o después de tu corte." },
      { name: "La Granja", desc: "Platos colombianos contundentes — almuerza mientras esperas o llévalo a casa." },
      { name: "Superarepa", desc: "Arepas como deben ser. Rápidas, frescas y en la misma plaza." },
      { name: "Flanigan's Seafood Bar & Grill", desc: "Bebidas frías, costillas y mariscos — la cena clásica después del corte." },
    ],
  },
  contact: {
    kicker: "Reserva y visita",
    title: "Reclama Tu Silla",
    sub: "Llama a la barbería, asegura tu hora y llega a Pines Blvd.",
    book: "Llama al (954) 443-4671",
    bookSub: "La forma más rápida de conseguir silla",
    directions: "Cómo Llegar",
    addressLabel: "Dirección",
    address: "17019 Pines Blvd, Pembroke Pines, FL 33027",
    hoursTitle: "Horario",
    hours: [
      { day: "Lunes – Sábado", time: "8:00 AM – 9:00 PM" },
      { day: "Domingo", time: "9:00 AM – 7:00 PM" },
    ],
    hoursNote: "Horario de listados públicos — confirma con la barbería.",
    mapCta: "Abrir en Google Maps",
    follow: "Sigue a la barbería",
  },
  footer: {
    tagline: "La misma pasión. Otro carril.",
    follow: "¡Síguenos en redes sociales para tener la oportunidad de ganar un corte gratis!",
    rights: "Todos los derechos reservados.",
  },
};

const dicts: Record<Lang, Dict> = { en, es };

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("ck-lang");
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("ck-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dicts[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

export const PHONE_DISPLAY = "(954) 443-4671";
export const PHONE_TEL = "tel:+19544434671";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=17019+Pines+Blvd+Pembroke+Pines+FL+33027";
export const IG_URL = "https://www.instagram.com/clipperkings_barbershop";
export const FB_URL = "https://www.facebook.com/clipper.kings.bs";
export const SHOP_URL = "https://www.clipper-kings.com";
