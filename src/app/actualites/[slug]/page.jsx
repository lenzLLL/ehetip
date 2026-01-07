import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findArticle } from '../data'

export default function ArticlePage({ params }) {
  const { slug } = params
  const article = findArticle(slug)
  if (!article) return notFound()

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/actualites" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50">
            ← Retour aux actualités
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{article.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{article.date}</p>

        {article.image && (
          <div className="rounded-lg overflow-hidden mb-6 shadow">
            <img src={article.image} alt={article.title} className="w-full h-72 object-cover" />
          </div>
        )}

        <div className="prose max-w-none text-gray-700">
          {article.content.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
