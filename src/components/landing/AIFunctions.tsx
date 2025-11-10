import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MessageSquare, Globe } from "lucide-react";

export const AIFunctions = () => {
  const functions = [
    {
      icon: Phone,
      title: "KI-Telefoncaller",
      description: "Inbound & Outbound Calls KI-gesteuert, qualifizieren Sie Leads und buchen Sie diese automatisch in den Terminkalender ein, 100% automatisiert."
    },
    {
      icon: MessageCircle,
      title: "KI-Instagram Chatbot",
      description: "Hunderte Termine/Woche über Instagram DM's in den Kalender setzen. Starte KI-Konversationen durch Kommentare oder Storyreaktionen."
    },
    {
      icon: MessageSquare,
      title: "KI-WhatsApp Chatbot",
      description: "KI-Terminsetzung und Kundensupport über WhatsApp."
    },
    {
      icon: Globe,
      title: "KI-Webseite",
      description: "Intelligente Website-Integration mit automatischer Lead-Erfassung und sofortiger Kontaktaufnahme für maximale Conversion-Raten."
    }
  ];

  return (
    <section id="agenten" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Simple, aber effiziente KI-Funktionen
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          KI-Agenten für Sie oder Ihre Kunden, die autonom Termine in den hinterlegten Kalender buchen und vieles mehr...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {functions.map((func, index) => (
          <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
              <func.icon className="w-6 h-6 text-orange" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{func.title}</h3>
            <p className="text-sm text-muted-foreground">{func.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-orange hover:bg-orange/90 text-white"
          onClick={() => {
            document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          KI-Agenten jetzt testen
        </Button>
      </div>
    </section>
  );
};
