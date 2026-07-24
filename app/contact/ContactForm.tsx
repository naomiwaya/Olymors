"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { COMPANY } from "@/data";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // EmailJS integration — replace with real service/template IDs
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_olymors",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_contact",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company: data.company ?? "N/A",
          message: data.message,
          to_email: COMPANY.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="section-padding bg-off-white relative overflow-hidden" aria-labelledby="contact-form-title">
        <div className="absolute inset-0 engineering-grid opacity-30" aria-hidden="true" />

        <div className="relative container-premium">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <motion.aside
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 space-y-8"
              aria-label="Contact information"
            >
              <motion.div variants={fadeInLeft}>
                <h2 id="contact-form-title" className="text-3xl lg:text-4xl font-black text-navy-DEFAULT mb-4">
                  Get In <span className="text-gradient-gold">Touch</span>
                </h2>
                <p className="text-dark-gray leading-relaxed">
                  Have a project in mind? We&apos;d love to hear from you. Fill in the
                  form or reach us directly through any of the channels below.
                </p>
              </motion.div>

              {/* Contact cards */}
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { icon: MapPin, label: "Office", value: COMPANY.address, href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    variants={fadeInLeft}
                    href={href}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-glass border border-slate-100 hover:border-gold-DEFAULT/30 transition-all duration-300 group"
                    aria-label={`${label}: ${value}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-DEFAULT/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-DEFAULT/10 transition-colors" aria-hidden="true">
                      <Icon className="w-5 h-5 text-navy-DEFAULT group-hover:text-gold-dark transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-dark-gray/40 mb-0.5">{label}</div>
                      <div className="text-navy-DEFAULT font-medium text-sm">{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business hours */}
              <motion.div variants={fadeInLeft} className="bg-navy-DEFAULT rounded-2xl p-6 border border-white/5">
                <h3 className="text-gold-DEFAULT font-bold text-sm uppercase tracking-wider mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday – Friday", "8:00 AM – 6:00 PM"],
                    ["Saturday", "9:00 AM – 2:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-white/50">{day}</span>
                      <span className="text-white/80 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.aside>

            {/* Right: Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-premium border border-slate-100"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle className="w-16 h-16 text-emerald-500" aria-hidden="true" />
                  <h3 className="text-2xl font-black text-navy-DEFAULT">Message Sent!</h3>
                  <p className="text-dark-gray/70 max-w-sm">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-gold px-6 py-3 rounded-full text-sm font-bold mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  aria-label="Contact form"
                  noValidate
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-DEFAULT">Send Us a Message</h3>
                    <p className="text-dark-gray/60 text-sm mt-1">All fields marked * are required.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="John Doe"
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="form-input w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-DEFAULT text-sm placeholder:text-slate-400 focus:border-gold-DEFAULT transition-all"
                      />
                    </Field>
                    <Field label="Email Address *" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@company.com"
                        autoComplete="email"
                        aria-required="true"
                        className="form-input w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-DEFAULT text-sm placeholder:text-slate-400 focus:border-gold-DEFAULT transition-all"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone Number *" error={errors.phone?.message}>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+234 800 000 0000"
                        autoComplete="tel"
                        aria-required="true"
                        className="form-input w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-DEFAULT text-sm placeholder:text-slate-400 focus:border-gold-DEFAULT transition-all"
                      />
                    </Field>
                    <Field label="Company Name" error={errors.company?.message}>
                      <input
                        {...register("company")}
                        type="text"
                        placeholder="Your Company Ltd."
                        autoComplete="organization"
                        className="form-input w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-DEFAULT text-sm placeholder:text-slate-400 focus:border-gold-DEFAULT transition-all"
                      />
                    </Field>
                  </div>

                  <Field label="Message *" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your project, requirements, or any questions..."
                      aria-required="true"
                      className="form-input w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-navy-DEFAULT text-sm placeholder:text-slate-400 focus:border-gold-DEFAULT transition-all resize-none"
                    />
                  </Field>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm" role="alert">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label="Submit contact form"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-navy-DEFAULT/30 border-t-navy-DEFAULT rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-navy-DEFAULT/70 uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
