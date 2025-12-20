import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { name, image, desc, categoryLabel } = project;

  return (
    <div className="group block overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 bg-white">
      <div className="relative h-48 md:h-64 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <span className="absolute top-4 left-4 bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black px-3 py-1 rounded-full text-xs font-bold shadow">{categoryLabel}</span>

        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-sm md:text-lg font-bold">{name}</h3>
          <p className="text-xs md:text-sm mt-1 line-clamp-2">{desc}</p>
        </div>
      </div>

      <div className="p-5 bg-white">
        <h3 className="font-semibold text-gray-900 text-sm md:text-lg line-clamp-1">{name}</h3>
        <p className="text-gray-600 mt-2 text-xs md:text-sm line-clamp-2">{desc}</p>

        <div className="mt-4 flex items-center justify-start">
          <a href="#" aria-label="Voir le projet" className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#00D4D4] to-[#B4F34C] text-black font-semibold shadow hover:shadow-md transition text-xs md:text-sm">
            <span className="whitespace-nowrap">Voir le projet</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
