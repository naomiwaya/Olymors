"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NAV_ITEMS, SERVICES, COMPANY } from "@/data";

const currentYear = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative bg-navy-dark overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-lines opacity-50" aria-hidden="true" />

      {/* Gold top border */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent" />

      {/* Large watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/logo-white.svg"
          alt=""
          width={600}
          height={180}
          className="opacity-[0.02] object-contain"
        />
      </div>

      <div className="relative container-premium py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" aria-label="Olymors Investment Limited - Home">
              <div className="relative w-[180px] h-[55px]">
                <Image
                  src="/images/logo-white.svg"
                  alt="Olymors Investment Limited"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering Value. Delivering Excellence. Building strong foundations for growth and progress across Nigeria.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {[
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaXTwitter, href: "#", label: "Twitter/X" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  aria-label={`Olymors on ${label}`}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-DEFAULT hover:border-gold-DEFAULT/50 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} role="listitem">
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-white/50 hover:text-gold-DEFAULT transition-colors text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-gold-DEFAULT" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li role="listitem">
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-2 text-white/50 hover:text-gold-DEFAULT transition-colors text-sm group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-gold-DEFAULT" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Privacy Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">
              Our Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id} role="listitem">
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-white/50 hover:text-gold-DEFAULT transition-colors text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-gold-DEFAULT" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">
              Contact Us
            </h3>

            <address className="space-y-4 not-italic" aria-label="Contact information">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start gap-3 group hover:text-gold-DEFAULT transition-colors"
                aria-label={`Phone: ${COMPANY.phone}`}
              >
                <Phone className="w-4 h-4 text-gold-DEFAULT mt-0.5 flex-shrink-0" />
                <span className="text-white/50 group-hover:text-gold-DEFAULT transition-colors text-sm">
                  {COMPANY.phone}
                </span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 group hover:text-gold-DEFAULT transition-colors"
                aria-label={`Email: ${COMPANY.email}`}
              >
                <Mail className="w-4 h-4 text-gold-DEFAULT mt-0.5 flex-shrink-0" />
                <span className="text-white/50 group-hover:text-gold-DEFAULT transition-colors text-sm">
                  {COMPANY.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-DEFAULT mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  {COMPANY.address}
                </span>
              </div>
            </address>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Stay Updated
              </p>
              {subscribed ? (
                <p className="text-gold-DEFAULT text-sm font-medium">
                  ✓ Thank you for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2" aria-label="Newsletter subscription">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:border-gold-DEFAULT focus:bg-white/8 transition-all min-w-0"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="btn-gold px-3 py-2.5 rounded-lg flex-shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/30 hover:text-gold-DEFAULT transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <p className="text-white/30 text-xs">
              RC: 7241234 · Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
