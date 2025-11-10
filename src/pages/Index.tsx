import { useState, useRef } from "react";
import { AgentPageHeader } from "@/components/AgentPageHeader";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { AgentsGrid } from "@/components/AgentsGrid";
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <AgentPageHeader />

      {/* Mobile Sidebar */}
      <MobileSidebar
        selectedIndustry={selectedIndustry}
        onSelectIndustry={handleIndustrySelect}
        agents={agents}
      />

      {/* Main Content */}
      <div className="flex">
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

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default Index;
