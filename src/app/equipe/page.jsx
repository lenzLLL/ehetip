"use client"
import React from "react";
import { motion } from "motion/react";
import Card from "../../components/Card";
import { Mail, Linkedin } from "lucide-react";

const team = [
  { name: "Dr Manga Makrada Maïna", role: "Président", image: "/user.jpeg", bio: "Enseignant-chercheur, historien et économiste. Fondateur et président de l'EHETIP.", email: "president@ehetip.td" },
  { name: "Pr. Amina Tchatchou", role: "Directrice des Études", image: "/service-placeholder.svg", bio: "Responsable pédagogique, spécialisée en sciences politiques et gouvernance.", email: "amina.t@ehetip.td" },
  { name: "Dr Idriss Kaldou", role: "Responsable Recherche", image: "/service-placeholder.svg", bio: "Chercheur en développement et politiques publiques.", email: "idriss.k@ehetip.td" },
  { name: "Mme Salma Ouedraogo", role: "Chargée des Relations Internationales", image: "/service-placeholder.svg", bio: "Coordonne les partenariats et les échanges académiques.", email: "salma.o@ehetip.td" },
  { name: "Dr Armand Tchinemba", role: "Directeur Administratif et académique", image: "/service-placeholder.svg", bio: "En charge des affaires administratives et du suivi académique.", email: "armand.t@ehetip.td" },
  { name: "M. Fidèle Allarabey Assengar", role: "Chef de service scolarité", image: "/service-placeholder.svg", bio: "Responsable de la scolarité, inscriptions et suivi des étudiants.", email: "fidele.a@ehetip.td" },
  { name: "Mme Janice Remadji", role: "Secrétaire", image: "/service-placeholder.svg", bio: "Secrétariat administratif et support aux étudiants et enseignants.", email: "janice.r@ehetip.td" },
];

function TeamCard({ member }) {
  return (
    <Card className="p-6 hover:scale-[1.02] transition-transform">
      <div className="flex flex-col items-center text-center">
        <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mb-4">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--primary-blue)' }}>{member.name}</h4>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{ background: '#fff7ed', color: '#b45309' }}>
          {member.role}
        </div>
        <p className="text-gray-600 mb-4">{member.bio}</p>

        <div className="flex items-center gap-3">
          <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
            <Mail size={16} /> Contact
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </Card>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#16324f]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Notre Équipe</h1>
            <p className="text-gray-100 max-w-2xl mx-auto">Découvrez les profils et responsables pédagogiques qui portent la vision de l'EHETIP.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
