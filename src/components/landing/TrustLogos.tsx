import logosRow1 from "@/assets/logos-row-1.png";
import logosRow2 from "@/assets/logos-row-2.png";

export const TrustLogos = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden bg-background">
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll-infinite">
          <img src={logosRow1} alt="Kunden Logos" className="h-12 w-auto flex-shrink-0" />
          <img src={logosRow2} alt="Kunden Logos" className="h-12 w-auto flex-shrink-0" />
          <img src={logosRow1} alt="Kunden Logos" className="h-12 w-auto flex-shrink-0" />
          <img src={logosRow2} alt="Kunden Logos" className="h-12 w-auto flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};
