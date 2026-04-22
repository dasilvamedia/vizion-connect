import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import heroVideo from "@/assets/hero-background.mp4";
import heroVideoMobile from "@/assets/hero-background-mobile.mp4";
import logo from "@/assets/logo-new.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export const LandingHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section className="relative min-h-screen flex flex-col overflow-hidden w-full">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Mobile Video (Portrait) */}
        <video autoPlay loop muted playsInline preload="metadata" className="absolute top-0 left-0 w-full h-full object-cover md:hidden" style={{
        minWidth: '100%',
        minHeight: '100%',
        objectPosition: 'center center'
      }}>
          <source src={heroVideoMobile} type="video/mp4" />
        </video>
        
        {/* Desktop/Tablet Video (Landscape) */}
        <video autoPlay loop muted playsInline preload="metadata" className="absolute top-0 left-0 w-full h-full object-cover hidden md:block">
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background/95" />
      </div>
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-20">
        <img src={logo} alt="Lead Connect Logo" className="h-12 md:h-16 w-auto" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#funktionen" className="text-sm text-white/90 hover:text-white transition-colors">Funktionen</a>
          <a href="/#vorteile" className="text-sm text-white/90 hover:text-white transition-colors">Vorteile</a>
          <a href="/#branche" className="text-sm text-white/90 hover:text-white transition-colors">Branche</a>
          <a href="/agenten" className="text-sm text-white/90 hover:text-white transition-colors">Agenten</a>
          <a href="/#preise" className="text-sm text-white/90 hover:text-white transition-colors">Preise</a>
          <a href="/#kontakt" className="text-sm text-white/90 hover:text-white transition-colors">Kontakt</a>
          <Button variant="termin" size="sm" asChild>
            <a href="/termin">Termin Buchen</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-transparent border-none shadow-none">
            <div className="flex flex-col gap-4 mt-8">
              <a href="/#funktionen" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Funktionen
              </a>
              <a href="/#vorteile" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Vorteile
              </a>
              <a href="/#branche" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Branche
              </a>
              <a href="/agenten" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Agenten
              </a>
              <a href="/#preise" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Preise
              </a>
              <a href="/#kontakt" className="px-4 py-3 text-lg font-medium text-white bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/30 backdrop-blur-sm" onClick={() => setOpen(false)}>
                Kontakt
              </a>
              <a href="/termin" className="px-4 py-3 text-lg font-semibold text-white bg-orange hover:bg-orange/90 rounded-xl transition-all duration-300 hover:scale-[1.02]" onClick={() => setOpen(false)}>
                Termin Buchen
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10" style={{
      transform: `translateY(${scrollY * 0.2}px)`
    }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl animate-fade-in drop-shadow-2xl">
          Ihr Business. Ihre Regeln. <span className="text-orange">Ihre Kundenzufriedenheit.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl drop-shadow-lg">
          Entwickelt für Marktführer und innovative Unternehmen.
          <br />
          KI-Agenten, die sicher, DSGVO-konform und perfekt in Ihre Prozesse integriert sind.
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

        <p className="text-sm text-white/90 mt-6 drop-shadow">
          Vertrauen von über 400+ zufriedenen Kunden
        </p>
      </div>
    </section>;
};