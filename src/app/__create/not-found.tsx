'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateDefaultNotFoundPage() {
  const router = useRouter();

  const suggestedPages = [
    { url: '/', label: 'Accueil' },
    { url: '/about', label: 'À propos' },
    { url: '/services', label: 'Services' },
    { url: '/shop', label: 'Boutique' },
    { url: '/blog', label: 'Blog' },
    { url: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1E5FA8] to-[#164a8a]">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#E6C34A] mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-200 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été supprimée.
        </p>

        <div className="space-y-3 mb-8">
          <button
            onClick={() => router.back()}
            className="w-full bg-white text-[#1E5FA8] px-6 py-2 rounded-lg font-semibold hover:bg-[#E6C34A] transition"
          >
            Retour
          </button>
          <Link
            href="/"
            className="block bg-[#E6C34A] text-[#1E5FA8] px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Retour à l'accueil
          </Link>
        </div>

        <div>
          <p className="text-sm text-gray-300 mb-3">Pages suggérées:</p>
          <div className="space-y-2">
            {suggestedPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="block text-[#E6C34A] hover:text-white transition"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
