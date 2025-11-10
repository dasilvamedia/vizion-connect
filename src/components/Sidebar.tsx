import { industries } from "@/data/agents";
import { cn } from "@/lib/utils";
import { Agent } from "@/data/agents";

interface SidebarProps {
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
  agents: Agent[];
}

const SidebarContent = ({ selectedIndustry, onSelectIndustry, agents }: SidebarProps) => {
  const getAgentCount = (industry: string) => {
    if (industry === "Alle") {
      return agents.length;
    }
    return agents.filter(agent => agent.industry === industry).length;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Lead Connect</h2>
        <p className="text-sm text-muted-foreground">AI-gestützte Agenten</p>
      </div>

      <nav className="space-y-1">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Branchen
        </h3>
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => onSelectIndustry(industry)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between",
              selectedIndustry === industry
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-foreground/70 hover:text-foreground hover:bg-muted"
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
      </nav>
    </div>
  );
};

export const Sidebar = ({ selectedIndustry, onSelectIndustry, agents }: SidebarProps) => {
  return (
    <aside className="hidden lg:block w-64 border-r border-border bg-card/50 backdrop-blur-sm sticky top-0 h-fit max-h-screen overflow-y-auto">
      <SidebarContent selectedIndustry={selectedIndustry} onSelectIndustry={onSelectIndustry} agents={agents} />
    </aside>
  );
};
