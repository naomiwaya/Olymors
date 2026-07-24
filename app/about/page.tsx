import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Users, Award, Building, Globe } from "lucide-react";
import { CORE_VALUES } from "@/data";
import { AboutPageHero } from "@/components/sections/page-heroes/AboutPageHero";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Olymors Investment Limited — a forward-thinking engineering and construction company committed to delivering excellence, reliability, and lasting value across Nigeria.",
  alternates: {
    canonical: "https://olymors.com/about",
  },
};

const MILESTONES = [
  { year: "2015", event: "Olymors Investment Limited founded in Lagos, Nigeria" },
  { year: "2017", event: "First major infrastructure project successfully delivered" },
  { year: "2019", event: "Expanded into contract services and general merchandise" },
  { year: "2021", event: "Delivered 100th project milestone" },
  { year: "2023", event: "Recognized as a leading engineering firm in Lagos State" },
  { year: "2024", event: "Expanded service offerings and deepened industry partnerships" },
];

const TEAM_STATS = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Building, value: "150+", label: "Projects Delivered" },
  { icon: Globe, value: "6+", label: "Industries Served" },
];

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />

      {/* About Content */}
      <section className="section-padding bg-off-white relative overflow-hidden" aria-labelledby="about-content-title">
        <div className="absolute inset-0 engineering-grid opacity-30" aria-hidden="true" />
        <div className="relative container-premium">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Image */}
            <div className="relative sticky top-28">
              <div className="img-zoom-container rounded-3xl overflow-hidden shadow-premium h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
                  alt="Olymors Investment Limited engineering team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 glass-dark rounded-2xl px-6 py-5 border border-gold-DEFAULT/20 shadow-gold">
                <div className="text-4xl font-black text-gold-DEFAULT">150+</div>
                <div className="text-white/60 text-sm mt-0.5">Projects Completed</div>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="space-y-8 pt-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold-DEFAULT" aria-hidden="true" />
                  <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
                    Our Story
                  </span>
                </div>
                <h2 id="about-content-title" className="text-4xl lg:text-5xl font-black text-navy-DEFAULT mb-6 leading-tight">
                  Engineering for{" "}
                  <span className="text-gradient-gold">a Better Tomorrow</span>
                </h2>
              </div>

              <div className="space-y-4 text-dark-gray leading-relaxed">
                <p>
                  Olymors Investment Limited is a forward-thinking company
                  dedicated to delivering dependable solutions across engineering,
                  construction, contract services, and general merchandise.
                </p>
                <p>
                  We operate with a commitment to professionalism, efficiency,
                  and excellence, ensuring every project we undertake meets the
                  highest standards of quality and reliability.
                </p>
                <p>
                  Our team works closely with clients, partners, and stakeholders
                  to provide solutions that are practical, cost-effective, and
                  aligned with long-term development goals.
                </p>
                <p className="font-medium">
                  At Olymors, we believe that strong structures, efficient
                  systems, and trusted partnerships are the foundation of
                  sustainable progress.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4" role="list" aria-label="Company statistics">
                {TEAM_STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    role="listitem"
                    className="bg-white rounded-2xl p-5 shadow-glass border border-slate-100 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy-DEFAULT/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-navy-DEFAULT" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-navy-DEFAULT">{value}</div>
                      <div className="text-dark-gray/60 text-xs font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm"
              >
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-navy relative overflow-hidden" aria-labelledby="timeline-title">
        <div className="absolute inset-0 blueprint-lines opacity-50" aria-hidden="true" />
        <div className="relative container-premium">
          <div className="text-center mb-14">
            <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 id="timeline-title" className="text-4xl lg:text-5xl font-black text-white mt-4">
              Company <span className="text-gradient-gold">Milestones</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto" role="list" aria-label="Company milestones">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-DEFAULT/30 to-transparent"
              aria-hidden="true"
            />

            {MILESTONES.map((milestone, i) => (
              <div
                key={milestone.year}
                role="listitem"
                className={`relative flex items-center gap-8 mb-10 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass-dark rounded-2xl p-5 border border-white/8 hover:border-gold-DEFAULT/20 transition-colors inline-block">
                    <div className="text-gold-DEFAULT text-sm font-black mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      {milestone.event}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="w-4 h-4 rounded-full bg-gold-DEFAULT border-2 border-navy-DEFAULT flex-shrink-0 z-10"
                  aria-hidden="true"
                />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <CoreValuesSection />
      <ContactSection />
    </>
  );
}
