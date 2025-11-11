import logosRow1 from "@/assets/logos-row-1.png";
import logosRow2 from "@/assets/logos-row-2.png";

export const TrustLogos = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden bg-background" aria-label="Unsere Kundenlogos">
      <div className="relative w-full overflow-hidden">
        {/* Track: duplicate one full group for seamless loop */}
        <div className="flex w-max items-center gap-4 whitespace-nowrap animate-scroll-infinite will-change-transform">
          {/* Group A */}
          <div className="flex items-center gap-4">
            <img src={logosRow1} alt="Kundenlogos Reihe 1" className="h-12 w-auto flex-shrink-0 select-none pointer-events-none" />
            <img src={logosRow2} alt="Kundenlogos Reihe 2" className="h-12 w-auto flex-shrink-0 select-none pointer-events-none" />
          </div>
          {/* Group B (duplicate) */}
          <div className="flex items-center gap-4" aria-hidden="true">
            <img src={logosRow1} alt="Kundenlogos Reihe 1 (Kopie)" className="h-12 w-auto flex-shrink-0 select-none pointer-events-none" />
            <img src={logosRow2} alt="Kundenlogos Reihe 2 (Kopie)" className="h-12 w-auto flex-shrink-0 select-none pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
