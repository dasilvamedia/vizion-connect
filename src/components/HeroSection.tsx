import { useState } from "react";
import humanImage from "@/assets/human.jpeg";
import robotImage from "@/assets/robot.jpeg";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Images with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Human Image */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
            isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
          style={{
            backgroundImage: `url(${humanImage})`,
          }}
        />
        
        {/* Robot Image */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            backgroundImage: `url(${robotImage})`,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${
          isHovered ? 'text-accent' : 'text-primary'
        }`}>
          {isHovered ? 'ROBOT' : 'HUMAN'}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          {isHovered 
            ? 'KI-gestützte Automatisierung für maximale Effizienz'
            : 'Menschliche Intelligenz trifft auf künstliche Innovation'
          }
        </p>
        <div className="flex gap-4 justify-center">
          <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
            isHovered 
              ? 'bg-accent text-accent-foreground hover:shadow-[0_0_30px_rgba(255,120,0,0.5)]'
              : 'bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(110,70,200,0.5)]'
          }`}>
            Jetzt starten
          </button>
          <button className="px-8 py-4 rounded-full font-semibold border-2 border-foreground/20 text-foreground hover:border-foreground/40 transition-all duration-300">
            Mehr erfahren
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
