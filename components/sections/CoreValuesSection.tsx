"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Star,
  CheckCircle,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { CORE_VALUES } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

const ICONS = {
  Shield,
  Star,
  CheckCircle,
  Lightbulb,
  Handshake,
} as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

const VALUE_COLORS = [
  "from-blue-500/20 to-blue-600/5 border-blue-500/20 text-blue-400",
  "from-gold-DEFAULT/20 to-gold-DEFAULT/5 border-gold-DEFAULT/20 text-gold-DEFAULT",
  "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
  "from-purple-500/20 to-purple-600/5 border-purple-500/20 text-purple-400",
  "from-rose-500/20 to-rose-600/5 border-rose-500/20 text-rose-400",
];

export function CoreValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="section-padding bg-off-white relative overflow-hidden"
      aria-labelledby="values-title"
    >
      <div className="absolute inset-0 engineering-grid opacity-30" aria-hidden="true" />

      <div className="relative container-premium">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
            <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
              Our Foundation
            </span>
            <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="values-title"
            className="text-4xl lg:text-5xl font-black text-navy-DEFAULT"
          >
            Core{" "}
            <span className="text-gradient-gold">Values</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-dark-gray/70 text-lg mt-4 max-w-xl mx-auto"
          >
            Five principles that guide everything we do and define who we are as
            a company.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {CORE_VALUES.map((value, i) => {
            const Icon = ICONS[value.icon] || Shield;
            const colorClass = VALUE_COLORS[i] || VALUE_COLORS[0];
            const [gradientFrom, gradientTo, borderColor, iconColor] =
              colorClass.split(" ");

            return (
              <motion.article
                key={value.id}
                variants={scaleIn}
                className={`group relative bg-gradient-to-b ${gradientFrom} ${gradientTo} rounded-3xl p-7 border ${borderColor} hover:scale-105 transition-all duration-300 card-premium text-center`}
                aria-label={value.title}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 mx-auto`}
                  aria-hidden="true"
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>

                {/* Number */}
                <div
                  className="text-4xl font-black text-white/5 absolute top-4 right-4 leading-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-navy-DEFAULT font-bold text-base mb-2">
                  {value.title}
                </h3>

                <p className="text-dark-gray/65 text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
