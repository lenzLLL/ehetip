"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
  Target,
  Zap,
  Award,
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  Sparkles,
  Menu,X
} from "lucide-react";
import {useState} from "react";
export default function AboutPage() {
  const mission = [
    {
      icon: Target,
      title: "Présence digitale forte",
      desc: "Construire une identité numérique professionnelle et attractive qui vous démarque",
    },
    {
      icon: Users,
      title: "Clients qualifiés",
      desc: "Gagner des clients via les bons canaux digitaux avec des stratégies ciblées",
    },
    {
      icon: Zap,
      title: "Automatisation",
      desc: "Automatiser la relation client pour plus d'efficacité et de disponibilité 24/7",
    },
    {
      icon: TrendingUp,
      title: "Analyse & amélioration",
      desc: "Suivre et améliorer continuellement vos performances marketing",
    },
    {
      icon: Globe,
      title: "Accessibilité",
      desc: "Rendre le digital simple, accessible et rentable pour tous",
    },
    {
      icon: CheckCircle,
      title: "Conversion",
      desc: "Transformer vos prospects en clients fidèles grâce à des outils performants",
    },
  ];

  const team = [
    {
      name: "DJON LI NGWANG Emmanuel",
      role: "CEO DigiCore Inc et Consultant en stratégie",
      color: "from-[#00D4D4] to-[#B4F34C]",
    },
    {
      name: "Amrawi Abdou",
      role: "Chef de projet digital",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Mahamat Djotta Aurelle",
      role: "Traffic Manager et Spécialiste SEO",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const strengths = [
    {
      icon: Zap,
      title: "Livraison rapide",
      desc: "Logo ou site en 72h maximum",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Tarifs accessibles",
      desc: "Solutions adaptées à tous les budgets",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "Multi-secteurs",
      desc: "Expérience en énergie, éducation, e-commerce, mode, logistique",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Outils modernes",
      desc: "Canva Pro, CapCut, ManyChat, WordPress, WhatsApp API",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const sectors = [
    { name: "Retail & FMCG", icon: "🛒" },
    { name: "Immobilier", icon: "🏢" },
    { name: "Banques/Fintech", icon: "💳" },
    { name: "Éducation/Formation", icon: "🎓" },
    { name: "ONG/Institutions", icon: "🤝" },
    { name: "Tech/Startups", icon: "💻" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
                className="text-white hover:text-[#00D4D4] transition font-medium"
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
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop"
            alt="background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#00D4D4]/20 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B4F34C]/20 rounded-full blur-3xl z-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              À propos de{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                DigiCore
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              DigiCore est une{" "}
              <span className="text-[#00D4D4] font-semibold">
                agence de marketing digital 100% en ligne
              </span>{" "}
              spécialisée dans la création de valeur numérique pour les grandes
              entreprises, PME, entrepreneurs, marques personnelles et
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nous combinons stratégie, design, technologie et automatisation
              pour générer de la visibilité, des conversions et surtout des
              résultats mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#00D4D4]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4D4] to-[#B4F34C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Atouts
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Ce qui nous rend uniques et efficaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${strength.gradient} flex items-center justify-center mb-6`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">
                      {strength.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{strength.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Équipe
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Des experts passionnés dédiés à votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4D4]/0 to-[#B4F34C]/0 group-hover:from-[#00D4D4]/10 group-hover:to-[#B4F34C]/10 transition-all"></div>
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-black mb-6 mx-auto group-hover:scale-110 transition-transform`}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-center leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Secteurs{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Prioritaires
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Notre expertise couvre de multiples industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#00D4D4]/50 transition-all hover:scale-105 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                  {sector.icon}
                </div>
                <div className="font-semibold text-white">{sector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Travaillons ensemble !
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Découvrez comment DigiCore peut transformer votre présence
              digitale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
              >
                Nous contacter
              </a>
              <a
                href="/services"
                className="bg-white/20 backdrop-blur-sm text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
              >
                Voir nos services
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
