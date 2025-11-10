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
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroOut, setHeroOut] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHeroOut(!entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    agentsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        selectedIndustry={selectedIndustry}
        onSelectIndustry={handleIndustrySelect}
        agents={agents}
      />

      {/* Main Content */}
      <div className="flex flex-1">
        <Sidebar 
          selectedIndustry={selectedIndustry}
          onSelectIndustry={handleIndustrySelect}
          agents={agents}
          className={heroOut ? "fixed top-0 left-0 z-40 h-screen" : "sticky top-0"}
        />
        {/* Spacer for fixed sidebar on desktop */}
        <div className="hidden lg:block w-64 shrink-0" aria-hidden />
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
