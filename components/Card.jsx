import React from 'react';

export default function Card({ children, className = '', title, icon, footer, accent = 'var(--accent-gold)' }) {
  const accentColor = accent;

  return (
    <article
      role="article"
      aria-label={title || 'Card'}
      className={
        'relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 transform-gpu bg-card ' +
        className
      }
      style={{ willChange: 'transform' }}
    >
      {/* decorative left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(${accentColor}, rgba(255,255,255,0))` }} />

      {/* decorative top-right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-2xl"
        style={{ background: accentColor }}
      />

      {title || icon ? (
        <header className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {icon ? (
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: `${accentColor}22` }}
              >
                <div style={{ color: 'var(--primary-blue)' }}>{icon}</div>
              </div>
            ) : null}
            {title ? (
              <h3 className="text-lg md:text-xl font-bold" style={{ color: 'var(--primary-blue)' }}>{title}</h3>
            ) : null}
          </div>
        </header>
      ) : null}

      <div className="text-sm md:text-base text-gray-700">{children}</div>

      {footer ? <footer className="mt-6 pt-4 border-t border-gray-100">{footer}</footer> : null}
    </article>
  );
}
