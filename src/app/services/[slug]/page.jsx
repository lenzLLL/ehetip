import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceImage from "../../../components/ServiceImage";

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function generateSvgDataUrl(title) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='%2300D4D4' />
        <stop offset='1' stop-color='%23B4F34C' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(%23g)' />
    <g fill='white' font-family='Arial, Helvetica, sans-serif' font-weight='700' font-size='42'>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'>${escapeXml(title)}</text>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function escapeXml(unsafe) {
  return String(unsafe).replace(/[&'"<>]/g, function (c) {
    return {'&':'&amp;','"':'&quot;','\'':'&apos;','<':'&lt;','>':'&gt;'}[c];
  });
}

const SERVICES = [
  {
    title: "Création de site web express",
    desc: "Sites professionnels livrés en 72h chrono",
    description: "Nous concevons et livrons des sites web performants et adaptatifs en un temps record, conçus pour convertir vos visiteurs en clients.",
    features: [
      "Design responsive et moderne",
      "Optimisé SEO",
      "Interface intuitive",
      "Hébergement inclus",
    ],
  },
  {
    title: "Campagnes publicitaires Meta",
    desc: "Facebook & Instagram Ads qui convertissent",
    description: "Création, optimisation et gestion de campagnes Meta pour maximiser votre acquisition client avec un suivi clair du ROI.",
    features: ["Ciblage précis", "Optimisation ROI", "A/B Testing", "Reporting détaillé"],
  },
  {
    title: "Stratégie digitale",
    desc: "Plans personnalisés pour votre croissance",
    description: "Définition d'une stratégie digitale sur-mesure alignée sur vos objectifs business, avec feuille de route et indicateurs de performance.",
    features: ["Audit complet", "Plan d'action sur mesure", "KPIs définis", "Accompagnement continu"],
  },
  {
    title: "Community Management",
    desc: "Animation professionnelle de vos réseaux",
    description: "Création de contenu, modération et animation de communauté pour renforcer votre image et fidéliser vos clients.",
    features: ["Publication régulière", "Gestion des commentaires", "Engagement communauté", "Rapport mensuel"],
  },
  {
    title: "Social Media",
    desc: "Contenu créatif qui génère de l'engagement",
    description: "Production de visuels et textes optimisés pour chaque plateforme afin d'augmenter visibilité et engagement.",
    features: ["Visuels professionnels", "Copywriting percutant", "Calendrier éditorial", "Hashtags stratégiques"],
  },
  {
    title: "Vidéos publicitaires",
    desc: "Production de contenus vidéo impactants",
    description: "De la scénarisation au montage, nous produisons des vidéos adaptées à vos objectifs marketing et aux formats sociaux.",
    features: ["Scénarisation", "Montage professionnel", "Motion design", "Formats adaptés"],
  },
  {
    title: "Conception d'application mobile",
    desc: "Design et développement d'apps mobiles (iOS / Android)",
    description: "Conception complète d'applications mobiles, du prototype fonctionnel au déploiement sur les stores.",
    features: ["UI/UX mobile sur-mesure", "Développement natif ou cross-platform", "Tests & déploiement", "Publication App Store / Play Store"],
  },
  {
    title: "Data & Performance",
    desc: "Analytics et tableaux de bord sur mesure",
    description: "Collecte, analyse et visualisation des données pour orienter vos décisions marketing et améliorer les performances.",
    features: ["Google Analytics 4", "Tableaux de bord personnalisés", "Suivi conversions", "Insights actionnables"],
  },
  {
    title: "Automatisation",
    desc: "Chatbots et WhatsApp Business API",
    description: "Automatisation des conversations et des process pour réduire la charge opérationnelle et capturer plus de leads.",
    features: ["Réponses automatiques", "Collecte de leads", "Service client 24/7", "Intégrations CRM"],
  },
  // Google / automation extras
  { title: "Google Ads (SEA)", desc: "Campagnes sponsorisées Search & Display pour maximiser votre visibilité", features: [] },
  { title: "Google Analytics (GA4)", desc: "Suivi conversions, analyse trafic et comportement utilisateur avancé", features: [] },
  { title: "Google Search Console", desc: "Optimisation SEO, indexation et performance des mots-clés", features: [] },
  { title: "Google My Business", desc: "Gestion de fiche entreprise et amélioration du référencement local", features: [] },
  { title: "Chatbots Messenger / ManyChat", desc: "Automatisation des réponses, collecte d'emails, script de vente", features: [] },
  { title: "WhatsApp Bot personnalisé", desc: "Répondeur automatique, prise de commande, service client 24/7", features: [] },
  { title: "Tunnel de vente automatisé", desc: "Séquence emails + pages de vente pour transformer les prospects en clients", features: [] },
  { title: "Formations interactives", desc: "Plateformes de e-learning / coaching automatisées", features: [] },
];

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const service = SERVICES.find((s) => slugify(s.title) === slug);
  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href="/services" className="inline-block text-sm text-gray-700 underline">← Retour aux services</Link>
        </div>

        {/* Banner */}
        <div className="relative w-full rounded-xl overflow-hidden mb-8 shadow-sm">
          <ServiceImage src={`/services/${slug}.svg`} title={service.title} alt={service.title} className="w-full h-56 md:h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>
          <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12 text-white">
            <h1 className="text-2xl md:text-4xl font-black leading-tight">{service.title}</h1>
            <p className="mt-2 text-sm md:text-base max-w-xl">{service.desc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2">
            {service.description && <p className="text-lg text-gray-700 mb-6">{service.description}</p>}

            {service.features && service.features.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-semibold mb-4 text-lg">Ce que comprend ce service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-3 h-3 mt-2 rounded-full bg-emerald-500" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 text-sm text-gray-700">
              <p>Nous adaptons chaque service selon vos besoins : volume, budget, et objectifs KPI. Contactez-nous pour une proposition détaillée.</p>
            </div>
          </main>

          <aside className="md:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="mb-4">
                <h4 className="font-bold text-lg">Obtenir ce service</h4>
                <p className="text-sm text-gray-600">Devis personnalisé et planning de réalisation</p>
              </div>
              <a href="/contact" className="block text-center bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-4 py-3 rounded-full font-semibold mb-3">Contactez-nous</a>
              <a href="tel:+237690910401" className="block text-center border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700">Appeler +237 690 91 04 01</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
