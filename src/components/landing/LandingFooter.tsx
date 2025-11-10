export const LandingFooter = () => {
  return (
    <footer id="kontakt" className="bg-card border-t border-border py-12">
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
              <li><a href="/#funktionen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funktionen</a></li>
              <li><a href="/#vorteile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vorteile</a></li>
              <li><a href="/#branche" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Branche</a></li>
              <li><a href="/agenten" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Agenten</a></li>
              <li><a href="/#preise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preise</a></li>
              <li><a href="/#kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</a></li>
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
              <li><a href="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a></li>
              <li><a href="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</a></li>
              <li><a href="/agb" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AGB</a></li>
              <li><a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 lead-connect.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
