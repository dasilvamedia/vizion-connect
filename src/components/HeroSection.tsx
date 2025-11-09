import { useEffect, useState } from "react";
import humanImage from "@/assets/human.jpeg";
import robotImage from "@/assets/robot.jpeg";

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let target = 0;
    let current = 0;

    const update = () => {
      const diff = target - current;
      if (Math.abs(diff) > 0.001) {
        current += diff * 0.15; // faster smoothing for quicker transition
        setScrollProgress(current);
        rafId = requestAnimationFrame(update);
      } else {
        current = target;
        setScrollProgress(current);
        rafId = 0;
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Faster transition - complete within shorter scroll distance
      target = Math.min(scrollPosition / (windowHeight * 0.25), 1);
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Images with Smooth Parallax Effect */}
      <div className="absolute inset-0">
        {/* Human Image */}
        <div 
          className="absolute inset-0 bg-cover bg-top sm:bg-center will-change-transform"
          style={{
            backgroundImage: `url(${humanImage})`,
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * 12}px) scale(${1 + scrollProgress * 0.12})`,
            filter: `blur(${scrollProgress * 2.5}px)`,
            backfaceVisibility: 'hidden',
          }}
        />
        
        {/* Blend Overlay Layer */}
        <div 
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `
              repeating-linear-gradient(135deg,
                hsl(var(--primary) / ${Math.min(scrollProgress * 0.12, 0.12)} ) 0px,
                hsl(var(--primary) / ${Math.min(scrollProgress * 0.12, 0.12)} ) 4px,
                transparent 4px,
                transparent 16px
              ),
              linear-gradient(135deg,
                hsl(var(--primary) / ${Math.min(scrollProgress * 0.25, 0.25)}),
                hsl(var(--accent) / ${Math.min(scrollProgress * 0.25, 0.25)})
              )`,
            opacity: Math.min(scrollProgress + 0.1, 1),
            mixBlendMode: 'soft-light',
            transform: `translateX(${scrollProgress * 30}px)`,
          }}
        />
        
        {/* Robot Image */}
        <div 
          className="absolute inset-0 bg-cover bg-top sm:bg-center will-change-transform"
          style={{
            backgroundImage: `url(${robotImage})`,
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * -12}px) scale(${0.9 + scrollProgress * 0.1})`,
            filter: `blur(${(1 - scrollProgress) * 2.5}px)`,
            backfaceVisibility: 'hidden',
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
