"use client"
import React from "react";
import Card from "../../components/Card";
import { GraduationCap, BookOpen, Globe, Users } from "lucide-react";

const formations = [
  {
    title: "BTS Archives et Documentation",
    icon: BookOpen,
    year1: {
      "Bloc Fondamentaux": [
        "Introduction aux sciences de l’information et de la communication",
        "Histoire et théorie des archives et de la documentation",
        "Typologie des documents et supports d’information",
        "Principes de la bibliothéconomie et de la documentation",
      ],
      "Bloc Techniques": [
        "Classement et cotation des documents",
        "Méthodologie de traitement archivistique",
        "Informatique documentaire (bases de données, bureautique)",
        "Initiation aux systèmes de gestion documentaire",
      ],
      "Bloc Professionnel": [
        "Techniques de recherche et veille documentaire",
        "Méthodologie de rédaction scientifique et administrative",
        "Déontologie et législation des archives",
      ],
      "Bloc Transversal": [
        "Expression écrite et orale / Techniques de communication",
        "Anglais professionnel",
        "Statistiques appliquées à la documentation",
      ],
    },
    year2: {
      "Bloc Approfondissement": [
        "Gestion des archives contemporaines et historiques",
        "Numérisation et préservation numérique",
        "Technologies de l’information documentaire (GED, SIGB)",
        "Normalisation et standards documentaires (Dublin Core, ISAD(G), ISO 15489)",
      ],
      "Bloc Professionnel": [
        "Gestion des centres d’archives et bibliothèques spécialisées",
        "Politiques de conservation et valorisation du patrimoine documentaire",
        "Pratiques de veille stratégique et diffusion sélective de l’information",
        "Projet professionnel / stage en centre d’archives ou bibliothèque",
      ],
      "Bloc Transversal": [
        "Droit de l’information et de la propriété intellectuelle",
        "Management des institutions documentaires",
        "Techniques de communication institutionnelle",
      ],
    },
  },
  {
    title: "BTS Intelligence de l’Information et Intelligence Artificielle",
    icon: GraduationCap,
    year1: {
      "Bloc Fondamentaux": [
        "Introduction à l’intelligence économique et à la veille stratégique",
        "Théorie de l’information et systèmes de communication",
        "Introduction à l’intelligence artificielle (IA)",
        "Mathématiques appliquées à l’informatique et à l’IA",
        "Programmation fondamentale (Python, R ou Java)",
      ],
      "Bloc Techniques": [
        "Collecte et traitement des données",
        "Bases de données relationnelles et big data",
        "Analyse statistique et probabilités appliquées",
        "Introduction au machine learning",
      ],
      "Bloc Professionnel": [
        "Méthodologie de recherche d’information et OSINT",
        "Sécurité de l’information et cybersécurité",
        "Déontologie et éthique de l’intelligence artificielle",
      ],
      "Bloc Transversal": [
        "Communication professionnelle et écriture académique",
        "Anglais scientifique et technique",
        "Culture numérique et société de l’information",
      ],
    },
    year2: {
      "Bloc Approfondissement": [
        "Intelligence économique et concurrentielle",
        "Data mining et text mining",
        "Systèmes experts et réseaux de neurones",
        "Intelligence artificielle appliquée (NLP, vision par ordinateur)",
        "Méthodes avancées de veille et analyse prédictive",
      ],
      "Bloc Professionnel": [
        "Gouvernance de l’information et protection des données (RGPD, cybersécurité avancée)",
        "Outils de business intelligence et tableaux de bord décisionnels",
        "Stratégies de gestion et d’analyse des risques informationnels",
        "Stage / projet professionnel (rapport et soutenance)",
      ],
      "Bloc Transversal": [
        "Innovation et entrepreneuriat dans l’économie numérique",
        "Communication interculturelle et travail collaboratif",
        "Management de projet en IA et intelligence économique",
      ],
    },
  },
  {
    title: "BTS Management et Gestion de Projets",
    icon: Users,
    year1: {
      "Bloc Fondamentaux": [
        "Introduction au management et théorie des organisations",
        "Principes de l’économie et de la gestion",
        "Fondements de la gestion de projets",
        "Introduction au développement durable et RSE",
      ],
      "Bloc Techniques": [
        "Méthodes de planification de projets (PERT, Gantt, logique cadre)",
        "Comptabilité générale et budgétisation des projets",
        "Outils informatiques de gestion (MS Project, Excel, logiciels de suivi)",
        "Statistiques appliquées à la gestion de projets",
      ],
      "Bloc Professionnel": [
        "Techniques de communication et négociation de projet",
        "Méthodologie de recherche et d’élaboration de projet",
        "Gestion des équipes et leadership opérationnel",
      ],
      "Bloc Transversal": [
        "Expression écrite et orale / Communication professionnelle",
        "Anglais des affaires et du management I",
        "TIC appliquées au management",
      ],
    },
    year2: {
      "Bloc Approfondissement": [
        "Suivi-évaluation de projets (indicateurs, reporting)",
        "Gestion des risques et analyse de viabilité",
        "Stratégies de financement et partenariats",
        "Entrepreneuriat et innovation dans les projets",
      ],
      "Bloc Professionnel": [
        "Management stratégique et gouvernance des organisations",
        "Développement durable et intégration des ODD dans les projets",
        "Négociation de partenariats et mobilisation des ressources",
        "Projet professionnel / Mémoire + Stage pratique",
      ],
      "Bloc Transversal": [
        "Anglais des affaires et du management II",
        "Communication institutionnelle et marketing de projet",
        "Méthodes de management interculturel",
      ],
    },
  },
  {
    title: "BTS Droit et Action Humanitaire",
    icon: Globe,
    year1: {
      "Bloc Fondamentaux": [
        "Introduction générale au droit public et privé",
        "Institutions juridiques et internationales",
        "Principes du droit international humanitaire (DIH)",
        "Droits humains et protection des personnes vulnérables",
      ],
      "Bloc Techniques": [
        "Méthodologie juridique (analyse de textes et rédaction d’actes)",
        "Droit administratif et organisation des pouvoirs publics",
        "Techniques de médiation et résolution de conflits I",
        "Informatique et documentation juridique",
      ],
      "Bloc Professionnel": [
        "Gestion des crises humanitaires et logistique de l’urgence",
        "Introduction aux ONG et organisations internationales",
        "Éthique et déontologie dans l’action humanitaire",
      ],
      "Bloc Transversal": [
        "Anglais juridique et humanitaire I",
        "Expression écrite et orale appliquée au droit",
        "Culture générale en relations internationales",
      ],
    },
    year2: {
      "Bloc Approfondissement": [
        "Droit international humanitaire appliqué (cas pratiques)",
        "Droit des réfugiés et des déplacés internes",
        "Gestion des crises et des conflits II (approches stratégiques)",
        "Gouvernance humanitaire et responsabilité des ONG",
      ],
      "Bloc Professionnel": [
        "Plaidoyer, lobbying et protection des droits humains",
        "Économie humanitaire et développement",
        "Protection juridique des femmes et enfants en situation de crise",
        "Projet professionnel / Stage en ONG ou institution internationale",
      ],
      "Bloc Transversal": [
        "Anglais juridique et humanitaire II",
        "Communication institutionnelle et plaidoyer médiatique",
        "Techniques de rédaction juridique et académique",
      ],
    },
  },
];

