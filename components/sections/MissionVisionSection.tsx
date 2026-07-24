"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/utils/animations";

export function MissionVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding bg-navy relative overflow-hidden"
      aria-labelledby="mission-vision-title"
    >
      <div className="absolute inset-0 blueprint-lines opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.06),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative container-premium">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
            <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
              Our Direction
            </span>
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            id="mission-vision-title"
            className="text-4xl lg:text-5xl font-black text-white"
          >
            Mission &{" "}
            <span className="text-gradient-gold">Vision</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative glass-dark rounded-3xl p-10 border border-white/8 hover:border-gold-DEFAULT/25 transition-all duration-500"
            role="article"
            aria-label="Our Mission"
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/40 to-transparent"
              aria-hidden="true"
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 flex items-center justify-center mb-8"
              aria-hidden="true"
            >
              <Target className="w-8 h-8 text-gold-DEFAULT" />
            </div>

            <span
              className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase mb-3 block"
              aria-hidden="true"
            >
              Our Mission
            </span>

            <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
              Delivering Lasting Value
            </h3>

            <p className="text-white/55 leading-relaxed">
              To deliver high-quality engineering, construction, and commercial
              solutions that create lasting value for our clients, partners, and
              communities. Through professionalism, innovation, and uncompromising
              standards, we execute every project with precision, integrity, and a
              commitment to excellence.
            </p>

            {/* Decorative corner */}
            <div
              className="absolute bottom-6 right-6 w-12 h-12 opacity-10"
              aria-hidden="true"
            >
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M 40 8 L 8 8 L 8 40" stroke="#c9a227" strokeWidth="2"/>
              </svg>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative glass-dark rounded-3xl p-10 border border-white/8 hover:border-gold-DEFAULT/25 transition-all duration-500"
            role="article"
            aria-label="Our Vision"
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
              aria-hidden="true"
            />

            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-8"
              aria-hidden="true"
            >
              <Eye className="w-8 h-8 text-blue-400" />
            </div>

            <span
              className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 block"
              aria-hidden="true"
            >
              Our Vision
            </span>

            <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
              Leading Force in Engineering
            </h3>

            <p className="text-white/55 leading-relaxed">
              To become a leading force in engineering, construction, and commercial
              services, recognized for delivering transformative projects, driving
              sustainable development, and setting the standard for excellence across
              every industry we serve.
            </p>

            {/* Decorative corner */}
            <div
              className="absolute bottom-6 right-6 w-12 h-12 opacity-10"
              aria-hidden="true"
            >
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M 8 40 L 40 40 L 40 8" stroke="#60a5fa" strokeWidth="2"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
