import { Button } from "@/components/ui/button";
import { Shield, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

export const WhyTestSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Völlig risikofrei",
      description: "3 Tage kostenlos, keine Kreditkarte nötig"
    },
    {
      icon: Zap,
      title: "Sofort aktiv",
      description: "Ihre AI-Agenten arbeitet ab Tag 1"
    },
    {
      icon: HeadphonesIcon,
      title: "Vollständige Betreuung",
      description: "Setup und Support inklusive"
    },
    {
      icon: TrendingUp,
      title: "Sofortige Ergebnisse",
      description: "Mehr Termine bereits in der Testphase"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Warum Sie Lead Connect 3 Tage kostenlos testen sollten
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
              <reason.icon className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
            <p className="text-sm text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">3 Tage kostenlos</h3>
        <p className="text-muted-foreground mb-6">
          Testen Sie Lead Connect drei Tage kostenlos. Keine Kreditkarte erforderlich, 
          keine automatische Verlängerung. Einfach testen und überzeugen lassen!
        </p>
        <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
          Kostenlos starten
        </Button>
      </div>
    </section>
  );
};
