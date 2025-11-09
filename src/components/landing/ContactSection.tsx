import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";
import contactVideo from "@/assets/contact-video.mp4";

export const ContactSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Völlig risikofrei",
      description: "3 Tage kostenlos testen"
    },
    {
      icon: Zap,
      title: "Sofort aktiv",
      description: "AI-Agenten ab Tag 1"
    },
    {
      icon: HeadphonesIcon,
      title: "Vollständige Betreuung",
      description: "Setup & Support inklusive"
    },
    {
      icon: TrendingUp,
      title: "Sofortige Ergebnisse",
      description: "Mehr Termine bereits in der Testphase"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Features & Contact Form */}
        <div className="space-y-8">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-4">Kontaktieren Sie uns</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ihr Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" placeholder="ihre@email.de" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea id="message" placeholder="Ihre Nachricht..." rows={4} />
              </div>
              <Button className="w-full bg-orange hover:bg-orange/90 text-white">
                Nachricht senden
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Video */}
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          >
            <source src={contactVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
