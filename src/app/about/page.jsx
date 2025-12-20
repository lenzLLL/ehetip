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

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop" alt="background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-50/60"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#00D4D4]/18 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B4F34C]/18 rounded-full blur-3xl z-30"></div>
        </div>

          <div className="max-w-7xl mx-auto relative text-center z-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm mx-auto">
              <Zap size={18} className="text-[#00D4D4]" /> Agence marketing digitale 100% en ligne
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              À propos de <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">DigiCore</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              DigiCore est une <span className="text-[#00D4D4] font-semibold">agence de marketing digital 100% en ligne</span> spécialisée dans la création de valeur numérique pour entreprises, PME, entrepreneurs et institutions.
            </p>
          </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Notre <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Mission</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Nous combinons stratégie, design, technologie et automatisation pour générer visibilité, conversions et résultats mesurables.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mission.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4D4] to-[#B4F34C] flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
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
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Nos <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Atouts</span></h2>
            <p className="text-xl text-gray-700">Ce qui nous rend uniques et efficaces</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${strength.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{strength.title}</h3>
                  <p className="text-gray-700 text-sm">{strength.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Notre <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Équipe</span></h2>
            <p className="text-xl text-gray-700">Des experts passionnés dédiés à votre succès</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-bold`}>{member.name.charAt(0)}</div>
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-700 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Secteurs <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Prioritaires</span></h2>
            <p className="text-xl text-gray-700">Notre expertise couvre de multiples industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-all hover:scale-105 text-center">
                <div className="text-4xl mb-3">{sector.icon}</div>
                <div className="font-semibold text-gray-900">{sector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 text-center shadow-lg">
              <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Travaillons ensemble !</h2>
              <p className="text-lg text-black/80 mb-6 max-w-2xl mx-auto">Découvrez comment DigiCore peut transformer votre présence digitale</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-gray-900 transition-all">Nous contacter</a>
                <a href="/services" className="bg-white/20 backdrop-blur-sm text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-white/30 transition-all">Voir nos services</a>
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