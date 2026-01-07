"use client"
import React from "react";
import { motion } from "motion/react";
import Card from "../../components/Card";
import { articles } from "./data";

const sampleNews = articles.map((a) => ({ ...a, link: `/actualites/${a.slug}` }));

export default function NewsPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <section className="relative py-24 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#16324f]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Actualités</h1>
            <p className="text-gray-100 max-w-2xl mx-auto">Restez informé des dernières nouvelles, événements et annonces de l'EHETIP.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {sampleNews.map((n) => (
              <Card key={n.title} title={n.title} className="p-6">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img src="/hero.jpg" alt="thumbnail" className="w-full h-40 object-cover" />
                  <div className="absolute top-3 right-3 bg-white/90 text-xs px-3 py-1 rounded-full font-semibold text-gray-800 shadow">
                    {n.date}
                  </div>
                </div>

                <p className="text-gray-700 mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {n.excerpt}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <a href={n.link} className="inline-block px-4 py-2 bg-[var(--primary-blue)] text-white rounded-full font-semibold shadow hover:opacity-95">Lire la suite</a>
                  <span className="text-sm text-gray-500">Annonce</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
