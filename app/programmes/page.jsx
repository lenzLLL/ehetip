"use client"
import React from "react";
import { motion } from "motion/react";
import {
  Globe,
  Users,
  BookOpen,
  GraduationCap,
  ArrowLeft,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import Card from "../../components/Card";

const primaryBlue = "#1e3a5f";
const gold = "#d4af37";
const lightBeige = "#fdfbf7";

const ProgramCard = ({ title, icon: Icon, description, duration, campus, details }) => (
  <motion.div whileHover={{ y: -6 }}>
    <Card
      className="rounded-[1.5rem] p-8"
      title={title}
      icon={<Icon size={24} style={{ color: primaryBlue }} />}
      footer={
        <a
          href="/contact"
          className="w-full py-3 rounded-lg text-white font-bold text-base transition-transform hover:scale-[1.02] block text-center"
          style={{ backgroundColor: primaryBlue }}
        >
          Se Renseigner
        </a>
      }
    >
      <p className="text-gray-600 mb-4 text-base leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-sm font-medium text-gray-600">
          <Clock size={14} /> {duration}
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-sm font-medium text-gray-600">
          <MapPin size={14} /> {campus}
        </div>
      </div>

      <div className="space-y-2">
        {details.map((detail, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-700">
            <CheckCircle2 size={16} style={{ color: gold }} />
            <span className="font-medium">{detail}</span>
          </div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function ProgramsPage() {
  const programs = [
    {
      title: "Relations Internationales",
      icon: Globe,
      description:
        "Maîtrisez les rouages de la diplomatie mondiale et de la géopolitique contemporaine.",
      duration: "3 ans (Licence) / 2 ans (Master)",
      campus: "Moursal",
      details: [
        "Diplomatie & Négociation",
        "Droit International",
        "Économie Mondiale",
        "Langues Étrangères",
      ],
    },
    {
      title: "Sciences Politiques",
      icon: Users,
      description:
        "Analysez les systèmes de pouvoir et participez à la construction des politiques publiques.",
      duration: "3 ans (Licence) / 2 ans (Master)",
      campus: "Al Afia",
      details: [
        "Sociologie Politique",
        "Gouvernance Publique",
        "Analyse Électorale",
        "Histoire des Idées",
      ],
    },
    {
      title: "Droit & Administration",
      icon: BookOpen,
      description:
        "Une formation juridique solide pour les futurs cadres de l'administration et des entreprises.",
      duration: "3 ans (Licence)",
      campus: "Moursal & Al Afia",
      details: [
        "Droit Civil & Pénal",
        "Droit des Affaires",
        "Management Public",
        "Ressources Humaines",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ backgroundColor: lightBeige }}
    >
      <section className="py-24 bg-[#1e3a5f] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2
              className="text-sm font-bold uppercase tracking-[0.4em] mb-6"
              style={{ color: gold }}
            >
              Offre Académique
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Trouvez votre <span style={{ color: gold }}>Vocation</span>.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Nos programmes sont conçus en collaboration avec des experts du
              secteur pour garantir une insertion professionnelle rapide et
              réussie.
            </p>
          </motion.div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {programs.map((p, i) => (
              <ProgramCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3
            className="text-3xl font-black mb-8"
            style={{ color: primaryBlue }}
          >
            Besoin d'un conseil d'orientation ?
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Nos conseillers pédagogiques sont disponibles pour vous aider à
            choisir le parcours le plus adapté à vos ambitions professionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 rounded-2xl bg-[#d4af37] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Prendre rendez-vous
            </button>
            <button
              className="px-10 py-4 rounded-2xl border-2 font-bold text-lg transition-all hover:bg-gray-50"
              style={{ borderColor: primaryBlue, color: primaryBlue }}
            >
              Télécharger la brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
