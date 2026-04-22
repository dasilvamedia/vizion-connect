import { Calendar, Phone, Mail, User, Linkedin, Instagram, Globe, Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import marcioProfile from "@/assets/marcio-profile.png";
import leadConnectLogo from "@/assets/leadconnect-logo.png";
import daSilvaMediaLogo from "@/assets/dasilvamedia-logo.jpg";
import { useEffect } from "react";

const Contact = () => {
  const contactInfo = {
    name: "Marcio da Silva",
    workPhone: "+49 7361 3893010",
    mobilePhone: "+491742175714",
    email: "marcio@dasilvamedia.de",
    website1: "https://www.dasilvamedia.de",
    website2: "https://lead-connect.de/",
    linkedin: "https://www.linkedin.com/in/marciodasilva23/",
    instagram: "https://www.instagram.com/da.silvamedia/"
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
ORG:Da Silva Media
TEL;TYPE=WORK,VOICE:${contactInfo.workPhone}
TEL;TYPE=CELL,VOICE:${contactInfo.mobilePhone}
EMAIL;TYPE=INTERNET,PREF:${contactInfo.email}
URL;TYPE=Da Silva Media:${contactInfo.website1}
URL;TYPE=Lead Connect:${contactInfo.website2}
URL;TYPE=LinkedIn:${contactInfo.linkedin}
URL;TYPE=Instagram:${contactInfo.instagram}
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

  const handleShare = async () => {
    const shareData = {
      title: `${contactInfo.name} - Kontakt`,
      text: `Kontaktiere ${contactInfo.name}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link wurde kopiert!");
      } catch {
        toast.error("Teilen nicht möglich");
      }
    }
  };

  const ActionCard = ({ icon: Icon, customIcon, customIconBg, label, description, onClick, href }: any) => {
    const content = (
      <div 
        onClick={onClick}
        className="flex flex-col items-center gap-3 p-6 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-colors overflow-hidden ${customIconBg ? customIconBg : 'bg-[#ff4500]/10 group-hover:bg-[#ff4500]/20'}`}>
          {customIcon ? (
            <img src={customIcon} alt={label} className="w-full h-full object-cover" />
          ) : (
            <Icon className="w-9 h-9 text-[#ff4500]" />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground group-hover:text-[#ff4500] transition-colors">{label}</p>
          <p className="text-xs text-foreground/70 mt-1 font-medium">{description}</p>
        </div>
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
              src={marcioProfile}
              alt="Marcio da Silva"
              className="w-full h-full rounded-full object-cover"
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
        <div className="grid grid-cols-2 gap-2 mb-20">
          <ActionCard
            icon={Mail}
            label="E-Mail"
            description="Schreib mir eine Nachricht"
            href={`mailto:${contactInfo.email}`}
          />
          <ActionCard
            icon={Phone}
            label="Anrufen"
            description="Direkt durchklingeln"
            href={`tel:${contactInfo.mobilePhone}`}
          />
          <ActionCard
            customIcon={daSilvaMediaLogo}
            label="Da Silva Media"
            description="Marketing & Webdesign Agentur"
            href={contactInfo.website1}
          />
          <ActionCard
            customIcon={leadConnectLogo}
            customIconBg="bg-white"
            label="Lead Connect"
            description="KI-Agenten für mehr Umsatz"
            href={contactInfo.website2}
          />
          <ActionCard
            icon={Linkedin}
            label="LinkedIn"
            description="Lass uns vernetzen"
            href={contactInfo.linkedin}
          />
          <ActionCard
            icon={Instagram}
            label="Instagram"
            description="Folge mir für Insights"
            href={contactInfo.instagram}
          />
        </div>

        {/* Save Contact & Share Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <button
            onClick={generateVCard}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Kontakt speichern
          </button>
        </div>

        {/* Calendar Section */}
        <div className="mt-8">
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
