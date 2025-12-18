"use client";
import {
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
	Menu,
	X,
	Phone,
	Mail,
	Globe,
	Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
	const [sent, setSent] = useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((s) => ({ ...s, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 3000);
		setFormData({ name: "", email: "", company: "", message: "" });
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-100 to-emerald-200 text-gray-900">
			{/* Header (match About) */}
			<header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50 border-b border-gray-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<a href="/" className="flex items-center gap-3">
							<img src="/logo.png" alt="DigiCore Logo" className="h-12 sm:h-14" />
						</a>
						<nav className="hidden md:flex items-center gap-8">
							<a href="/" className="text-gray-900 hover:text-[#00D4D4] transition font-medium">Accueil</a>
							<a href="/about" className="text-gray-900 font-medium">À propos</a>
							<a href="/services" className="text-gray-700 hover:text-[#00D4D4] transition font-medium">Services</a>
							<a href="/packs" className="text-gray-700 hover:text-[#00D4D4] transition font-medium">Nos Packs</a>
							<a href="/contact" className="bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00D4D4]/50 transition font-semibold">Contact</a>
						</nav>
						<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-900 p-2">{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
					</div>
					{mobileMenuOpen && (
						<nav className="md:hidden mt-4 pb-4 space-y-4">
							<a href="/" className="block text-gray-900 hover:text-[#00D4D4] transition font-medium py-2">Accueil</a>
							<a href="/about" className="block text-gray-900 hover:text-[#00D4D4] transition font-medium py-2">À propos</a>
							<a href="/services" className="block text-gray-700 hover:text-[#00D4D4] transition font-medium py-2">Services</a>
							<a href="/packs" className="block text-gray-700 hover:text-[#00D4D4] transition font-medium py-2">Nos Packs</a>
							<a href="/contact" className="block bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-6 py-3 rounded-full text-center font-semibold">Contact</a>
						</nav>
					)}
				</div>
			</header>

			{/* Hero */}
			<section className="pt-32 mt-10 pb-12 px-4 relative overflow-hidden">
				<div className="absolute inset-0">
					<img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop" alt="background" className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-emerald-50/70"></div>
				</div>

				<div className="max-w-7xl mx-auto relative text-center z-20">
					<h1 className="text-4xl sm:text-5xl font-black mb-4">Contactez <span className="text-emerald-700">DigiCore</span></h1>
					<p className="text-lg text-gray-700 max-w-2xl mx-auto">Parlez-nous de votre projet — nous créons des stratégies digitales qui fonctionnent.</p>
				</div>
			</section>

			{/* Content */}
			<section className="pb-20 mt-10">
				<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
					<div className="md:col-span-1">
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
							<h3 className="text-xl font-bold text-emerald-700 mb-3">Nos coordonnées</h3>
							<p className="text-gray-600 mb-6">Nous sommes disponibles pour discuter de votre projet et vous proposer une solution adaptée.</p>

							<div className="space-y-4 text-gray-700">
								<div className="flex items-start gap-3">
									<div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
										<Phone size={18} />
									</div>
									<div>
										<div className="font-semibold">Téléphone</div>
										<div className="text-sm text-gray-600">+237 690 91 04 01</div>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
										<Mail size={18} />
									</div>
									<div>
										<div className="font-semibold">Email</div>
										<div className="text-sm text-gray-600">contact@digicoreinc.org</div>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
										<Globe size={18} />
									</div>
									<div>
										<div className="font-semibold">Site web</div>
										<div className="text-sm text-gray-600">www.digicoreinc.org</div>
									</div>
								</div>
							</div>

							<div className="mt-6 text-sm text-gray-600">
								Heure d'ouverture: Lun - Ven, 9:00 - 17:00
							</div>
						</div>
					</div>

					<div className="md:col-span-2">
						<div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h3>
							<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<input name="name" value={formData.name} onChange={handleChange} required placeholder="Nom complet *" className="col-span-1 md:col-span-1 p-4 border rounded-xl focus:outline-none" />
								<input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email *" className="col-span-1 md:col-span-1 p-4 border rounded-xl focus:outline-none" />
								<input name="company" value={formData.company} onChange={handleChange} placeholder="Entreprise (optionnel)" className="col-span-1 md:col-span-2 p-4 border rounded-xl focus:outline-none" />
								<textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Décrivez votre projet..." className="col-span-1 md:col-span-2 p-4 border rounded-xl focus:outline-none resize-none" />

								<div className="col-span-1 md:col-span-2">
									<button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black font-bold py-4 rounded-2xl shadow-lg">
										Envoyer le message
										<Send size={18} />
									</button>
								</div>

								{sent && <div className="col-span-1 md:col-span-2 text-emerald-700 font-semibold">Message envoyé — nous vous répondrons bientôt.</div>}
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer (match About) */}
			  <footer className="border-t border-slate-200 bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="DigiCore Logo" className="h-12 mb-6" />
              <p className="text-slate-600 mb-6 max-w-md">DigiCore Inc - Votre partenaire digital pour créer de la valeur, générer des conversions et atteindre vos objectifs business.</p>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-100 transition">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">Navigation</h3>
              <div className="space-y-3">
                <a href="/" className="block text-slate-600 hover:text-emerald-600 transition">Accueil</a>
                <a href="/about" className="block text-slate-600 hover:text-emerald-600 transition">À propos</a>
                <a href="/services" className="block text-slate-600 hover:text-emerald-600 transition">Services</a>
                <a href="/packs" className="block text-slate-600 hover:text-emerald-600 transition">Nos Packs</a>
                <a href="/contact" className="block text-slate-600 hover:text-emerald-600 transition">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">Contact</h3>
              <div className="space-y-3 text-slate-600">
                <p>+237 690 91 04 01</p>
                <p>contact@digicoreinc.org</p>
                <p>www.digicoreinc.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-slate-500">
            <p>© 2025 DigiCore Inc. Marketing Agency - Tous droits réservés</p>
          </div>
        </div>
      </footer>
		</div>
	);
}
