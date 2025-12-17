"use client"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Menu,X
} from "lucide-react";
import {useState} from "react"
export default function PacksPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg shadow-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
      src="/logo.png"                alt="DigiCore Logo"
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
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Services
              </a>
              <a
                href="/packs"
                className="text-white hover:text-[#00D4D4] transition font-medium"
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
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
            alt="packs background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00D4D4]/20 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B4F34C]/20 rounded-full blur-3xl z-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4D4]/20 to-[#B4F34C]/20 border border-[#00D4D4]/50 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles size={20} className="text-[#B4F34C]" />
              Des formules adaptées à chaque besoin
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                Packs
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choisissez le pack qui correspond à vos ambitions et à votre
              budget. Tous nos packs incluent un accompagnement personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Custom Solutions */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Besoin d'une solution{" "}
            <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
              sur mesure
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Aucun de ces packs ne correspond exactement à vos besoins ? Nous
            créons des solutions personnalisées adaptées à vos objectifs
            spécifiques.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all group"
          >
            Discuter de mon projet
            <ArrowRight
              size={24}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">
            Questions{" "}
            <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="font-bold text-xl mb-3 text-white">
                Puis-je changer de pack en cours de route ?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Absolument ! Vous pouvez upgrader ou modifier votre pack à tout
                moment selon l'évolution de vos besoins.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="font-bold text-xl mb-3 text-white">
                Y a-t-il un engagement minimum ?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Nous recommandons un engagement de 3 mois minimum pour voir des
                résultats concrets, mais vous restez libre de vos choix.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="font-bold text-xl mb-3 text-white">
                Les rapports sont-ils inclus dans tous les packs ?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Oui ! Tous nos packs incluent des rapports réguliers pour suivre
                vos performances et ajuster la stratégie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] rounded-3xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">
              Prêt à démarrer votre transformation digitale ?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos objectifs et
              choisir le pack idéal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all"
              >
                Demander un devis
              </a>
              <a
                href="/services"
                className="bg-white/20 backdrop-blur-sm text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
              >
                Découvrir nos services
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
               src="/logo.png"                alt="DigiCore Logo"
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
