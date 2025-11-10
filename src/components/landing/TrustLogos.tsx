import polartherm from "@/assets/logos/polartherm.jpeg";
import sanitaerUnion from "@/assets/logos/sanitaer-union.jpeg";
import rotpunkt from "@/assets/logos/rotpunkt.jpg";
import elektroLedermueller from "@/assets/logos/elektro-ledermueller.png";
import paulSchaefer from "@/assets/logos/paul-schaefer.jpg";
import centralApotheke from "@/assets/logos/central-apotheke.png";
import gutenberg from "@/assets/logos/gutenberg.png";
import infraFuerth from "@/assets/logos/infra-fuerth.png";
import lewo from "@/assets/logos/lewo.png";
import cypasol from "@/assets/logos/cypasol.webp";
import fegaSchmitt from "@/assets/logos/fega-schmitt.jpeg";
import eugler from "@/assets/logos/eugler.png";
import kuechenKaatz from "@/assets/logos/kuechen-kaatz.jpeg";
import rkElektrotechnik from "@/assets/logos/rk-elektrotechnik.jpg";
import hambrock from "@/assets/logos/hambrock.webp";
import ziegler from "@/assets/logos/ziegler.webp";
import edeka from "@/assets/logos/edeka.webp";
import dnata from "@/assets/logos/dnata.webp";
import kraft from "@/assets/logos/kraft.png";
import bspplan from "@/assets/logos/bspplan.png";
import kreissparkasse from "@/assets/logos/kreissparkasse.jpg";
import generationRed from "@/assets/logos/generation-red.jpg";
import schlosser from "@/assets/logos/schlosser.jpeg";
import kuecheAktiv from "@/assets/logos/kueche-aktiv.png";
import bauerProfiltechnik from "@/assets/logos/bauer-profiltechnik.png";
import expert from "@/assets/logos/expert.png";
import estilo from "@/assets/logos/estilo.jpg";

export const TrustLogos = () => {
  const logos = [
    { src: polartherm, name: "Polartherm" },
    { src: sanitaerUnion, name: "Sanitär Union" },
    { src: rotpunkt, name: "Rotpunkt Küchen" },
    { src: elektroLedermueller, name: "Elektro Ledermüller" },
    { src: paulSchaefer, name: "Paul Schäfer Metallbau" },
    { src: centralApotheke, name: "Central Apotheke" },
    { src: gutenberg, name: "Gutenberg Küchenstudio" },
    { src: infraFuerth, name: "Infra Fürth" },
    { src: lewo, name: "Lewo" },
    { src: cypasol, name: "Cypasol" },
    { src: fegaSchmitt, name: "Fega & Schmitt" },
    { src: eugler, name: "Eugler Elektrotechnik" },
    { src: kuechenKaatz, name: "Küchen Kaatz" },
    { src: rkElektrotechnik, name: "RK Elektrotechnik" },
    { src: hambrock, name: "Hambrock" },
    { src: ziegler, name: "Ziegler" },
    { src: edeka, name: "Edeka" },
    { src: dnata, name: "Dnata Catering" },
    { src: kraft, name: "Kraft" },
    { src: bspplan, name: "bspPlan" },
    { src: kreissparkasse, name: "Kreissparkasse Ostalb" },
    { src: generationRed, name: "Generation Red" },
    { src: schlosser, name: "Schlosser" },
    { src: kuecheAktiv, name: "Küche Aktiv" },
    { src: bauerProfiltechnik, name: "Bauer Profiltechnik" },
    { src: expert, name: "Expert" },
    { src: estilo, name: "Estilo Schiehlen Hotels" },
  ];

  return (
    <section className="py-6 border-y border-border overflow-hidden bg-muted/30">
      <div className="relative w-full overflow-hidden">
        {/* Track 1 */}
        <div className="flex w-max animate-marquee will-change-transform">
          {logos.map((logo, index) => (
            <div key={`a-${index}`} className="flex items-center justify-center px-3 whitespace-nowrap flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Track 2 (offset) */}
        <div className="absolute top-0 left-full flex w-max animate-marquee will-change-transform" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`b-${index}`} className="flex items-center justify-center px-3 whitespace-nowrap flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};