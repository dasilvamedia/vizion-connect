export interface Agent {
  id: number;
  name: string;
  industry: string;
  description: string;
  features: string[];
  useCases: string[];
}

export const agents: Agent[] = [
  {
    id: 1,
    name: "E-Commerce Kundenberatung Agent",
    industry: "E-Commerce & Retail",
    description: "Berät Kunden zu Produkten, beantwortet Fragen zu Verfügbarkeit, Preisen und Lieferzeiten. Kann Bestellungen entgegennehmen und Produktempfehlungen geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Produktberatung", "Bestellannahme", "Verfügbarkeitsprüfung", "Preisauskunft", "Lieferzeiten"]
  },
  {
    id: 2,
    name: "Bestellstatus & Tracking Agent",
    industry: "E-Commerce & Retail",
    description: "Informiert Kunden über Bestellstatus, Lieferzeiten und Tracking-Informationen. Kann Bestellungen stornieren oder Lieferadressen ändern.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Bestellverfolgung", "Lieferstatus", "Tracking-Updates", "Stornierungen", "Adressänderungen"]
  },
  {
    id: 3,
    name: "Retourenmanagement Agent",
    industry: "E-Commerce & Retail",
    description: "Wickelt Rücksendungen ab, erstellt Retourenscheine und beantwortet Fragen zu Rückgaberichtlinien. Kann Umtausch und Erstattungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Retourenabwicklung", "Rückgaberichtlinien", "Umtausch", "Erstattungen", "Retourenscheine"]
  },
  {
    id: 4,
    name: "Aktionen & Rabatte Agent",
    industry: "E-Commerce & Retail",
    description: "Informiert über laufende Aktionen, Rabattcodes und Sonderangebote. Kann Gutscheine einlösen und Treueprogramme verwalten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Aktionen", "Rabattcodes", "Sonderangebote", "Gutscheine", "Treueprogramm"]
  },
  {
    id: 5,
    name: "Zahlungsabwicklung Agent",
    industry: "E-Commerce & Retail",
    description: "Unterstützt bei Zahlungsproblemen, erklärt Zahlungsoptionen und kann Zahlungsmethoden aktualisieren. Hilft bei Rechnungsfragen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Zahlungsabwicklung", "Zahlungsmethoden", "Rechnungsfragen", "Zahlungsprobleme", "Kreditkarten"]
  },
  {
    id: 6,
    name: "Lagerbestand Agent",
    industry: "E-Commerce & Retail",
    description: "Prüft Lagerbestände in Echtzeit, informiert über Nachlieferungen und kann Benachrichtigungen für ausverkaufte Artikel einrichten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lagerbestand", "Verfügbarkeit", "Nachlieferungen", "Benachrichtigungen", "Produktverfügbarkeit"]
  },
  {
    id: 7,
    name: "Wunschliste Agent",
    industry: "E-Commerce & Retail",
    description: "Verwaltet Kundenwunschlisten, sendet Preisalarme und informiert über Verfügbarkeitsänderungen bei gewünschten Produkten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Wunschliste", "Preisalarme", "Benachrichtigungen", "Produktbeobachtung", "Favoriten"]
  },
  {
    id: 8,
    name: "Bewertungen Agent",
    industry: "E-Commerce & Retail",
    description: "Sammelt Kundenbewertungen, beantwortet Fragen zu Produktrezensionen und kann Bewertungserinnerungen senden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Produktbewertungen", "Kundenfeedback", "Rezensionen", "Bewertungserinnerungen", "Qualitätsfeedback"]
  },
  {
    id: 9,
    name: "Newsletter & Marketing Agent",
    industry: "E-Commerce & Retail",
    description: "Verwaltet Newsletter-Anmeldungen, informiert über neue Produkte und kann personalisierte Empfehlungen senden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Newsletter", "Marketing", "Produktempfehlungen", "Anmeldungen", "Personalisierung"]
  },
  {
    id: 10,
    name: "Affiliate-Programm Agent",
    industry: "E-Commerce & Retail",
    description: "Informiert über Affiliate-Programme, kann Partnerschaften initiieren und beantwortet Fragen zu Provisionen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Affiliate-Programm", "Partnerschaft", "Provisionen", "Empfehlungsmarketing", "Kooperationen"]
  },
  {
    id: 11,
    name: "B2B Vertrieb Agent",
    industry: "E-Commerce & Retail",
    description: "Betreut Geschäftskunden, erstellt Angebote für Großbestellungen und kann Firmenkonten verwalten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["B2B-Vertrieb", "Geschäftskunden", "Großbestellungen", "Firmenkonten", "Unternehmensrabatte"]
  },
  {
    id: 12,
    name: "Abonnement Agent",
    industry: "E-Commerce & Retail",
    description: "Verwaltet Abonnements, kann Abo-Pläne ändern und beantwortet Fragen zu wiederkehrenden Bestellungen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Abonnements", "Abo-Verwaltung", "Wiederkehrende Bestellungen", "Abo-Pläne", "Kündigungen"]
  },
  {
    id: 13,
    name: "Geschenk-Service Agent",
    industry: "E-Commerce & Retail",
    description: "Hilft bei Geschenkbestellungen, kann Geschenkverpackungen arrangieren und Grußkarten erstellen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Geschenk-Service", "Geschenkverpackung", "Grußkarten", "Geschenkgutscheine", "Überraschungen"]
  },
  {
    id: 14,
    name: "Treueprogramm Agent",
    industry: "E-Commerce & Retail",
    description: "Verwaltet Treuepunkte, informiert über Rewards und kann Mitgliedschaftsvorteile erklären.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Treueprogramm", "Loyalty-Punkte", "Rewards", "Mitgliedschaftsvorteile", "Bonusprogramm"]
  },
  {
    id: 15,
    name: "Größenberatung Agent",
    industry: "E-Commerce & Retail",
    description: "Hilft bei der Größenauswahl, kann Größentabellen erklären und Passform-Empfehlungen geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Größenberatung", "Größentabellen", "Passform", "Größenempfehlungen", "Kleidungsgrößen"]
  },
  {
    id: 16,
    name: "Garantie & Service Agent",
    industry: "E-Commerce & Retail",
    description: "Beantwortet Fragen zu Garantieleistungen, kann Garantiefälle bearbeiten und über Serviceleistungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Garantie", "Serviceleistungen", "Garantiefälle", "Reparaturen", "Ersatzteile"]
  },
  {
    id: 17,
    name: "Immobilien Lead-Qualifizierung Agent",
    industry: "Immobilien",
    description: "Qualifiziert Interessenten für Immobilien, erfasst Budgetvorstellungen und Wünsche. Kann erste Objektempfehlungen geben und Kontaktdaten sammeln.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lead-Qualifizierung", "Budgeterfassung", "Wunschkriterien", "Objektempfehlungen", "Kontaktdaten"]
  },
  {
    id: 18,
    name: "Besichtigungstermine Agent",
    industry: "Immobilien",
    description: "Koordiniert Besichtigungstermine, prüft Verfügbarkeiten und sendet Bestätigungen. Kann Termine verschieben und Absagen verwalten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Terminbuchung", "Besichtigungen", "Kalenderabgleich", "Terminbestätigung", "Terminverschiebung"]
  },
  {
    id: 19,
    name: "Objektinformationen Agent",
    industry: "Immobilien",
    description: "Beantwortet Fragen zu Immobilien, gibt Auskunft über Ausstattung, Lage und Preise. Kann Exposés versenden und Detailfragen klären.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Objektdetails", "Ausstattung", "Lageinfos", "Preisauskünfte", "Exposé-Versand"]
  },
  {
    id: 20,
    name: "Finanzierungsberatung Agent",
    industry: "Immobilien",
    description: "Berät zu Finanzierungsmöglichkeiten, kann Finanzierungsanfragen weiterleiten und erste Machbarkeitsprüfungen durchführen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Finanzierungsberatung", "Kreditanfragen", "Machbarkeitsprüfung", "Zinskonditionen", "Eigenkapital"]
  },
  {
    id: 21,
    name: "Immobilienbewertung Agent",
    industry: "Immobilien",
    description: "Führt erste Bewertungsschätzungen durch, sammelt Objektdaten und kann Bewertungstermine vereinbaren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Immobilienbewertung", "Wertschätzung", "Objektdaten", "Bewertungstermine", "Marktanalyse"]
  },
  {
    id: 22,
    name: "Vermietungs Agent",
    industry: "Immobilien",
    description: "Betreut Mietinteressenten, prüft Bonität und kann Mietverträge vorbereiten. Beantwortet Fragen zur Miete.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Vermietung", "Mietinteressenten", "Bonitätsprüfung", "Mietverträge", "Mietkonditionen"]
  },
  {
    id: 23,
    name: "Verkaufs Agent",
    industry: "Immobilien",
    description: "Betreut Verkaufsinteressenten, führt Preisverhandlungen und kann Kaufverträge koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Immobilienverkauf", "Kaufinteressenten", "Preisverhandlungen", "Kaufverträge", "Verkaufsabwicklung"]
  },
  {
    id: 24,
    name: "Hausverwaltung Agent",
    industry: "Immobilien",
    description: "Nimmt Anfragen zur Hausverwaltung entgegen, kann Reparaturen koordinieren und über Betriebskosten informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hausverwaltung", "Reparaturen", "Betriebskosten", "Instandhaltung", "Mieterverwaltung"]
  },
  {
    id: 25,
    name: "Gewerbeimmobilien Agent",
    industry: "Immobilien",
    description: "Spezialisiert auf Gewerbeimmobilien, berät zu Büroflächen und kann Gewerbemietverträge vorbereiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Gewerbeimmobilien", "Büroflächen", "Gewerbemiete", "Ladenlokale", "Industrieflächen"]
  },
  {
    id: 26,
    name: "Neubau Agent",
    industry: "Immobilien",
    description: "Informiert über Neubauprojekte, kann Reservierungen entgegennehmen und über Baufortschritt informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Neubau", "Baufortschritt", "Reservierungen", "Neubauprojekte", "Bauträger"]
  },
  {
    id: 27,
    name: "Investment Agent",
    industry: "Immobilien",
    description: "Berät zu Immobilieninvestments, kann Renditeberechnungen durchführen und über Kapitalanlagen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Immobilieninvestment", "Renditeberechnung", "Kapitalanlagen", "Investmentberatung", "ROI"]
  },
  {
    id: 28,
    name: "Notar-Koordination Agent",
    industry: "Immobilien",
    description: "Koordiniert Notartermine, bereitet Kaufverträge vor und kann über notarielle Abwicklung informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Notartermine", "Kaufverträge", "Notarielle Abwicklung", "Grundbuch", "Beurkundung"]
  },
  {
    id: 29,
    name: "Immobiliensteuer Agent",
    industry: "Immobilien",
    description: "Informiert über steuerliche Aspekte von Immobilien, kann über Abschreibungen beraten und steuerliche Fragen klären.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Immobiliensteuer", "Abschreibungen", "Steuerberatung", "Grundsteuer", "Steuertipps"]
  },
  {
    id: 30,
    name: "Maklerservice Agent",
    industry: "Immobilien",
    description: "Vermittelt zwischen Käufern und Verkäufern, kann Exposés erstellen und Marketingaktionen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Maklerservice", "Exposé-Erstellung", "Marketing", "Vermittlung", "Immobilienmarketing"]
  },
  {
    id: 31,
    name: "Medizinische Terminbuchung Agent",
    industry: "Gesundheitswesen",
    description: "Verwaltet Arzttermine, prüft Verfügbarkeiten und bucht Termine. Kann Termine verschieben, absagen und Erinnerungen versenden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Terminbuchung", "Arzttermine", "Verfügbarkeitsprüfung", "Terminverschiebung", "Erinnerungen"]
  },
  {
    id: 32,
    name: "Rezeptverwaltung Agent",
    industry: "Gesundheitswesen",
    description: "Verwaltet Rezeptanfragen, koordiniert Wiederholungsrezepte und informiert über Abhol- oder Lieferzeiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Rezeptanfragen", "Wiederholungsrezepte", "Medikamentenbestellung", "Abhol-Service", "Lieferzeiten"]
  },
  {
    id: 33,
    name: "Nachsorge & Check-up Agent",
    industry: "Gesundheitswesen",
    description: "Führt Nachsorge-Anrufe durch, erinnert an Kontrolltermine und beantwortet Fragen zur Behandlung. Kann bei Problemen weiterleiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Nachsorge-Anrufe", "Kontrolltermine", "Behandlungsfragen", "Gesundheitscheck", "Notfallweiterleitung"]
  },
  {
    id: 34,
    name: "Notfall-Triage Agent",
    industry: "Gesundheitswesen",
    description: "Führt erste Einschätzung von Notfällen durch, leitet dringende Fälle weiter und gibt Erste-Hilfe-Anweisungen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Notfall-Triage", "Dringlichkeitsbewertung", "Erste-Hilfe", "Notfallweiterleitung", "Symptomabfrage"]
  },
  {
    id: 35,
    name: "Impfberatung Agent",
    industry: "Gesundheitswesen",
    description: "Informiert über Impfungen, kann Impftermine vereinbaren und über Impfschutz beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Impfberatung", "Impftermine", "Impfschutz", "Reiseimpfungen", "Impfkalender"]
  },
  {
    id: 36,
    name: "Vorsorge Agent",
    industry: "Gesundheitswesen",
    description: "Erinnert an Vorsorgeuntersuchungen, kann Vorsorgetermine buchen und über Präventionsmaßnahmen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Vorsorge", "Prävention", "Vorsorgeuntersuchungen", "Gesundheitscheck", "Screening"]
  },
  {
    id: 37,
    name: "Labor Agent",
    industry: "Gesundheitswesen",
    description: "Informiert über Laborergebnisse, kann Labortermine vereinbaren und über Laborwerte aufklären.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Laborergebnisse", "Labortermine", "Laborwerte", "Blutbild", "Diagnostik"]
  },
  {
    id: 38,
    name: "Physiotherapie Agent",
    industry: "Gesundheitswesen",
    description: "Vereinbart Physiotherapie-Termine, informiert über Behandlungen und kann Übungen empfehlen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Physiotherapie", "Behandlungstermine", "Übungen", "Rehabilitation", "Therapieplan"]
  },
  {
    id: 39,
    name: "Psychologische Beratung Agent",
    industry: "Gesundheitswesen",
    description: "Vermittelt zu psychologischen Beratungen, kann Therapietermine vereinbaren und über mentale Gesundheit informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Psychologische Beratung", "Therapietermine", "Mentale Gesundheit", "Beratung", "Psychotherapie"]
  },
  {
    id: 40,
    name: "Zahnmedizin Agent",
    industry: "Gesundheitswesen",
    description: "Verwaltet Zahnarzttermine, informiert über Behandlungen und kann über Zahngesundheit beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Zahnarzttermine", "Zahnbehandlung", "Zahngesundheit", "Prophylaxe", "Zahnpflege"]
  },
  {
    id: 41,
    name: "Dermatologie Agent",
    industry: "Gesundheitswesen",
    description: "Vereinbart Hautarzttermine, informiert über Hautprobleme und kann Hautpflege-Tipps geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hautarzttermine", "Hautprobleme", "Dermatologie", "Hautpflege", "Hautkrankheiten"]
  },
  {
    id: 42,
    name: "Augenheilkunde Agent",
    industry: "Gesundheitswesen",
    description: "Vereinbart Augenarzttermine, informiert über Sehprobleme und kann über Augenpflege beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Augenarzttermine", "Sehprobleme", "Augenheilkunde", "Sehtests", "Brillenberatung"]
  },
  {
    id: 43,
    name: "Orthopädie Agent",
    industry: "Gesundheitswesen",
    description: "Verwaltet Orthopädie-Termine, informiert über Gelenkprobleme und kann Bewegungsempfehlungen geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Orthopädie-Termine", "Gelenkprobleme", "Bewegungsapparat", "Rückenschmerzen", "Sportverletzungen"]
  },
  {
    id: 44,
    name: "Telemedizin Agent",
    industry: "Gesundheitswesen",
    description: "Koordiniert Online-Sprechstunden, unterstützt bei Video-Terminen und kann technische Hilfe leisten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Telemedizin", "Online-Sprechstunden", "Video-Termine", "Digitale Gesundheit", "Remote-Beratung"]
  },
  {
    id: 45,
    name: "Patientenservice Agent",
    industry: "Gesundheitswesen",
    description: "Allgemeiner Patientenservice, beantwortet Fragen zu Behandlungen und kann bei administrativen Aufgaben helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Patientenservice", "Patientenbetreuung", "Behandlungsfragen", "Verwaltung", "Patientenrechte"]
  },
  {
    id: 46,
    name: "Kontoverwaltung Agent",
    industry: "Finanzdienstleistungen",
    description: "Beantwortet Fragen zu Kontostatus, Überweisungen und Kartensperrungen. Kann einfache Transaktionen durchführen und Kontoauszüge versenden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kontostatus", "Überweisungen", "Kartensperren", "Kontoauszüge", "Transaktionen"]
  },
  {
    id: 47,
    name: "Kreditberatung Agent",
    industry: "Finanzdienstleistungen",
    description: "Berät zu Kreditangeboten, führt Vorabprüfungen durch und kann Kreditanträge entgegennehmen. Informiert über Konditionen und Laufzeiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kreditberatung", "Kreditanträge", "Konditionsabfrage", "Bonitätsprüfung", "Laufzeiten"]
  },
  {
    id: 48,
    name: "Versicherungsschäden Agent",
    industry: "Finanzdienstleistungen",
    description: "Nimmt Schadensmeldungen entgegen, erfasst relevante Daten und leitet Schäden an die richtige Abteilung weiter.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Schadensmeldung", "Schadensaufnahme", "Versicherungsschäden", "Datenerfassung", "Weiterleitung"]
  },
  {
    id: 49,
    name: "Investment-Beratung Agent",
    industry: "Finanzdienstleistungen",
    description: "Informiert über Anlageprodukte, kann Risikoprofil erstellen und Beratungstermine vereinbaren. Gibt Marktüberblick und Produktinfos.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Anlageberatung", "Risikoprofil", "Marktüberblick", "Produktinfos", "Beratungstermine"]
  },
  {
    id: 50,
    name: "Hypotheken Agent",
    industry: "Finanzdienstleistungen",
    description: "Berät zu Hypothekendarlehen, kann Zinskonditionen prüfen und Finanzierungsangebote erstellen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hypotheken", "Immobilienfinanzierung", "Zinskonditionen", "Darlehen", "Finanzierungsangebote"]
  },
  {
    id: 51,
    name: "Versicherungsberatung Agent",
    industry: "Finanzdienstleistungen",
    description: "Berät zu verschiedenen Versicherungsprodukten, kann Policen vergleichen und Versicherungsanträge aufnehmen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Versicherungsberatung", "Policen", "Versicherungsvergleich", "Anträge", "Versicherungsschutz"]
  },
  {
    id: 52,
    name: "Altersvorsorge Agent",
    industry: "Finanzdienstleistungen",
    description: "Informiert über Altersvorsorge-Optionen, kann Rentenberechnungen durchführen und Vorsorgeprodukte empfehlen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Altersvorsorge", "Rentenberatung", "Vorsorgeprodukte", "Rentenberechnung", "Pensionsplanung"]
  },
  {
    id: 53,
    name: "Online-Banking Support Agent",
    industry: "Finanzdienstleistungen",
    description: "Unterstützt bei Online-Banking-Problemen, kann bei Login-Schwierigkeiten helfen und über digitale Services informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Online-Banking", "Login-Hilfe", "Digitale Services", "App-Support", "Sicherheit"]
  },
  {
    id: 54,
    name: "Steuerberatung Agent",
    industry: "Finanzdienstleistungen",
    description: "Berät zu steuerlichen Fragen, kann Steuertipps geben und über Steuererklärungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Steuerberatung", "Steuertipps", "Steuererklärung", "Steuerplanung", "Steueroptimierung"]
  },
  {
    id: 55,
    name: "Betrugsschutz Agent",
    industry: "Finanzdienstleistungen",
    description: "Informiert über Betrugsschutz, kann verdächtige Transaktionen melden und Sicherheitsmaßnahmen erklären.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Betrugsschutz", "Sicherheit", "Verdächtige Transaktionen", "Fraud-Prevention", "Schutzmaßnahmen"]
  },
  {
    id: 56,
    name: "Karten-Service Agent",
    industry: "Finanzdienstleistungen",
    description: "Verwaltet Kreditkarten und Debitkarten, kann Kartenlimits ändern und bei Kartenproblemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kreditkarten", "Debitkarten", "Kartenlimits", "Kartenprobleme", "Kartenverwaltung"]
  },
  {
    id: 57,
    name: "Auslandsgeschäft Agent",
    industry: "Finanzdienstleistungen",
    description: "Unterstützt bei internationalen Überweisungen, Währungsumrechnungen und Auslandskonten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Auslandsgeschäft", "Internationale Überweisungen", "Währungsumrechnung", "Auslandskonten", "Devisen"]
  },
  {
    id: 58,
    name: "Spar-Beratung Agent",
    industry: "Finanzdienstleistungen",
    description: "Berät zu Sparprodukten, kann Sparpläne erstellen und über Zinsen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Sparberatung", "Sparpläne", "Sparprodukte", "Zinsen", "Geldanlage"]
  },
  {
    id: 59,
    name: "Geschäftskunden Agent",
    industry: "Finanzdienstleistungen",
    description: "Betreut Firmenkunden, kann Geschäftskonten verwalten und über Unternehmensfinanzierung beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Geschäftskunden", "Firmenkonten", "Unternehmensfinanzierung", "Business-Banking", "Firmenservice"]
  },
  {
    id: 60,
    name: "Junge Kunden Agent",
    industry: "Finanzdienstleistungen",
    description: "Speziell für junge Kunden, berät zu Jugendkonten, Studienkrediten und ersten Finanzprodukten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Junge Kunden", "Jugendkonten", "Studienkredite", "Erste Finanzprodukte", "Finanzbildung"]
  },
  {
    id: 61,
    name: "Senioren-Service Agent",
    industry: "Finanzdienstleistungen",
    description: "Spezieller Service für Senioren, hilft bei einfachen Banking-Fragen und erklärt Services verständlich.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Senioren-Service", "Einfache Erklärungen", "Banking für Senioren", "Verständliche Hilfe", "Geduld"]
  },
  {
    id: 62,
    name: "Budgetplanung Agent",
    industry: "Finanzdienstleistungen",
    description: "Hilft bei der Budgetplanung, kann Ausgaben analysieren und Spartipps geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Budgetplanung", "Ausgabenanalyse", "Spartipps", "Finanzplanung", "Haushaltsbuch"]
  },
  {
    id: 63,
    name: "Finanz-Notfall Agent",
    industry: "Finanzdienstleistungen",
    description: "Hilft bei finanziellen Notfällen, kann Notfallkredite vermitteln und bei Liquiditätsproblemen beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Finanznotfall", "Notfallkredite", "Liquiditätshilfe", "Finanzielle Schwierigkeiten", "Soforthilfe"]
  },
  {
    id: 64,
    name: "Störungsmeldung Agent",
    industry: "Telekommunikation",
    description: "Nimmt Störungsmeldungen entgegen, führt erste Diagnoseschritte durch und kann Techniker-Termine vereinbaren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Störungsmeldung", "Ferndiagnose", "Technikereinsatz", "Terminvereinbarung", "Entstörung"]
  },
  {
    id: 65,
    name: "Rechnungsauskunft Agent",
    industry: "Telekommunikation",
    description: "Beantwortet Fragen zu Rechnungen, erklärt Positionen und kann Zahlungsvereinbarungen treffen. Versendet Rechnungskopien.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Rechnungsauskunft", "Rechnungserklärung", "Zahlungsvereinbarung", "Rechnungskopien", "Kostenkontrolle"]
  },
  {
    id: 66,
    name: "Tarif-Upgrade Agent",
    industry: "Telekommunikation",
    description: "Berät zu Tarifoptionen, kann Upgrades durchführen und Sonderkonditionen anbieten. Informiert über neue Angebote.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Tarifberatung", "Tarifwechsel", "Upgrades", "Sonderkonditionen", "Angebote"]
  },
  {
    id: 67,
    name: "Neuanschluss Agent",
    industry: "Telekommunikation",
    description: "Berät zu Neuanschlüssen, prüft Verfügbarkeit an der Adresse und kann Verträge abschließen. Koordiniert Installationstermine.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Neuanschluss", "Verfügbarkeitsprüfung", "Vertragsabschluss", "Installation", "Terminkoordination"]
  },
  {
    id: 68,
    name: "Internet-Support Agent",
    industry: "Telekommunikation",
    description: "Hilft bei Internet-Problemen, kann WLAN-Einstellungen erklären und bei Geschwindigkeitsproblemen beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Internet-Support", "WLAN-Hilfe", "Geschwindigkeitsprobleme", "Router-Konfiguration", "Verbindungsprobleme"]
  },
  {
    id: 69,
    name: "Mobilfunk Agent",
    industry: "Telekommunikation",
    description: "Betreut Mobilfunk-Kunden, kann Tarife wechseln und bei Handy-Problemen helfen. Informiert über Roaming.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Mobilfunk", "Handy-Tarife", "Roaming", "Mobilfunk-Probleme", "Smartphone-Hilfe"]
  },
  {
    id: 70,
    name: "TV & Streaming Agent",
    industry: "Telekommunikation",
    description: "Unterstützt bei TV- und Streaming-Problemen, kann Sender-Pakete erklären und bei Empfangsproblemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["TV-Support", "Streaming", "Sender-Pakete", "Empfangsprobleme", "Set-Top-Box"]
  },
  {
    id: 71,
    name: "Festnetz Agent",
    industry: "Telekommunikation",
    description: "Betreut Festnetz-Kunden, kann Rufnummern portieren und bei Telefonie-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Festnetz", "Rufnummernportierung", "Telefonie-Probleme", "Anschluss-Probleme", "Telefonservice"]
  },
  {
    id: 72,
    name: "Business-Kunden Agent",
    industry: "Telekommunikation",
    description: "Spezieller Service für Geschäftskunden, berät zu Business-Tarifen und kann Firmenlösungen anbieten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Business-Kunden", "Geschäftstarife", "Firmenlösungen", "Unternehmenstelefonie", "B2B-Service"]
  },
  {
    id: 73,
    name: "Kündigungs-Service Agent",
    industry: "Telekommunikation",
    description: "Bearbeitet Kündigungen, kann Rückgewinnungsangebote machen und über Kündigungsfristen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kündigungsservice", "Rückgewinnung", "Kündigungsfristen", "Vertragskündigung", "Retention"]
  },
  {
    id: 74,
    name: "Umzugs-Service Agent",
    industry: "Telekommunikation",
    description: "Unterstützt bei Umzügen, kann Anschluss-Mitnahme koordinieren und neue Installationen planen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Umzugsservice", "Anschluss-Mitnahme", "Umzugskoordination", "Neue Installation", "Adressänderung"]
  },
  {
    id: 75,
    name: "IT-Sicherheit Agent",
    industry: "Telekommunikation",
    description: "Berät zu IT-Sicherheit, kann Sicherheitspakete erklären und bei Spam-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["IT-Sicherheit", "Sicherheitspakete", "Spam-Schutz", "Virenschutz", "Cyber-Security"]
  },
  {
    id: 76,
    name: "Hardware-Support Agent",
    industry: "Telekommunikation",
    description: "Hilft bei Hardware-Problemen, kann Geräte-Austausch koordinieren und technischen Support leisten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hardware-Support", "Geräte-Austausch", "Technischer Support", "Router-Probleme", "Defekte Geräte"]
  },
  {
    id: 77,
    name: "Vertragsberatung Agent",
    industry: "Telekommunikation",
    description: "Berät zu Vertragsdetails, kann Vertragsverlängerungen anbieten und über Vertragsbedingungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Vertragsberatung", "Vertragsverlängerung", "Vertragsbedingungen", "Laufzeiten", "Konditionen"]
  },
  {
    id: 78,
    name: "Cloud-Service Agent",
    industry: "Telekommunikation",
    description: "Informiert über Cloud-Services, kann Cloud-Speicher verwalten und bei Cloud-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Cloud-Services", "Cloud-Speicher", "Online-Backup", "Cloud-Probleme", "Daten-Synchronisation"]
  },
  {
    id: 79,
    name: "App-Support Agent",
    industry: "Telekommunikation",
    description: "Hilft bei App-Problemen, kann App-Features erklären und bei Login-Schwierigkeiten unterstützen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["App-Support", "App-Features", "Login-Hilfe", "Mobile App", "App-Probleme"]
  },
  {
    id: 80,
    name: "Bewerbungsscreening Agent",
    industry: "Personalwesen",
    description: "Führt erste Bewerbungsgespräche durch, prüft Qualifikationen und kann geeignete Kandidaten für Interviews vorschlagen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Bewerbungsscreening", "Qualifikationsprüfung", "Erstgespräch", "Kandidatenauswahl", "Vorqualifikation"]
  },
  {
    id: 81,
    name: "Interview-Planung Agent",
    industry: "Personalwesen",
    description: "Koordiniert Vorstellungsgespräche, prüft Terminverfügbarkeiten und sendet Einladungen. Kann Termine umplanen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Interview-Planung", "Terminkoordination", "Einladungen", "Terminverfügbarkeit", "Umplanung"]
  },
  {
    id: 82,
    name: "Onboarding Agent",
    industry: "Personalwesen",
    description: "Führt neue Mitarbeiter durch den Onboarding-Prozess, beantwortet Fragen und koordiniert Einarbeitung.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Onboarding", "Einarbeitung", "Mitarbeiterbetreuung", "Ersttagsbegleitung", "Prozessführung"]
  },
  {
    id: 83,
    name: "Mitarbeiterservice Agent",
    industry: "Personalwesen",
    description: "Beantwortet Fragen zu Arbeitszeiten, Urlaub und Benefits. Kann Anträge entgegennehmen und an HR weiterleiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Mitarbeiterservice", "Urlaubsanträge", "Benefits", "Arbeitszeiten", "HR-Anfragen"]
  },
  {
    id: 84,
    name: "Gehaltsabrechnung Agent",
    industry: "Personalwesen",
    description: "Beantwortet Fragen zur Gehaltsabrechnung, erklärt Abzüge und kann bei Gehaltsabrechnungs-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Gehaltsabrechnung", "Lohnabrechnung", "Abzüge", "Gehaltsfragen", "Lohnsteuer"]
  },
  {
    id: 85,
    name: "Weiterbildung Agent",
    industry: "Personalwesen",
    description: "Informiert über Weiterbildungsmöglichkeiten, kann Kurse empfehlen und Weiterbildungsanträge bearbeiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Weiterbildung", "Kurse", "Schulungen", "Fortbildung", "Personalentwicklung"]
  },
  {
    id: 86,
    name: "Arbeitszeit Agent",
    industry: "Personalwesen",
    description: "Verwaltet Arbeitszeiten, kann Überstunden erfassen und bei Zeiterfassungs-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Arbeitszeiten", "Zeiterfassung", "Überstunden", "Schichtplanung", "Arbeitszeit-Verwaltung"]
  },
  {
    id: 87,
    name: "Kündigungs-Bearbeitung Agent",
    industry: "Personalwesen",
    description: "Bearbeitet Kündigungen, führt Exit-Interviews und kann Rückgewinnungsversuche unternehmen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kündigungen", "Exit-Interviews", "Rückgewinnung", "Kündigung-Bearbeitung", "Mitarbeiter-Retention"]
  },
  {
    id: 88,
    name: "Benefits Agent",
    industry: "Personalwesen",
    description: "Informiert über Mitarbeitervorteile, kann bei Benefit-Anträgen helfen und über Zusatzleistungen beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Mitarbeitervorteile", "Benefits", "Zusatzleistungen", "Benefit-Anträge", "Sozialleistungen"]
  },
  {
    id: 89,
    name: "Krankmeldung Agent",
    industry: "Personalwesen",
    description: "Nimmt Krankmeldungen entgegen, kann Krankenscheine verwalten und bei Rückkehr-Fragen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Krankmeldungen", "Krankenscheine", "Krankheitsverwaltung", "Rückkehr-Gespräche", "Gesundheitsmanagement"]
  },
  {
    id: 90,
    name: "Compliance Agent",
    industry: "Personalwesen",
    description: "Informiert über Compliance-Richtlinien, kann Schulungen koordinieren und bei Compliance-Fragen beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Compliance", "Richtlinien", "Schulungen", "Compliance-Fragen", "Rechtskonformität"]
  },
  {
    id: 91,
    name: "Performance Agent",
    industry: "Personalwesen",
    description: "Koordiniert Performance-Reviews, kann Feedback-Gespräche planen und bei Leistungsbeurteilungen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Performance-Reviews", "Feedback-Gespräche", "Leistungsbeurteilung", "Mitarbeiterbewertung", "Zielerreichung"]
  },
  {
    id: 92,
    name: "Reisebuchung Agent",
    industry: "Reise & Tourismus",
    description: "Nimmt Reisebuchungen entgegen, prüft Verfügbarkeiten und kann Angebote erstellen. Beantwortet Fragen zu Reisezielen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reisebuchung", "Verfügbarkeitsprüfung", "Angebotserstellung", "Reiseziele", "Buchungsbestätigung"]
  },
  {
    id: 93,
    name: "Check-in Support Agent",
    industry: "Reise & Tourismus",
    description: "Unterstützt beim Online Check-in, beantwortet Fragen zu Gepäck und kann Sitzplätze reservieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Online Check-in", "Gepäckservice", "Sitzplatzreservierung", "Flugstatus", "Reiseunterlagen"]
  },
  {
    id: 94,
    name: "Stornierung & Umbuchung Agent",
    industry: "Reise & Tourismus",
    description: "Wickelt Stornierungen ab, führt Umbuchungen durch und informiert über Stornobedingungen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Stornierung", "Umbuchung", "Stornobedingungen", "Erstattungen", "Reiseversicherung"]
  },
  {
    id: 95,
    name: "Flug Agent",
    industry: "Reise & Tourismus",
    description: "Spezialisiert auf Flugbuchungen, kann Flugzeiten ändern und über Flugstatus informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Flugbuchungen", "Flugstatus", "Flugzeiten", "Airline-Service", "Flugänderungen"]
  },
  {
    id: 96,
    name: "Hotel Agent",
    industry: "Reise & Tourismus",
    description: "Verwaltet Hotelbuchungen, kann Zimmer-Upgrades anbieten und über Hotelausstattung informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hotelbuchungen", "Zimmer-Upgrades", "Hotelausstattung", "Hotelservice", "Unterkunft"]
  },
  {
    id: 97,
    name: "Mietwagen Agent",
    industry: "Reise & Tourismus",
    description: "Vermittelt Mietwagen, kann Fahrzeugklassen erklären und bei Mietwagen-Problemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Mietwagen", "Fahrzeugklassen", "Autovermietung", "Mietwagen-Service", "Fahrzeugbuchung"]
  },
  {
    id: 98,
    name: "Pauschalreise Agent",
    industry: "Reise & Tourismus",
    description: "Bietet Pauschalreisen an, kann All-Inclusive-Pakete erklären und Gruppenreisen organisieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Pauschalreisen", "All-Inclusive", "Gruppenreisen", "Reisepakete", "Komplettangebote"]
  },
  {
    id: 99,
    name: "Kreuzfahrt Agent",
    industry: "Reise & Tourismus",
    description: "Spezialisiert auf Kreuzfahrten, kann Kabinen buchen und über Kreuzfahrt-Pakete informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kreuzfahrten", "Kabinen-Buchung", "Kreuzfahrt-Pakete", "Schiffsreisen", "Kreuzfahrt-Service"]
  },
  {
    id: 100,
    name: "Visa & Reisedokumente Agent",
    industry: "Reise & Tourismus",
    description: "Informiert über Visa-Anforderungen, kann bei Reisedokumenten helfen und über Einreisebestimmungen beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Visa-Service", "Reisedokumente", "Einreisebestimmungen", "Visa-Anforderungen", "Reisepass"]
  },
  {
    id: 101,
    name: "Reiseversicherung Agent",
    industry: "Reise & Tourismus",
    description: "Berät zu Reiseversicherungen, kann Versicherungsschutz erklären und bei Schadensfällen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reiseversicherung", "Versicherungsschutz", "Schadensfälle", "Reiseschutz", "Versicherungsberatung"]
  },
  {
    id: 102,
    name: "Geschäftsreise Agent",
    industry: "Reise & Tourismus",
    description: "Spezialisiert auf Geschäftsreisen, kann Firmenreisen organisieren und über Business-Tarife informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Geschäftsreisen", "Firmenreisen", "Business-Tarife", "Corporate Travel", "Geschäftsreise-Service"]
  },
  {
    id: 103,
    name: "Last-Minute Agent",
    industry: "Reise & Tourismus",
    description: "Bietet Last-Minute-Reisen an, kann spontane Buchungen abwickeln und über kurzfristige Angebote informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Last-Minute-Reisen", "Spontane Buchungen", "Kurzfristige Angebote", "Schnellbuchung", "Sofortreisen"]
  },
  {
    id: 104,
    name: "Reise-Notfall Agent",
    industry: "Reise & Tourismus",
    description: "Hilft bei Reise-Notfällen, kann Notfallkontakte vermitteln und bei Reiseproblemen unterstützen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reise-Notfall", "Notfallkontakte", "Reiseprobleme", "Notfallhilfe", "Reise-Assistance"]
  },
  {
    id: 105,
    name: "First-Level Support Agent",
    industry: "B2B",
    description: "Beantwortet grundlegende Produktfragen, kann einfache Probleme lösen und komplexe Fälle weiterleiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["First-Level Support", "Produktfragen", "Problemlösung", "Ticketing", "Weiterleitung"]
  },
  {
    id: 106,
    name: "Lead-Qualifizierung Agent",
    industry: "B2B",
    description: "Qualifiziert eingehende Anfragen, sammelt Kontaktdaten und kann warme Leads an den Vertrieb weiterleiten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lead-Qualifizierung", "Kontaktdaten", "Interessentenbetreuung", "Vertriebsweiterleitung", "Scoring"]
  },
  {
    id: 107,
    name: "Demo-Buchung Agent",
    industry: "B2B",
    description: "Vereinbart Produktdemos, prüft Qualifikation und kann Termine koordinieren. Bereitet Demo-Teilnehmer vor.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Demo-Buchung", "Terminvereinbarung", "Produktdemos", "Qualifikation", "Vorbereitung"]
  },
  {
    id: 108,
    name: "Kundenfeedback Agent",
    industry: "B2B",
    description: "Sammelt Kundenfeedback, führt Zufriedenheitsumfragen durch und kann Verbesserungsvorschläge entgegennehmen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kundenfeedback", "Zufriedenheitsumfragen", "Verbesserungsvorschläge", "Bewertungen", "Testimonials"]
  },
  {
    id: 109,
    name: "Kunden-Onboarding Agent",
    industry: "B2B",
    description: "Führt neue Kunden durch das Onboarding, erklärt Produktfeatures und kann bei der Einrichtung helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kunden-Onboarding", "Produktfeatures", "Einrichtung", "Erste Schritte", "Tutorial"]
  },
  {
    id: 110,
    name: "Preisberatung Agent",
    industry: "B2B",
    description: "Berät zu Preismodellen, kann Angebote erstellen und über Rabatte informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Preisberatung", "Preismodelle", "Angebote", "Rabatte", "Kostenvoranschläge"]
  },
  {
    id: 111,
    name: "Integration Agent",
    industry: "B2B",
    description: "Hilft bei API-Integrationen, kann technische Dokumentation erklären und bei Integrationsfehlern helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["API-Integration", "Technische Dokumentation", "Integrationsfehler", "Developer Support", "API-Hilfe"]
  },
  {
    id: 112,
    name: "Billing Agent",
    industry: "B2B",
    description: "Beantwortet Rechnungsfragen, kann Zahlungsmethoden verwalten und bei Abrechnungsproblemen helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Rechnungsfragen", "Zahlungsmethoden", "Abrechnungsprobleme", "Billing-Support", "Zahlungsabwicklung"]
  },
  {
    id: 113,
    name: "Churn-Prevention Agent",
    industry: "B2B",
    description: "Identifiziert Kündigungsrisiken, kann Retention-Angebote machen und bei Kündigungen vermitteln.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Churn-Prevention", "Kündigungsrisiken", "Retention-Angebote", "Kundenbindung", "Win-Back"]
  },
  {
    id: 114,
    name: "Partnership Agent",
    industry: "B2B",
    description: "Informiert über Partnerschaftsmöglichkeiten, kann Kooperationen initiieren und über Partnerprogramme beraten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Partnerschaften", "Kooperationen", "Partnerprogramme", "Business Development", "Allianzen"]
  },
  {
    id: 115,
    name: "Verfügbarkeitsabfrage Agent",
    industry: "Einzelhandel",
    description: "Prüft Produktverfügbarkeit in Filialen, kann Artikel reservieren und über Lieferzeiten informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Verfügbarkeitsabfrage", "Filialbestand", "Produktreservierung", "Lieferzeiten", "Bestandsprüfung"]
  },
  {
    id: 116,
    name: "Filialinfos Agent",
    industry: "Einzelhandel",
    description: "Informiert über Öffnungszeiten, Standorte und Services. Kann Wegbeschreibungen geben und Kontaktdaten bereitstellen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Öffnungszeiten", "Standortinfos", "Wegbeschreibung", "Filialservices", "Kontaktdaten"]
  },
  {
    id: 117,
    name: "Click & Collect Agent",
    industry: "Einzelhandel",
    description: "Wickelt Click & Collect Bestellungen ab, informiert über Abholbereitschaft und kann Abholtermine koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Click & Collect", "Abholbereitschaft", "Abholtermine", "Bestellstatus", "Filialabholung"]
  },
  {
    id: 118,
    name: "Aktionen & Events Agent",
    industry: "Einzelhandel",
    description: "Informiert über laufende Aktionen, Events und Sonderverkäufe. Kann Einladungen zu Veranstaltungen versenden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Aktionen", "Events", "Sonderverkäufe", "Veranstaltungen", "Einladungen"]
  },
  {
    id: 119,
    name: "Kundenkarte Agent",
    industry: "Einzelhandel",
    description: "Verwaltet Kundenkarten, kann Punkte abfragen und über Kundenkarten-Vorteile informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kundenkarte", "Punkte-System", "Kundenkarten-Vorteile", "Treueprogramm", "Rabatte"]
  },
  {
    id: 120,
    name: "Reklamation Agent",
    industry: "Einzelhandel",
    description: "Nimmt Reklamationen entgegen, kann Umtausch koordinieren und über Gewährleistung informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reklamationen", "Umtausch", "Gewährleistung", "Reklamationsbearbeitung", "Kundenservice"]
  },
  {
    id: 121,
    name: "Produktberatung Agent",
    industry: "Einzelhandel",
    description: "Berät zu Produkten, kann Produktvergleiche durchführen und Empfehlungen geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Produktberatung", "Produktvergleiche", "Empfehlungen", "Produktinfos", "Beratung"]
  },
  {
    id: 122,
    name: "Lieferservice Agent",
    industry: "Einzelhandel",
    description: "Koordiniert Lieferungen, kann Liefertermine abstimmen und über Lieferoptionen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lieferservice", "Liefertermine", "Lieferoptionen", "Zustellung", "Lieferkoordination"]
  },
  {
    id: 123,
    name: "Geschenkservice Agent",
    industry: "Einzelhandel",
    description: "Hilft bei Geschenkauswahl, kann Geschenkverpackung organisieren und Geschenkgutscheine verwalten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Geschenkservice", "Geschenkverpackung", "Geschenkgutscheine", "Geschenkauswahl", "Geschenktipps"]
  },
  {
    id: 124,
    name: "Reparaturservice Agent",
    industry: "Einzelhandel",
    description: "Koordiniert Reparaturen, kann Reparaturtermine vereinbaren und über Reparaturkosten informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reparaturservice", "Reparaturtermine", "Reparaturkosten", "Werkstatt", "Reparatur-Koordination"]
  },
  {
    id: 125,
    name: "Montageservice Agent",
    industry: "Einzelhandel",
    description: "Organisiert Montagen, kann Montagetermine vereinbaren und über Montagekosten informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Montageservice", "Montagetermine", "Montagekosten", "Installation", "Aufbau-Service"]
  },
  {
    id: 126,
    name: "Saisonale Beratung Agent",
    industry: "Einzelhandel",
    description: "Berät zu saisonalen Produkten, informiert über Saisonschlussverkäufe und kann saisonale Empfehlungen geben.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Saisonale Produkte", "Saisonschlussverkauf", "Saisonale Empfehlungen", "Trends", "Saisonberatung"]
  },
  {
    id: 127,
    name: "B2B Bestellmanagement Agent",
    industry: "Großhandel",
    description: "Nimmt Großbestellungen entgegen, prüft Verfügbarkeiten und kann Angebote erstellen. Koordiniert Liefertermine.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["B2B Bestellungen", "Großbestellungen", "Angebotserstellung", "Liefertermine", "Verfügbarkeitsprüfung"]
  },
  {
    id: 128,
    name: "Preisanfrage Agent",
    industry: "Großhandel",
    description: "Beantwortet Preisanfragen, informiert über Staffelpreise und kann Sonderkonditionen anbieten.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Preisanfragen", "Staffelpreise", "Sonderkonditionen", "Mengenrabatte", "Konditionsverhandlung"]
  },
  {
    id: 129,
    name: "Rechnungsservice Agent",
    industry: "Großhandel",
    description: "Beantwortet Rechnungsfragen, kann Zahlungserinnerungen versenden und Zahlungsvereinbarungen treffen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Rechnungsfragen", "Zahlungserinnerungen", "Zahlungsvereinbarungen", "Mahnwesen", "Buchhaltung"]
  },
  {
    id: 130,
    name: "Lieferkoordination Agent",
    industry: "Großhandel",
    description: "Koordiniert Lieferungen, informiert über Lieferstatus und kann Liefertermine abstimmen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lieferkoordination", "Lieferstatus", "Liefertermine", "Speditionsabstimmung", "Logistik"]
  },
  {
    id: 131,
    name: "Neukunden Agent",
    industry: "Großhandel",
    description: "Betreut neue Geschäftskunden, kann Kontoerstellung koordinieren und über Konditionen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Neukunden", "Kontoerstellung", "Geschäftskunden", "B2B-Konditionen", "Kundenbetreuung"]
  },
  {
    id: 132,
    name: "Lagerbestand Agent",
    industry: "Großhandel",
    description: "Informiert über Lagerbestände, kann Reservierungen durchführen und über Nachlieferungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lagerbestand", "Reservierungen", "Nachlieferungen", "Bestandsauskunft", "Lagerverwaltung"]
  },
  {
    id: 133,
    name: "Produktkatalog Agent",
    industry: "Großhandel",
    description: "Informiert über Produktkataloge, kann Kataloge versenden und über neue Produkte informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Produktkatalog", "Katalog-Versand", "Neue Produkte", "Produktinformationen", "Sortiment"]
  },
  {
    id: 134,
    name: "Messe & Events Agent",
    industry: "Großhandel",
    description: "Informiert über Messeteilnahmen, kann Messetermine koordinieren und über Branchenevents informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Messen", "Branchenevents", "Messetermine", "Veranstaltungen", "Networking"]
  },
  {
    id: 135,
    name: "Fachberatung Agent",
    industry: "Großhandel",
    description: "Bietet fachliche Beratung zu Produkten, kann technische Fragen beantworten und Lösungen empfehlen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Fachberatung", "Technische Fragen", "Produktlösungen", "Expertenwissen", "Beratung"]
  },
  {
    id: 136,
    name: "After-Sales Service Agent",
    industry: "Großhandel",
    description: "Betreut Kunden nach dem Kauf, kann bei Problemen helfen und Serviceleistungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["After-Sales", "Kundenbetreuung", "Serviceleistungen", "Problemlösung", "Support"]
  },
  {
    id: 137,
    name: "Retouren Agent",
    industry: "Großhandel",
    description: "Wickelt Retouren ab, kann Rücknahmen koordinieren und über Rückgabebedingungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Retouren", "Rücknahmen", "Rückgabebedingungen", "Reklamationen", "Retourenabwicklung"]
  },
  {
    id: 138,
    name: "Export Agent",
    industry: "Großhandel",
    description: "Unterstützt bei Exportgeschäften, kann über Zollbestimmungen informieren und internationale Lieferungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Export", "Zollbestimmungen", "Internationale Lieferungen", "Exportabwicklung", "Auslandsgeschäft"]
  },
  {
    id: 139,
    name: "Beauty-Terminbuchung Agent",
    industry: "Beauty & Wellness",
    description: "Verwaltet Termine für Beauty-Behandlungen, kann Verfügbarkeiten prüfen und Buchungen bestätigen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Beauty-Termine", "Behandlungsbuchung", "Verfügbarkeitsprüfung", "Terminbestätigung", "Kosmetik"]
  },
  {
    id: 140,
    name: "Behandlungsberatung Agent",
    industry: "Beauty & Wellness",
    description: "Berät zu Beauty-Behandlungen, kann Preise nennen und Behandlungspläne erstellen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Behandlungsberatung", "Beauty-Beratung", "Preisauskunft", "Behandlungspläne", "Kosmetikberatung"]
  },
  {
    id: 141,
    name: "Produktberatung Agent",
    industry: "Beauty & Wellness",
    description: "Berät zu Beauty-Produkten, kann Empfehlungen geben und Produktbestellungen entgegennehmen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Produktberatung", "Beauty-Produkte", "Empfehlungen", "Produktbestellungen", "Hautanalyse"]
  },
  {
    id: 142,
    name: "Spa & Wellness Agent",
    industry: "Beauty & Wellness",
    description: "Verwaltet Spa-Termine, informiert über Wellness-Angebote und kann Pakete zusammenstellen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Spa-Termine", "Wellness-Angebote", "Entspannungsbehandlungen", "Paketangebote", "Wellness"]
  },
  {
    id: 143,
    name: "Friseur Agent",
    industry: "Beauty & Wellness",
    description: "Verwaltet Friseurtermine, kann Haarberatung geben und über Friseur-Services informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Friseurtermine", "Haarberatung", "Friseur-Services", "Haarschnitt", "Styling"]
  },
  {
    id: 144,
    name: "Nagelstudio Agent",
    industry: "Beauty & Wellness",
    description: "Verwaltet Nagelstudio-Termine, berät zu Nageldesign und kann über Nagelbehandlungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Nagelstudio", "Nageldesign", "Nagelbehandlungen", "Maniküre", "Pediküre"]
  },
  {
    id: 145,
    name: "Massage Agent",
    industry: "Beauty & Wellness",
    description: "Vereinbart Massagetermine, informiert über Massagearten und kann Wellness-Pakete empfehlen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Massagetermine", "Massagearten", "Wellness-Pakete", "Entspannung", "Therapeutische Massage"]
  },
  {
    id: 146,
    name: "Fitness Agent",
    industry: "Beauty & Wellness",
    description: "Informiert über Fitness-Angebote, kann Mitgliedschaften verwalten und Kurse buchen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Fitness-Angebote", "Mitgliedschaften", "Kursbuchung", "Training", "Fitnessstudio"]
  },
  {
    id: 147,
    name: "Ernährungsberatung Agent",
    industry: "Beauty & Wellness",
    description: "Berät zu Ernährung und Wellness, kann Ernährungspläne empfehlen und über gesunde Lebensweise informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Ernährungsberatung", "Ernährungspläne", "Gesunde Lebensweise", "Wellness-Ernährung", "Diätberatung"]
  },
  {
    id: 148,
    name: "Hautpflege Agent",
    industry: "Beauty & Wellness",
    description: "Berät zu Hautpflege, kann Hautanalysen durchführen und passende Behandlungen empfehlen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Hautpflege", "Hautanalyse", "Hautbehandlungen", "Kosmetik", "Hautpflege-Routine"]
  },
  {
    id: 149,
    name: "Permanent Make-up Agent",
    industry: "Beauty & Wellness",
    description: "Informiert über Permanent Make-up, kann Beratungstermine vereinbaren und über Nachbehandlung informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Permanent Make-up", "Beratungstermine", "Nachbehandlung", "Augenbrauen", "Lippen"]
  },
  {
    id: 150,
    name: "Wellness-Pakete Agent",
    industry: "Beauty & Wellness",
    description: "Stellt Wellness-Pakete zusammen, kann Kombi-Angebote erstellen und über Wellness-Programme informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Wellness-Pakete", "Kombi-Angebote", "Wellness-Programme", "Paketangebote", "Wellness-Tage"]
  },
  {
    id: 151,
    name: "Sendungsverfolgung Agent",
    industry: "Logistik & Transport",
    description: "Informiert über Sendungsstatus, kann Tracking-Informationen abrufen und Zustellprobleme melden.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Sendungsverfolgung", "Tracking-Info", "Zustellstatus", "Lieferstatus", "Paketverfolgung"]
  },
  {
    id: 152,
    name: "Liefertermin Agent",
    industry: "Logistik & Transport",
    description: "Koordiniert Liefertermine, kann Terminwünsche entgegennehmen und Zustellungen umplanen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Liefertermine", "Terminkoordination", "Zustellwünsche", "Terminumplanung", "Lieferfenster"]
  },
  {
    id: 153,
    name: "Transportbuchung Agent",
    industry: "Logistik & Transport",
    description: "Nimmt Transportbuchungen entgegen, kann Angebote erstellen und Versandkosten berechnen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Transportbuchung", "Versandangebote", "Kostenberechnung", "Transportaufträge", "Logistiklösungen"]
  },
  {
    id: 154,
    name: "Lagerauskunft Agent",
    industry: "Logistik & Transport",
    description: "Informiert über Lagerbestände, kann Verfügbarkeiten prüfen und Nachbestellungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Lagerauskunft", "Bestandsabfrage", "Verfügbarkeitsprüfung", "Nachbestellungen", "Lagerverwaltung"]
  },
  {
    id: 155,
    name: "Express-Versand Agent",
    industry: "Logistik & Transport",
    description: "Koordiniert Express-Sendungen, kann Eilzustellungen organisieren und über Express-Optionen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Express-Versand", "Eilzustellungen", "Same-Day-Delivery", "Express-Optionen", "Schnellversand"]
  },
  {
    id: 156,
    name: "International Agent",
    industry: "Logistik & Transport",
    description: "Betreut internationale Sendungen, informiert über Zoll und kann bei Auslandsversand helfen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Internationaler Versand", "Zollabwicklung", "Auslandsversand", "Import/Export", "Internationale Logistik"]
  },
  {
    id: 157,
    name: "Schadensmeldung Agent",
    industry: "Logistik & Transport",
    description: "Nimmt Schadensmeldungen entgegen, kann Schadensfälle bearbeiten und Entschädigungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Schadensmeldung", "Schadensfälle", "Entschädigungen", "Transportschäden", "Schadensregulierung"]
  },
  {
    id: 158,
    name: "Sperrgut Agent",
    industry: "Logistik & Transport",
    description: "Koordiniert Sperrgut-Transporte, kann Sondertermine vereinbaren und über Sperrgut-Bedingungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Sperrgut", "Sondertransporte", "Sperrgut-Termine", "Großgut", "Schwertransporte"]
  },
  {
    id: 159,
    name: "Paketshop Agent",
    industry: "Logistik & Transport",
    description: "Informiert über Paketshops, kann Abholstellen suchen und über Paketshop-Services informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Paketshops", "Abholstellen", "Paketshop-Services", "Packstationen", "Abholservice"]
  },
  {
    id: 160,
    name: "Nachnahme Agent",
    industry: "Logistik & Transport",
    description: "Wickelt Nachnahme-Sendungen ab, kann über Nachnahme-Bedingungen informieren und Zahlungen koordinieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Nachnahme", "Nachnahme-Bedingungen", "Zahlungsabwicklung", "Cash-on-Delivery", "Nachnahmegebühren"]
  },
  {
    id: 161,
    name: "Retouren Agent",
    industry: "Logistik & Transport",
    description: "Koordiniert Retouren, kann Rücksendescheine erstellen und über Retourenbedingungen informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Retouren", "Rücksendescheine", "Retourenbedingungen", "Rückversand", "Retourenabwicklung"]
  },
  {
    id: 162,
    name: "Kühlkette Agent",
    industry: "Logistik & Transport",
    description: "Koordiniert Kühlketten-Transporte, kann Temperaturüberwachung organisieren und über Kühltransporte informieren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Kühlkette", "Temperaturüberwachung", "Kühltransporte", "Tiefkühllogistik", "Pharmalogistik"]
  }
];

export const industries = [
  "Alle",
  "E-Commerce & Retail",
  "Immobilien",
  "Gesundheitswesen",
  "Finanzdienstleistungen",
  "Telekommunikation",
  "Personalwesen",
  "Reise & Tourismus",
  "B2B",
  "Einzelhandel",
  "Großhandel",
  "Beauty & Wellness",
  "Logistik & Transport"
];
