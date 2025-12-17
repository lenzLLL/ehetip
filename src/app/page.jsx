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

export default function DigiCorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const services = [
    {
      icon: Target,
      title: "Campagnes publicitaires Meta",
      desc: "Facebook & Instagram Ads ciblées avec ROI optimisé",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Stratégie digitale",
      desc: "Plans personnalisés basés sur vos objectifs business",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community Management",
      desc: "Animation professionnelle de vos réseaux sociaux",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Video,
      title: "Vidéos publicitaires",
      desc: "Production de contenus vidéo impactants",
      color: "from-indigo-500 to-blue-500",
    },
      {
        icon: Smartphone,
        title: "Conception d'application mobile",
        desc: "Design UI/UX et développement d'apps iOS & Android",
        color: "from-indigo-500 to-purple-500",
      },
    {
      icon: Bot,
      title: "Automatisation",
      desc: "Chatbots intelligents et WhatsApp Business API",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Création de site web",
      desc: "Sites vitrines et e-commerce optimisés pour la conversion",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Création graphique",
      desc: "Identité visuelle professionnelle et logos uniques",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    { value: "72h", label: "Livraison express", icon: Clock },
    { value: "100%", label: "Digital", icon: Rocket },
    { value: "6+", label: "Secteurs d'activité", icon: Target },
    { value: "24/7", label: "Support client", icon: Award },
  ];

  const allProjects = [
    {
      name: "GreenPowerSolar",
      category: "energie",
      categoryLabel: "Énergie",
      desc: "Site vitrine + WhatsApp bot",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    },
    {
      name: "SmartEdu",
      category: "education",
      categoryLabel: "Éducation",
      desc: "Logo + page Instagram + vidéo TikTok",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    },
    {
      name: "LogisPlus",
      category: "logistique",
      categoryLabel: "Logistique",
      desc: "Chatbot + 4 campagnes Facebook",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    },
    {
      name: "AfricaStyle",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      desc: "E-commerce + automation Messenger",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    },
    {
      name: "HealthPlus Clinic",
      category: "sante",
      categoryLabel: "Santé",
      desc: "Site web + Google Ads + SEO",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    },
    {
      name: "TechStartup Inc",
      category: "tech",
      categoryLabel: "Tech",
      desc: "Branding complet + stratégie digitale",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
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

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  const packs = [
    {
      name: "Pack Visibilité",
      price: "150 000",
      priceEuro: "230€",
      desc: "Idéal pour démarrer votre présence digitale",
      features: [
        "Création de 3 visuels/semaine",
        "1 page Facebook animée",
        "Audit rapide de présence en ligne",
        "Community Manager",
        "Rapport mensuel basique",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Pack Croissance",
      price: "300 000",
      priceEuro: "450€",
      desc: "Pour accélérer votre croissance digitale",
      popular: true,
      features: [
        "2 Publications professionnelles/semaine",
        "Community Manager dédié",
        "1 vidéo professionnelle/mois",
        "1 campagne sponsorisée ciblée",
        "Visuels pro + stratégie hashtags",
        "Rapport mensuel détaillé avec insights",
      ],
      gradient: "from-[#00D4D4] to-[#B4F34C]",
    },
    {
      name: "Pack Premium",
      price: "750 000",
      priceEuro: "1 150€",
      desc: "La solution complète pour dominer votre marché",
      features: [
        "3 à 5 publications premium/semaine",
        "Gestion complète et optimisation du site web",
        "CRM configuré et personnalisé",
        "Community manager dédié à temps plein",
        "2 campagnes sponsorisées optimisées",
        "2 vidéos professionnelles/mois",
        "WhatsApp bot intelligent offert",
        "Support prioritaire 24/7",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer:
        "Nos délais varient selon le service : un logo ou une identité visuelle en 72h maximum, un site web en 5-7 jours, et une stratégie digitale complète en 2 semaines. Nous proposons également des formules express pour les projets urgents.",
    },
    {
      question: "Comment se passe la collaboration ?",
      answer:
        "Tout se fait en ligne ! Après un premier échange pour comprendre vos besoins, nous vous envoyons un devis. Une fois validé, nous travaillons par étapes avec des points de validation réguliers via WhatsApp, email ou visio.",
    },
    {
      question: "Proposez-vous des formules mensuelles ?",
      answer:
        "Oui ! Nous avons des packs mensuels pour le community management, les campagnes publicitaires, et l'automatisation. Consultez notre page 'Nos Packs' pour découvrir toutes nos offres récurrentes.",
    },
    {
      question: "Travaillez-vous avec des petites entreprises ?",
      answer:
        "Absolument ! Nous accompagnons aussi bien les grandes entreprises que les PME, startups et entrepreneurs. Nos tarifs sont adaptés à tous les budgets et nous proposons des solutions évolutives.",
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer:
        "Nous utilisons les meilleurs outils du marché : Canva Pro pour le design, Google Analytics et Meta Business Suite pour l'analyse, ManyChat et WhatsApp API pour l'automatisation, WordPress pour les sites web, et bien d'autres selon vos besoins.",
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
                className="h-12  sm:h-14"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-white hover:text-[#00D4D4] transition font-medium"
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
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-96 h-96 bg-[#00D4D4]/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-0 w-96 h-96 bg-[#B4F34C]/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Zap size={20} className="text-[#00D4D4]" />
              Agence Marketing Digital 100% en ligne
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#00D4D4] via-[#B4F34C] to-[#00D4D4] bg-clip-text text-transparent">
                DigiCore Inc
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-[#B4F34C] font-bold mb-4">
              Marketing Agency
            </p>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Créons ensemble votre{" "}
              <span className="text-[#00D4D4] font-semibold">
                présence digitale
              </span>{" "}
              qui convertit. Stratégie, design, technologie et automatisation
              pour des{" "}
              <span className="text-[#B4F34C] font-semibold">
                résultats mesurables
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="/packs"
                className="group bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#00D4D4]/50 transition-all flex items-center justify-center gap-3"
              >
                Découvrir nos offres
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all"
              >
                Demander un devis
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }
          .animate-pulse {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-black" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions digitales complètes pour propulser votre croissance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#00D4D4]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4D4]/0 to-[#B4F34C]/0 group-hover:from-[#00D4D4]/10 group-hover:to-[#B4F34C]/10 transition-all duration-300"></div>
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all group"
            >
              Voir tous nos services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Showcase with Tabs */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Projets{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Récents
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Découvrez comment nous transformons les entreprises
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="inline-block bg-[#00D4D4] text-black px-4 py-1 rounded-full text-sm font-bold mb-3 w-fit">
                    {project.categoryLabel}
                  </div>
                  <h3 className="text-3xl font-black mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Packs Preview (inserted) */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-28">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <Sparkles size={20} className="text-[#B4F34C]" />
                Des formules adaptées à chaque besoin
              </div>
              <h2 className="text-5xl sm:text-6xl font-black mb-8">
                Nos {" "}
                <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                  Packs
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choisissez le pack qui correspond à vos ambitions et à votre
                budget. Tous nos packs incluent un accompagnement personnalisé.
              </p>
            </div>
            <div className="pt-6 grid md:grid-cols-3 gap-8">
              {packs.map((pack, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    pack.popular ? "md:-mt-8 md:scale-105" : ""
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Plus Populaire
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border ${
                      pack.popular
                        ? "border-[#00D4D4] shadow-2xl shadow-[#00D4D4]/20"
                        : "border-white/10 hover:border-white/30"
                    } transition-all duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4D4]/0 to-[#B4F34C]/0 group-hover:from-[#00D4D4]/5 group-hover:to-[#B4F34C]/5 rounded-3xl transition-all"></div>

                    <div className="relative">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pack.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Sparkles className="text-white" size={36} />
                      </div>

                      <h3 className="text-3xl font-black mb-2 text-white">
                        {pack.name}
                      </h3>
                      <p className="text-gray-400 mb-6">{pack.desc}</p>

                      <div className="mb-8">
                        <div className="flex items-end gap-2 mb-2">
                          <span className="text-5xl font-black bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                            {pack.price}
                          </span>
                          <span className="text-gray-400 mb-2">FCFA</span>
                        </div>
                        <div className="text-xl text-gray-300 font-semibold">
                          {pack.priceEuro} / mois
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {pack.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle
                              className="text-[#B4F34C] flex-shrink-0 mt-1"
                              size={22}
                            />
                            <span className="text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="/contact"
                        className={`block text-center py-4 rounded-full font-bold text-lg transition-all group ${
                          pack.popular
                            ? "bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black hover:shadow-xl hover:shadow-[#00D4D4]/30"
                            : "border-2 border-white/30 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Choisir ce pack
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Questions{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Fréquentes
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Tout ce que vous devez savoir sur nos services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all"
                >
                  <span className="font-bold text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp
                      size={24}
                      className="text-[#00D4D4] flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={24}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
                Prêt à transformer votre présence digitale ?
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Rejoignez les entreprises qui font confiance à DigiCore pour
                leur croissance digitale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-3 group"
                >
                  Démarrer mon projet
                  <Rocket
                    size={24}
                    className="group-hover:translate-y-[-4px] transition-transform"
                  />
                </a>
                <a
                  href="/about"
                  className="bg-white/20 backdrop-blur-sm text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
                >
                  En savoir plus
                </a>
              </div>
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
