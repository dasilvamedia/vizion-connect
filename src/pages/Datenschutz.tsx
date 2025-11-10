import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/landing/ContactSection";

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
              Im Rahmen der Nutzung unserer Webseite werden Ihre personenbezogenen Daten (nachfolgend nur „Daten") verarbeitet. Zu den Daten können beispielsweise Ihr Name, Ihre Adresse, E-Mail-Adresse sowie weitere Angaben zu Ihrer Person zählen. Eine Verarbeitung stellt hierbei im Grunde jede Art und Weise des Umgangs mit diesen Daten dar.
            </p>
            <p className="mb-4">
              Im Folgenden erhalten Sie daher Informationen zur Verarbeitung Ihrer Daten im Rahmen der Nutzung von https://www.lead-connect.de und https://app.lead-connect.de auf Grundlage der Bestimmungen der Datenschutz-Grundverordnung (DSGVO) sowie der geltenden Bundes- und Landesdatenschutzgesetze.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Zwecke und Rechtsgrundlagen unserer Datenverarbeitung</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Kontaktformular</h3>
            <p className="mb-4">
              Die Website stellt zur Kontaktaufnahme ein Kontaktformular zur Verfügung. Die hierbei eingegebenen Daten werden, insofern es sich um personenbezogene Daten handelt, auf dem Server des Hostinganbieters gespeichert und sodann via E-Mail an das hierfür vorgesehene Empfangspostfach weitergeleitet. Die Weiterleitung erfolgt hierbei ausschließlich serverintern, sodass eine Gefährdung der Vertraulichkeit der Daten effektiv ausgeschlossen ist. Die Rechtsgrundlage für die Verarbeitung stellt Art. 6 Abs. 1 S. 1 b) DSGVO dar. Abweichend hierfür ist die Rechtsgrundlage für die Erhebung des Namens Art. 6 Abs. 1 S. 1 f) DSGVO; das berechtigte Interesse ist eine persönlichere Ansprache des Anfragestellers.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">E-Mail-Kontakt</h3>
            <p className="mb-4">
              An verschiedenen Stellen der Website ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. Es findet hierbei eine Speicherung der übermittelten personenbezogenen Daten, insbesondere der E-Mail-Adresse selbst, statt. Eine Weitergabe dieser Daten an Dritte erfolgt nicht. Die Daten werden ausschließlich für die Verarbeitung der Anfrage verwendet. Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 S. 1 f) DSGVO. Eine Löschung der Daten erfolgt nach Wegfall des Zweckes oder Beendigung der Kommunikation; im Falle eines Vertragsabschlusses gelten die entsprechenden Aufbewahrungsfristen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Newsletter</h3>
            <p className="mb-4">
              Wir verarbeiten auch Daten, um Ihnen aufgrund einer von Ihnen ggf. abgegebenen Einwilligung in den Versand von Newslettern E-Mails zuzusenden. Rechtsgrundlage für die Verarbeitung dieser Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 a) DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen und somit die Löschung Ihrer Daten bewirken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hosting und Content Delivery Networks (CDN)</h2>
            <p className="mb-4">
              Wir nutzen den Service „Cloudflare", Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA. Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an, welches Ihre Verbindung zu unserer Website absichert und optimiert. Der Einsatz von Cloudflare beruht auf unserem berechtigten Interesse an einer möglichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 S. 1 f) DSGVO). Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Weitere Informationen zum Datenschutz bei Cloudflare finden Sie unter: https://www.cloudflare.com/privacypolicy/.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">IT-Sicherheit</h2>
            <p className="mb-4">
              Wir verarbeiten auch in Ihrem und unserem Interesse Daten, um die Integrität, Vertraulichkeit und Verfügbarkeit der datenverarbeitenden Systeme, d. h. insbesondere die Sicherheit und Verfügbarkeit Ihrer Daten bei https://www.lead-connect.de bzw. https://app.lead-connect.de zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 f) DSGVO; unser berechtigtes Interesse besteht in der Aufrechterhaltung und sicheren Erbringung unserer Dienstleistungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenweitergabe über die Grenzen der EU hinaus</h2>
            <p className="mb-4">
              Die von uns erhobenen Daten werden primär auf Servern in der Europäischen Union gespeichert. Eine Übermittlung von Daten an Unternehmen außerhalb der Europäischen Union erfolgt nicht ohne Ihre ausdrückliche Zustimmung oder geeignete Garantien (z. B. EU-Standardvertragsklauseln).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenempfänger</h2>
            <p className="mb-4">
              Wir geben Daten im Rahmen einer gesetzlich zulässigen Auftragsverarbeitung an sorgfältig ausgewählte und schriftlich beauftragte Dienstleister weiter. Diese erhalten nur die für die Erfüllung ihres Auftrages erforderlichen Daten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dauer der Datenspeicherung</h2>
            <p className="mb-4">
              Ihre Daten werden so lange gespeichert, wie der Kontakt zwischen Ihnen und https://www.lead-connect.de besteht. Entsteht ein Vertragsverhältnis, werden die dafür notwendigen Daten weiter gespeichert. Danach erfolgt eine Löschung, sobald der Zweck entfällt oder gesetzliche Anforderungen es vorsehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Verwendung von Cookies</h2>
            <p className="mb-4">
              Die Webseite verwendet Cookies. Dies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und z. B. ein Wiedererkennen beim weiteren Besuch der Website ermöglichen. Sie können die Nutzung von Cookies in Ihrem Browser individuell einstellen. Details entnehmen Sie den jeweiligen Plug-in-Beschreibungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenverarbeitung durch implementierte Plug-Ins</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Terminbuchung mit cal.com</h3>
            <p className="mb-4">
              Zur Terminbuchung wird das Tool „cal.com" verwendet (Cal.com, Inc., 2261 Market Street #4456, San Francisco, CA 94114, USA). Die eingegebenen Daten werden für Planung, Durchführung und Nachbereitung des Termins verwendet und auf den Servern von cal.com gespeichert. Datenschutzhinweise: https://cal.com/privacy. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 f) DSGVO bzw. bei Einwilligung Art. 6 Abs. 1 S. 1 a) DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Facebook Custom Audience & Facebook Connect</h3>
            <p className="mb-4">
              Für Marketingmaßnahmen und die Registrierung via Facebook werden Daten durch Facebook (Meta Platforms Ireland Limited) verarbeitet. Die erhobenen Daten sind für uns anonym und werden ausschließlich mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 a) DSGVO genutzt. Details zu Facebook: https://www.facebook.com/about/privacy/.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Vimeo</h3>
            <p className="mb-4">
              Auf dieser Website sind Plugins von Vimeo integriert. Beim Besuch der Seite wird eine Verbindung zu den Vimeo-Servern hergestellt. Die Nutzung erfolgt nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 a) DSGVO. Weitere Hinweise: https://vimeo.com/privacy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google Analytics</h3>
            <p className="mb-4">
              Wir nutzen Google Analytics (Google Ireland Limited) zur Analyse und Verbesserung unseres Angebotes mit Ihrer Einwilligung (Art. 6 Abs. 1 S. 1 a) DSGVO) und auf Basis berechtigten Interesses (Art. 6 Abs. 1 S. 1 f) DSGVO). Die Datenverarbeitung erfolgt pseudonymisiert, eine vollständige IP-Anonymisierung ist aktiviert. Details: https://policies.google.com/privacy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Meta Pixel und Conversion API</h3>
            <p className="mb-4">
              Zur Analyse und Optimierung unserer Werbung verwenden wir das Meta Pixel und die Meta Conversion API (Meta Platforms Ireland Ltd.), basierend auf Ihrer Einwilligung (Art. 6 Abs. 1 a DSGVO). Details: https://www.facebook.com/about/privacy/.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google AdSense</h3>
            <p className="mb-4">
              Für Werbeanzeigen wird Google AdSense (Google Inc.) verwendet, auf Ihrer Einwilligung beruhend (Art. 6 Abs. 1 S. 1 a) DSGVO). Weitere Infos: https://policies.google.com/privacy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google Webfonts</h3>
            <p className="mb-4">
              Zur Darstellung von Schriftarten werden Google Web Fonts verwendet. Die Nutzung erfolgt aus berechtigtem Interesse an einheitlicher Darstellung (Art. 6 Abs. 1 S. 1 f) DSGVO); bei Einwilligung auf Art. 6 Abs. 1 S. 1 a) DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">New Relic</h3>
            <p className="mb-4">
              Zur Analyse der Seitenperformance wird New Relic (New Relic Inc.) eingesetzt, nur mit Ihrer Einwilligung (Art. 6 Abs. 1 S. 1 a) DSGVO): https://newrelic.com/privacy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cloudflare Insights</h3>
            <p className="mb-4">
              Zur technischen Analyse nutzen wir Cloudflare Insights (Art. 6 Abs. 1 S. 1 f) DSGVO bzw. bei Einwilligung Art. 6 Abs. 1 a) DSGVO). Infos: https://www.cloudflare.com/privacypolicy/.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Clickfunnels</h3>
            <p className="mb-4">
              Marketingfunnels werden per Clickfunnels (Etison LLC) dargestellt, ausschließlich auf Einwilligungsbasis (Art. 6 Abs. 1 S. 1 a) DSGVO). Hinweis: Datenübermittlung in die USA ist möglich, siehe https://signup.clickfunnels.com/dpa.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Fullstory</h3>
            <p className="mb-4">
              Zur UX-Analyse verwenden wir Fullstory (Fullstory Inc.), Daten werden nur nach Ihrer Einwilligung verarbeitet (Art. 6 Abs. 1 S. 1 a) DSGVO). Details und Widerspruch: https://www.fullstory.com/optout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Soziale Medien</h2>
            <p className="mb-4">
              Unsere Präsenzen in sozialen Netzwerken unterliegen jeweils den Datenschutzbestimmungen dieser Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datensicherheit</h2>
            <p className="mb-4">
              Datensicherheit und der Schutz Ihrer Daten werden durch umfassende technische und organisatorische Maßnahmen gemäß den gesetzlichen Vorgaben implementiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Ihre Rechte und Beschwerdemöglichkeiten</h2>
            <p className="mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung oder Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerruf Ihrer Einwilligung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p className="mb-4">
              Zur Geltendmachung wenden Sie sich bitte an hallo@lead-connect.de.
            </p>
            <p className="mb-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortliche Stelle</h2>
            <p className="mb-2"><strong>Firma:</strong> da Silva Media</p>
            <p className="mb-2"><strong>Anschrift:</strong> 73434 Aalen, Deutschland</p>
            <p className="mb-4"><strong>E-Mail:</strong> hallo@lead-connect.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutzbeauftragter</h2>
            <p className="mb-2"><strong>Firma:</strong> Marie-Kathrin Wünsche (LL.M.)</p>
            <p className="mb-2"><strong>Anschrift:</strong> Franziska-Tiburtius-Str. 4a, 01326 Dresden</p>
            <p className="mb-2"><strong>Telefon:</strong> +49 1724508345</p>
            <p className="mb-4"><strong>E-Mail:</strong> wuensche@wuensche-consulting.de</p>
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
