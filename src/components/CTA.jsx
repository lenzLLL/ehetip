"use client";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Video,
  BarChart3,
  Bot,
  ArrowRight,
  Sparkles,
  Rocket,
  Award,
  Clock,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function DigiCorePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const services = [
    { icon: Target, title: "Campagnes publicitaires Meta", desc: "Facebook & Instagram Ads ciblées avec ROI optimisé", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Stratégie digitale", desc: "Plans personnalisés basés sur vos objectifs business", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Community Management", desc: "Animation professionnelle de vos réseaux sociaux", color: "from-orange-500 to-red-500" },
    { icon: MessageSquare, title: "Social Media", desc: "Contenu créatif qui génère de l'engagement", color: "from-green-500 to-emerald-500" },
    { icon: Video, title: "Vidéos publicitaires", desc: "Production de contenus vidéo impactants", color: "from-indigo-500 to-blue-500" },
    { icon: BarChart3, title: "Data & Performance", desc: "Analytics avancés et tableaux de bord sur mesure", color: "from-yellow-500 to-orange-500" },
    { icon: Bot, title: "Automatisation", desc: "Chatbots intelligents et WhatsApp Business API", color: "from-teal-500 to-cyan-500" },
    { icon: Sparkles, title: "Création graphique", desc: "Identité visuelle professionnelle et logos uniques", color: "from-pink-500 to-rose-500" },
  ];

  const stats = [
    { value: "72h", label: "Livraison express", icon: Clock },
    { value: "100%", label: "Digital", icon: Rocket },
    { value: "6+", label: "Secteurs d'activité", icon: Target },
    { value: "24/7", label: "Support client", icon: Award },
  ];

  const allProjects = [
    { name: "GreenPowerSolar", category: "energie", categoryLabel: "Énergie", desc: "Site vitrine + WhatsApp bot", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" },
    { name: "SmartEdu", category: "education", categoryLabel: "Éducation", desc: "Logo + page Instagram + vidéo TikTok", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" },
    { name: "LogisPlus", category: "logistique", categoryLabel: "Logistique", desc: "Chatbot + 4 campagnes Facebook", image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop" },
    { name: "AfricaStyle", category: "ecommerce", categoryLabel: "E-commerce", desc: "E-commerce + automation Messenger", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { name: "HealthPlus Clinic", category: "sante", categoryLabel: "Santé", desc: "Site web + Google Ads + SEO", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" },
    { name: "TechStartup Inc", category: "tech", categoryLabel: "Tech", desc: "Branding complet + stratégie digitale", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
  ];

  const tabs = [
    { id: "all", label: "Tous les projets" },
    { id: "energie", label: "Énergie" },
    { id: "education", label: "Éducation" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "tech", label: "Tech" },
    { id: "sante", label: "Santé" },
    { id: "logistique", label: "Logistique" },
  ];

  const filteredProjects = activeTab === "all" ? allProjects : allProjects.filter(p => p.category === activeTab);

  const faqs = [
    { question: "Quels sont vos délais de livraison ?", answer: "Nos délais varient selon le service : un logo ou une identité visuelle en 72h maximum, un site web en 5-7 jours, et une stratégie digitale complète en 2 semaines." },
    { question: "Comment se passe la collaboration ?", answer: "Tout se fait en ligne ! Après un premier échange, nous vous envoyons un devis. Validation étape par étape via WhatsApp, email ou visio." },
    { question: "Proposez-vous des formules mensuelles ?", answer: "Oui, nous avons des packs mensuels pour community management, campagnes publicitaires et automatisation." },
    { question: "Travaillez-vous avec des petites entreprises ?", answer: "Absolument, nous accompagnons PME, startups et entrepreneurs avec des solutions évolutives." },
    { question: "Quels outils utilisez-vous ?", answer: "Canva Pro, Google Analytics, Meta Business Suite, ManyChat, WhatsApp API, WordPress et d'autres selon vos besoins." },
  ];

  return (
    <div className="min-h-screen relative text-gray-900 overflow-x-hidden bg-gradient-to-b from-green-50 via-green-100 to-green-50">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-green-200/50 rounded-full filter blur-3xl top-10 left-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-green-300/30 rounded-full filter blur-3xl bottom-0 right-1/4 animate-blob animation-delay-2000"></div>
        <div className="absolute w-80 h-80 bg-green-100/40 rounded-full filter blur-3xl top-1/2 left-1/3 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="https://ucarecdn.com/610b309f-847b-4d85-9d5c-21cab47300cc/-/format/auto/" alt="DigiCore Logo" className="h-12 sm:h-14" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Accueil","À propos","Services","Nos Packs"].map((text, idx)=>(
              <a key={idx} href="#" className="text-gray-800 hover:text-green-600 transition font-medium">{text}</a>
            ))}
            <a href="#" className="bg-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-green-300 transition font-semibold">Contact</a>
          </nav>

          <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-800 p-2">{mobileMenuOpen?<X size={28}/>:<Menu size={28}/>}</button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 text-center">
            {["Accueil","À propos","Services","Nos Packs"].map((text, idx)=>(
              <a key={idx} href="#" className="block text-gray-800 hover:text-green-600 py-2 transition font-medium">{text}</a>
            ))}
            <a href="#" className="block bg-green-500 text-white px-6 py-3 rounded-full text-center font-semibold">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 text-center max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-100/40 border border-green-200 text-green-900 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
          <Zap size={20} className="text-green-600"/> Agence Marketing Digital 100% en ligne
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
          <span className="bg-gradient-to-r from-green-500 via-green-400 to-green-500 bg-clip-text text-transparent">DigiCore Inc</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-green-600 font-bold mb-4">Marketing Agency</p>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700 mb-12">
          Créons ensemble votre <span className="text-green-500 font-semibold">présence digitale</span> qui convertit. Stratégie, design, technologie et automatisation pour des <span className="text-green-600 font-semibold">résultats mesurables</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a href="#" className="group bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-300 transition-all flex items-center justify-center gap-3">
            Découvrir nos offres <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform"/>
          </a>
          <a href="#" className="border-2 border-green-600 text-green-800 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-100 hover:text-green-900 transition-all">Demander un devis</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {[Facebook,Instagram,Linkedin,Twitter].map((Icon, idx)=>(
            <a key={idx} href="#" className="w-12 h-12 rounded-full bg-green-100/50 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110 text-green-700"><Icon size={22}/></a>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(20px,-30px) scale(1.05); }
          66% { transform: translate(-15px,15px) scale(0.95); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
