import { useEffect, useState } from "react";
import humanImage from "@/assets/human.jpeg";
import robotImage from "@/assets/robot.jpeg";

export const HeroSection = () => {
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let startTime = Date.now();
    const duration = 5000; // 5 seconds

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % (duration * 2)) / duration;
      
      // Create a smooth back-and-forth transition
      const smoothProgress = progress > 1 
        ? 2 - progress // Going back from 1 to 0
        : progress;     // Going from 0 to 1
      
      setTransitionProgress(smoothProgress);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Images with Smooth Transition Effect */}
      <div className="absolute inset-0">
        {/* Human Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${humanImage})`,
            opacity: 1 - transitionProgress,
            transform: `scale(${1 + transitionProgress * 0.05})`,
            filter: `blur(${transitionProgress * 2}px)`,
            backfaceVisibility: 'hidden',
          }}
        />
        
        {/* Blend Overlay Layer */}
        <div 
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `
              repeating-linear-gradient(135deg,
                hsl(var(--primary) / ${Math.min(transitionProgress * 0.12, 0.12)} ) 0px,
                hsl(var(--primary) / ${Math.min(transitionProgress * 0.12, 0.12)} ) 4px,
                transparent 4px,
                transparent 16px
              ),
              linear-gradient(135deg,
                hsl(var(--primary) / ${Math.min(transitionProgress * 0.25, 0.25)}),
                hsl(var(--accent) / ${Math.min(transitionProgress * 0.25, 0.25)})
              )`,
            opacity: Math.min(transitionProgress + 0.1, 1),
            mixBlendMode: 'soft-light',
          }}
        />
        
        {/* Robot Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${robotImage})`,
            opacity: transitionProgress,
            transform: `scale(${0.95 + transitionProgress * 0.05})`,
            filter: `blur(${(1 - transitionProgress) * 2}px)`,
            backfaceVisibility: 'hidden',
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/95"
          style={{
            opacity: 0.8 + transitionProgress * 0.2,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
