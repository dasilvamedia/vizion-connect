import { useEffect, useState } from "react";
import humanImage from "@/assets/human.jpeg";
import robotImage from "@/assets/robot.jpeg";

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Human Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(${humanImage})`,
            opacity: 1 - scrollProgress,
            transform: `scale(${1 + scrollProgress * 0.1})`,
          }}
        />
        
        {/* Robot Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(${robotImage})`,
            opacity: scrollProgress,
            transform: `scale(${0.9 + scrollProgress * 0.1})`,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
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
