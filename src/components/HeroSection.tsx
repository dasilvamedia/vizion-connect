import { useEffect, useState } from "react";
import humanImage from "@/assets/human.jpeg";
import robotImage from "@/assets/robot.jpeg";

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Start transition earlier and make it smoother (multiply by 1.5 for earlier start)
      const progress = Math.min((scrollPosition / (windowHeight * 0.6)), 1);
      setScrollProgress(progress);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Images with Smooth Parallax Effect */}
      <div className="absolute inset-0">
        {/* Human Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-opacity duration-500 ease-out"
          style={{
            backgroundImage: `url(${humanImage})`,
            backgroundPosition: 'center center',
            opacity: 1 - scrollProgress,
            transform: `scale(${1 + scrollProgress * 0.15}) translateY(${scrollProgress * 20}px)`,
            filter: `blur(${scrollProgress * 4}px)`,
          }}
        />
        
        {/* Blend Overlay Layer */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            background: `linear-gradient(135deg, 
              rgba(110, 70, 200, ${scrollProgress * 0.3}), 
              rgba(255, 120, 0, ${scrollProgress * 0.3}))`,
            opacity: scrollProgress,
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Robot Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-opacity duration-500 ease-out"
          style={{
            backgroundImage: `url(${robotImage})`,
            backgroundPosition: 'center center',
            opacity: scrollProgress,
            transform: `scale(${0.85 + scrollProgress * 0.15}) translateY(${(1 - scrollProgress) * -20}px)`,
            filter: `blur(${(1 - scrollProgress) * 4}px)`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/95"
          style={{
            opacity: 0.8 + scrollProgress * 0.2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 transition-all duration-700"
          style={{
            color: scrollProgress > 0.5 ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
            opacity: 1 - scrollProgress * 0.5,
            transform: `translateY(${scrollProgress * 30}px)`,
          }}
        >
          {scrollProgress > 0.5 ? 'ROBOT' : 'HUMAN'}
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto"
          style={{
            opacity: 1 - scrollProgress * 0.7,
            transform: `translateY(${scrollProgress * 20}px)`,
          }}
        >
          {scrollProgress > 0.5
            ? 'KI-gestützte Automatisierung für maximale Effizienz'
            : 'Menschliche Intelligenz trifft auf künstliche Innovation'
          }
        </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{
          opacity: 1 - scrollProgress * 2,
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
