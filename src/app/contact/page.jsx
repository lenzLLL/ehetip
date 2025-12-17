"use client";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg shadow-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DigiCore Logo"
                className="h-12 sm:h-14"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                À propos
              </a>
              <a
                href="/services"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Services
              </a>
              <a
                href="/packs"
                className="text-white/80 hover:text-[#00D4D4] transition font-medium"
              >
                Nos Packs
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00D4D4]/50 transition font-semibold"
              >
                Contact
              </a>
            </nav>
             <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
            {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <a
                href="/"
                className="block text-white hover:text-[#00D4D4] transition font-medium py-2"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                À propos
              </a>
              <a
                href="/services"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Services
              </a>
              <a
                href="/packs"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Nos Packs
              </a>
              <a
                href="/contact"
                className="block bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 rounded-full text-center font-semibold"
              >
                Contact
              </a>
            </nav>
          )}

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <a
                href="/"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Accueil
              </a>
              <a
                href="/about"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                À propos
              </a>
              <a
                href="/services"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Services
              </a>
              <a
                href="/packs"
                className="block text-white/80 hover:text-[#00D4D4] transition font-medium py-2"
              >
                Nos Packs
              </a>
              <a
                href="/contact"
                className="block bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 rounded-full text-center font-semibold"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop"
            alt="contact background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-[#00D4D4]/20 rounded-full blur-3xl z-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B4F34C]/20 rounded-full blur-3xl z-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              Contactez-
              <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                nous
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Prêt à propulser votre présence digitale ? Discutons de votre
              projet et trouvons ensemble la meilleure solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                  Parlons de votre{" "}
                  <span className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] bg-clip-text text-transparent">
                    projet
                  </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Notre équipe est à votre écoute pour comprendre vos besoins et
                  vous proposer des solutions adaptées. Nous répondons
                  généralement en moins de 24h.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4D4] to-[#B4F34C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={28} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">
                      Téléphone
                    </h3>
                    <a
                      href="tel:+237690910401"
                      className="text-gray-400 hover:text-[#00D4D4] transition text-lg"
                    >
                      +237 690 91 04 01
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Lun - Sam, 8h - 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                    <a
                      href="mailto:contact@digicoreinc.org"
                      className="text-gray-400 hover:text-[#00D4D4] transition text-lg"
                    >
                      contact@digicoreinc.org
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Réponse en moins de 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Globe size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">
                      Site web
                    </h3>
                    <a
                      href="https://www.digicoreinc.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00D4D4] transition text-lg"
                    >
                      www.digicoreinc.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="font-bold text-lg mb-4 text-white">
                  Suivez-nous
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#00D4D4] transition-all hover:scale-110"
                  >
                    <Twitter size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-white/10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4D4] to-[#B4F34C] flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-400">
                      Nous avons bien reçu votre message et vous répondrons dans
                      les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      Demande de devis
                    </h3>
                    <p className="text-gray-400 mb-8">
                      Remplissez le formulaire ci-dessous et nous vous
                      recontacterons rapidement
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2 text-gray-300"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4D4] focus:ring-2 focus:ring-[#00D4D4]/20 transition"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2 text-gray-300"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4D4] focus:ring-2 focus:ring-[#00D4D4]/20 transition"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-2 text-gray-300"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4D4] focus:ring-2 focus:ring-[#00D4D4]/20 transition"
                          placeholder="+237 XXX XX XX XX"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold mb-2 text-gray-300"
                        >
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4D4] focus:ring-2 focus:ring-[#00D4D4]/20 transition"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold mb-2 text-gray-300"
                        >
                          Votre projet *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4D4] focus:ring-2 focus:ring-[#00D4D4]/20 transition resize-none"
                          placeholder="Décrivez votre projet et vos objectifs..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#00D4D4]/30 transition-all flex items-center justify-center gap-3 group"
                      >
                        Envoyer le message
                        <Send
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src="/logo.png"
                alt="DigiCore Logo"
                className="h-12 mb-6"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                DigiCore Inc - Votre partenaire digital pour créer de la valeur,
                générer des conversions et atteindre vos objectifs business.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00D4D4] transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Navigation</h3>
              <div className="space-y-3">
                <a
                  href="/"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Accueil
                </a>
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  À propos
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Services
                </a>
                <a
                  href="/packs"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Nos Packs
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-[#00D4D4] transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>+237 690 91 04 01</p>
                <p>contact@digicoreinc.org</p>
                <p>www.digicoreinc.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>© 2025 DigiCore Inc. Marketing Agency - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
