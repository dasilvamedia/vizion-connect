export const StatsSection = () => {
  const stats = [
    { value: "24/7", label: "Verfügbar" },
    { value: "400+", label: "Zufriedene Kunden" },
    { value: "99.9%", label: "Uptime Garantie" }
  ];

  return (
    <section className="py-20 bg-orange text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Zahlen, die überzeugen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
