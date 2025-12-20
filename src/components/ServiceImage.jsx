"use client";

import { useState } from "react";

function generateSvgDataUrl(title) {
  const safe = String(title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0' stop-color='%2300D4D4' />
          <stop offset='1' stop-color='%23B4F34C' />
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(%23g)' />
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, Helvetica, sans-serif' font-size='42' font-weight='700'>${safe}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ServiceImage({ src, title, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt || title}
      className={className}
      onError={() => setCurrentSrc(generateSvgDataUrl(title))}
    />
  );
}
