import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/data";
import { ServicesPageHero } from "@/components/sections/page-heroes/AboutPageHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Olymors Investment Limited offers engineering services, construction & project execution, contract services, and general merchandise across Nigeria.",
  alternates: { canonical: "https://olymors.com/services" },
};

const ICON_MAP: Record<string, string> = {
  Settings: "⚙️",
  Building2: "🏗️",
  FileText: "📋",
  Package: "📦",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />

      <section className="section-padding bg-off-white" aria-labelledby="services-detail-title">
        <div className="container-premium">
          <div className="text-center mb-14">
            <h2 id="services-detail-title" className="text-4xl lg:text-5xl font-black text-navy-DEFAULT">
              Comprehensive <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-dark-gray/70 mt-4 text-lg max-w-2xl mx-auto">
              From concept to completion, we deliver end-to-end engineering and
              construction services tailored to your needs.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <article
                key={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden bg-white shadow-glass border border-slate-100 p-8 lg:p-12 ${
                  i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
                aria-label={service.title}
              >
                {/* Number + Title side */}
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-DEFAULT/5 flex items-center justify-center text-2xl" aria-hidden="true">
                      {ICON_MAP[service.icon] ?? "🔧"}
                    </div>
                    <span className="text-5xl font-black text-navy-DEFAULT/6 leading-none select-none" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-10 h-0.5 bg-gold-DEFAULT mb-4 rounded-full" aria-hidden="true" />
                  <h3 className="text-2xl lg:text-3xl font-black text-navy-DEFAULT mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
                  >
                    Request This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Features side */}
                <div className={`bg-navy-DEFAULT/[0.03] rounded-2xl p-7 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h4 className="text-navy-DEFAULT font-bold mb-5 text-sm uppercase tracking-wider">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3" role="list">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-dark-gray text-sm" role="listitem">
                        <CheckCircle className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ContactSection />
    </>
  );
}
