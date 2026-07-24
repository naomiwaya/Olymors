import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { ContactPageHero } from "@/components/sections/page-heroes/AboutPageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Olymors Investment Limited. Request a consultation for your engineering or construction project.",
  alternates: { canonical: "https://olymors.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageHero />
      <ContactForm />
    </>
  );
}
