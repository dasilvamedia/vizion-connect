import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, Download, User, Linkedin, Instagram, Globe } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-new.png";

const Contact = () => {
  const contactInfo = {
    name: "Marcio da Silva",
    phone: "073613893011",
    privatePhone: "073613893010",
    email: "marcio.dasilvamedia.de",
    linkedin: "https://www.linkedin.com/in/marcio-da-silva",
    instagram: "https://www.instagram.com/dasilvamedia"
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

  const ActionCard = ({ icon: Icon, label, onClick, bgColor, href }: any) => {
    const content = (
      <div 
        onClick={onClick}
        className={`${bgColor} rounded-3xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-lg min-h-[140px]`}
      >
        <div className="w-16 h-16 flex items-center justify-center">
          {Icon}
        </div>
        <p className="text-sm font-medium text-center text-black">{label}</p>
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-32 bg-gradient-to-r from-orange/80 to-orange overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Profile Section */}
      <div className="relative px-6 -mt-16">
        <div className="max-w-md mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">
              <img 
                src={logo}
                alt="Da Silva Media Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-4">DASILVAMEDIA</h1>
            <div className="space-y-1 text-sm">
              <p className="flex items-center justify-center gap-2">
                🚀 <span className="font-semibold">WE LOVE MARKETING</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                💥 Optimiere dein Onlineauftritt
              </p>
              <p className="flex items-center justify-center gap-2">
                👔 Marketingstrategie und Ausführung
              </p>
            </div>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Row 1 */}
            <ActionCard
              icon={<Mail className="w-10 h-10 text-orange" />}
              label="Neukunden Gewinnung"
              bgColor="bg-orange/10"
              href={`mailto:${contactInfo.email}`}
            />
            <ActionCard
              icon={<Globe className="w-10 h-10 text-orange" />}
              label="Homepage"
              bgColor="bg-orange/10"
              href="/"
            />
            <ActionCard
              icon={<User className="w-10 h-10 text-orange" />}
              label="Mitarbeiter Gewinnung"
              bgColor="bg-blue-100"
            />

            {/* Row 2 */}
            <ActionCard
              icon={<Calendar className="w-10 h-10 text-orange" />}
              label="Termin buchen"
              bgColor="bg-amber-100"
              href="/termin"
            />
            <ActionCard
              icon={<User className="w-10 h-10 text-gray-400" />}
              label="Kontakt speichern"
              bgColor="bg-gray-200"
              onClick={generateVCard}
            />
            <ActionCard
              icon={<Linkedin className="w-10 h-10 text-white" />}
              label="LinkedIn Connect"
              bgColor="bg-blue-600"
              href={contactInfo.linkedin}
            />

            {/* Row 3 - Social Media */}
            <ActionCard
              icon={<Instagram className="w-10 h-10 text-white" />}
              label="dasilvamedia"
              bgColor="bg-gradient-to-br from-purple-500 via-pink-500 to-orange"
              href={contactInfo.instagram}
            />
            <ActionCard
              icon={<Linkedin className="w-10 h-10 text-white" />}
              label="LinkedIn"
              bgColor="bg-blue-700"
              href={contactInfo.linkedin}
            />
            <ActionCard
              icon={<Phone className="w-10 h-10 text-white" />}
              label="Telefon"
              bgColor="bg-green-500"
              href={`tel:${contactInfo.phone}`}
            />
          </div>

          {/* Exchange Contact Button */}
          <Button
            onClick={generateVCard}
            className="w-full bg-white border-2 border-black text-black hover:bg-gray-50 rounded-full py-6 text-base font-semibold shadow-lg mb-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Exchange Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
