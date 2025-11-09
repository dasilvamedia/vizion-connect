import { Agent } from "@/data/agents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,120,0,0.15)] cursor-pointer">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors duration-300">
              {agent.name}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs">
              {agent.industry}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {agent.description}
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Use Cases
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {agent.useCases.map((useCase, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Card>
  );
};
