import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const RevenueCalculator = () => {
  const [callsPerDay, setCallsPerDay] = useState([15]);
  const [orderValue, setOrderValue] = useState([500]);
  const [missedPercent, setMissedPercent] = useState([25]);

  const missedCallsPerDay = Math.round((callsPerDay[0] * missedPercent[0]) / 100);
  const missedOrdersPerMonth = missedCallsPerDay * 30;
  const lostRevenuePerMonth = missedOrdersPerMonth * orderValue[0];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Wie viel Geld verlieren Sie jeden Tag?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Berechnen Sie Ihren tatsächlichen Umsatzverlust durch verpasste Anrufe - das Ergebnis wird Sie überraschen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Ihre Unternehmensdaten</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Anrufe pro Tag</label>
                  <span className="text-sm font-bold text-orange">{callsPerDay[0]}</span>
                </div>
                <Slider 
                  value={callsPerDay} 
                  onValueChange={setCallsPerDay}
                  min={5}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5</span>
                  <span>30</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Durchschnittlicher Auftragswert (€)</label>
                  <span className="text-sm font-bold text-orange">{orderValue[0]} €</span>
                </div>
                <Slider 
                  value={orderValue} 
                  onValueChange={setOrderValue}
                  min={100}
                  max={5000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100€</span>
                  <span>5.000€</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Anteil verpasster Anrufe (%)</label>
                  <span className="text-sm font-bold text-orange">{missedPercent[0]}%</span>
                </div>
                <Slider 
                  value={missedPercent} 
                  onValueChange={setMissedPercent}
                  min={10}
                  max={50}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Ihr Umsatzpotential</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">{missedCallsPerDay}</div>
                <p className="text-sm opacity-90">Verpasste Anrufe/Tag</p>
                <p className="text-xs opacity-75 mt-1">Täglich entgehen Ihnen so viele Anrufe</p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-2">{missedOrdersPerMonth}</div>
                <p className="text-sm opacity-90">Verpasste Aufträge/Monat</p>
                <p className="text-xs opacity-75 mt-1">Potentielle Kunden, die Sie monatlich verlieren</p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-2">{lostRevenuePerMonth.toLocaleString('de-DE')} €</div>
                <p className="text-sm opacity-90">Verlorener Umsatz/Monat</p>
                <p className="text-xs opacity-75 mt-1">So viel Umsatz entgeht Ihnen monatlich</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-foreground mb-4 font-semibold">
              Realisieren Sie Ihr Umsatzpotential noch heute!
            </p>
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
              Jetzt Beratungstermin buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
