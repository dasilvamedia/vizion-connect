import { Clock, Shield, Award, TrendingUp } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Mehr Zeit für Ihr Kerngeschäft",
      description: "Mit unserem Service können Sie sich vollständig auf Ihr Kerngeschäft konzentrieren, während wir Ihre Anrufe und Termine professionell verwalten.",
      stat: "Bis zu 8 Stunden pro Woche gespart"
    },
    {
      icon: Shield,
      title: "Zuverlässiger Service ohne Ausfälle",
      description: "Unser KI-System ist 365 Tage im Jahr für Sie da - keine Ausfälle durch Krankheit, Urlaub oder andere Abwesenheiten.",
      stat: "100% Verfügbarkeit garantiert"
    },
    {
      icon: Award,
      title: "Professioneller Auftritt garantiert",
      description: "Wir sorgen dafür, dass Ihr Unternehmen stets professionell, freundlich und kompetent repräsentiert wird - in der gewünschten Tonalität.",
      stat: "Konstant hohe Servicequalität"
    },
    {
      icon: TrendingUp,
      title: "Komplette Anrufbetreuung",
      description: "Wir übernehmen jeden Anruf und bearbeiten jede Anfrage professionell - auch außerhalb Ihrer Geschäftszeiten.",
      stat: "Durchschnittlich 20% mehr Termine"
    }
  ];

  return (
    <section id="vorteile" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Warum Unternehmen unseren Service wählen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unser professioneller KI-Telefonservice transformiert Ihre Kundenbetreuung und gibt Ihnen die Freiheit, 
            sich auf Wachstum zu konzentrieren
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-lg border border-border bg-card">
              <div className="w-14 h-14 rounded-lg bg-orange/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground mb-4">{reason.description}</p>
              <p className="text-orange font-semibold">{reason.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
