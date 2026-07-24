"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Network, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

const ICONS = { Award, Clock, Network, TrendingUp } as Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>;

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding bg-off-white relative overflow-hidden"
      aria-labelledby="why-us-title"
    >
      {/* BG decoration */}
      <div className="absolute inset-0 engineering-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-DEFAULT/3 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-premium">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
            <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
              Our Advantage
            </span>
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="why-us-title"
            className="text-4xl lg:text-5xl font-black text-navy-DEFAULT leading-tight mb-4"
          >
            Why Choose{" "}
            <span className="text-gradient-gold">Olymors</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-dark-gray/70 text-lg max-w-xl mx-auto">
            We deliver measurable results backed by expertise, reliability, and
            an unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Award;
            return (
              <motion.article
                key={item.id}
                variants={scaleIn}
                className="group relative bg-white rounded-3xl p-8 shadow-glass border border-slate-100 hover:border-gold-DEFAULT/30 card-premium"
                aria-label={item.title}
              >
                {/* Number */}
                <span
                  className="absolute top-6 right-6 text-6xl font-black text-navy-DEFAULT/4 group-hover:text-gold-DEFAULT/8 transition-colors leading-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl bg-navy-DEFAULT/5 group-hover:bg-gold-DEFAULT/10 flex items-center justify-center mb-6 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7 text-navy-DEFAULT group-hover:text-gold-dark transition-colors duration-300" />
                </div>

                {/* Gold accent line */}
                <div
                  className="w-8 h-0.5 bg-gold-DEFAULT mb-4 group-hover:w-16 transition-all duration-300 rounded-full"
                  aria-hidden="true"
                />

                <h3 className="text-navy-DEFAULT font-bold text-lg mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-dark-gray/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
