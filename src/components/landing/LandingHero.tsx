import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export const LandingHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">Lead Connect</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#funktionen" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Funktionen</a>
          <a href="#vorteile" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Vorteile</a>
          <a href="#branche" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Branche</a>
          <a href="#agenten" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Agenten</a>
          <a href="#preise" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Preise</a>
          <a href="#kontakt" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Kontakt</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div 
        className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-5xl animate-fade-in">
          Die Plattform für sichere KI-Agenten
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
          Entwickelt für Marktführer und innovative Unternehmen.
          <br />
          KI-Agenten, die sicher, DSGVO-konform und perfekt in deine Prozesse integriert sind.
        </p>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🇩🇪 Made in Germany
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            ✓ DSGVO-konform
          </Badge>
        </div>

        <Button size="lg" className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-6 text-lg">
          Kostenlosen Test starten
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Vertrauen von über 400+ zufriedenen Kunden
        </p>
      </div>
    </section>
  );
};
