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
      description: "Männlich, weiblich, jung oder erfahren – Sie entscheiden"
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content and Features */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ihr persönlicher KI-Assistent <span className="text-orange">genau wie Sie ihn wollen</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Ihr Assistent ist selbstverständlich individuell anpassbar, egal ob Kaina, Emma, Petra oder Daniel. 
              Name, Stimme und Sprachen werden genau nach Ihren Wünschen konfiguriert, damit der Service perfekt 
              zu Ihrem Unternehmen und Ihren Anforderungen passt.
            </p>

            {/* Features in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 transition-all duration-500 ${
                    isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Example Configuration */}
          <div 
            className={`bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-700 hover:shadow-2xl sticky top-8 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Beispiel-Konfiguration</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Name:</p>
                <p className="font-semibold text-orange">Emma</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Stimme:</p>
                <p className="font-semibold text-orange">Freundlich & Professionell</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Sprachen:</p>
                <p className="font-semibold text-orange">Deutsch, Englisch</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Branche:</p>
                <p className="font-semibold text-orange">Rechtsanwaltskanzlei</p>
              </div>
            </div>
            <div className="bg-orange rounded-lg p-4">
              <p className="text-white italic text-sm md:text-base">
                "Guten Tag, hier ist Emma von der Kanzlei Müller. Wie kann ich Ihnen heute behilflich sein?"
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-base md:text-lg text-foreground mb-4">
            Lassen Sie uns gemeinsam Ihren perfekten KI-Assistenten konfigurieren
          </p>
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-white"
            onClick={() => {
              document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Kostenlose Beratung vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};
