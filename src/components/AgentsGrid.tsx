import { Agent } from "@/data/agents";
import { AgentCard } from "./AgentCard";

interface AgentsGridProps {
  agents: Agent[];
  selectedIndustry: string;
}

export const AgentsGrid = ({ agents, selectedIndustry }: AgentsGridProps) => {
  const filteredAgents = selectedIndustry === "Alle" 
    ? agents 
    : agents.filter(agent => agent.industry === selectedIndustry);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground">
            Entdecke unser KI-Agenten
          </h2>
          <p className="text-muted-foreground text-lg">
            Spezialisierte KI-Agenten für jeden Bereich Ihres Unternehmens.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
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
