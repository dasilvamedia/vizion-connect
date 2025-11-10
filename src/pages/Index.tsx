import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AgentsGrid } from "@/components/AgentsGrid";
import { ContactSection } from "@/components/landing/ContactSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { agents } from "@/data/agents";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Alle");

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
    </div>
  );
};

export default Index;
