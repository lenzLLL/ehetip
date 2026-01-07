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
      title: "Gestion de l’information et Intelligence Artificielle",
      icon: GraduationCap,
      description:
        "La filière forme des étudiants capables de maîtriser les systèmes d’information, le Big Data et les bases de l’IA, alliant informatique, gestion et transformation digitale.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : un profil hybride très recherché dans le numérique.",
        "Débouchés : analyste de données, gestionnaire de SI, assistant en IA, consultant digital.",
        "Employabilité : forte grâce à la digitalisation croissante.",
        "Pourquoi choisir EHETIP ? Encadrement moderne, ateliers pratiques et partenariats.",
      ],
    },
    {
      title: "Sciences Politiques",
      icon: Users,
      description:
        "Comprendre les institutions, la gouvernance et les théories politiques contemporaines; développement de l’esprit critique et de l’analyse.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : immersion dans la réalité politique et institutionnelle.",
        "Débouchés : analyste politique, assistant parlementaire, cadre ONG, fonction publique.",
        "Employabilité : bonne au sein des administrations et organisations internationales.",
        "Pourquoi choisir EHETIP ? Conférences, séminaires et simulations pratiques par des experts.",
      ],
    },
    {
      title: "Relations Internationales",
      icon: Globe,
      description:
        "Prépare à la diplomatie, aux organisations internationales et à la coopération mondiale, avec un accent sur la géopolitique et les négociations.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : ouverture sur les enjeux mondiaux et régionaux.",
        "Débouchés : diplomate, chargé de mission ONG, fonctionnaire international, consultant géopolitique.",
        "Employabilité : croissante grâce aux besoins en coopération internationale.",
        "Pourquoi choisir EHETIP ? Liens avec organisations internationales et stages en ambassades/ONG.",
      ],
    },
    {
      title: "Banques – Assurances",
      icon: BookOpen,
      description:
        "Formation d’experts en gestion bancaire, assurances et finance appliquée, adaptée aux besoins du secteur financier.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : répond aux besoins d’un secteur structuré et en expansion.",
        "Débouchés : conseiller clientèle, gestionnaire de portefeuille, agent d’assurance, analyste de risques.",
        "Employabilité : élevée dans les banques, assurances et microfinance.",
        "Pourquoi choisir EHETIP ? Simulations bancaires et partenariats avec institutions financières.",
      ],
    },
    {
      title: "Comptabilité – Finances",
      icon: BookOpen,
      description:
        "Maîtrise des outils comptables et financiers indispensables aux entreprises et administrations, axée sur la pratique.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : formation professionnalisante et rigoureuse.",
        "Débouchés : comptable, auditeur, contrôleur de gestion, gestionnaire budgétaire.",
        "Employabilité : très forte dans le public et le privé.",
        "Pourquoi choisir EHETIP ? Études de cas réels, simulations comptables et stages obligatoires.",
      ],
    },
    {
      title: "Droit International et Action Humanitaire",
      icon: BookOpen,
      description:
        "Combine droit international, droits de l’homme et action humanitaire pour intervenir dans les ONG et organisations internationales.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : préparation aux interventions ONG et juridictions internationales.",
        "Débouchés : juriste humanitaire, chargé de mission ONG, collaborateur institutionnel.",
        "Employabilité : forte avec les besoins en expertise humanitaire.",
        "Pourquoi choisir EHETIP ? Partenariats avec ONG, missions de terrain et corps enseignant spécialisé.",
      ],
    },
    {
      title: "Management et Gestion de Projets",
      icon: GraduationCap,
      description:
        "Forme des professionnels capables de concevoir, planifier et évaluer des projets dans divers secteurs, avec une approche pratique.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : compétence transversale adaptée aux ONG, entreprises et administrations.",
        "Débouchés : chef de projet, consultant, responsable suivi-évaluation.",
        "Employabilité : très forte avec la multiplication des projets de développement.",
        "Pourquoi choisir EHETIP ? Projets réels, stages et encadrement par des experts en développement.",
      ],
    },
    {
      title: "Marketing et Communication",
      icon: GraduationCap,
      description:
        "Formation en marketing stratégique, communication digitale et institutionnelle, couvrant digital, médias et événementiel.",
      duration: "Licence / Master",
      campus: "Moursal & Al Afia",
      details: [
        "Avantage : polyvalence couvrant digital, médias et événementiel.",
        "Débouchés : chargé de marketing, responsable communication, community manager, attaché de presse.",
        "Employabilité : très élevée dans agences, entreprises, ONG et institutions publiques.",
        "Pourquoi choisir EHETIP ? Ateliers de communication, projets digitaux et accompagnement pour la créativité.",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ backgroundColor: lightBeige }}
    >
      <section className="relative py-24 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#16324f]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
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
            <a
              href="/Brochure_EHETIP.docx"
              download
              className="px-10 py-4 rounded-2xl bg-[#d4af37] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform inline-block text-center"
            >
              Brochure
            </a>
            <a
              href="/CHARTE%20D%27engagement.docx"
              download
              className="px-10 py-4 rounded-2xl border-2 font-bold text-lg transition-all inline-block text-center"
              style={{ borderColor: primaryBlue, color: primaryBlue }}
            >
              Charte d'engagement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
