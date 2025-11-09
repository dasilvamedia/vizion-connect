import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { AgentsGrid } from "@/components/AgentsGrid";
import { agents } from "@/data/agents";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Alle");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Mobile Sidebar */}
      <MobileSidebar 
        selectedIndustry={selectedIndustry}
        onSelectIndustry={setSelectedIndustry}
      />

      {/* Main Content */}
      <div className="flex">
        <Sidebar 
          selectedIndustry={selectedIndustry}
          onSelectIndustry={setSelectedIndustry}
        />
        <AgentsGrid 
          agents={agents}
          selectedIndustry={selectedIndustry}
        />
      </div>
    </div>
  );
};

export default Index;
