"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/utils/animations";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  backgroundImage?: string;
}

export function PageHero({ badge, title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy pt-24" aria-label="Page hero">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/backgrounds/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy"
        aria-hidden="true"
      />

      {/* Corner brackets */}
      <div className="absolute top-28 left-6 lg:left-16 opacity-30" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 55 5 L 5 5 L 5 55" stroke="#c9a227" strokeWidth="1.5"/>
          <circle cx="5" cy="5" r="3" fill="#c9a227"/>
        </svg>
      </div>
      <div className="absolute top-28 right-6 lg:right-16 opacity-30 rotate-90" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M 55 5 L 5 5 L 5 55" stroke="#c9a227" strokeWidth="1.5"/>
          <circle cx="5" cy="5" r="3" fill="#c9a227"/>
        </svg>
      </div>

      <div className="relative container-premium py-16 lg:py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-DEFAULT/20 text-gold-DEFAULT text-xs font-semibold tracking-widest uppercase mb-6">
              {badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPageHero() {
  return (
    <PageHero
      badge="About Olymors"
      title={<>Who We <span className="text-gradient-gold">Are</span></>}
      description="A forward-thinking engineering and construction company delivering dependable solutions built on professionalism, excellence, and a commitment to lasting value."
    />
  );
}

export function ServicesPageHero() {
  return (
    <PageHero
      badge="Our Services"
      title={<>What We <span className="text-gradient-gold">Offer</span></>}
      description="Comprehensive engineering, construction, contract management, and commercial solutions designed to meet the demands of modern infrastructure development."
    />
  );
}

export function ProjectsPageHero() {
  return (
    <PageHero
      badge="Our Portfolio"
      title={<>Featured <span className="text-gradient-gold">Projects</span></>}
      description="Explore our portfolio of successfully delivered engineering and construction projects across Nigeria."
    />
  );
}

export function ContactPageHero() {
  return (
    <PageHero
      badge="Contact Us"
      title={<>Let&apos;s Build Something <span className="text-gradient-gold">Together</span></>}
      description="Ready to start your next project? Get in touch with our team of experts and let's turn your vision into reality."
    />
  );
}
