import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <section>
            <p className="mb-4">
              Wir freuen uns über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für uns. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="mb-4">
              <strong>Info gemäß Artikel 13 DSGVO:</strong> Als Betreiber dieser Seite ist es uns wichtig Sie darüber zu informieren, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Zwecke und Rechtsgrundlagen unserer Datenverarbeitung</h2>
            <p className="mb-4">
              <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong>
            </p>
            <p className="mb-4">
              Die Verarbeitung ist rechtmäßig, wenn die betroffene Person ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben hat. Die Einwilligung muss freiwillig, für den konkreten Fall, in informierter Weise und unmissverständlich abgegeben worden sein. Jede Einwilligung muss durch eine eindeutige bestätigende Handlung erfolgen.
            </p>
            <p className="mb-4">
              <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong>
            </p>
            <p>
              Die Verarbeitung ist rechtmäßig, wenn sie für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, die auf Anfrage der betroffenen Person erfolgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hosting und Content Delivery Networks (CDN)</h2>
            <p className="mb-4">
              <strong>Externes Hosting:</strong>
            </p>
            <p className="mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">IT-Sicherheit</h2>
            <p className="mb-4">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um zu gewährleisten, dass die Vorschriften der Datenschutzgesetze eingehalten werden und um die durch uns verwalteten Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
            <p className="mb-4">
              Die Server, auf welchen personenbezogene Daten verarbeitet werden, befinden sich in gesicherten Rechenzentren. Der Zugang zu den Räumlichkeiten ist geschützt, um unbefugten Zutritt zu vermeiden. Ebenso ist der Zugriff auf die Datenbank, in welcher Ihre personenbezogenen Daten liegen, durch Authentifizierungen geschützt. Ein Zugriff ist nur durch berechtigte Administratoren mit Zugriffsbeschränkung möglich und wird protokolliert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenweitergabe über das Gesamt der EU hinaus</h2>
            <p className="mb-4">
              Ihre Daten werden teilweise auch in Nicht-EU-Ländern, sogenannte Drittländer, verarbeitet. Darunter fallen die Vereinigten Staaten von Amerika (USA), dies jedoch ausschließlich bei solchen Firmen, die dem sog. Privacy-Shield Abkommen beigetreten sind. Das Privacy Shield Abkommen stellt eine Vereinbarung zwischen der Europäischen Union und den USA dar, welches die Einhaltung europäischer Datenschutzstandards in den USA gewährleisten soll. Jedes nach dem Privacy Shield zertifizierte Unternehmen verpflichtet sich dazu, diese Datenschutzstandards einzuhalten.
            </p>
            <p>
              Wir verwenden Dienste von Unternehmen aus Drittländern, d.h. außerhalb der Europäischen Union. Dabei haben wir dafür Sorge zu tragen, dass Ihr Datenschutz auch bei diesen Dienstleistern gewahrt wird. Diese Unternehmen sind deshalb entweder ebenfalls Privacy Shield zertifiziert oder wir haben gesonderte Verträge mit ihnen abgeschlossen, sog. Standard-Datenschutzklauseln. Das heißt, sie haben sich uns und der EU gegenüber vertraglich dazu verpflichtet, die in Europa geltenden Datenschutz-Bestimmungen einzuhalten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dauer der Datenspeicherung</h2>
            <p className="mb-4">
              Die Löschung gespeicherter personenbezogener Daten erfolgt, wenn Sie Ihre Einwilligung zur Speicherung widerrufen, wenn deren Kenntnis zur Erfüllung des mit der Speicherung verfolgten Zwecks nicht mehr erforderlich ist oder wenn ihre Speicherung aus sonstigen gesetzlichen Gründen unzulässig ist. Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen, werden in ihrem Verwendungszweck eingeschränkt. Diese Daten sind dann gesperrt und werden nicht für andere Zwecke verwendet. Zur Feststellung und Geltendmachung etwaiger Ansprüche und zur Verteidigung bei etwaigen Streitigkeiten behalten wir uns vor, bestimmte Daten für die Dauer der jeweiligen gesetzlichen Verjährungsfrist, also höchstens für die Dauer von drei Jahren, zu speichern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenverarbeitung durch implementierte Plug-ins</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Terminbuchung mit cal.com</h3>
            <p className="mb-4">
              Auf dieser Website ist ein Terminbuchungs-Tool integriert. Dieses wird von der Firma Cal.com, Inc., 2261 Market Street, San Francisco, CA 94114, USA bereitgestellt. Wenn Sie einen Termin über unser Buchungstool vereinbaren, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer und weitere optional angegebene Informationen) an Cal.com übermittelt und dort gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Facebook Cookies Audience & Facebook Connect</h3>
            <p className="mb-4">
              Auf unseren Internetseiten werden Facebook Pixel/Cookies unseres Partners Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) eingesetzt. Dies ermöglicht das Verhalten von Nutzern nachzuverfolgen, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Webseite weitergeleitet wurden. Dieses Verfahren dient dazu, die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke auszuwerten und kann dazu beitragen, zukünftige Werbemaßnahmen zu optimieren.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Vimeo</h3>
            <p className="mb-4">
              Auf dieser Website sind Plugins des Videoportals Vimeo der Vimeo, LLC, 555 West 18th Street, New York, New York 10011, USA integriert. Bei jedem Aufruf einer Seite, die ein oder mehrere Vimeo-Videoclips anbietet, wird eine direkte Verbindung zwischen Ihrem Browser und einem Server von Vimeo in den USA hergestellt. Dabei werden Informationen über Ihren Besuch und Ihre IP-Adresse dort gespeichert. Durch Interaktionen mit den Vimeo Plugins (z.B. Klicken des Start-Buttons) werden diese Informationen ebenfalls an Vimeo übermittelt und dort gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google Analytics</h3>
            <p className="mb-4">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend "Google" genannt.
            </p>
            <p className="mb-4">
              Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Diese Website verwendet Google Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen, die über eine User-ID durchgeführt wird.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Hevo-Plezi und Convermax-API</h3>
            <p className="mb-4">
              Zur Verwaltung von Marketing-Kampagnen und Lead-Generierung nutzen wir die Dienste von Hevo-Plezi und Convermax. Diese Tools helfen uns dabei, Ihre Interessen besser zu verstehen und relevante Inhalte bereitzustellen. Dabei werden Daten wie IP-Adresse, Browser-Informationen und Interaktionen mit unserer Website erfasst.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google AdSense</h3>
            <p className="mb-4">
              Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited ("Google"). Google AdSense verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Hevo Help</h3>
            <p className="mb-4">
              Für unseren Kundensupport verwenden wir Hevo Help. Dies ermöglicht es uns, Supportanfragen effizient zu bearbeiten und die Qualität unseres Kundenservices kontinuierlich zu verbessern. Ihre Kontaktdaten und Anfragen werden in diesem System gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Plezi Mautic</h3>
            <p className="mb-4">
              Wir nutzen Plezi Mautic für Marketing-Automation. Dies hilft uns, personalisierte Inhalte bereitzustellen und die Effektivität unserer Marketing-Maßnahmen zu messen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Telefony</h3>
            <p className="mb-4">
              Zur Verbesserung unseres Telefonservice und zur Qualitätssicherung nutzen wir Telefony. Dabei können Anrufdaten und -inhalte aufgezeichnet und analysiert werden.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Tidee Mindten</h3>
            <p className="mb-4">
              Wir verwenden Tidee Mindten zur Optimierung unserer Geschäftsprozesse und zur besseren Koordination von Kundenterminen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutzkontakt</h2>
            <p className="mb-4">
              Sollten Sie Fragen bezüglich der Verarbeitung Ihrer persönlichen Daten haben, können Sie sich direkt an unseren Datenschutzbeauftragten wenden:
            </p>
            <p className="mb-2"><strong>Name:</strong> Kevin da Silva</p>
            <p className="mb-2"><strong>Adresse:</strong> 73434 Aalen - Deutschland</p>
            <p className="mb-2"><strong>Telefon:</strong> 07361 3893011</p>
            <p className="mb-4"><strong>E-Mail:</strong> hallo@lead-connect.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Ihre Rechte und Beschwerdemöglichkeiten</h2>
            <p className="mb-4">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Sie haben folgende Rechte:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung oder Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p className="mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortliche Stelle</h2>
            <p className="mb-2"><strong>Firma:</strong> da Silva Media</p>
            <p className="mb-2"><strong>Anschrift:</strong> 73434 Aalen - Deutschland</p>
            <p className="mb-2"><strong>Telefon:</strong> 07361 3893011</p>
            <p className="mb-4"><strong>E-Mail:</strong> hallo@lead-connect.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutzbeauftragter</h2>
            <p className="mb-2"><strong>Name:</strong> Kevin da Silva</p>
            <p className="mb-2"><strong>Anschrift:</strong> da Silva Media, 73434 Aalen - Deutschland</p>
            <p className="mb-2"><strong>Telefon:</strong> 07361 3893011</p>
            <p className="mb-4"><strong>E-Mail:</strong> hallo@lead-connect.de; info@dasilvamedia.de</p>
          </section>
        </div>
      </main>

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

export default Datenschutz;
