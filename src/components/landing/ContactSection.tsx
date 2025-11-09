import { Check } from "lucide-react";
import contactVideo from "@/assets/kontaktformular-2.mp4";
export const ContactSection = () => {
  const features = ["3 Tage vollkommen kostenlos", "Sofortige Aktivierung Ihrer AI-Agenten", "Alle Funktionen inklusive", "Keine Kündigung nötig - endet automatisch"];
  return <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Grenzenloses Potenzial. Sind Sie bereit?</h2>
        
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Features Grid + Contact Form Placeholder */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-muted/50 border border-border rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-orange" />
                </div>
                <span className="text-sm md:text-base text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Kontaktformular Platzhalter<br />
              <span className="text-sm">(Embed Code folgt)</span>
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