"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/data";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/utils/animations";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding bg-off-white relative overflow-hidden"
      aria-labelledby="contact-cta-title"
    >
      <div className="absolute inset-0 engineering-grid opacity-30" aria-hidden="true" />

      <div className="relative container-premium">
        <div className="relative bg-gradient-to-br from-navy-DEFAULT via-navy-light to-navy-dark rounded-4xl overflow-hidden">
          {/* BG pattern inside card */}
          <div className="absolute inset-0 blueprint-lines opacity-40" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,162,39,0.12),transparent_60%)]"
            aria-hidden="true"
          />

          {/* Gold top border */}
          <div
            className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
                  <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
                    Get In Touch
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  id="contact-cta-title"
                  className="text-4xl lg:text-5xl font-black text-white leading-tight"
                >
                  Let&apos;s Build Something{" "}
                  <span className="text-gradient-gold">Great Together</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-white/55 text-lg leading-relaxed">
                  Ready to start your next engineering or construction project?
                  Our team is here to help you turn your vision into reality.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <Link
                    href="/contact"
                    className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold shadow-gold-lg"
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: Contact info */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-5"
              >
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: COMPANY.phone,
                    href: `tel:${COMPANY.phone}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: COMPANY.address,
                    href: "#",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    variants={fadeInRight}
                    className="flex items-start gap-4 glass rounded-2xl p-5 border border-white/8 hover:border-gold-DEFAULT/30 transition-all duration-300 group"
                    aria-label={`${label}: ${value}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-gold-DEFAULT" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                        {label}
                      </div>
                      <div className="text-white font-medium text-sm group-hover:text-gold-DEFAULT transition-colors">
                        {value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
