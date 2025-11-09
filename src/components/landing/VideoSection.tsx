import { useEffect, useRef, useState } from "react";
import anfrageVideo from "@/assets/anfrage.mp4";

export const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={anfrageVideo} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
      </div>
    </section>
  );
};
