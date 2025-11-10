import { useState, useRef, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { AgentsGrid } from "@/components/AgentsGrid";
import { ContactSection } from "@/components/landing/ContactSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { agents } from "@/data/agents";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Alle");
  const agentsGridRef = useRef<HTMLDivElement>(null);
  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    agentsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Mobile Sidebar */}
      <MobileSidebar
        selectedIndustry={selectedIndustry}
        onSelectIndustry={handleIndustrySelect}
        agents={agents}
      />

      {/* Main Content */}
      <div className="flex flex-1 lg:pl-64">
        <Sidebar 
          selectedIndustry={selectedIndustry}
          onSelectIndustry={handleIndustrySelect}
          agents={agents}
        />
        <div ref={agentsGridRef} className="flex-1">
          <AgentsGrid 
            agents={agents}
            selectedIndustry={selectedIndustry}
          />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default Index;
