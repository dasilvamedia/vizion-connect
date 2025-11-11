import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AgentsGrid } from "@/components/AgentsGrid";
import { ContactSection } from "@/components/landing/ContactSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { agents } from "@/data/agents";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Alle");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="flex-1">
        <AgentsGrid 
          agents={agents}
          selectedIndustry={selectedIndustry}
          onSelectIndustry={setSelectedIndustry}
        />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <LandingFooter />

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="termin"
        size="icon"
        className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop 
            ? "translate-y-0 opacity-100" 
            : "translate-y-16 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
