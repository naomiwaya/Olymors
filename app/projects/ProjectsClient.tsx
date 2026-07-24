"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data";
import { ProjectsPageHero } from "@/components/sections/page-heroes/AboutPageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { scaleIn, staggerContainer } from "@/utils/animations";

const STATUS_COLORS: Record<string, string> = {
  completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  ongoing: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  upcoming: "bg-gold-DEFAULT/15 text-gold-DEFAULT border-gold-DEFAULT/20",
};

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <ProjectsPageHero />

      <section className="py-14 bg-off-white border-b border-slate-100">
        <div className="container-premium max-w-3xl text-center mx-auto">
          <p className="text-dark-gray text-lg leading-relaxed">
            At Olymors Investment Limited, we believe that successful projects are
            built on collaboration, expertise, and shared vision. We work with
            organizations, businesses, and institutions to deliver engineering,
            construction, and commercial solutions that drive meaningful development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-off-white" aria-labelledby="portfolio-title">
        <div className="container-premium">
          <h2 id="portfolio-title" className="sr-only">Project Portfolio</h2>

          {/* Filters */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-12"
            role="tablist"
            aria-label="Filter by category"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-navy-DEFAULT text-white border-navy-DEFAULT"
                    : "bg-white text-dark-gray border-slate-200 hover:border-gold-DEFAULT"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  variants={scaleIn}
                  className="group bg-white rounded-3xl overflow-hidden shadow-glass border border-slate-100 hover:border-gold-DEFAULT/30 card-premium"
                  aria-label={project.title}
                >
                  <div className="img-zoom-container h-56 relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${STATUS_COLORS[project.status]}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-gold-DEFAULT flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="w-5 h-5 text-navy-DEFAULT" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-slate-400 text-xs mb-2">{project.year} · {project.category}</div>
                    <h3 className="text-navy-DEFAULT font-bold text-base mb-2 group-hover:text-gold-dark transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center py-20 text-slate-400">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
