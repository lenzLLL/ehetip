"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

// colors use CSS variables defined in global.css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Équipe", href: "/equipe" },
    { name: "Actualités", href: "/actualites" },
    { name: "Filières", href: "/filieres" },
    { name: "Formations", href: "/formations" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 shadow-sm" style={{ background: 'var(--glass)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg shadow-inner transition-transform group-hover:scale-105"
              style={{ backgroundColor: 'var(--primary-blue)' }}
            >
              <img
                src="https://ucarecdn.com/7be9609c-8e34-4326-829d-3e19dc4a6a7d/-/format/auto/"
                alt="EHETIP Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
                <span
                  className="text-xl font-bold tracking-tight leading-none"
                  style={{ color: 'var(--primary-blue)' }}
                >
                EHETIP
              </span>
              <span
                className="text-[8px] uppercase font-bold tracking-widest mt-1"
                style={{ color: 'var(--accent-gold)' }}
              >
                Excellence Académique
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent-gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] rounded"
              >
                {item.name}
              </a>
            ))}
              <a
                href="/contact"
                className="px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all hover:shadow-lg active:scale-95 text-center btn-primary"
              >
              Nous Contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--muted)] hover:text-[var(--primary-blue)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 overflow-hidden"
              style={{ background: 'var(--glass)' }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                    className="block px-3 py-4 text-base font-medium text-[var(--muted)] hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="/contact"
                    className="block w-full py-3 rounded-xl text-white font-bold transition-all text-center btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
