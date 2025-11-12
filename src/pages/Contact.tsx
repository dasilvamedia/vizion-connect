import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Download, User } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-new.png";

const Contact = () => {
  const contactInfo = {
    name: "Marcio da Silva",
    phone: "073613893011",
    privatePhone: "073613893010",
    email: "marcio.dasilvamedia.de"
  };

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:da Silva;Marcio;;;
TEL;TYPE=WORK,VOICE:${contactInfo.phone}
TEL;TYPE=HOME,VOICE:${contactInfo.privatePhone}
EMAIL:${contactInfo.email}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Marcio_da_Silva.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast.success("Kontakt wird heruntergeladen!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-white/20 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Marcio da Silva - Let's Connect!
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Speichern Sie meinen Kontakt direkt in Ihrem Adressbuch
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Contact Info */}
              <div className="space-y-4 bg-muted/50 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold text-foreground">{contactInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Privat</p>
                    <a 
                      href={`tel:${contactInfo.privatePhone}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.privatePhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Save Contact Button */}
              <Button 
                onClick={generateVCard}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Kontakt speichern
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Klicken Sie auf den Button, um die Kontaktdaten in Ihr Adressbuch zu speichern
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
