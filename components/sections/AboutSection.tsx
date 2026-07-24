"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";

const HIGHLIGHTS = [
  "10+ Years of Industry Experience",
  "150+ Successfully Delivered Projects",
  "Professional & Certified Team",
  "Commitment to Quality & Safety",
  "Cost-Effective Solutions",
  "End-to-End Project Management",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding bg-off-white relative overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0 engineering-grid opacity-40"
        aria-hidden="true"
      />

      {/* Gold accent blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gold-DEFAULT/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-premium">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-px bg-gold-DEFAULT" aria-hidden="true" />
          <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
            About Olymors
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image collage */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="img-zoom-container rounded-3xl overflow-hidden shadow-premium h-[480px] lg:h-[560px]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85"
                  alt="Olymors engineering team working on a construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 glass-dark rounded-2xl px-6 py-5 shadow-navy-lg border border-gold-DEFAULT/20"
              >
                <div className="text-4xl font-black text-gold-DEFAULT leading-none">10+</div>
                <div className="text-white/60 text-sm mt-1 font-medium">Years of<br />Excellence</div>
              </motion.div>

              {/* Second smaller image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-6 -left-4 lg:-left-8 w-36 h-28 lg:w-44 lg:h-36 rounded-2xl overflow-hidden shadow-navy-lg ring-2 ring-gold-DEFAULT/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                  alt="Construction engineering detail"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Decorative gold line */}
              <div
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-gradient-to-b from-transparent via-gold-DEFAULT to-transparent rounded-full opacity-40"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              id="about-title"
              className="text-4xl lg:text-5xl font-black text-navy-DEFAULT leading-tight"
            >
              Who{" "}
              <span className="text-gradient-gold">We Are</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-dark-gray leading-relaxed text-base lg:text-lg">
                Olymors Investment Limited is a forward-thinking company dedicated
                to delivering dependable solutions across engineering, construction,
                contract services, and general merchandise.
              </p>
              <p className="text-dark-gray leading-relaxed">
                We operate with a commitment to professionalism, efficiency, and
                excellence, ensuring every project we undertake meets the highest
                standards of quality and reliability.
              </p>
              <p className="text-dark-gray leading-relaxed">
                Our team works closely with clients, partners, and stakeholders to
                provide solutions that are practical, cost-effective, and aligned
                with long-term development goals.
              </p>
              <p className="text-dark-gray leading-relaxed font-medium">
                At Olymors, we believe that strong structures, efficient systems,
                and trusted partnerships are the foundation of sustainable progress.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              role="list"
              aria-label="Company highlights"
            >
              {HIGHLIGHTS.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-center gap-2.5 text-sm text-dark-gray font-medium"
                  role="listitem"
                >
                  <CheckCircle
                    className="w-4 h-4 text-gold-DEFAULT flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-2">
              <Link
                href="/about"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-navy inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
