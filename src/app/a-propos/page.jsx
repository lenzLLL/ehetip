"use client"
import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Target,
  Eye,
  Users,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const primaryBlue = "#1e3a5f";
const gold = "#d4af37";
const lightBeige = "#fdfbf7";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ backgroundColor: lightBeige }}
    >
      {/* Remove <header /> usage */}

      {/* Hero - version cohérente avec les autres pages */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#16324f]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-7xl font-black mb-8 leading-tight">
              Notre Mission : <span style={{ color: gold }}>L'Excellence</span> sans compromis.
            </h1>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              L'EHETIP, abréviation pour École des Hautes Études Internationales et
              Politique, est une institution d'enseignement de premier plan située à
              N'Djamena, fondée en 2021 par le Dr. Manga MAKRADA MAINA. Elle offre
              aux étudiants une vaste gamme de disciplines scientifiques et
              professionnelles, ainsi qu'un enseignement théorique et pratique de
              haut niveau. Prévue pour ouvrir ses portes à la rentrée d'octobre 2023,
              l'EHETIP a pour mission de former des leaders de haute qualité,
              capables de contribuer au développement socio-économique et politique
              de leur pays, et vise à devenir une référence en matière
              d'éducation en Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12">
            {[
              {
                title: "Notre Vision",
                icon: Eye,
                text: "Devenir le centre d'excellence académique de référence en Afrique Centrale pour les sciences politiques et les relations internationales.",
                color: "#eff6ff",
              },
              {
                title: "Notre Mission",
                icon: Target,
                text: "Offrir une formation de haut niveau alliant théorie rigoureuse et pratique professionnelle pour préparer nos étudiants aux défis mondiaux.",
                color: "#fdf2f8",
              },
              {
                title: "Nos Valeurs",
                icon: Award,
                text: "Intégrité, Excellence, Innovation et Engagement Citoyen sont au cœur de chaque cours et de chaque interaction à l'EHETIP.",
                color: "#f0fdf4",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={28} style={{ color: primaryBlue }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: primaryBlue }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <img
                src="https://ucarecdn.com/d2160582-259a-41ee-b84f-ee6adabf67da/-/format/auto/"
                className="rounded-[3rem] shadow-2xl h-48 md:h-auto w-full object-cover"
                alt="History"
              />
            </div>
            <div className="flex-1">
              <h2
                className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
                style={{ color: gold }}
              >
                Notre Histoire
              </h2>
              <h3
                className="text-2xl md:text-4xl font-black mb-8 leading-tight"
                style={{ color: primaryBlue }}
              >
                Plus d'une décennie au service du savoir.
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  L'EHETIP se caractérise par un environnement d'apprentissage
                  stimulant. Les étudiants bénéficient d'un enseignement de
                  qualité dispensé par des enseignants compétents et passionnés,
                  d'un accès à des technologies de pointe et à des infrastructures
                  modernes favorisant le développement de leurs compétences et
                  de leur savoir-faire.
                </p>
                <p>
                  En somme, l'EHETIP est un établissement d'enseignement de
                  renommée en Afrique, engagé à offrir une formation supérieure
                  de qualité aux futurs leaders du continent. C'est un choix
                  idéal pour celles et ceux qui aspirent à contribuer
                  significativement au développement de leur pays et de la
                  région.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: gold }}
          >
            Notre Équipe
          </h2>
          <h3
            className="text-2xl md:text-4xl font-black mb-16"
            style={{ color: primaryBlue }}
          >
            Un Corps Professoral d'Élite
          </h3>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-gray-200 rounded-3xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1e3a5f]/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Professeur {i}
                </h4>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mt-1">
                  Expert en {i % 2 === 0 ? "Géopolitique" : "Droit Public"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
