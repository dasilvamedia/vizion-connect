import { Link } from "react-router-dom";
import { ContactSection } from "@/components/landing/ContactSection";

const AGB = () => {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Allgemeine Geschäfts- und Lizenzbedingungen</h1>
        <p className="text-sm text-muted-foreground mb-8">Mit Wirkung zum 01.10.2025</p>
        
        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Allgemeines</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 1 Geltungsbereich</h3>
            <p className="mb-4">
              Diese Allgemeinen Geschäfts- und Lizenzbedingungen (nachfolgend nur AGB) gelten für alle zwischen da Silva Media (nachfolgend nur Auftragnehmer) und dem Kunden geschlossenen Verträgen. Mit Vertragsschluss erkennt der Kunde diese AGB verbindlich an, unabhängig davon, ob dieser sie tatsächlich zur Kenntnis nimmt. Die AGB haben Vorrang vor etwaigen Geschäftsbedingungen des Kunden. Entgegenstehende Geschäftsbedingungen des Kunden werden auch ohne ausdrücklichen Widerspruch nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt diesen im Einzelfall in Textform zu.
            </p>
            <p className="mb-4">
              Es gelten die allgemeinen Geschäftsbedingungen in der im Zeitpunkt des Vertragsschlusses gültigen Fassung.
            </p>
            <p className="mb-4">
              Ergänzungen oder Änderungen dieser AGB bedürfen zu ihrer Rechtswirksamkeit der Textform nach § 126b BGB.
            </p>
            <p className="mb-4">
              Diese AGB gelten nur gegenüber Unternehmen i.S.d § 14 BGB.
            </p>
            <p className="mb-4">
              Aus Gründen der besseren Lesbarkeit wird auf die gleichzeitige Verwendung der maskulinen, femininen und diversen Sprachform verzichtet. Die Verwendung des Wortes „Kunde" gilt gleichwohl für alle Geschlechter.
            </p>
            <p className="mb-4">
              Die Vertragssprache ist deutsch.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 2 Vertragsschluss; Vertragsänderung</h3>
            <p className="mb-4">
              Angebote des Auftragnehmers auf der Website lead-connect.de und anderen digitalen oder analogen Werbeträgern stellen kein verbindliches Angebot dar. Der Kunde wird hierdurch aufgefordert, dem Auftragnehmer eine Anfrage auf Erhalt eines Angebotes abzugeben. Die Anfrage kann telefonisch oder per E-Mail oder über die Website erfolgen. Durch das Versenden der Anfrage kommt noch kein Vertrag zustande.
            </p>
            <p className="mb-4">
              Der Kunde und ein von dem Auftragnehmer beauftragter Dritter (z.B. einem Vermittler) oder der Auftragnehmer besprechen die vertraglichen Konditionen. Der Kunde erhält einen Zugangslink und gelangt zu einer Demoversion, sofern dies besprochen wurde und wählt ein Abonnement aus. Mit der Betätigung des „Jetzt Kaufen" Buttons kommt der Vertrag zustande, sofern diese Verhandlungen nicht mit einem Dritten geführt werden. Werden die Vertragsverhandlungen mit einem Dritten geführt, kommt der Vertrag unter der aufschiebenden Bedingung zustande, dass der Auftragnehmer den Vertrag annimmt. Der Vertrag gilt als angenommen, wenn der Auftragnehmer diesen nicht innerhalb von 10 Werktagen ablehnt.
            </p>
            <p className="mb-4">
              Der Kunde erhält nach der Annahme des Vertragsangebots eine Auftragsbestätigung sowie die Leistungsbeschreibung, welche ihm bereits vor Vertragsschluss zur Verfügung gestellt wird. Der konkrete Leistungsumfang ergibt sich aus dieser. Der Kunde wird darauf hingewiesen, dass die Inhalte der Leistungsbeschreibung nicht als Garantien zu verstehen sind. Eine Erweiterung oder Anpassung des Vertrages nach Vertragsschluss ist nur im Einvernehmen der Parteien möglich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Pflichten des Auftragnehmers; Credits</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 3 Vertragsgegenstand, Leistungsumfang, Beauftragung Dritter</h3>
            <p className="mb-4"><strong>Vertragsgegenstand/Kontingent</strong></p>
            <p className="mb-4">
              Gegenstand dieses Vertrags ist die Erbringung von webbasierten Software as a Service Leistungen (SaaS) inklusive ergänzendem Support nach Maßgabe dieser Allgemeinen Geschäftsbedingungen einschließlich der Leistungsbeschreibung ausschließlich für eigene, interne Zwecke des Kunden in Form der Bereitstellung einer KI-Software für Telefonservicedienste (nachfolgend insgesamt als „Service" bezeichnet).
            </p>
            <p className="mb-4">
              Der Auftragnehmer ist für die Einrichtung des Services verantwortlich. Die Durchführung einzelner Maßnahmen kann dabei durch vom Auftragnehmer beauftragte Dritte erfolgen.
            </p>
            <p className="mb-4">
              Der Kunde erhält keinen Zugang zu Codes oder sonstigen Entwicklungsdetails des Service, sofern dies nicht zwingend gesetzlich vorgeschrieben ist.
            </p>

            <p className="mb-4 mt-6"><strong>Bereitstellung</strong></p>
            <p className="mb-4">
              Die Bereitstellung des Service kann auf verschiedenen Wegen erfolgen, z.B. durch zur Verfügung stellen einer Telefonnummer, Implementierung der Software in das System des Kunden oder im Rahmen sonstiger vertraglicher Vereinbarungen. Die konkrete Vereinbarung über die Art und Weise der Bereitstellung ergibt sich aus dem Angebot und der Leistungsbeschreibung.
            </p>
            <p className="mb-4">
              Die jeweils aktuellen Dokumentationen des Service stehen in elektronischer Form auf der Website docs.lead-connect.de zur Verfügung. Diese enthalten die Leistungsbeschreibung des Service, welche die technischen Voraussetzungen zur Nutzung der angebotenen Dienste, die Beschaffenheit und Funktionalitäten der Dienste und die Supportleistungen umschreibt.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 4 Wartungen; Leistungsänderungen durch den Auftragnehmer; Verfügbarkeit; Support</h3>
            <p className="mb-4">
              Die Verfügbarkeit des Service beträgt durchschnittlich 99% im Monat. Als Verfügbarkeit gilt die Bereitstellung der Services ohne wesentliche Funktionseinschränkungen. Angekündigte Wartungszeiten sowie Unterbrechungen, die sich dem Einflussbereich des Auftragnehmers entziehen, bleiben bei der Berechnung der Systemverfügbarkeit unberücksichtigt.
            </p>
            <p className="mb-4">
              Dem Kunden steht ein Kundensupport zur Verfügung. Die Kontaktdaten des Kundensupports und die Erreichbarkeit ergeben sich aus der Auftragsbestätigung oder der Dokumentation.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 5 Credits</h3>
            <p className="mb-4">
              Dem Kunden steht ein monatliches Kontingent von Credits zur Verfügung, welche mit der Vergütung abgegolten sind. Diese ergeben sich aus dem gewählten Abonnement und der Auftragsbestätigung.
            </p>
            <p className="mb-4">
              Durch die Nutzung des Service verbraucht der Kunde Credits. Sind die Credits aufgebraucht und kauft der Kunde keine Credits nach, steht ihm der Service nicht mehr zur Verfügung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Preise und Vergütung</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 6 Preise, Zahlungsbedingungen</h3>
            <p className="mb-4">
              Bei sämtlichen im Angebot angegebenen Preisen handelt es sich grundsätzlich um Nettopreise exkl. der jeweils geltenden gesetzlichen Umsatzsteuer.
            </p>
            <p className="mb-4">
              Der Kunde zahlt an den Auftragnehmer die im Rahmen des Vertragsschlusses vertraglich vereinbarte Vergütung entsprechend dem gewählten Vergütungsmodell.
            </p>
            <p className="mb-4">
              Zahlt der Kunde trotz Setzung einer angemessenen Frist den fälligen Betrag nicht, ist der Auftragnehmer berechtigt, den Zugang des Kunden bis zur vollständigen Zahlung vorübergehend zu beschränken oder zu sperren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Pflichten des Kunden</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 7 Mitwirkungspflichten des Kunden; Hinweise an den Kunden; Freistellung</h3>
            <p className="mb-4">
              Der Kunde hat bei der Angabe seiner Kundendaten wahrheitsgemäße Angaben zu machen und ist verpflichtet, den Auftragnehmer unverzüglich über geänderte Anschriften, Ansprechpartner und E-Mail-Adressen zu informieren.
            </p>
            <p className="mb-4">
              Der Kunde hat bei Nutzung des Service innerhalb und außerhalb Deutschlands das jeweils geltende Recht einzuhalten. Der Kunde verpflichtet sich insbesondere, Anrufende vorab zu informieren, dass das Gespräch mittels eines KI-Systems durchgeführt wird sowie ihn darüber zu informieren, dass die Gespräche aufgezeichnet werden (sofern nicht anders vereinbart) und die Zustimmung hierfür einzuholen.
            </p>
            <p className="mb-4">
              Der Kunde wird darauf hingewiesen, dass es sich bei dem Service um ein KI-System handelt, welches Fehler machen kann. Es wird empfohlen, verbindliche Rechts- und Willenserklärungen erst nach gesonderter Überprüfung abzugeben.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 8 Technische Voraussetzungen</h3>
            <p className="mb-4">
              Der Kunde ist dafür verantwortlich, sämtliche technische Voraussetzungen für die Nutzung des Service zu schaffen. Diese können der Dokumentation bereits vor Vertragsschluss unter docs.lead-connect.de entnommen werden.
            </p>
            <p className="mb-4">
              Zur Nutzung des Service ist eine Internetverbindung sowie etwaige Zugänge zu Systemen des Kunden notwendig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nutzungsrechte</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 9 Nutzungsrechte des Kunden an dem Service; Freistellung</h3>
            <p className="mb-4"><strong>Einräumung der Nutzungsrechte</strong></p>
            <p className="mb-4">
              Alle Rechte an dem Service stehen ausschließlich dem Auftragnehmer und/oder dessen Lizenzgebern zu.
            </p>
            <p className="mb-4">
              Der Auftragnehmer räumt dem Kunden während der Laufzeit dieses Vertrags ein einfaches, nicht-übertragbares, nicht-unterlizenzierbares, räumlich unbeschränktes Recht zum Zugriff und zur Nutzung des Service für eigene, interne Zwecke ein.
            </p>
            <p className="mb-4">
              Dem Kunden ist es nur gestattet, den Service für die vertraglich vereinbarten und vorgesehenen Zwecke zu verwenden. Dies sind insbesondere die Zwecke von Kundenservicediensten wie z.B. die Vereinbarung von Terminen, Bearbeitung von Reklamationen, Supportleistungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutz, Nutzungsrechte der Daten</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 11 Rechte an den Daten des Kunden, Nutzungsrechte des Auftragnehmers</h3>
            <p className="mb-4">
              Der Kunde ist und bleibt Inhaber der kundenspezifischen eingespeisten bzw. verwendeten Daten. Der Kunde gewährt dem Auftragnehmer das einfache, räumlich unbeschränkte, auf die Vertragslaufzeit befristete Nutzungsrecht an den vom Kunden im Service eingespeisten bzw. verarbeiteten Daten, ausschließlich zum Zweck der Erbringung des Service.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 12 Speicherung der Gespräche</h3>
            <p className="mb-4">
              Der Kunde wird darauf hingewiesen, dass die Gespräche, die mit dem Service geführt werden, aufgezeichnet und transkribiert werden. Der Anrufende wird vor der Aufzeichnung durch den Service darauf hingewiesen und um Zustimmung gebeten.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 13 Datenschutz</h3>
            <p className="mb-4">
              Der Auftragnehmer hält sich an die gesetzlichen Datenschutzbestimmungen. Sofern ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO notwendig ist, wird der Auftragnehmer den Kunden hierauf hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Vertragslaufzeit, Haftung, Gewährleistung, Vertraulichkeit</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 14 Vertragslaufzeit; Kündigung</h3>
            <p className="mb-4">
              Die Vertragslaufzeit ergibt sich aus dem Angebot und der Auftragsbestätigung. Wird der Vertrag nicht gekündigt, verlängert er sich automatisch um die ursprüngliche Laufzeit.
            </p>
            <p className="mb-4">
              Beide Parteien können den Vertrag mit einer Frist von 6 Monaten zum Ablauf der Vertragslaufzeit kündigen, sofern im Angebot nicht anders vereinbart.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 15 Höhere Gewalt, Haftung</h3>
            <p className="mb-4">
              Der Auftragnehmer haftet unbegrenzt für vorsätzlich oder grob fahrlässig verursachte Schäden, bei Arglist, bei Verletzung von Leben, Körper oder Gesundheit sowie nach dem Produkthaftungsgesetz.
            </p>
            <p className="mb-4">
              Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung vertragswesentlicher Pflichten und ist der Höhe nach auf vorhersehbare typische Schäden begrenzt.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 16 Gewährleistung</h3>
            <p className="mb-4">
              Die Gewährleistungsrechte des Kunden richten sich nach den allgemeinen gesetzlichen Vorschriften. Der Kunde hat Mängel unverzüglich unter Angabe von Art, Umfang und Dauer dem Auftragnehmer anzuzeigen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 17 Vertraulichkeit</h3>
            <p className="mb-4">
              Die im Rahmen der vertraglichen Zusammenarbeit eingespeisten bzw. verwendeten Daten unterliegen der Vertraulichkeit. Die Parteien verpflichten sich gegenseitig, vertrauliche Informationen streng vertraulich zu behandeln.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">§ 18 Schlussbestimmungen; Salvatorische Klausel</h3>
            <p className="mb-4">
              Auf sämtliche Vertragsbeziehungen findet das Recht der Bundesrepublik Deutschland Anwendung.
            </p>
            <p className="mb-4">
              Gerichtsstand für alle Streitigkeiten ist das Gericht am Sitz des Auftragnehmers.
            </p>
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

export default AGB;
