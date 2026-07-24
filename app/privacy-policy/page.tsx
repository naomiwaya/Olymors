import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Olymors Investment Limited Privacy Policy — how we collect, use, and protect your information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-off-white min-h-screen" aria-labelledby="privacy-title">
      {/* Hero */}
      <div className="bg-navy pt-32 pb-16">
        <div className="container-premium text-center">
          <h1 id="privacy-title" className="text-4xl lg:text-5xl font-black text-white mb-4">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-white/50 text-lg">Last updated: July 2026</p>
        </div>
      </div>

      {/* Content */}
      <article className="container-premium max-w-3xl py-16 lg:py-20 prose prose-slate prose-headings:font-black prose-headings:text-navy-DEFAULT prose-a:text-gold-dark prose-strong:text-navy-DEFAULT max-w-none">
        <section aria-label="Introduction">
          <h2>1. Introduction</h2>
          <p>
            Olymors Investment Limited (&quot;Olymors&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your personal information and your right to privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website at{" "}
            <a href="https://olymors.com">olymors.com</a>.
          </p>
        </section>

        <section aria-label="Information we collect">
          <h2>2. Information We Collect</h2>
          <p>We may collect information that you voluntarily provide, including:</p>
          <ul>
            <li>Name, email address, and phone number (contact forms)</li>
            <li>Company name and project details</li>
            <li>Newsletter subscription email address</li>
          </ul>
          <p>We automatically collect certain information when you visit, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent</li>
            <li>Referring website address</li>
          </ul>
        </section>

        <section aria-label="How we use your information">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and project requests</li>
            <li>To send newsletters you have subscribed to</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section aria-label="Information sharing">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to third parties. We may share information
            with trusted service providers who assist us in operating our website,
            subject to confidentiality agreements.
          </p>
        </section>

        <section aria-label="Cookies">
          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your experience. You can choose
            to disable cookies through your browser settings; however, this may
            affect the functionality of the website.
          </p>
        </section>

        <section aria-label="Data security">
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security measures
            to protect your personal information against unauthorised access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section aria-label="Your rights">
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section aria-label="Contact for privacy">
          <h2>8. Contact Us</h2>
          <p>
            For any privacy-related queries, please contact us at:{" "}
            <a href="mailto:Info@Olymors.com">Info@Olymors.com</a>
            <br />
            38, Oloja Road Igbe, Ikorodu, Lagos State, Nigeria.
          </p>
        </section>
      </article>

      <div className="container-premium pb-16 max-w-3xl">
        <Link href="/" className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
