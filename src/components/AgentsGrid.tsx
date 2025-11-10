import { Agent, industries } from "@/data/agents";
import { AgentCard } from "./AgentCard";
import { cn } from "@/lib/utils";

interface AgentsGridProps {
  agents: Agent[];
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
}

export const AgentsGrid = ({ agents, selectedIndustry, onSelectIndustry }: AgentsGridProps) => {
  const filteredAgents = selectedIndustry === "Alle" 
    ? agents 
    : agents.filter(agent => agent.industry === selectedIndustry);

  const getAgentCount = (industry: string) => {
    if (industry === "Alle") {
      return agents.length;
    }
    return agents.filter(agent => agent.industry === industry).length;
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-2 animate-fade-in pt-16 lg:pt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Entdecke unser KI-Agenten
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Spezialisierte KI-Agenten für jeden Bereich Ihres Unternehmens.
          </p>
        </div>

        {/* Branchen Filter */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wide">
            Branchen
          </h3>
          <div className="flex flex-wrap gap-2">
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
