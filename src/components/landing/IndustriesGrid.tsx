import { Button } from "@/components/ui/button";
import { Building2, Heart, Landmark, Phone, Users, Plane, Rocket, ShoppingBag, Package, Sparkles, Hotel, Car } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export const IndustriesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const industries = [
    {
      icon: Building2,
      title: "Immobilien",
      description: "Terminbuchungen, Objektinfos, Besichtigungen - nie wieder verpasste Leads",
      features: ["Terminbuchung", "Objektinformationen", "Besichtigungen"]
    },
    {
      icon: Heart,
      title: "Gesundheitswesen",
      description: "Terminvereinbarung, Sprechstunden, Notfälle - kompetent und einfühlsam",
      features: ["Terminvereinbarung", "Sprechstunden", "Patientenbetreuung"]
    },
    {
      icon: Landmark,
      title: "Finanzdienstleistungen",
      description: "Kontoanfragen, Kreditberatung, Versicherungen - sicher und diskret",
      features: ["Kontoanfragen", "Kreditberatung", "Versicherungsinfos"]
    },
    {
      icon: Phone,
      title: "Telekommunikation",
      description: "Tariffragen, Störungsmeldungen, Upgrades - technisch kompetent",
      features: ["Tariffragen", "Störungsmeldungen", "Vertragswechsel"]
    },
    {
      icon: Users,
      title: "Personalwesen",
      description: "Bewerbungsprozess, HR-Fragen, Onboarding - professionell und herzlich",
      features: ["Bewerbungsprozess", "HR-Anfragen", "Employee Support"]
    },
    {
      icon: Plane,
      title: "Reise & Tourismus",
      description: "Buchungen, Reiseinfos, Stornierungen - weltweite Expertise",
      features: ["Reisebuchungen", "Destination Info", "Umbuchungen"]
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Kundenakquise, Support, Growth - skalierbar von Tag 1",
      features: ["Lead Qualification", "Customer Support", "Growth Hacking"]
    },
    {
      icon: ShoppingBag,
      title: "Einzelhandel",
      description: "Produktverfügbarkeit, Öffnungszeiten, Reservierungen - lokal präsent",
      features: ["Produktverfügbarkeit", "Store Infos", "Reservierungen"]
    },
    {
      icon: Package,
      title: "Großhandel",
      description: "B2B Anfragen, Konditionen, Lieferzeiten - business-ready",
      features: ["B2B Anfragen", "Preisanfragen", "Lieferzeiten"]
    },
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Terminbuchung, Behandlungsberatung, Nachsorge - schön und entspannt",
      features: ["Terminbuchung", "Behandlungsberatung", "Nachsorge"]
    },
    {
      icon: Hotel,
      title: "Hotels",
      description: "Zimmerreservierung, Concierge-Service, Check-in/out - gastfreundlich rund um die Uhr",
      features: ["Zimmerreservierung", "Concierge Service", "Guest Relations"]
    },
    {
      icon: Car,
      title: "Fahrschule",
      description: "Fahrstunden buchen, Theorieprüfung, Führerschein-Infos - sicher zum Ziel",
      features: ["Fahrstunden buchen", "Prüfungstermine", "Führerschein Beratung"]
    }
  ];

  return (
    <section id="branche" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Lead Connect in deiner Branche
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Egal in welcher Branche du tätig bist – Lead Connect Voice Agents übernehmen repetitive Aufgaben 
          und lassen dein Team sich auf das Wesentliche konzentrieren.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-2 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ 
              animationDelay: `${index * 80}ms`,
              transitionDelay: `${index * 40}ms`
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
              <industry.icon className="w-6 h-6 text-orange" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{industry.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
            <div className="flex flex-wrap gap-2">
              {industry.features.map((feature, idx) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-foreground mb-4">Deine Branche nicht dabei? Kein Problem!</p>
        <Button size="lg" variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
          Individuelle Lösung anfragen
        </Button>
      </div>
    </section>
  );
};
