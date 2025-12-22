"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

const primaryBlue = "#1e3a5f";
const gold = "#d4af37";
const lightBeige = "#fdfbf7";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-gray-800 group-hover:text-[#1e3a5f] transition-colors">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#1e3a5f] text-white rotate-180" : "bg-gray-50 text-gray-400"}`}
        >
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      category: "Admissions",
      items: [
        {
          q: "Quelles sont les dates limites d'inscription ?",
          a: "Les inscriptions pour l'année académique 2025-2026 sont ouvertes jusqu'au 30 octobre 2025. Cependant, nous recommandons de postuler tôt car les places sont limitées.",
        },
        {
          q: "Puis-je m'inscrire si je n'ai pas encore mon diplôme ?",
          a: "Oui, vous pouvez effectuer une pré-inscription sous réserve de l'obtention de votre diplôme (Baccalauréat ou Licence).",
        },
        {
          q: "Y a-t-il un concours d'entrée ?",
          a: "L'admission se fait principalement sur étude de dossier suivie d'un entretien de motivation avec le jury d'admission.",
        },
      ],
    },
    {
      category: "Scolarité & Frais",
      items: [
        {
          q: "Quels sont les modes de paiement acceptés ?",
          a: "Nous acceptons les paiements par chèque, virement bancaire, ou dépôt direct sur notre compte. Le paiement en espèces à la comptabilité est également possible.",
        },
        {
          q: "Peut-on payer en plusieurs tranches ?",
          a: "Absolument. Nous proposons un échelonnement des frais de scolarité en 3 ou 4 tranches tout au long de l'année.",
        },
      ],
    },
    {
      category: "Vie Étudiante",
      items: [
        {
          q: "L'école dispose-t-elle d'une bibliothèque ?",
          a: "Oui, chaque campus dispose d'un espace de documentation physique et d'un accès à une bibliothèque numérique mondiale.",
        },
        {
          q: "Y a-t-il des activités extra-scolaires ?",
          a: "L'EHETIP encourage la vie associative à travers le Bureau des Étudiants (BDE), des clubs de débat, et des compétitions sportives.",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ backgroundColor: lightBeige }}
    >
      <section className="py-20 bg-[#1e3a5f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <HelpCircle
            size={48}
            className="mx-auto mb-6"
            style={{ color: gold }}
          />
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Comment pouvons-nous vous aider ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Trouvez rapidement des réponses à vos questions les plus fréquentes.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full py-4 pl-12 pr-4 rounded-2xl text-gray-900 focus:ring-4 focus:ring-[#d4af37]/20 outline-none shadow-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          {faqs.map((cat, i) => (
            <div key={i} className="mb-16">
              <h3
                className="text-sm font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-4"
                style={{ color: gold }}
              >
                <span
                  className="w-8 h-[2px]"
                  style={{ backgroundColor: gold }}
                ></span>
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items
                  .filter(
                    (item) =>
                      item.q.toLowerCase().includes(search.toLowerCase()) ||
                      item.a.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item, j) => (
                    <FAQItem key={j} question={item.q} answer={item.a} />
                  ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-20 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} style={{ color: primaryBlue }} />
            </div>
            <h4
              className="text-2xl font-bold mb-4"
              style={{ color: primaryBlue }}
            >
              Vous n'avez pas trouvé votre réponse ?
            </h4>
            <p className="text-gray-600 mb-8">
              Notre équipe d'admission est là pour vous accompagner
              personnellement.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-2xl text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: primaryBlue }}
            >
              Contactez-nous directement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
