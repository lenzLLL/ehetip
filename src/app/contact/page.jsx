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
      <section className="relative pt-32 pb-20 text-white">
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
              Contactez-nous
            </h2>
            <h1 className="text-3xl md:text-7xl font-black mb-8">
              Parlons de votre <span style={{ color: gold }}>Avenir</span>.
            </h1>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions concernant l'admission, les programmes ou la vie sur le
              campus.
            </p>
          </motion.div>
        </div>
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
                className="text-2xl md:text-3xl font-black mb-8"
                style={{ color: primaryBlue }}
              >
                Informations de Contact
              </h3>
              <p className="text-gray-600 mb-12 text-base md:text-lg">
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
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
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
                    className="text-2xl md:text-3xl font-black mb-4"
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
                      className="text-2xl md:text-3xl font-black mb-8"
                      style={{ color: primaryBlue }}
                    >
                      Formulaire d'inscription – EHETIP
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Nom (s)</label>
                          <input required name="lastName" type="text" placeholder="Nom" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Prénom(s)</label>
                          <input required name="firstName" type="text" placeholder="Prénom" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#d4af37] outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Date de naissance</label>
                          <input required name="birthDate" type="date" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Lieu de naissance</label>
                          <input name="birthPlace" type="text" placeholder="Ville, Pays" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Sexe</p>
                          <div className="flex items-center gap-6">
                            <label className="inline-flex items-center gap-2"><input required type="radio" name="gender" value="Masculin" /> Masculin</label>
                            <label className="inline-flex items-center gap-2"><input required type="radio" name="gender" value="Féminin" /> Féminin</label>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Nationalité</label>
                          <input name="nationality" type="text" placeholder="Nationalité" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Adresse complète</label>
                          <input name="address" type="text" placeholder="Adresse" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Téléphone</label>
                          <input required name="phone" type="tel" placeholder="+235 6x xx xx xx" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">E-mail</label>
                          <input required name="email" type="email" placeholder="exemple@domaine.td" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Niveau d’étude actuel</label>
                          <input name="educationLevel" type="text" placeholder="Ex: Baccalauréat" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Filière choisie</label>
                          <select required name="program" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none">
                            <option value="">-- Sélectionner la filière --</option>
                            <option>Sciences Politiques et Relations Internationales</option>
                            <option>Management et Gestion de Projets</option>
                            <option>Droit International et Action Humanitaire</option>
                            <option>Comptabilité – Finances</option>
                            <option>Banque – Assurances</option>
                            <option>Gestion de l’Information et Intelligence Artificielle</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Année académique</label>
                          <input name="academicYear" type="text" defaultValue="2025 - 2026" readOnly className="w-full px-6 py-4 rounded-xl bg-gray-100 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Pièces à fournir</label>
                          <div className="grid gap-2 md:grid-cols-2">
                            {[
                              "Extrait de naissance",
                              "Photocopie des diplômes",
                              "2 photos d’identité",
                              "Frais d’inscription acquittés",
                            ].map((doc) => (
                              <label key={doc} className="inline-flex items-center gap-2"><input type="checkbox" name="documents" value={doc} /> {doc}</label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Date d'inscription</label>
                          <input name="registrationDate" type="date" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Signature du candidat</label>
                          <input name="candidateSignature" type="text" placeholder="Nom et prénom (signature numérique)" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-transparent outline-none" />
                        </div>
                      </div>

                      <div>
                        <button
                          disabled={formState === "loading"}
                          className="w-full py-5 rounded-2xl text-white font-black text-lg md:text-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                          style={{ backgroundColor: primaryBlue }}
                        >
                          {formState === "loading" ? "Envoi en cours..." : "Soumettre l'inscription"}
                        </button>
                      </div>
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
