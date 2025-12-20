"use client"
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function PacksPreview({ packs }) {
  const localPacks = packs || [
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

    // mobile carousel handled by react-responsive-carousel

  return (
    <div className="pt-6">
      {/* Mobile carousel using react-responsive-carousel */}
      <div className="md:hidden px-2">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          swipeable
          emulateTouch
          centerMode
          centerSlidePercentage={80}
        >
          {localPacks.map((pack, index) => (
            <div key={index} className="p-2">
              <div className={`h-full bg-white rounded-2xl p-4 border ${pack.popular ? "border-4 border-[#00D4D4] shadow-lg" : "border-gray-200"}`}>
                {pack.popular && (
                  <div className="mb-2">
                    <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg inline-block">
                      ⭐ Plus Populaire
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg ${pack.gradient} flex items-center justify-center`}>
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-gray-900">{pack.name}</h3>
                    <p className="text-sm text-gray-700">{pack.desc}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black text-gray-900">{pack.price}</span>
                    <span className="text-gray-600">FCFA</span>
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">{pack.priceEuro} / mois</div>
                </div>

                <div className="mt-3 space-y-2">
                  {pack.features.slice(0,3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-[#00D4D4] flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className={`mt-4 inline-flex items-center justify-center w-full text-center py-2 rounded-full font-bold text-sm ${pack.popular ? "bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black" : "border-2 border-gray-300 text-gray-900 hover:bg-gray-100"}`}>
                  <span className="flex items-center justify-center gap-2">Choisir <ArrowRight size={16} /></span>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {localPacks.map((pack, index) => (
          <div key={index} className={`relative group ${pack.popular ? "md:-mt-8 md:scale-105" : ""}`}>
            {pack.popular && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Plus Populaire
                </div>
              </div>
            )}
            <div className={`relative h-full bg-white rounded-3xl p-8 border ${pack.popular ? "border-4 border-[#00D4D4] shadow-lg" : "border-gray-200 hover:shadow-md"} transition-all duration-300`}>
              <div className="relative">
                <div className={`w-20 h-20 rounded-2xl ${pack.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Sparkles className="text-white" size={36} />
                </div>

                <h3 className="text-2xl font-extrabold mb-2 text-gray-900">{pack.name}</h3>
                <p className="text-gray-700 mb-6">{pack.desc}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-black text-gray-900">{pack.price}</span>
                    <span className="text-gray-600 mb-2">FCFA</span>
                  </div>
                  <div className="text-lg text-gray-700 font-semibold">{pack.priceEuro} / mois</div>
                </div>

                <div className="space-y-3 mb-6">
                  {pack.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00D4D4] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className={`block text-center py-3 rounded-full font-bold text-lg ${pack.popular ? "bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black" : "border-2 border-gray-300 text-gray-900 hover:bg-gray-100"}`}>
                  <span className="flex items-center justify-center gap-2">Choisir ce pack <ArrowRight size={18} /></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
