"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-lines" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <span className="text-[20rem] font-black text-white/[0.015] select-none leading-none">404</span>
      </div>

      <div className="relative text-center px-6 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/logo-white.svg"
              alt="Olymors Investment Limited"
              width={220}
              height={66}
            />
          </div>

          <div className="text-8xl font-black text-gradient-gold mb-4 leading-none">
            404
          </div>

          <h1 className="text-3xl font-black text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on solid ground.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn-outline-gold inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
