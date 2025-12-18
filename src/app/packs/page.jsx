"use client"
import { useState } from "react";
import PacksPreview from "../../components/PacksPreview";
import { Sparkles, ArrowRight, Menu, X, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, Globe, Send } from "lucide-react";
export default function PacksPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const packs = [
    {
      name: "Pack Visibilité",
      price: "150 000",
      priceEuro: "230€",
      desc: "Idéal pour démarrer votre présence digitale",
      features: [
        "Création de 3 visuels / semaine",
        "Page Facebook activée",
        "Audit rapide de présence en ligne",
        "Community management de base",
        "Rapport mensuel",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Pack Croissance",
      price: "300 000",
      priceEuro: "450€",
      desc: "Pour accélérer votre croissance digitale",
      features: [
        "2 publications professionnelles / semaine",
        "Community manager dédié",
        "1 vidéo professionnelle / mois",
        "Optimisation des campagnes publicitaires",
        "Rapports mensuels détaillés",
      ],
      gradient: "from-[#00D4D4] to-[#B4F34C]",
      popular: true,
    },
    {
      name: "Pack Premium",
      price: "750 000",
      priceEuro: "1 150€",
      desc: "La solution complète pour dominer votre marché",
      features: [
        "3 à 5 publications premium / semaine",
        "Stratégie complète & branding",
        "Vidéos promotionnelles régulières",
        "Automatisation & support prioritaire",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: false,
    },
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            <Sparkles size={20} className="text-[#B4F34C]" />
            Des formules adaptées à chaque besoin
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Nos <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">Packs</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Choisissez le pack qui correspond à vos ambitions et à votre budget. Tous nos packs incluent un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Pricing Packs (shared component) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <PacksPreview packs={packs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos objectifs et choisir l'offre idéale.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all">Demander un devis</a>
              <a href="/services" className="bg-white/20 backdrop-blur-sm text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all">Découvrir nos services</a>
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
