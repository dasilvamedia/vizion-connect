export const TrustLogos = () => {
  const logos = [
    { emoji: "❤️", name: "Vitanas Group" },
    { emoji: "🏢", name: "vivilia GmbH" },
    { emoji: "🏠", name: "Ferienwohnungen-Nord" },
    { emoji: "🔥", name: "Stampff Heizung" },
    { emoji: "🩺", name: "Dr. Rönnefahrt" },
    { emoji: "🛡️", name: "Garantiehaus GmbH" },
    { emoji: "💼", name: "Hausberatung GmbH" },
    { emoji: "🛡️", name: "Versicherungsagentur Schmidtke" },
  ];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center gap-2 px-8 whitespace-nowrap">
            <span className="text-2xl">{logo.emoji}</span>
            <span className="text-sm font-medium text-muted-foreground">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
