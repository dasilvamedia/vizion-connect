import { Calendar, Phone, Mail, User, Linkedin, Instagram, Globe, Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import marcioProfile from "@/assets/marcio-profile.png";
import leadConnectLogo from "@/assets/leadconnect-logo.png";
import daSilvaMediaLogo from "@/assets/dasilvamedia-logo.jpg";
import crmCheckLogo from "@/assets/crm-check-logo.png";
import webseitenStudioLogo from "@/assets/webseiten-studio-logo.png";
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

  const ActionCard = ({ icon: Icon, customIcon, customNode, customIconBg, imgScale, label, description, onClick, href }: any) => {
    const content = (
      <div 
        onClick={onClick}
        className="flex flex-col items-center gap-3 p-6 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-colors overflow-hidden ${customIconBg ? customIconBg : 'bg-[#ff4500]/10 group-hover:bg-[#ff4500]/20'}`}>
          {customNode ? (
            customNode
          ) : customIcon ? (
            <img src={customIcon} alt={label} className={`w-full h-full object-cover ${imgScale || 'scale-150'}`} />
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
            customIconBg="bg-gradient-to-b from-[#5BC8FA] to-[#1D8EF0]"
            customNode={
              <svg viewBox="0 0 24 24" className="w-12 h-12" aria-hidden="true">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="white"/>
                <path d="M3.5 7.2l7.6 5.6a1.5 1.5 0 001.8 0l7.6-5.6" fill="none" stroke="#1D8EF0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            label="E-Mail"
            description="Schreib mir eine Nachricht"
            href={`mailto:${contactInfo.email}`}
          />
          <ActionCard
            customIconBg="bg-gradient-to-b from-[#6EE26E] to-[#1FA81F]"
            customNode={
              <svg viewBox="0 0 24 24" className="w-11 h-11" fill="white" aria-hidden="true">
                <path d="M19.6 17.1l-2.7-2.7c-.5-.5-1.4-.5-1.9.1l-1 1c-.3.3-.7.4-1.1.2-1.5-.7-2.9-1.7-4.1-2.9-1.2-1.2-2.2-2.6-2.9-4.1-.2-.4-.1-.8.2-1.1l1-1c.6-.6.6-1.4.1-1.9L4.5 1.9c-.5-.6-1.4-.6-2 0L1.1 3.4C.4 4 0 5 .1 6c.4 3.7 2.5 7.7 5.9 11.1 3.4 3.4 7.4 5.6 11.1 5.9 1 .1 2-.3 2.6-1l1.5-1.5c.6-.5.6-1.4 0-1.9z" transform="translate(1 0)"/>
              </svg>
            }
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
            imgScale="scale-125"
            label="Lead Connect"
            description="KI-Agenten für mehr Umsatz"
            href={contactInfo.website2}
          />
          <ActionCard
            customIcon={crmCheckLogo}
            customIconBg="bg-white"
            imgScale="scale-110"
            label="ERP Check"
            description="Dein ERP im Schnell-Check"
            href="https://erp.dasilvamedia.de/"
          />
          <ActionCard
            customIcon={webseitenStudioLogo}
            customIconBg="bg-white"
            imgScale="scale-110"
            label="Webseiten Studio"
            description="Profi-Webseiten ganz einfach"
            href="https://online.pistazz.io/"
          />
          <ActionCard
            customIconBg="bg-[#0A66C2]"
            customNode={
              <svg viewBox="0 0 24 24" className="w-11 h-11" fill="white" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            }
            label="LinkedIn"
            description="Lass uns vernetzen"
            href={contactInfo.linkedin}
          />
          <ActionCard
            customIconBg="bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-40% to-[#d62976]"
            customNode={
              <svg viewBox="0 0 24 24" className="w-11 h-11" fill="white" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            }
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
