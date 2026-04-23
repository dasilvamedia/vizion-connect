import { Download, Sun, Moon } from "lucide-react";
import { toast } from "sonner";
import marcioProfile from "@/assets/marcio-profile.png";
import leadConnectLogo from "@/assets/leadconnect-logo.png";
import daSilvaMediaLogo from "@/assets/dasilvamedia-logo.jpg";
import crmCheckLogo from "@/assets/crm-check-logo.png";
import webseitenStudioLogo from "@/assets/webseiten-studio-logo.png";
import { useEffect, useState } from "react";

type Lang = "de" | "pt" | "en" | "fr";

const translations: Record<Lang, Record<string, string>> = {
  de: {
    tagline: "Let's Connect!",
    role: "Marketing Expert • Digital Strategy • Business Growth",
    email: "E-Mail",
    emailDesc: "Schreib mir eine Nachricht",
    call: "Anrufen",
    callDesc: "Direkt durchklingeln",
    dsmDesc: "Marketing & Webdesign Agentur",
    lcDesc: "KI-Agenten für mehr Umsatz",
    erpDesc: "Dein ERP im Schnell-Check",
    wsDesc: "Profi-Webseiten ganz einfach",
    liDesc: "Lass uns vernetzen",
    igDesc: "Folge mir für Insights",
    saveContact: "Kontakt speichern",
    bookTitle: "Termin vereinbaren",
    bookSub: "Wählen Sie einen passenden Zeitpunkt für unser Gespräch",
    toastDownload: "Kontakt wird heruntergeladen!",
    toastCopied: "Link wurde kopiert!",
    toastShareFail: "Teilen nicht möglich",
    langHint: "Sprache wählen",
  },
  pt: {
    tagline: "Vamos nos Conectar!",
    role: "Especialista em Marketing • Estratégia Digital • Crescimento",
    email: "E-mail",
    emailDesc: "Envie-me uma mensagem",
    call: "Ligar",
    callDesc: "Ligue diretamente",
    dsmDesc: "Agência de Marketing & Webdesign",
    lcDesc: "Agentes de IA para mais vendas",
    erpDesc: "Seu ERP em análise rápida",
    wsDesc: "Sites profissionais facilmente",
    liDesc: "Vamos nos conectar",
    igDesc: "Siga-me para insights",
    saveContact: "Salvar contato",
    bookTitle: "Agendar reunião",
    bookSub: "Escolha um horário para nossa conversa",
    toastDownload: "Contato baixando!",
    toastCopied: "Link copiado!",
    toastShareFail: "Compartilhamento não disponível",
    langHint: "Escolher idioma",
  },
  en: {
    tagline: "Let's Connect!",
    role: "Marketing Expert • Digital Strategy • Business Growth",
    email: "Email",
    emailDesc: "Send me a message",
    call: "Call",
    callDesc: "Ring me directly",
    dsmDesc: "Marketing & Webdesign Agency",
    lcDesc: "AI agents for more revenue",
    erpDesc: "Your ERP quick check",
    wsDesc: "Pro websites made easy",
    liDesc: "Let's connect",
    igDesc: "Follow me for insights",
    saveContact: "Save contact",
    bookTitle: "Book a meeting",
    bookSub: "Pick a time that works for our call",
    toastDownload: "Contact downloading!",
    toastCopied: "Link copied!",
    toastShareFail: "Sharing not available",
    langHint: "Choose language",
  },
  fr: {
    tagline: "Connectons-nous !",
    role: "Expert Marketing • Stratégie Digitale • Croissance",
    email: "E-mail",
    emailDesc: "Envoyez-moi un message",
    call: "Appeler",
    callDesc: "Appel direct",
    dsmDesc: "Agence Marketing & Webdesign",
    lcDesc: "Agents IA pour plus de revenus",
    erpDesc: "Votre ERP en un coup d'œil",
    wsDesc: "Sites pros en toute simplicité",
    liDesc: "Connectons-nous",
    igDesc: "Suivez-moi pour des insights",
    saveContact: "Enregistrer le contact",
    bookTitle: "Prendre rendez-vous",
    bookSub: "Choisissez un créneau pour notre échange",
    toastDownload: "Contact en téléchargement !",
    toastCopied: "Lien copié !",
    toastShareFail: "Partage indisponible",
    langHint: "Choisir la langue",
  },
};

