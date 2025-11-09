import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const FinalCTA = () => {
  const benefits = [
    "3 Tage vollkommen kostenlos",
    "Sofortige Aktivierung Ihrer AI-Agenten",
    "Alle Funktionen inklusive",
    "Keine Kündigung nötig - endet automatisch",
    "Persönliche Beratung inklusive"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Testen Sie Ihre AI-Agenten?
            </h2>
            <p className="text-lg text-muted-foreground">
              Starten Sie Ihre 3-tägige kostenlose Testphase und erleben Sie, 
              wie Lead Connect Ihr Unternehmen transformiert
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Ihre kostenlose Testphase:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-orange" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">3 Tage kostenlos</h3>
            <p className="mb-6 opacity-90">
              Testen Sie Lead Connect drei Tage kostenlos. Keine Kreditkarte erforderlich, 
              keine automatische Verlängerung. Einfach testen und überzeugen lassen!
            </p>
            <Button size="lg" className="bg-white text-orange hover:bg-white/90">
              Kostenlos starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
