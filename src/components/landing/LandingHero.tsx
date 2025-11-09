import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-background.mp4";

export const LandingHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background/95" />
      </div>
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-20">
        <div className="text-2xl font-bold text-white">Lead Connect</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#funktionen" className="text-sm text-white/90 hover:text-white transition-colors">Funktionen</a>
          <a href="#vorteile" className="text-sm text-white/90 hover:text-white transition-colors">Vorteile</a>
          <a href="#branche" className="text-sm text-white/90 hover:text-white transition-colors">Branche</a>
          <a href="#agenten" className="text-sm text-white/90 hover:text-white transition-colors">Agenten</a>
          <a href="#preise" className="text-sm text-white/90 hover:text-white transition-colors">Preise</a>
          <a href="#kontakt" className="text-sm text-white/90 hover:text-white transition-colors">Kontakt</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div 
        className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl animate-fade-in drop-shadow-2xl">
          Die Plattform für sichere KI-Agenten
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl drop-shadow-lg">
          Entwickelt für Marktführer und innovative Unternehmen.
          <br />
          KI-Agenten, die sicher, DSGVO-konform und perfekt in deine Prozesse integriert sind.
        </p>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 backdrop-blur-sm text-white border-white/30">
            🇩🇪 Made in Germany
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 backdrop-blur-sm text-white border-white/30">
            ✓ DSGVO-konform
          </Badge>
        </div>

        <Button size="lg" className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-6 text-lg shadow-2xl">
          Kostenlosen Test starten
        </Button>

        <p className="text-sm text-white/90 mt-6 drop-shadow">
          Vertrauen von über 400+ zufriedenen Kunden
        </p>
      </div>
    </section>
  );
};
