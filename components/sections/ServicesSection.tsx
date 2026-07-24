"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Settings,
  Building2,
  FileText,
  Package,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/utils/animations";

const ICONS = { Settings, Building2, FileText, Package } as Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>;

const SERVICE_COLORS = [
  { border: "from-blue-400/30 via-blue-500/10 to-transparent", icon: "bg-blue-500/15 text-blue-400", glow: "group-hover:shadow-blue-500/20" },
  { border: "from-gold-DEFAULT/30 via-gold-DEFAULT/10 to-transparent", icon: "bg-gold-DEFAULT/15 text-gold-DEFAULT", glow: "group-hover:shadow-gold/30" },
  { border: "from-emerald-400/30 via-emerald-500/10 to-transparent", icon: "bg-emerald-500/15 text-emerald-400", glow: "group-hover:shadow-emerald-500/20" },
  { border: "from-purple-400/30 via-purple-500/10 to-transparent", icon: "bg-purple-500/15 text-purple-400", glow: "group-hover:shadow-purple-500/20" },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="section-padding bg-navy relative overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Blueprint BG */}
      <div className="absolute inset-0 blueprint-lines" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/50"
        aria-hidden="true"
      />

      {/* Gold glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-DEFAULT/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-premium">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
            <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
              What We Do
            </span>
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="services-title"
            className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our{" "}
            <span className="text-gradient-gold">Services</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We deliver comprehensive engineering and construction solutions that
            drive infrastructure development and create lasting value.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => {
            const IconComponent = ICONS[service.icon] || Settings;
            const colors = SERVICE_COLORS[i] || SERVICE_COLORS[0];

            return (
              <motion.article
                key={service.id}
                variants={scaleIn}
                className={`group relative glass-dark rounded-3xl p-7 border border-white/8 hover:border-gold-DEFAULT/25 transition-all duration-500 card-premium ${colors.glow}`}
                aria-label={service.title}
              >
                {/* Gradient border top */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${colors.border}`}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6" role="list" aria-label={`${service.title} features`}>
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-white/40" role="listitem">
                      <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/60 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-gold-DEFAULT text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-gold-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
