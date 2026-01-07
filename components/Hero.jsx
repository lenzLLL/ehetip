"use client"
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Hero({
  title,
  subtitle,
  cta = [],
  bgImage,
  align = "left",
  variant = "home",
}) {
  // background handling with fallback
  const defaultBg = "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const [bg, setBg] = useState(bgImage || defaultBg);

  useEffect(() => {
    setBg(bgImage || defaultBg);
  }, [bgImage]);

  // preload to detect errors and fallback to local `/hero.svg`
  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => {
      /* ok */
    };
    img.onerror = () => {
      if (!bg.endsWith('/hero.svg')) setBg('/hero.svg');
    };
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [bg]);

  if (variant === "home") {
    return (
      <section
        className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-screen overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,6,23,0.82)] via-[rgba(2,6,23,0.42)] to-transparent" />

        <div className="max-w-5xl mx-auto px-4 lg:px-6 w-full relative z-10 h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 xl:col-span-6"
            >
              <p className="text-sm uppercase tracking-widest text-[var(--accent-gold)] mb-2">EHETIP — Éducation & Leadership</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight text-white" style={{ fontFamily: 'Merriweather, serif' }}>
                {title}
              </h1>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 max-w-xl">
                {subtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                {cta.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className={
                      c.variant === 'ghost'
                        ? 'btn-hero-ghost btn-ghost--light'
                        : 'btn-primary btn-hero'
                    }
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* optional right column for decorative content on large screens */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
          </div>
        </div>
      </section>
    );
  }

  // fallback: simple centered page hero
  return (
    <section className="relative py-12 text-white overflow-hidden" style={{ minHeight: '40vh' }}>
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#1e3a5f] bg-opacity-80" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {title ? (
            <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">{title}</h1>
          ) : null}
          {subtitle ? (
            <p className="text-sm md:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
          ) : null}
          <div className="mt-6 flex gap-3 justify-center">
            {cta.map((c, i) => (
              <a key={i} href={c.href} className={c.variant === 'ghost' ? 'btn-hero-ghost btn-ghost--light' : 'btn-primary btn-hero'}>
                {c.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white/5 blur-3xl"></div>
    </section>
  );
}
