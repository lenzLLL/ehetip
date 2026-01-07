"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Star,
} from "lucide-react";
import Card from "../components/Card";
import Stepper from "../components/Stepper";
import Hero from "../components/Hero";

const primaryBlue = "#1e3a5f";
const gold = "#d4af37";
const lightBeige = "#fdfbf7";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-[#1e3a5f] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: gold }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function EHETIPLandingPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900 selection:bg-[#d4af37] selection:text-white"
      style={{ backgroundColor: lightBeige }}
    >
      <Hero
        variant="home"
        title={"Forger une pensée critique pour un impact durable"}
        subtitle={"L'EHETIP (École des Hautes Études Internationales et Politique), fondée en 2021 à N'Djamena par le Dr. Manga MAKRADA MAINA, offre un enseignement théorique et pratique de haut niveau pour former des leaders capables de contribuer au développement socio-économique et politique de la région."}
        cta={[{ href: '/contact', label: 'Contacter' }, { href: '/a-propos', label: 'En savoir plus', variant: 'ghost' }]}
        bgImage={"/hero.png"}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-12">
            {[
              { label: "Étudiants", value: "800+", icon: Users },
              { label: "Taux de Réussite", value: "98%", icon: Award },
              { label: "Partenaires", value: "25+", icon: Globe },
              { label: "Campus", value: "02", icon: MapPin },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 mb-3 mx-auto" style={{ color: gold }}>
                    <stat.icon size={20} />
                  </div>
                  <div className="text-xl md:text-3xl font-extrabold mb-1" style={{ color: primaryBlue }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 grid grid-cols-2 gap-2 md:gap-4">
              <div className="space-y-4">
                <img
                  src="https://ucarecdn.com/d2160582-259a-41ee-b84f-ee6adabf67da/-/format/auto/"
                  className="rounded-2xl shadow-lg h-40 md:h-64 w-full object-cover"
                  alt="Campus"
                />
                <div className="bg-[#1e3a5f] p-8 rounded-2xl text-white">
                  <h4 className="text-3xl font-bold mb-2">10+</h4>
                  <p className="text-blue-200 text-sm">
                    Années d'excellence dans l'enseignement supérieur au Tchad.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-[#d4af37] p-8 rounded-2xl text-white">
                  <GraduationCap size={32} className="mb-4" />
                  <p className="font-bold">
                    Formation de pointe adaptée au marché.
                  </p>
                </div>
                <img
                  src="https://ucarecdn.com/d65d4ac0-4aa0-49d9-bd7f-de5b4527ed02/-/format/auto/"
                  className="rounded-2xl shadow-lg h-40 md:h-64 w-full object-cover"
                  alt="Students"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2
                className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
                style={{ color: gold }}
              >
                À Propos de l'EHETIP
              </h2>
              <h3
                className="text-2xl md:text-4xl font-black mb-8 leading-tight"
                style={{ color: primaryBlue }}
              >
                Une Vision Moderne de l'Éducation Supérieure.
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                L'EHETIP, abréviation pour École des Hautes Études Internationales et
                Politique, est une institution d'enseignement de premier plan située à
                N'Djamena, fondée en 2021 par le Dr. Manga MAKRADA MAINA. Elle offre
                un enseignement théorique et pratique de haut niveau et vise à former
                des leaders capables de contribuer au développement socio-économique
                et politique de leur pays et de la région.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Corps professoral hautement qualifié",
                  "Programmes alignés sur les standards internationaux",
                  "Environnement d'apprentissage moderne et connecté",
                  "Accompagnement personnalisé vers l'emploi",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-semibold text-gray-700"
                  >
                    <CheckCircle2 size={20} style={{ color: gold }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/a-propos"
                className="inline-flex items-center gap-2 font-bold text-lg group"
                style={{ color: primaryBlue }}
              >
                Découvrir notre histoire{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: gold }}
            >
              Nos Filières
            </h2>
            <h3
              className="text-2xl md:text-4xl font-black mb-6"
              style={{ color: primaryBlue }}
            >
              Excellence Académique
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Choisissez parmi nos programmes spécialisés conçus pour répondre
              aux défis du 21ème siècle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Relations Internationales",
                icon: Globe,
                desc: "Diplomatie, géopolitique et gestion des crises internationales.",
                color: "#eff6ff",
              },
              {
                title: "Sciences Politiques",
                icon: Users,
                desc: "Gouvernance, politiques publiques et analyse électorale.",
                color: "#fdf2f8",
              },
              {
                title: "Droit & Administration",
                icon: BookOpen,
                desc: "Droit public, privé et administration des entreprises.",
                color: "#f0fdf4",
              },
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }}>
                <Card className="p-8">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: item.color }}>
                    <item.icon size={24} style={{ color: primaryBlue }} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3 text-center" style={{ color: primaryBlue }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-6 text-center">{item.desc}</p>
                  <div className="text-center">
                    <button className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#d4af37]">
                      Détails du cursus <ChevronRight size={18} />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: gold }}
            >
              Témoignages
            </h2>
            <h3 className="text-2xl md:text-4xl font-black" style={{ color: primaryBlue }}>
              Ce que disent nos étudiants
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
            {[
              {
                name: "Mahamat Saleh",
                role: "Étudiant en L3 RI",
                text: "L'EHETIP m'a ouvert des portes que je n'aurais jamais imaginées. Les professeurs sont exceptionnels.",
              },
              {
                name: "Aicha Moussa",
                role: "Alumni 2023",
                text: "Grâce à la formation pratique, j'ai trouvé un emploi dans une organisation internationale dès ma sortie.",
              },
              {
                name: "Youssouf Ali",
                role: "Étudiant en M1 SP",
                text: "Le cadre d'étude est moderne et stimulant. C'est vraiment la meilleure école du pays.",
              },
            ].map((t, i) => (
              <Card key={i} className="p-6">
                <div className="flex gap-2 mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={gold} color={gold} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-center">"{t.text}"</p>
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: gold }}
            >
              FAQ
            </h2>
            <h3
              className="text-2xl md:text-4xl font-black mb-6"
              style={{ color: primaryBlue }}
            >
              Questions Fréquentes
            </h3>
            <p className="text-gray-500">
              Tout ce que vous devez savoir sur l'admission et la vie à
              l'EHETIP.
            </p>
          </div>
          <div className="space-y-2">
            <FAQItem
              question="Quelles sont les conditions d'admission ?"
              answer="L'admission se fait sur dossier et entretien. Vous devez être titulaire d'un Baccalauréat pour le cycle Licence, ou d'une Licence pour le cycle Master."
            />
            <FAQItem
              question="Quels sont les frais de scolarité ?"
              answer="Les frais varient selon le cycle et la filière. Nous proposons des facilités de paiement en plusieurs tranches. Contactez notre service comptabilité pour un devis détaillé."
            />
            <FAQItem
              question="L'école propose-t-elle des bourses ?"
              answer="Oui, l'EHETIP octroie des bourses d'excellence aux meilleurs étudiants chaque année, ainsi que des aides sociales sous conditions."
            />
            <FAQItem
              question="Où se situent les campus ?"
              answer="Nous avons deux campus à N'Djamena : Moursal (près de l'Hôpital Américain) et Al Afia (face au marché Al Afia)."
            />
          </div>
          <div className="mt-12 text-center">
            <a href="/faq" className="font-bold text-[#d4af37] hover:underline">
              Voir toutes les questions →
            </a>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: gold }}>
            Admissions
          </h2>
          <h3 className="text-3xl font-black mb-6" style={{ color: primaryBlue }}>
            Processus simple en 3 étapes
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Postulez en ligne, soumettez vos pièces et participez à un entretien.
          </p>
          <Stepper
            steps={[
              { title: 'Candidature en ligne', description: 'Remplissez le formulaire et joignez vos documents.' },
              { title: 'Sélection', description: 'Nous évaluons votre dossier et réalisons un entretien.' },
              { title: 'Inscription', description: 'Confirmez votre place et commencez votre parcours.' },
            ]}
          />
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-[#d4af37] text-white font-bold">Postuler maintenant</a>
          </div>
        </div>
      </section>

      {/* Bourses & Aides Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: gold }}>
              Bourses & Aides
            </h2>
            <h3 className="text-3xl font-black" style={{ color: primaryBlue }}>Des aides pour tous</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Nous offrons des bourses d'excellence et des soutiens financiers selon les besoins.</p>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <Card className="mx-auto p-6">
              <h4 className="text-lg font-bold mb-2">Bourses d'excellence</h4>
              <p className="text-sm text-gray-600 mb-4">Attribuées aux meilleurs candidats sur dossier et entretien.</p>
              <a href="/contact" className="text-[#1e3a5f] font-bold">Demander une bourse →</a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative bg-[#1e3a5f] p-12 md:p-20 text-center text-white shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#d4af37] blur-[100px]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
            Prêt à rejoindre l'élite ?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
            Ne laissez pas passer votre chance de construire une carrière
            internationale d'exception. Les places sont limitées.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="/contact"
              className="px-12 py-5 rounded-2xl bg-[#d4af37] text-white font-black text-xl shadow-xl hover:scale-105 transition-transform text-center"
            >
              Prendre Rendez-vous
            </a>
            <a
              href="/contact"
              className="px-12 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xl hover:bg-white/20 transition-all text-center"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
