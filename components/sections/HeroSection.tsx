"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";
import { STATS } from "@/data";
import { useCounter } from "@/hooks/useCounter";
import {
  fadeInUp,
  heroTextVariant,
  staggerContainer,
  floatingAnimation,
  scaleIn,
} from "@/utils/animations";

// SVG Engineering Float Elements
function FloatingGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large circle arc top right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px]"
      >
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          <circle cx="300" cy="300" r="280" stroke="rgba(201,162,39,0.06)" strokeWidth="1" strokeDasharray="8 12"/>
          <circle cx="300" cy="300" r="240" stroke="rgba(201,162,39,0.04)" strokeWidth="0.8" strokeDasharray="4 16"/>
        </svg>
      </motion.div>

      {/* Blueprint corner bracket top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-24 left-8 lg:left-16"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M 70 10 L 10 10 L 10 70" stroke="rgba(201,162,39,0.25)" strokeWidth="1.5"/>
          <circle cx="10" cy="10" r="3" fill="rgba(201,162,39,0.4)"/>
          <line x1="10" y1="40" x2="40" y2="40" stroke="rgba(201,162,39,0.15)" strokeWidth="0.8"/>
          <line x1="40" y1="10" x2="40" y2="40" stroke="rgba(201,162,39,0.15)" strokeWidth="0.8"/>
        </svg>
      </motion.div>

      {/* Floating hexagon right */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-32 right-8 lg:right-24 opacity-20"
      >
        <svg width="100" height="115" viewBox="0 0 100 115" fill="none">
          <polygon points="50,2 98,27 98,88 50,113 2,88 2,27" stroke="#c9a227" strokeWidth="1.5" fill="rgba(201,162,39,0.05)"/>
          <polygon points="50,18 82,36 82,79 50,97 18,79 18,36" stroke="#c9a227" strokeWidth="0.8" fill="none"/>
        </svg>
      </motion.div>

      {/* Floating small elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[10%] opacity-15"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="5" y="5" width="50" height="50" stroke="#c9a227" strokeWidth="1" strokeDasharray="4 4" rx="4"/>
          <circle cx="30" cy="30" r="15" stroke="#c9a227" strokeWidth="1" fill="none"/>
          <line x1="30" y1="5" x2="30" y2="55" stroke="rgba(201,162,39,0.5)" strokeWidth="0.6"/>
          <line x1="5" y1="30" x2="55" y2="30" stroke="rgba(201,162,39,0.5)" strokeWidth="0.6"/>
        </svg>
      </motion.div>

      {/* Gear bottom right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-24 right-[8%] opacity-10"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#c9a227" strokeWidth="1.5"/>
          <circle cx="40" cy="40" r="20" stroke="#c9a227" strokeWidth="1.5"/>
          <circle cx="40" cy="40" r="8" fill="rgba(201,162,39,0.3)" stroke="#c9a227" strokeWidth="1"/>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <rect
              key={i}
              x="37" y="3"
              width="6" height="10"
              rx="2"
              fill="#c9a227"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Engineering angle lines */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.12, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-32 left-0 right-0 origin-left"
      >
        <svg viewBox="0 0 1440 2" className="w-full" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="1440" y2="1" stroke="#c9a227" strokeWidth="1" strokeDasharray="20 15"/>
        </svg>
      </motion.div>
    </div>
  );
}

// Animated stat counter card
function StatCard({ stat, delay }: { stat: typeof STATS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { count, startCounter } = useCounter({ end: stat.value, duration: 2000 });

  useEffect(() => {
    if (isInView) startCounter();
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      custom={delay}
      className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-gold-DEFAULT/30 transition-colors duration-300"
    >
      <div className="counter-number text-4xl lg:text-5xl font-black text-gold-DEFAULT">
        {count}
        <span className="text-gold-light">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-white/60 text-sm font-medium leading-tight">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
      aria-label="Hero section"
    >
      {/* Background SVG */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/backgrounds/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Floating geometry */}
      <FloatingGeometry />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container-premium pt-32 pb-24 lg:pt-40 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-DEFAULT/20 text-gold-DEFAULT text-xs font-semibold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              Engineering Value. Delivering Excellence.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Building Strong{" "}
            <span className="text-gradient-gold">Foundations</span>
            <br />
            for Growth and{" "}
            <span className="relative inline-block">
              Progress
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-DEFAULT via-gold-bright to-gold-DEFAULT origin-left"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl"
          >
            Olymors Investment Limited delivers reliable engineering, construction,
            contract execution, and commercial solutions designed to support
            infrastructure development, business expansion, and long-term value
            creation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-gold-lg"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="btn-outline-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={i * 0.15} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold-DEFAULT/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
