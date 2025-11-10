import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-background.mp4";
import heroVideoMobile from "@/assets/hero-background-mobile.mp4";
import logo from "@/assets/logo-new.png";

export const LandingHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden w-full">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Mobile Video (Portrait) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
          style={{ 
            minWidth: '100%', 
            minHeight: '100%',
            objectPosition: 'center center'
          }}
        >
          <source src={heroVideoMobile} type="video/mp4" />
        </video>
        
        {/* Desktop/Tablet Video (Landscape) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background/95" />
      </div>
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-20">
        <img src={logo} alt="Lead Connect Logo" className="h-12 md:h-16 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          <a href="/#funktionen" className="text-sm text-white/90 hover:text-white transition-colors">Funktionen</a>
          <a href="/#vorteile" className="text-sm text-white/90 hover:text-white transition-colors">Vorteile</a>
          <a href="/#branche" className="text-sm text-white/90 hover:text-white transition-colors">Branche</a>
          <a href="/agenten" className="text-sm text-white/90 hover:text-white transition-colors">Agenten</a>
          <a href="/#preise" className="text-sm text-white/90 hover:text-white transition-colors">Preise</a>
          <a href="/#kontakt" className="text-sm text-white/90 hover:text-white transition-colors">Kontakt</a>
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

        <div className="relative inline-block">
          <a 
            href="tel:+4973613893011" 
            className="inline-flex items-center gap-2 bg-white hover:bg-orange text-foreground hover:text-white font-semibold px-4 py-2 rounded-full text-sm shadow-2xl transition-all duration-300 md:hover:scale-105 border border-white/30"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-colors"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            07361 3893011
          </a>
          
          {/* Handwritten "Ruf mich an" with arrow - Desktop: rechts, Mobile: unten */}
          <div className="hidden md:absolute md:left-full md:ml-2 lg:ml-4 md:top-1/2 md:-translate-y-1/2 md:flex items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            {/* Sanfter, geschwungener Pfeil */}
            <svg width="60" height="50" viewBox="0 0 60 50" className="drop-shadow-lg -ml-2">
              {/* Sanfte geschwungene Linie zum Button */}
              <path
                d="M 50 25 Q 35 10, 12 22"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="none"
              />
              {/* Pfeilspitze */}
              <path
                d="M 12 22 L 16 18 M 12 22 L 16 26"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-white text-xs sm:text-sm whitespace-nowrap ml-1 font-handwriting" style={{ transform: 'rotate(-2deg)' }}>
              RUF MICH AN
            </p>
          </div>
          
          {/* Mobile: Unter dem Button */}
          <div className="md:hidden mt-2 flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-white text-sm font-handwriting drop-shadow-lg" style={{ transform: 'rotate(-2deg)' }}>
              ↑ RUF MICH AN
            </p>
          </div>
        </div>

        <p className="text-sm text-white/90 mt-6 drop-shadow">
          Vertrauen von über 400+ zufriedenen Kunden
        </p>
      </div>
    </section>
  );
};
