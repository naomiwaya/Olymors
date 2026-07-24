"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 60);
      if (currentY < lastScrollY || currentY < 100) {
        setIsVisible(true);
      } else if (currentY > lastScrollY && currentY > 200) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-dark shadow-navy-lg border-b border-white/5"
            : isHomePage
            ? "bg-transparent"
            : "glass-dark"
        )}
        role="banner"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Olymors Investment Limited - Home"
            >
              <div className="relative w-[160px] h-[50px] lg:w-[200px] lg:h-[60px]">
                <Image
                  src="/images/logo-white.svg"
                  alt="Olymors Investment Limited Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg group",
                      isActive
                        ? "text-gold-DEFAULT"
                        : "text-white/80 hover:text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-lg bg-white/5"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-DEFAULT group-hover:w-1/2 transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-white/70 hover:text-gold-DEFAULT transition-colors text-sm"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.phone}</span>
              </a>
              <Link
                href="/contact"
                className="btn-gold px-6 py-2.5 text-sm rounded-full font-semibold"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-24 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-dark/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col h-full px-6 pt-8 pb-12">
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-4 rounded-xl text-lg font-semibold transition-all",
                          isActive
                            ? "text-gold-DEFAULT bg-gold-DEFAULT/10 border border-gold-DEFAULT/20"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-gold-DEFAULT" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-4">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-gold-DEFAULT transition-colors"
                  aria-label={`Call us at ${COMPANY.phone}`}
                >
                  <Phone className="w-5 h-5 text-gold-DEFAULT" />
                  <span className="font-medium">{COMPANY.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="block w-full btn-gold px-6 py-4 text-center rounded-xl text-base font-bold"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
