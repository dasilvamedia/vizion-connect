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
  ];

  return (
    <section className="py-12 border-y border-border overflow-hidden bg-muted/30">
      <div className="flex animate-scroll">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-12 whitespace-nowrap">
            <img 
              src={logo.src} 
              alt={logo.name}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
