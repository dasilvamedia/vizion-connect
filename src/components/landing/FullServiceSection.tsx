import { Phone, Calendar, TrendingUp, Clock, Globe, Zap } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export const FullServiceSection = () => {
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
  const services = [
    {
      icon: Phone,
      title: "Professionelle Anrufbearbeitung",
      description: "Unser KI-Service beantwortet jeden Anruf für Sie professionell und freundlich - in der Sprache Ihrer Kunden, 24 Stunden am Tag."
    },
    {
      icon: Calendar,
      title: "Terminmanagement-Service",
      description: "Wir übernehmen die komplette Terminvereinbarung direkt in Ihrem Kalender. Keine Doppelbuchungen, keine Wartezeit."
    },
    {
      icon: TrendingUp,
      title: "Aktive Kundenakquise",
      description: "Im Premium-Service führen wir aktive Kundentelefonate durch und generieren qualifizierte Leads für Ihr Unternehmen."
    },
    {
      icon: Clock,
      title: "Rund-um-die-Uhr Betreuung",
      description: "Wir sorgen dafür, dass Sie nie wieder einen wichtigen Anruf verpassen. Unser Service ist immer da für Ihre Kunden."
    },
    {
      icon: Globe,
      title: "Mehrsprachiger Service",
      description: "Unser KI-System spricht die Sprache Ihrer Kunden und passt sich automatisch an deren Bedürfnisse an."
    },
    {
      icon: Zap,
      title: "Vollautomatisierte Lösung",
      description: "Wir implementieren und betreuen intelligente Prozesse, die Ihre Kundenbetreuung optimieren und die Effizienz steigern."
    }
  ];

  return (
    <section ref={sectionRef} id="funktionen" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Unser Full-Service für perfekte Kundenbetreuung
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Wir übernehmen sämtliche Aufgaben rund um Kundenkontakt und Terminmanagement, sodass Sie wertvolle Zeit für Ihr Geschäft gewinnen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-500 hover:scale-105 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              transitionDelay: `${index * 50}ms`
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-orange" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
