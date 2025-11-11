import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingFooter } from "@/components/landing/LandingFooter";
import logo from "@/assets/logo-new.png";

const Termin = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Lead Connect Logo" className="h-10 md:h-12 w-auto" />
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Termin buchen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie einen passenden Termin für Ihr kostenloses Beratungsgespräch
            </p>
          </div>

          {/* Booking Widget */}
          <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
            <div className="p-4 md:p-8">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/4yxdG0ODbueMSfrg7Isd" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }} 
                scrolling="no" 
                id="4yxdG0ODbueMSfrg7Isd_1762898975994"
                title="Termin buchen"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Bei Fragen können Sie uns jederzeit kontaktieren</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default Termin;
