import { Check } from "lucide-react";
import contactVideo from "@/assets/kontaktformular-2.mp4";
export const ContactSection = () => {
  const features = ["3 Tage vollkommen kostenlos", "Sofortige Aktivierung Ihrer AI-Agenten", "Alle Funktionen inklusive", "Keine Kündigung nötig - endet automatisch"];
  return <section id="kontakt" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Grenzenloses Potenzial. Sind Sie bereit?</h2>
        
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Features Grid + Contact Form Placeholder */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Jetzt anfragen
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Interesse an HalloPetra geweckt? Dann trage dich jetzt ein und vereinbare eine kostenlose Demo mit unserem Vertriebsteam.
            </p>
          </div>
        </div>

        {/* Right: Video */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={contactVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>;
};