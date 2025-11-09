export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lead Connect hat uns wirklich geholfen! Die Terminbuchung läuft jetzt automatisch und unsere Patienten sind sehr zufrieden. Wir können uns endlich wieder mehr auf die Behandlung konzentrieren.",
      name: "Dr. Sarah Müller",
      role: "Hausärztin",
      company: "Praxis Dr. Müller",
      initials: "SM"
    },
    {
      quote: "Sehr gut! Lead Connect erkennt Notfälle zuverlässig und leitet sie direkt weiter. Unsere Kunden schätzen die professionelle Betreuung. Wir haben deutlich mehr Termine und weniger Stress.",
      name: "Marcus Weber",
      role: "Geschäftsführer",
      company: "Weber Handwerksservice GmbH",
      initials: "MW"
    },
    {
      quote: "Eine sehr gute Investition! Ich verpasse keinen wichtigen Anruf mehr und kann mich besser auf meine Klienten konzentrieren. Die Einrichtung war einfach und hat sich schnell gelohnt.",
      name: "Lisa Hoffmann",
      role: "Business Coach",
      company: "Hoffmann Coaching",
      initials: "LH"
    },
    {
      quote: "Lead Connect ist wirklich ein Gamechanger! Die automatische Terminbuchung spart uns täglich viel Zeit. Unsere Mandanten sind zufrieden mit der Betreuung und der Support antwortet schnell.",
      name: "Thomas Klein",
      role: "Inhaber",
      company: "Klein Steuerberatung",
      initials: "TK"
    },
    {
      quote: "Ich bin beeindruckt! Lead Connect spricht gut Deutsch, Englisch und Türkisch mit unseren Patienten. Die Terminbuchung funktioniert zuverlässig und die Patienten mögen die freundliche Art.",
      name: "Anna Richter",
      role: "Physiotherapeutin",
      company: "Praxis Richter",
      initials: "AR"
    },
    {
      quote: "Lead Connect hat unsere Kanzlei deutlich verbessert! Die 24/7 Erreichbarkeit bringt uns neue Mandanten und spart Zeit bei der Vorfilterung. Unsere Mandanten schätzen die professionelle Betreuung.",
      name: "Stefan Meyer",
      role: "Anwalt",
      company: "Kanzlei Meyer & Partner",
      initials: "SM"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Was unsere Kunden über Lead Connect sagen
        </h2>
        <p className="text-lg text-muted-foreground">
          Über 400+ zufriedene Unternehmen vertrauen bereits auf Lead Connect
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-lg border border-border bg-card">
            <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                <span className="text-orange font-semibold">{testimonial.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