const FlagDE = () => (
  <svg viewBox="0 0 5 3" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-hidden="true">
    <rect width="5" height="1" y="0" fill="#000"/>
    <rect width="5" height="1" y="1" fill="#DD0000"/>
    <rect width="5" height="1" y="2" fill="#FFCE00"/>
  </svg>
);
const FlagBR = () => (
  <svg viewBox="0 0 720 504" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-hidden="true">
    <rect width="720" height="504" fill="#009C3B"/>
    <polygon points="360,40 680,252 360,464 40,252" fill="#FFDF00"/>
    <circle cx="360" cy="252" r="100" fill="#002776"/>
    <path d="M270 240 a110 110 0 0 1 180 0" stroke="#fff" strokeWidth="14" fill="none"/>
  </svg>
);
const FlagGB = () => (
  <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-hidden="true">
    <clipPath id="t"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" clipPath="url(#t)"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);
const FlagFR = () => (
  <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-hidden="true">
    <rect width="1" height="2" x="0" fill="#0055A4"/>
    <rect width="1" height="2" x="1" fill="#fff"/>
    <rect width="1" height="2" x="2" fill="#EF4135"/>
  </svg>
);

type LangItem = { code: Lang; Flag: React.FC; label: string };

const LangSwitcher = ({
  lang,
  setLang,
  langs,
  hint,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  langs: LangItem[];
  hint: string;
}) => {
  const [open, setOpen] = useState(false);
  const active = langs.find((l) => l.code === lang)!;
  const others = langs.filter((l) => l.code !== lang);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-lang-switcher]")) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div
      data-lang-switcher
      className="fixed top-4 right-4 z-50 flex items-center gap-2"
    >
      {/* Hint text */}
      <span
        className={`text-[10px] font-medium tracking-wide text-foreground/60 bg-card/70 backdrop-blur-md border border-border/60 rounded-full px-2.5 py-1 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "opacity-0 translate-x-3 pointer-events-none" : "opacity-100 translate-x-0"
        }`}
      >
        {hint}
      </span>

      {/* Flags container */}
      <div className="flex items-center gap-1 bg-card/80 backdrop-blur-md border border-border rounded-full p-1 shadow-lg">
        {/* Other flags - slide in from right when open */}
        <div
          className={`flex items-center gap-1 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "max-w-[180px] opacity-100 mr-0.5" : "max-w-0 opacity-0 mr-0"
          }`}
        >
          {others.map(({ code, Flag, label }, idx) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              aria-label={label}
              title={label}
              style={{ transitionDelay: open ? `${idx * 70}ms` : "0ms" }}
              className={`relative w-6 h-6 rounded-full overflow-hidden flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "translate-x-0" : "translate-x-4"
              }`}
            >
              <Flag />
            </button>
          ))}
        </div>

        {/* Active flag - always visible, click to toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={active.label}
          aria-expanded={open}
          title={active.label}
          className={`relative w-7 h-7 rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-md ${
            open ? "scale-110" : "hover:scale-110"
          }`}
        >
          <active.Flag />
        </button>
      </div>
    </div>
  );
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("marcio-theme");
    if (saved) return saved === "dark";
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("marcio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Light mode" : "Dark mode"}
      className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center text-foreground hover:scale-110 hover:text-[#ff4500] transition-all duration-300"
    >
      <span className="relative w-5 h-5 block">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </span>
    </button>
  );
};

const Contact = () => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("marcio-lang")) as Lang | null;
    return saved && ["de", "pt", "en", "fr"].includes(saved) ? saved : "de";
  });
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("marcio-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

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
    toast.success(t.toastDownload);
  };

  const ActionCard = ({ customIcon, customNode, customIconBg, imgScale, label, description, onClick, href }: any) => {
    const content = (
      <div 
        onClick={onClick}
        className="flex flex-col items-center gap-3 p-6 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-colors overflow-hidden ${customIconBg ? customIconBg : 'bg-[#ff4500]/10 group-hover:bg-[#ff4500]/20'}`}>
          {customNode ? (
            customNode
          ) : (
            <img src={customIcon} alt={label} className={`w-full h-full object-cover ${imgScale || 'scale-110'}`} />
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

  const langs: { code: Lang; Flag: React.FC; label: string }[] = [
    { code: "de", Flag: FlagDE, label: "Deutsch" },
    { code: "pt", Flag: FlagBR, label: "Português" },
    { code: "en", Flag: FlagGB, label: "English" },
    { code: "fr", Flag: FlagFR, label: "Français" },
  ];

  // Unified SVG size for all custom icon nodes
  const iconSvg = "w-11 h-11";

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle (top-left) */}
      <ThemeToggle />

      {/* Language Switcher (top-right) */}
      <LangSwitcher lang={lang} setLang={setLang} langs={langs} hint={t.langHint} />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff6a33] p-1 shadow-lg">
            <img 
              src={marcioProfile}
              alt="Marcio da Silva"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-3">Marcio da Silva</h1>
          <p className="text-xl text-[#ff4500] font-semibold mb-2">{t.tagline}</p>
          <p className="text-muted-foreground">{t.role}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-20">
          <ActionCard
            customIconBg="bg-gradient-to-b from-[#5BC8FA] to-[#1D8EF0]"
            customNode={
              <svg viewBox="0 0 24 24" className={iconSvg} aria-hidden="true">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="white"/>
                <path d="M3.5 7.2l7.6 5.6a1.5 1.5 0 001.8 0l7.6-5.6" fill="none" stroke="#1D8EF0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            label={t.email}
            description={t.emailDesc}
            href={`mailto:${contactInfo.email}`}
          />
          <ActionCard
            customIconBg="bg-gradient-to-b from-[#6EE26E] to-[#1FA81F]"
            customNode={
              <svg viewBox="0 0 24 24" className={iconSvg} fill="white" aria-hidden="true">
                <path d="M19.6 17.1l-2.7-2.7c-.5-.5-1.4-.5-1.9.1l-1 1c-.3.3-.7.4-1.1.2-1.5-.7-2.9-1.7-4.1-2.9-1.2-1.2-2.2-2.6-2.9-4.1-.2-.4-.1-.8.2-1.1l1-1c.6-.6.6-1.4.1-1.9L4.5 1.9c-.5-.6-1.4-.6-2 0L1.1 3.4C.4 4 0 5 .1 6c.4 3.7 2.5 7.7 5.9 11.1 3.4 3.4 7.4 5.6 11.1 5.9 1 .1 2-.3 2.6-1l1.5-1.5c.6-.5.6-1.4 0-1.9z" transform="translate(1 0)"/>
              </svg>
            }
            label={t.call}
            description={t.callDesc}
            href={`tel:${contactInfo.mobilePhone}`}
          />
          <ActionCard
            customIcon={daSilvaMediaLogo}
            imgScale="scale-110"
            label="Da Silva Media"
            description={t.dsmDesc}
            href={contactInfo.website1}
          />
          <ActionCard
            customIcon={leadConnectLogo}
            customIconBg="bg-white"
            imgScale="scale-110"
            label="Lead Connect"
            description={t.lcDesc}
            href={contactInfo.website2}
          />
          <ActionCard
            customIcon={crmCheckLogo}
            customIconBg="bg-white"
            imgScale="scale-110"
            label="ERP Check"
            description={t.erpDesc}
            href="https://erp.dasilvamedia.de/"
          />
          <ActionCard
            customIcon={webseitenStudioLogo}
            customIconBg="bg-white"
            imgScale="scale-110"
            label="Webseiten Studio"
            description={t.wsDesc}
            href="https://online.pistazz.io/"
          />
          <ActionCard
            customIconBg="bg-[#0A66C2]"
            customNode={
              <svg viewBox="0 0 24 24" className={iconSvg} fill="white" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            }
            label="LinkedIn"
            description={t.liDesc}
            href={contactInfo.linkedin}
          />
          <ActionCard
            customIconBg="bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-40% to-[#d62976]"
            customNode={
              <svg viewBox="0 0 24 24" className={iconSvg} fill="white" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            }
            label="Instagram"
            description={t.igDesc}
            href={contactInfo.instagram}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <button
            onClick={generateVCard}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t.saveContact}
          </button>
        </div>

        <div className="mt-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">{t.bookTitle}</h2>
            <p className="text-muted-foreground">{t.bookSub}</p>
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
