"use client";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  Video,
  Bot,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Rocket,
  Award,
  Clock,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import PacksPreview from "../components/PacksPreview";
import ServiceImage from "../components/ServiceImage";
import ProjectCard from "../components/ProjectCard";

export default function DigiCorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const services = [
    { icon: Target, title: "Campagnes publicitaires Meta", desc: "Facebook & Instagram Ads ciblées avec ROI optimisé", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Stratégie digitale", desc: "Plans personnalisés basés sur vos objectifs business", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Community Management", desc: "Animation professionnelle de vos réseaux sociaux", color: "from-orange-500 to-red-500" },
    { icon: Video, title: "Vidéos publicitaires", desc: "Production de contenus vidéo impactants", color: "from-indigo-500 to-blue-500" },
    { icon: Smartphone, title: "Conception d'application mobile", desc: "Design UI/UX et développement d'apps iOS & Android", color: "from-indigo-500 to-purple-500" },
    { icon: Bot, title: "Automatisation", desc: "Chatbots intelligents et WhatsApp Business API", color: "from-teal-500 to-cyan-500" },
    { icon: Globe, title: "Création de site web", desc: "Sites vitrines et e-commerce optimisés pour la conversion", color: "from-blue-500 to-cyan-500" },
    { icon: Sparkles, title: "Création graphique", desc: "Identité visuelle professionnelle et logos uniques", color: "from-pink-500 to-rose-500" },
  ];

  const stats = [
    { value: "72h", label: "Livraison express", icon: Clock },
    { value: "100%", label: "Digital", icon: Rocket },
    { value: "6+", label: "Secteurs d'activité", icon: Target },
    { value: "24/7", label: "Support client", icon: Award },
  ];

  const allProjects = [
    { name: "GreenPowerSolar", category: "energie", categoryLabel: "Énergie", desc: "Site vitrine + WhatsApp bot", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" },
    { name: "SmartEdu", category: "education", categoryLabel: "Éducation", desc: "Logo + page Instagram + vidéo TikTok", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" },
    { name: "LogisPlus", category: "logistique", categoryLabel: "Logistique", desc: "Chatbot + 4 campagnes Facebook", image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop" },
    { name: "AfricaStyle", category: "ecommerce", categoryLabel: "E-commerce", desc: "E-commerce + automation Messenger", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { name: "HealthPlus Clinic", category: "sante", categoryLabel: "Santé", desc: "Site web + Google Ads + SEO", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" },
    { name: "TechStartup Inc", category: "tech", categoryLabel: "Tech", desc: "Branding complet + stratégie digitale", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
  ];

  const tabs = [
    { id: "all", label: "Tous les projets" },
    { id: "energie", label: "Énergie" },
    { id: "education", label: "Éducation" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "tech", label: "Tech" },
    { id: "sante", label: "Santé" },
    { id: "logistique", label: "Logistique" },
  ];

  const filteredProjects = activeTab === "all" ? allProjects : allProjects.filter((p) => p.category === activeTab);

  const packs = [
    { name: "Pack Visibilité", price: "150 000", priceEuro: "230€", desc: "Idéal pour démarrer votre présence digitale", features: ["Création de 3 visuels/semaine","1 page Facebook animée","Audit rapide de présence en ligne","Community Manager","Rapport mensuel basique"], gradient: "from-blue-500 to-cyan-500", popular: false },
    { name: "Pack Croissance", price: "300 000", priceEuro: "450€", desc: "Pour accélérer votre croissance digitale", popular: true, features: ["2 Publications professionnelles/semaine","Community Manager dédié","1 vidéo professionnelle/mois","1 campagne sponsorisée ciblée","Visuels pro + stratégie hashtags","Rapport mensuel détaillé avec insights"], gradient: "from-[#00D4D4] to-[#B4F34C]" },
    { name: "Pack Premium", price: "750 000", priceEuro: "1 150€", desc: "La solution complète pour dominer votre marché", features: ["3 à 5 publications premium/semaine","Gestion complète et optimisation du site web","CRM configuré et personnalisé","Community manager dédié à temps plein","2 campagnes sponsorisées optimisées","2 vidéos professionnelles/mois","WhatsApp bot intelligent offert","Support prioritaire 24/7"], gradient: "from-purple-500 to-pink-500", popular: false },
  ];

  const faqs = [
    { question: "Quels sont vos délais de livraison ?", answer: "Nos délais varient selon le service : un logo ou une identité visuelle en 72h maximum, un site web en 5-7 jours, et une stratégie digitale complète en 2 semaines. Nous proposons également des formules express pour les projets urgents." },
    { question: "Comment se passe la collaboration ?", answer: "Tout se fait en ligne ! Après un premier échange pour comprendre vos besoins, nous vous envoyons un devis. Une fois validé, nous travaillons par étapes avec des points de validation réguliers via WhatsApp, email ou visio." },
    { question: "Proposez-vous des formules mensuelles ?", answer: "Oui ! Nous avons des packs mensuels pour le community management, les campagnes publicitaires, et l'automatisation. Consultez notre page 'Nos Packs' pour découvrir toutes nos offres récurrentes." },
    { question: "Travaillez-vous avec des petites entreprises ?", answer: "Absolument ! Nous accompagnons aussi bien les grandes entreprises que les PME, startups et entrepreneurs. Nos tarifs sont adaptés à tous les budgets et nous proposons des solutions évolutives." },
    { question: "Quels outils utilisez-vous ?", answer: "Nous utilisons les meilleurs outils du marché : Canva Pro pour le design, Google Analytics et Meta Business Suite pour l'analyse, ManyChat et WhatsApp API pour l'automatisation, WordPress pour les sites web, et bien d'autres selon vos besoins." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="DigiCore Logo" className="h-12 sm:h-14" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-900 hover:text-[#00D4D4] font-medium transition">Accueil</a>
            <a href="/about" className="text-gray-700 hover:text-[#00D4D4] font-medium transition">À propos</a>
            <a href="/services" className="text-gray-700 hover:text-[#00D4D4] font-medium transition">Services</a>
            <a href="/packs" className="text-gray-700 hover:text-[#00D4D4] font-medium transition">Nos Packs</a>
            <a href="/contact" className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">Contact</a>
          </nav>
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-4 relative z-50 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <a href="/" className="block text-gray-900 hover:text-[#00D4D4] py-2">Accueil</a>
            <a href="/about" className="block text-gray-700 hover:text-[#00D4D4] py-2">À propos</a>
            <a href="/services" className="block text-gray-700 hover:text-[#00D4D4] py-2">Services</a>
            <a href="/packs" className="block text-gray-700 hover:text-[#00D4D4] py-2">Nos Packs</a>
            <a href="/contact" className="block bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 rounded-full text-center font-semibold">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 md:pt-36 md:pb-24 max-h-[520px] md:max-h-none overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Background image — replace URL with a local file in /public if desired */}
          <img
            src="/hero.jpg"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* Gradient overlay between image and text to improve contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-24 left-0 w-56 h-56 md:w-96 md:h-96 bg-[#00D4D4]/18 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-36 right-0 w-56 h-56 md:w-96 md:h-96 bg-[#B4F34C]/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-0 left-1/3 w-56 h-56 md:w-96 md:h-96 bg-[#B4F34C]/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative text-center z-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
            <Zap size={20} className="text-[#00D4D4]" /> Agence Marketing Digital 100% en ligne
          </div>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black mb-6 text-white" style={{ textShadow: '0 6px 20px rgba(0,0,0,0.6)' }}>
            DigiCore Inc
          </h1>
          <p className="text-lg sm:text-2xl font-bold mb-4 text-white/90" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>Marketing Agency</p>
          <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-white/80" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.45)' }}>
            Créons ensemble votre <span className="font-semibold text-white">présence digitale</span> qui convertit. Stratégie, design, technologie et automatisation pour des <span className="font-semibold text-white">résultats mesurables</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16">
            <a href="/packs" className="group bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
              Découvrir nos offres <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="/contact" className="border-2 border-gray-900 text-gray-900 px-6 py-3 sm:px-10 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-gray-900 hover:text-white transition-all">Demander un devis</a>
          </div>
        </div>
        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          .animate-pulse { animation: pulse 4s cubic-bezier(0.4,0,0.6,1) infinite; }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-emerald-100 bg-emerald-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group min-w-[80px] sm:min-w-[120px] px-2 overflow-hidden">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-black" />
                </div>
                <div className="text-2xl sm:text-5xl font-black text-gray-900 mb-1 sm:mb-2 whitespace-nowrap truncate">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium whitespace-nowrap truncate">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Nos <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Des solutions digitales complètes pour propulser votre croissance</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <a key={index} href={`/services/${slug}`} className="group relative bg-white shadow-md rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 block">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <a href="/services" className="inline-flex items-center gap-3 bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all group">
              Voir tous nos services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* La suite (Projects, Packs, FAQ, CTA, Footer) doit être adaptée de la même manière */}
      {/* Pour ne pas surcharger ce message, je peux te fournir **le code complet entier Light Theme prêt à copier** dans un fichier séparé si tu veux. */}
    <section className="py-24 px-4 bg-emerald-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl sm:text-6xl font-black mb-6">
        Nos <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Projets</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">Découvrez nos réalisations dans différents secteurs</p>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === tab.id ? "bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black" : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-200"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
</section>

{/* Packs Section (shared component) */}
<section className="py-24 px-4 bg-emerald-50">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-5xl sm:text-6xl font-black mb-6">
      Nos <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Packs</span>
    </h2>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto">Choisissez la formule qui correspond à vos besoins</p>
  </div>

  <div className="max-w-7xl mx-auto">
    <PacksPreview packs={packs} />
  </div>
</section>

{/* FAQ Section */}
<section className="py-24 px-4 bg-emerald-50">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-5xl sm:text-6xl font-black mb-6">
      Foire aux <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Questions</span>
    </h2>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto">Nous répondons à toutes vos interrogations</p>
  </div>

  <div className="max-w-4xl mx-auto space-y-4">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-white p-6 rounded-3xl shadow-md border border-gray-200">
        <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full flex justify-between items-center font-semibold text-gray-900 text-lg">
          {faq.question}
          {openFaqIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        {openFaqIndex === index && <p className="mt-4 text-gray-700">{faq.answer}</p>}
      </div>
    ))}
  </div>
</section>

{/* CTA Section */}
<section className="py-24 px-4 bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl sm:text-6xl font-black mb-6">Prêt à booster votre présence digitale ?</h2>
    <p className="text-xl mb-8">Contactez-nous aujourd’hui et transformez vos idées en résultats concrets !</p>
    <a href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold bg-black text-[#00D4D4] hover:bg-gray-900 transition-all">
      Demander un devis <ArrowRight size={24} />
    </a>
  </div>
</section>

{/* Footer */}
  <footer className="border-t border-slate-200 bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="DigiCore Logo" className="h-12 mb-6" />
              <p className="text-slate-600 mb-6 max-w-md">DigiCore Inc - Votre partenaire digital pour créer de la valeur, générer des conversions et atteindre vos objectifs business.</p>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">Navigation</h3>
              <div className="space-y-3">
                <a href="/" className="block text-slate-600 hover:text-emerald-600 transition">Accueil</a>
                <a href="/about" className="block text-slate-600 hover:text-emerald-600 transition">À propos</a>
                <a href="/services" className="block text-slate-600 hover:text-emerald-600 transition">Services</a>
                <a href="/packs" className="block text-slate-600 hover:text-emerald-600 transition">Nos Packs</a>
                <a href="/contact" className="block text-slate-600 hover:text-emerald-600 transition">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">Contact</h3>
              <div className="space-y-3 text-slate-600">
                <p>+237 690 91 04 01</p>
                <p>contact@digicoreinc.org</p>
                <p>www.digicoreinc.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-slate-500">
            <p>© 2025 DigiCore Inc. Marketing Agency - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
