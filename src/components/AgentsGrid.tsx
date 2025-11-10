import { Agent, industries } from "@/data/agents";
import { AgentCard } from "./AgentCard";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AgentsGridProps {
  agents: Agent[];
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
}

export const AgentsGrid = ({ agents, selectedIndustry, onSelectIndustry }: AgentsGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  
  const filteredAgents = selectedIndustry === "Alle" 
    ? agents 
    : agents.filter(agent => agent.industry === selectedIndustry);

  const getAgentCount = (industry: string) => {
    if (industry === "Alle") {
      return agents.length;
    }
    return agents.filter(agent => agent.industry === industry).length;
  };

  // Auto-scroll to active filter and update indicator position
  useEffect(() => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      const button = activeButtonRef.current;
      const container = scrollContainerRef.current;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });

      // Update indicator position
      if (indicatorRef.current) {
        indicatorRef.current.style.left = `${buttonLeft}px`;
        indicatorRef.current.style.width = `${buttonWidth}px`;
      }
    }
  }, [selectedIndustry]);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-2 animate-fade-in pt-16 lg:pt-0 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Entdecke unser KI-Agenten
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Spezialisierte KI-Agenten für jeden Bereich Ihres Unternehmens.
          </p>
        </div>

        {/* Branchen Filter */}
        <div className="space-y-6">
          {/* Mobile: Horizontal Slider */}
          <div className="lg:hidden relative">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide -mx-4 px-4 scroll-smooth relative"
            >
              <div className="flex gap-2 min-w-min pb-3 relative">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    ref={selectedIndustry === industry ? activeButtonRef : null}
                    onClick={() => onSelectIndustry(industry)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap flex-shrink-0",
                      selectedIndustry === industry
                        ? "text-accent-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    <span>{industry}</span>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full transition-all duration-300",
                      selectedIndustry === industry
                        ? "bg-accent/20"
                        : "bg-muted"
                    )}>
                      {getAgentCount(industry)}
                    </span>
                  </button>
                ))}
                {/* Animated indicator line */}
                <div 
                  ref={indicatorRef}
                  className="absolute bottom-0 h-0.5 bg-accent transition-all duration-300 ease-out"
                  style={{ left: 0, width: 0 }}
                />
              </div>
            </div>
          </div>
          
          {/* Desktop: Wrapped Grid */}
          <div className="hidden lg:flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => onSelectIndustry(industry)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                  selectedIndustry === industry
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-card text-foreground/70 hover:text-foreground hover:bg-muted border border-border"
                )}
              >
                <span>{industry}</span>
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  selectedIndustry === industry
                    ? "bg-accent-foreground/20"
                    : "bg-muted"
                )}>
                  {getAgentCount(industry)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 animate-scale-in">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Keine Agenten in dieser Branche verfügbar.
          </div>
        )}
      </div>
    </div>
  );
};
