import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { industries, Agent } from "@/data/agents";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
  agents: Agent[];
}

export const MobileSidebar = ({ selectedIndustry, onSelectIndustry, agents }: MobileSidebarProps) => {
  const [open, setOpen] = useState(false);

  const handleSelectIndustry = (industry: string) => {
    onSelectIndustry(industry);
    setOpen(false);
  };

  const getAgentCount = (industry: string) => {
    if (industry === "Alle") {
      return agents.length;
    }
    return agents.filter(agent => agent.industry === industry).length;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="lg:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="p-6 space-y-6 overflow-y-auto h-full">
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
                onClick={() => handleSelectIndustry(industry)}
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

          <div className="pt-6 border-t border-border">
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200">
                Home
              </button>
              <button className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-orange text-white hover:bg-orange/90 transition-all duration-200">
                Termin Buchen
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
