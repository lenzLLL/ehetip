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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg shadow-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DigiCore Logo"
                className="h-12 sm:h-14"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                À propos
              </a>
              <a
                href="/services"
                className="text-white hover:text-[#00D4D4] transition font-medium"
              >
                Services
              </a>
              <a
                href="/packs"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Nos Packs
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00D4D4]/50 transition font-semibold"
              >
                Contact
              </a>
            </nav>
             <button
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className="md:hidden text-white p-2"
                        >
                          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
          </div>
            {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <a
                href="/"
                className="block text-white hover:text-[#00D4D4] transition font-medium py-2"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                À propos
              </a>
              <a
                href="/services"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Services
              </a>
              <a
                href="/packs"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Nos Packs
              </a>
              <a
                href="/contact"
                className="block bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 rounded-full text-center font-semibold"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            alt="services background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-[#00D4D4]/20 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B4F34C]/20 rounded-full blur-3xl z-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des solutions digitales complètes pour transformer votre présence
              en ligne et générer des résultats concrets
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Services{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Principaux
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#00D4D4]/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4D4]/0 to-[#B4F34C]/0 group-hover:from-[#00D4D4]/5 group-hover:to-[#B4F34C]/5 transition-all duration-300"></div>
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={36} />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00D4D4] to-[#B4F34C]"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Spécialisation{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Google
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Expertise complète des outils Google pour votre visibilité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Automatisation &{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Nouvelles Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Gagnez du temps et augmentez votre efficacité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {automation.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#B4F34C]/50 transition-all hover:scale-105"
                >
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Icon className="text-white" size={34} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Discutons de votre projet et trouvons la solution adaptée à vos
              besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
              >
                Demander un devis
              </a>
              <a
                href="/packs"
                className="bg-white/20 backdrop-blur-sm text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
              >
                Voir nos packs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
               src="/logo.png"
                 alt="DigiCore Logo"
                className="h-12 mb-6"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                DigiCore Inc - Votre partenaire digital pour créer de la valeur,
                générer des conversions et atteindre vos objectifs business.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Navigation</h3>
              <div className="space-y-3">
                <a
                  href="/"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Accueil
                </a>
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  À propos
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Services
                </a>
                <a
                  href="/packs"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Nos Packs
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>+237 690 91 04 01</p>
                <p>contact@digicoreinc.org</p>
                <p>www.digicoreinc.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>© 2025 DigiCore Inc. Marketing Agency - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
