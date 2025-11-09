import { useEffect, useRef, useState } from "react";

export const Testimonials = () => {
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
  const testimonials = [
    {
      quote: "Lead Connect hat uns wirklich geholfen! Die Terminbuchung läuft jetzt automatisch und unsere Patienten sind sehr zufrieden. Wir können uns endlich wieder mehr auf die Behandlung konzentrieren.",
      name: "Dr. Sarah Müller",
      role: "Hausärztin",
      company: "Praxis Dr. Müller",
      initials: "SM"
    },
    {
      quote: "Sehr gut! Lead Connect erkennt Notfälle zuverlässig und leitet sie direkt weiter. Unsere Kunden schätzen die professionelle Betreuung. Wir haben deutlich mehr Termine und weniger Stress.",
      name: "Marcus Weber",
      role: "Geschäftsführer",
      company: "Weber Handwerksservice GmbH",
      initials: "MW"
    },
    {
      quote: "Eine sehr gute Investition! Ich verpasse keinen wichtigen Anruf mehr und kann mich besser auf meine Klienten konzentrieren. Die Einrichtung war einfach und hat sich schnell gelohnt.",
      name: "Lisa Hoffmann",
      role: "Business Coach",
      company: "Hoffmann Coaching",
      initials: "LH"
    },
    {
      quote: "Lead Connect ist wirklich ein Gamechanger! Die automatische Terminbuchung spart uns täglich viel Zeit. Unsere Mandanten sind zufrieden mit der Betreuung und der Support antwortet schnell.",
      name: "Thomas Klein",
      role: "Inhaber",
      company: "Klein Steuerberatung",
      initials: "TK"
    },
    {
      quote: "Ich bin beeindruckt! Lead Connect spricht gut Deutsch, Englisch und Türkisch mit unseren Patienten. Die Terminbuchung funktioniert zuverlässig und die Patienten mögen die freundliche Art.",
      name: "Anna Richter",
      role: "Physiotherapeutin",
      company: "Praxis Richter",
      initials: "AR"
    },
    {
      quote: "Lead Connect hat unsere Kanzlei deutlich verbessert! Die 24/7 Erreichbarkeit bringt uns neue Mandanten und spart Zeit bei der Vorfilterung. Unsere Mandanten schätzen die professionelle Betreuung.",
      name: "Stefan Meyer",
      role: "Anwalt",
      company: "Kanzlei Meyer & Partner",
      initials: "SM"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Parallax decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(0)', transition: 'transform 1s ease-out' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Was unsere Kunden über Lead Connect sagen
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Über 400+ zufriedene Unternehmen vertrauen bereits auf Lead Connect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-card p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 75}ms`
              }}
            >
            <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
