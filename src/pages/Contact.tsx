import { Calendar, Phone, Mail, User, Linkedin, Instagram, Globe, Download } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-new.png";
import { useEffect } from "react";

const Contact = () => {
  const contactInfo = {
    name: "Marcio da Silva",
    phone: "073613893011",
    privatePhone: "073613893010",
    email: "marcio@dasilvamedia.de",
    linkedin: "https://www.linkedin.com/in/marcio-da-silva",
    instagram: "https://www.instagram.com/dasilvamedia"
  };

  useEffect(() => {
    // Load the booking form script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:da Silva;Marcio;;;
TEL;TYPE=WORK,VOICE:${contactInfo.phone}
TEL;TYPE=HOME,VOICE:${contactInfo.privatePhone}
EMAIL:${contactInfo.email}
URL:${contactInfo.linkedin}
URL:${contactInfo.instagram}
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

  const ActionCard = ({ icon: Icon, label, onClick, href }: any) => {
    const content = (
      <div 
        onClick={onClick}
        className="flex flex-col items-center gap-4 p-8 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#ff4500]/10 group-hover:bg-[#ff4500]/20 transition-colors">
          <Icon className="w-8 h-8 text-[#ff4500]" />
        </div>
        <p className="text-sm font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">{label}</p>
      </div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Section */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff6a33] p-1 shadow-lg">
            <img 
              src={logo}
              alt="Da Silva Media Logo"
              className="w-full h-full rounded-full object-cover bg-white p-2"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-3">Marcio da Silva</h1>
          <p className="text-xl text-[#ff4500] font-semibold mb-2">Let's Connect!</p>
          <p className="text-muted-foreground">Marketing Expert • Digital Strategy • Business Growth</p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-20">
          <ActionCard
            icon={Mail}
            label="E-Mail"
            href={`mailto:${contactInfo.email}`}
          />
          <ActionCard
            icon={Phone}
            label="Anrufen"
            href={`tel:${contactInfo.phone}`}
          />
          <ActionCard
            icon={Download}
            label="Kontakt speichern"
            onClick={generateVCard}
          />
          <ActionCard
            icon={Globe}
            label="Website"
            href="/"
          />
          <ActionCard
            icon={Calendar}
            label="Termin buchen"
            href="/termin"
          />
          <ActionCard
            icon={Linkedin}
            label="LinkedIn"
            href={contactInfo.linkedin}
          />
          <ActionCard
            icon={Instagram}
            label="Instagram"
            href={contactInfo.instagram}
          />
          <ActionCard
            icon={User}
            label="Mehr erfahren"
            href="/"
          />
        </div>

        {/* Calendar Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Termin vereinbaren</h2>
            <p className="text-muted-foreground">Wählen Sie einen passenden Zeitpunkt für unser Gespräch</p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/Om1xlzYiuOVpbz9JrBzw" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
              scrolling="no" 
              id="Om1xlzYiuOVpbz9JrBzw_1762908646402"
              title="Booking Calendar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
