import heroVideo from "@/assets/hero-video.mov";
import logo from "@/assets/logo-new.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Lead Connect Logo" className="h-12 md:h-16 w-auto" />
        </Link>
        <Button variant="termin" size="sm" asChild>
          <Link to="/termin">Termin Buchen</Link>
        </Button>
      </nav>

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/95" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
