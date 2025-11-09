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
    id: 64,
    name: "Störungsmeldung Agent",
    industry: "Telekommunikation",
    description: "Nimmt Störungsmeldungen entgegen, führt erste Diagnoseschritte durch und kann Techniker-Termine vereinbaren.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Störungsmeldung", "Ferndiagnose", "Technikereinsatz", "Terminvereinbarung", "Entstörung"]
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
    id: 92,
    name: "Reisebuchung Agent",
    industry: "Reise & Tourismus",
    description: "Nimmt Reisebuchungen entgegen, prüft Verfügbarkeiten und kann Angebote erstellen. Beantwortet Fragen zu Reisezielen.",
    features: ["Automatisierte Antworten in Echtzeit", "Integration in bestehende Systeme", "Mehrsprachige Unterstützung", "Analytics und Reporting", "Personalisierte Benutzerführung"],
    useCases: ["Reisebuchung", "Verfügbarkeitsprüfung", "Angebotserstellung", "Reiseziele", "Buchungsbestätigung"]
  },
];

export const industries = [
  "Alle",
  "E-Commerce & Retail",
  "Immobilien",
  "Gesundheitswesen",
  "Finanzdienstleistungen",
  "Telekommunikation",
  "Personalwesen",
  "Reise & Tourismus"
];
