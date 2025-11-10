import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.png";

export const AgentPageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Lead Connect Logo" className="h-10 w-auto" />
        </Link>
        
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline">Zur Startseite</span>
        </Link>
      </div>
    </header>
  );
};
