"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Video,
  BarChart3,
  Bot,
  Mail,
  Search,
  Megaphone,
  Code,
  Palette,
  Workflow,
  Menu,X
} from "lucide-react";
import {useState} from "react";
export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainServices = [
    {
      icon: Globe,
      title: "Création de site web express",
      desc: "Sites professionnels livrés en 72h chrono",
      features: [
        "Design responsive et moderne",
        "Optimisé SEO",
        "Interface intuitive",
        "Hébergement inclus",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Campagnes publicitaires Meta",
      desc: "Facebook & Instagram Ads qui convertissent",
      features: [
        "Ciblage précis",
        "Optimisation ROI",
        "A/B Testing",
        "Reporting détaillé",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Stratégie digitale",
      desc: "Plans personnalisés pour votre croissance",
      features: [
        "Audit complet",
        "Plan d'action sur mesure",
        "KPIs définis",
        "Accompagnement continu",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Community Management",
      desc: "Animation professionnelle de vos réseaux",
      features: [
        "Publication régulière",
        "Gestion des commentaires",
        "Engagement communauté",
        "Rapport mensuel",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      desc: "Contenu créatif qui génère de l'engagement",
      features: [
        "Visuels professionnels",
        "Copywriting percutant",
        "Calendrier éditorial",
        "Hashtags stratégiques",
      ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Video,
      title: "Vidéos publicitaires",
      desc: "Production de contenus vidéo impactants",
      features: [
        "Scénarisation",
        "Montage professionnel",
        "Motion design",
        "Formats adaptés",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Conception d'application mobile",
      desc: "Design et développement d'apps mobiles (iOS / Android)",
      features: [
        "UI/UX mobile sur-mesure",
        "Développement natif ou cross-platform",
        "Tests & déploiement",
        "Publication App Store / Play Store",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: BarChart3,
      title: "Data & Performance",
      desc: "Analytics et tableaux de bord sur mesure",
      features: [
        "Google Analytics 4",
        "Tableaux de bord personnalisés",
        "Suivi conversions",
        "Insights actionnables",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "Automatisation",
      desc: "Chatbots et WhatsApp Business API",
      features: [
        "Réponses automatiques",
        "Collecte de leads",
        "Service client 24/7",
        "Intégrations CRM",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const googleServices = [
    {
      icon: Megaphone,
      title: "Google Ads (SEA)",
      desc: "Campagnes sponsorisées Search & Display pour maximiser votre visibilité",
    },
    {
      icon: BarChart3,
      title: "Google Analytics (GA4)",
      desc: "Suivi conversions, analyse trafic et comportement utilisateur avancé",
    },
    {
      icon: Search,
      title: "Google Search Console",
      desc: "Optimisation SEO, indexation et performance des mots-clés",
    },
    {
      icon: Globe,
      title: "Google My Business",
      desc: "Gestion de fiche entreprise et amélioration du référencement local",
    },
  ];

  const automation = [
    {
      icon: Bot,
      title: "Chatbots Messenger / ManyChat",
      desc: "Automatisation des réponses, collecte d'emails, script de vente",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Bot personnalisé",
      desc: "Répondeur automatique, prise de commande, service client 24/7",
    },
    {
      icon: Workflow,
      title: "Tunnel de vente automatisé",
      desc: "Séquence emails + pages de vente pour transformer les prospects en clients",
    },
    {
      icon: Code,
      title: "Formations interactives",
      desc: "Plateformes de e-learning / coaching automatisées",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            alt="services background"
            className="w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl z-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white">
              Nos <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Des solutions digitales complètes pour transformer votre présence en ligne et générer des résultats concrets
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Services <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Principaux</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <a key={index} href={`/services/${slug}`} className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden block">
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="font-bold text-lg sm:text-2xl mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Spécialisation <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Google</span></h2>
            <p className="text-xl text-slate-600">Expertise complète des outils Google pour votre visibilité</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:scale-105">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Automatisation & <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Nouvelles Technologies</span></h2>
            <p className="text-xl text-slate-600">Gagnez du temps et augmentez votre efficacité</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {automation.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:scale-105">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl p-12 text-center shadow-lg">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Prêt à démarrer ?</h2>
            <p className="text-lg text-black/80 mb-6">Discutons de votre projet et trouvons la solution adaptée à vos besoins</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-gray-900 transition-all">Demander un devis</a>
              <a href="/packs" className="bg-white/90 text-slate-900 px-8 py-3 rounded-full font-semibold text-base hover:shadow-md transition-all">Voir nos packs</a>
            </div>
          </div>
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