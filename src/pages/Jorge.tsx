import { Phone, Mail, Linkedin, Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import jorgeProfile from "@/assets/jorge-profile.png";
import { useEffect } from "react";

const Jorge = () => {
  const contactInfo = {
    name: "Jorge Samora Romao",
    mobilePhone: "+491734103128",
    email: "jorge@lead-connect.de",
    linkedin: "https://www.linkedin.com/in/jorgesamora/",
  };

  useEffect(() => {
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
N:Samora Romao;Jorge;;;
TEL;TYPE=CELL,VOICE:${contactInfo.mobilePhone}
EMAIL:${contactInfo.email}
URL:${contactInfo.linkedin}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Jorge_Samora_Romao.vcf";
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
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff6a33] p-1 shadow-lg">
            <img
              src={jorgeProfile}
              alt="Jorge Samora Romao"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-3">Jorge Samora Romao</h1>
          <p className="text-xl text-[#ff4500] font-semibold mb-2">Let's Connect!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-20">
          <ActionCard
            icon={Mail}
            label="E-Mail"
            href={`mailto:${contactInfo.email}`}
          />
          <ActionCard
            icon={Phone}
            label="Anrufen"
            href={`tel:${contactInfo.mobilePhone}`}
          />
          <ActionCard
            icon={Linkedin}
            label="LinkedIn"
            href={contactInfo.linkedin}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <button
            onClick={generateVCard}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Kontakt speichern
          </button>
          <button
            onClick={handleShare}
            className="bg-[#ff4500] hover:bg-[#ff4500]/90 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Seite teilen
          </button>
        </div>

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
              id="Om1xlzYiuOVpbz9JrBzw_jorge"
              title="Booking Calendar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jorge;