function BlocksList({ blocks }) {
  return (
    <div className="space-y-3">
      {Object.entries(blocks).map(([blockName, items]) => (
        <div key={blockName}>
          <p className="font-semibold">{blockName} :</p>
          <ul className="list-disc ml-6 mt-2">
            {items.map((it, idx) => (
              <li key={idx} className="text-sm leading-snug">
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#16324f]/80" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">Formations BTS</h1>
            <p className="mt-4 text-lg text-blue-100">Parcourez nos cursus professionnalisants, organisés par année et par blocs. Ateliers pratiques, stages et partenariats pour une insertion rapide.</p>
            <div className="mt-6 flex gap-4">
              <a href="/Brochure_EHETIP.docx" download className="px-6 py-3 rounded-lg bg-[#d4af37] text-white font-semibold">Télécharger la brochure</a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-700 mb-8">Découvrez nos BTS : contenus pédagogiques organisés par année et blocs. Cliquez sur un bloc pour lire les éléments associés.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {formations.map((f) => (
            <Card key={f.title} title={f.title} icon={<f.icon size={24} />} className="h-full">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-bold mb-3 text-lg">1ʳᵉ année</h4>
                  <div className="space-y-4">
                    {Object.entries(f.year1).map(([blockName, items]) => (
                      <div key={blockName} className="bg-white p-4 rounded-lg shadow-sm border">
                        <p className="font-semibold mb-2">{blockName}</p>
                        <ul className="list-disc ml-5 text-sm leading-snug">
                          {items.map((it, idx) => (
                            <li key={idx}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-lg">2ᵉ année</h4>
                  <div className="space-y-4">
                    {Object.entries(f.year2).map(([blockName, items]) => (
                      <div key={blockName} className="bg-white p-4 rounded-lg shadow-sm border">
                        <p className="font-semibold mb-2">{blockName}</p>
                        <ul className="list-disc ml-5 text-sm leading-snug">
                          {items.map((it, idx) => (
                            <li key={idx}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
