"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

const STATUS_COLORS: Record<string, string> = {
  completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  ongoing: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  upcoming: "bg-gold-DEFAULT/15 text-gold-DEFAULT border-gold-DEFAULT/20",
};

export function ProjectsSection({ limit = 6 }: { limit?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const displayProjects = PROJECTS.slice(0, limit);

  return (
    <section
      ref={ref}
      className="section-padding bg-navy relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 blueprint-lines opacity-50" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-DEFAULT/4 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-premium">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
              <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              id="projects-title"
              className="text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Featured{" "}
              <span className="text-gradient-gold">Projects</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gold-DEFAULT font-semibold hover:gap-4 transition-all duration-200 text-sm"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              className="group relative glass-dark rounded-3xl overflow-hidden border border-white/8 hover:border-gold-DEFAULT/25 transition-all duration-500 card-premium"
              aria-label={project.title}
            >
              {/* Image */}
              <div className="img-zoom-container h-52 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-navy-dark/70 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${STATUS_COLORS[project.status]}`}
                  >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold-DEFAULT/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-DEFAULT flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-navy-DEFAULT" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/30 text-xs mb-3">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-white font-bold text-base mb-2 group-hover:text-gold-DEFAULT transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-white/40 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-gold-lg"
          >
            Explore All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
