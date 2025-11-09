import { industries } from "@/data/agents";
import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
}

export const Sidebar = ({ selectedIndustry, onSelectIndustry }: SidebarProps) => {
  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm sticky top-0 h-screen overflow-y-auto">
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
                "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                selectedIndustry === industry
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              {industry}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-border">
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200">
              Team
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200">
              About
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200">
              Contact
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
