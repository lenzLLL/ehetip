export const articles = [
  {
    slug: 'lancement-promotion-2026',
    title: "Lancement de la promotion 2026",
    date: "3 janvier 2026",
    excerpt: "L'EHETIP a organisé une semaine d'accueil riche en ateliers, présentations de parcours et séances d'orientation pour faciliter l'intégration des nouveaux étudiants et présenter les ressources pédagogiques de l'école.",
    image: '/hero.jpg',
    content: `L'EHETIP a organisé une semaine d'accueil pour les nouveaux étudiants, comprenant des ateliers d'intégration, des séances d'orientation par filière et des rencontres avec le corps enseignant. Les étudiants ont pu découvrir les installations, les outils pédagogiques numériques et les opportunités de stages et d'échanges internationaux.

L'événement a été conçu pour favoriser la cohésion de la promotion, offrir des conseils pratiques pour la réussite académique et présenter les différents services de l'école (bibliothèque, services étudiants, accompagnement carrière). Des ateliers thématiques ont également permis d'introduire des compétences transversales utiles dès la première année`,
  },
  {
    slug: 'conference-gouvernance-2025',
    title: "Conférence sur la gouvernance publique",
    date: "15 décembre 2025",
    excerpt: "Des experts nationaux et internationaux ont échangé pendant deux jours sur les défis et bonnes pratiques en matière de gouvernance publique, avec des retours d'expérience concrets et recommandations pour les décideurs.",
    image: '/hero.png',
    content: `La conférence a réuni des spécialistes du secteur public, des chercheurs et des acteurs de la société civile pour discuter des réformes institutionnelles, de la transparence et de l'efficacité des politiques publiques en Afrique centrale. Les intervenants ont présenté des études de cas, évaluations d'impact et outils d'analyse politique.

Parmi les sujets abordés : la gestion des finances publiques, l'innovation dans les services publics, le rôle des partenariats internationaux et les mécanismes de participation citoyenne. La conférence a conclu sur une série de recommandations visant à renforcer les capacités institutionnelles et promouvoir des approches inclusives`,
  },
  {
    slug: 'partenariats-2025',
    title: "Nouveaux partenariats internationaux",
    date: "2 novembre 2025",
    excerpt: "L'EHETIP a signé plusieurs accords de partenariat visant à développer des programmes d'échange, des projets de recherche collaborative et des parcours conjoints avec des institutions en Afrique et en Europe.",
    image: '/hero.jpg',
    content: `Ces partenariats permettront de renforcer la mobilité étudiante et enseignante, de co-construire des programmes de formation et de développer des projets de recherche communs. Ils ouvrent également la voie à des séminaires internationaux et à l'accès à des ressources académiques partagées.

Les accords prévoient des modalités d'échange, des bourses de mobilité et la création d'équipes mixtes pour travailler sur des thématiques clés comme le développement territorial, la gouvernance et l'innovation pédagogique. Ces initiatives consolident l'ancrage international de l'EHETIP.`,
  },
];

export function findArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
