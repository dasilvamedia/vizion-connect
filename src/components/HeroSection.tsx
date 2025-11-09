import heroVideo from "@/assets/hero-video.mov";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Logo */}
      <div className="absolute top-2 sm:top-3 left-4 sm:left-6 z-10">
        <img 
          src={logo} 
          alt="Lead Connect by DaSilvamedia" 
          className="h-48 sm:h-64 w-auto"
        />
      </div>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
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
