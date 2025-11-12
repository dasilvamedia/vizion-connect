import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export const PricingSection = () => {
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
  const plans = [
    {
      name: "Basis-Service",
      subtitle: "Perfekt für Selbständige und kleine Unternehmen",
      price: "897€",
      period: "pro Monat",
      features: [
        "1 KI-Agent für Ihr Unternehmen",
        "KI-Chatbot inklusive",
        "300 Minuten Service inklusive",
        "Jede weitere Minute: 23ct",
        "24/7 Anrufbetreuung",
        "Lead-Generierung Service",
        "Lead-Qualifizierung durch uns",
        "Professionelle Kundenberatung",
        "Anrufweiterleitung nach Bedarf",
        "Automatische Terminbuchung",
        "E-Mail Benachrichtigungen",
        "Kalender-Integration Setup",
        "Standard Support von uns"
      ],
      popular: false
    },
    {
      name: "Business-Service",
      subtitle: "Ideal für wachsende Unternehmen",
      price: "2.497€",
      period: "pro Monat",
      features: [
        "Bis zu 3 KI-Agenten",
        "KI-Chatbot inklusive",
        "500 Minuten Service inklusive",
        "Jede weitere Minute: 23ct",
        "24/7 Anrufbetreuung",
        "Mehrsprachiger Service",
        "Professionelle Lead-Generierung",
        "Umfassende Lead-Qualifizierung",
        "Erweiterte Kundenberatung",
        "Intelligente Anrufweiterleitung",
        "Vollautomatische Terminbuchung",
        "Detaillierte E-Mail Reports",
        "Komplette Kalender-Integration",
        "Erweiterte Reporting-Services",
        "Priority Support von uns"
      ],
      popular: true
    },
    {
      name: "Premium-Service",
      subtitle: "Für Unternehmen mit erweiterten Anforderungen",
      price: "Auf Anfrage",
      period: "",
      features: [
        "Unbegrenzte KI-Agenten",
        "KI-Chatbot inklusive",
        "Unbegrenzte Service-Minuten",
        "Aktive Outbound-Kampagnen",
        "Professionelle Lead-Generierung",
        "Komplette CRM-Integration",
        "Erweiterte Analytics durch uns",
        "Maßgeschneiderte Workflows",
        "Ihr persönlicher Account Manager",
        "Vollständiger API-Zugang",
        "White-Label Option verfügbar",
        "Persönliches Beratungsgespräch"
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} id="preise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Transparente Service-Pakete für jeden Bedarf
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Wählen Sie das Service-Paket, das am besten zu Ihrem Unternehmen passt. Alles wird von uns betreut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 md:p-8 rounded-lg border ${
                plan.popular ? 'border-orange bg-orange/5 md:scale-105' : 'border-border bg-card'
              } hover:shadow-2xl transition-all duration-500 md:hover:scale-110 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Beliebt
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Enthalten:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-orange hover:bg-orange/90 text-white' 
                    : index === 0 || index === 2
                    ? 'bg-secondary hover:bg-secondary/80 border-2 border-orange text-black'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                Jetzt anfragen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
