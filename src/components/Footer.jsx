"use client"
import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12" style={{ background: 'linear-gradient(180deg, #071126, #0b1220)', color: '#cbd5e1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-12 mb-20">
            <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://ucarecdn.com/7be9609c-8e34-4326-829d-3e19dc4a6a7d/-/format/auto/"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-black text-white tracking-tighter">
                EHETIP
              </span>
            </div>
            <p className="text-lg max-w-md mb-8 leading-relaxed text-gray-300">
              L'École des Hautes Études Internationales et Politiques forme les
              futurs cadres et diplomates du Tchad et de la sous-région.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Programmes", href: "/programmes" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
                { name: "Brochure", href: "/CHARTE%20D%27engagement.docx", external: true },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--accent-gold)] transition-colors text-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] rounded"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone size={20} className="shrink-0" style={{ color: 'var(--accent-gold)' }} />
                <span>+235 61 77 55 66</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="shrink-0" style={{ color: 'var(--accent-gold)' }} />
                <span>ehetip@gmail.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin size={20} className="shrink-0" style={{ color: 'var(--accent-gold)' }} />
                <span>Moursal & Al Afia, N'Djamena, Tchad</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} EHETIP. Tous droits réservés. Excellence &amp; Intégrité.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
