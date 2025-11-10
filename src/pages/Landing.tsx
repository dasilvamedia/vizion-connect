import { LandingHero } from "@/components/landing/LandingHero";
import { TrustLogos } from "@/components/landing/TrustLogos";
import { FullServiceSection } from "@/components/landing/FullServiceSection";
import { AIAssistantConfig } from "@/components/landing/AIAssistantConfig";
import { AIFunctions } from "@/components/landing/AIFunctions";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { StatsSection } from "@/components/landing/StatsSection";
import { IndustriesGrid } from "@/components/landing/IndustriesGrid";
import { PricingSection } from "@/components/landing/PricingSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { RevenueCalculator } from "@/components/landing/RevenueCalculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { VideoSection } from "@/components/landing/VideoSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <LandingHero />
      <TrustLogos />
      <FullServiceSection />
      <AIAssistantConfig />
      <AIFunctions />
      <WhyChooseUs />
      <VideoSection />
      <StatsSection />
      <IndustriesGrid />
      <PricingSection />
      <RevenueCalculator />
      <Testimonials />
      <ContactSection />
      
      <LandingFooter />
    </div>
  );
};

export default Landing;
