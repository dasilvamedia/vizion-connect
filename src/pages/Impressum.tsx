import { Link } from "react-router-dom";
import { ContactSection } from "@/components/landing/ContactSection";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-border">
        <Link to="/" className="text-2xl font-bold text-foreground">Lead Connect</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#funktionen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funktionen</Link>
          <Link to="/#vorteile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vorteile</Link>
          <Link to="/#branche" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Branche</Link>
          <Link to="/#agenten" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Agenten</Link>
          <Link to="/#preise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preise</Link>
          <Link to="/#kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
        
        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p>da Silva Media</p>
            <p>73434 Aalen</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="mb-2">
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:hallo@lead-connect.de" className="text-orange hover:underline">
                hallo@lead-connect.de
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://lead-connect.de" className="text-orange hover:underline">
                lead-connect.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-3">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p className="font-semibold">DE363455236</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Redaktionell verantwortlich</h2>
            <p>da Silva Media</p>
            <p>73434 Aalen</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">EU-Streitschlichtung</h2>
            <p className="mb-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
            <p className="text-sm italic">Quelle: eRecht24</p>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lead Connect</h3>
              <p className="text-sm text-muted-foreground">
                Ihre intelligente AI-Agenten für professionelle Kundenbetreuung rund um die Uhr.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/#funktionen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funktionen</Link></li>
                <li><Link to="/#vorteile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vorteile</Link></li>
                <li><Link to="/#branche" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Branche</Link></li>
                <li><Link to="/#preise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preise</Link></li>
                <li><Link to="/#kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hallo@lead-connect.de</li>
                <li>lead-connect.de</li>
                <li>da Silva Media</li>
                <li>73434 Aalen, Deutschland</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Datenschutz</Link></li>
                <li><Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</Link></li>
                <li><Link to="/agb" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AGB</Link></li>
                <li><Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 lead-connect.de. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
