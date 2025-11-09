import { useEffect, useRef, useState } from "react";

export const StatsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const stats = [
    { value: "24/7", label: "Verfügbar" },
    { value: "400+", label: "Zufriedene Kunden" },
    { value: "99.9%", label: "Uptime Garantie" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-orange text-white relative overflow-hidden"
    >
      {/* Parallax circles */}
      <div 
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5"
        style={{ transform: `translate(${scrollY * 50}px, ${scrollY * 30}px)` }}
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5"
        style={{ transform: `translate(${-scrollY * 40}px, ${-scrollY * 50}px)` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Zahlen, die überzeugen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-110 transition-transform duration-300"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
