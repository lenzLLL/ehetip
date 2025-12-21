"use client"
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

const primaryBlue = "#1e3a5f";
const gold = "#d4af37";
const lightBeige = "#fdfbf7";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{ backgroundColor: lightBeige }}
    >
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-[#1e3a5f] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2
              className="text-sm font-bold uppercase tracking-[0.4em] mb-6"
              style={{ color: gold }}
            >
              Contactez-nous
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Parlons de votre <span style={{ color: gold }}>Avenir</span>.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions concernant l'admission, les programmes ou la vie sur le
              campus.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-3xl font-black mb-8"
                style={{ color: primaryBlue }}
              >
                Informations de Contact
              </h3>
              <p className="text-gray-600 mb-12 text-lg">
                N'hésitez pas à nous rendre visite sur l'un de nos campus ou à
                nous contacter par téléphone ou email.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Téléphone",
                    content: "+235 61 77 55 66",
                    sub: "Disponible de 8h à 18h",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@ehetip.td",
                    sub: "Réponse sous 24h",
                  },
                  {
                    icon: MapPin,
                    title: "Campus Moursal",
                    content: "Près de l'Hôpital Américain, N'Djamena",
                    sub: "Siège Social",
                  },
                  {
                    icon: MapPin,
                    title: "Campus Al Afia",
                    content: "Face au marché Al Afia, N'Djamena",
                    sub: "Annexe",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #eee",
                      }}
                    >
                      <item.icon size={24} style={{ color: gold }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 font-semibold">
                        {item.content}
                      </p>
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Clock style={{ color: gold }} />
                  <h4 className="font-bold text-gray-900">
                    Heures d'ouverture
                  </h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-bold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-bold">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50"
            >
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3
                    className="text-3xl font-black mb-4"
                    style={{ color: primaryBlue }}
                  >
                    Message Envoyé !
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Merci de nous avoir contactés. Notre équipe vous répondra
                    dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-8 py-4 rounded-xl bg-gray-100 font-bold hover:bg-gray-200 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-3xl font-black mb-8"
                    style={{ color: primaryBlue }}
                  >
                    Envoyez-nous un message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          Nom Complet
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] focus:ring-0 transition-all outline-none"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] focus:ring-0 transition-all outline-none"
                          placeholder="jean@exemple.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Sujet
                      </label>
                      <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] focus:ring-0 transition-all outline-none appearance-none">
                        <option>Information Admission</option>
                        <option>Demande de Brochure</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] focus:ring-0 transition-all outline-none resize-none"
                        placeholder="Comment pouvons-nous vous aider ?"
                      ></textarea>
                    </div>
                    <button
                      disabled={formState === "loading"}
                      className="w-full py-5 rounded-2xl text-white font-black text-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                      style={{ backgroundColor: primaryBlue }}
                    >
                      {formState === "loading" ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer le Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
