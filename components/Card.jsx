import React from 'react';

export default function Card({ children, className = '', title, icon, footer }) {
  return (
    <div
      className={
        'bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 transform-gpu ' +
        className
      }
      style={{ willChange: 'transform' }}
    >
      {title || icon ? (
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {icon ? <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">{icon}</div> : null}
            {title ? <h3 className="text-lg md:text-xl font-bold" style={{ color: 'var(--primary-blue)' }}>{title}</h3> : null}
          </div>
        </div>
      ) : null}

      <div className="text-sm md:text-base text-gray-700">{children}</div>

      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
