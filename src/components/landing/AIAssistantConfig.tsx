import { Button } from "@/components/ui/button";
import { User, Mic, Languages, Briefcase } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export const AIAssistantConfig = () => {
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
  const features = [
    {
      icon: User,
      title: "Individuelle Namen",
      description: "Kaina, Emma, Petra, Daniel oder Ihr Wunschname"
    },
    {
      icon: Mic,
      title: "Passende Stimme",
      description: "Männlich, weiblich, jung oder erfahren - Sie entscheiden"
    },
    {
      icon: Languages,
      title: "Mehrsprachig",
      description: "Deutsch, Englisch, Französisch und weitere Sprachen"
    },
    {
      icon: Briefcase,
      title: "Maßgeschneidert",
      description: "Perfekt angepasst an Ihre Branche und Anforderungen"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background shapes */}
      <div 
        className={`absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/5 transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
      />
      <div 
        className={`absolute bottom-20 right-10 w-64 h-64 rounded-full bg-accent/5 transition-transform duration-1000 delay-300 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Ihr persönlicher KI-Assistent - genau wie Sie ihn wollen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ihr Assistent ist selbstverständlich individuell anpassbar - egal ob Kaina, Emma, Petra oder Daniel. 
            Name, Stimme und Sprachen werden genau nach Ihren Wünschen konfiguriert, damit der Service perfekt 
            zu Ihrem Unternehmen und Ihren Anforderungen passt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center p-6 transition-all duration-500 hover:scale-110 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Example Configuration */}
        <div 
          className={`max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Beispiel-Konfiguration</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Name:</p>
              <p className="font-semibold text-foreground">Emma</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Stimme:</p>
              <p className="font-semibold text-foreground">Freundlich & Professionell</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Sprachen:</p>
              <p className="font-semibold text-foreground">Deutsch, Englisch</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Branche:</p>
              <p className="font-semibold text-foreground">Rechtsanwaltskanzlei</p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-orange">
            <p className="text-foreground italic">
              "Guten Tag, hier ist Emma von der Kanzlei Müller. Wie kann ich Ihnen heute behilflich sein?"
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-foreground mb-4">
            Lassen Sie uns gemeinsam Ihren perfekten KI-Assistenten konfigurieren
          </p>
          <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
            Kostenlose Beratung vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};
