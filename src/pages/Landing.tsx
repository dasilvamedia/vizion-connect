import { LandingHero } from "@/components/landing/LandingHero";
import { TrustLogos } from "@/components/landing/TrustLogos";
import { FullServiceSection } from "@/components/landing/FullServiceSection";
import { AIAssistantConfig } from "@/components/landing/AIAssistantConfig";
import { AIFunctions } from "@/components/landing/AIFunctions";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { StatsSection } from "@/components/landing/StatsSection";
import { IndustriesGrid } from "@/components/landing/IndustriesGrid";
import { PricingSection } from "@/components/landing/PricingSection";
import { WhyTestSection } from "@/components/landing/WhyTestSection";
import { RevenueCalculator } from "@/components/landing/RevenueCalculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <TrustLogos />
      <FullServiceSection />
      <AIAssistantConfig />
      <AIFunctions />
      <WhyChooseUs />
      <StatsSection />
      <IndustriesGrid />
      <PricingSection />
      <WhyTestSection />
      <RevenueCalculator />
      <Testimonials />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Landing;
