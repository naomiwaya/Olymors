import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olymors.com"),
  title: {
    default: "Olymors Investment Limited | Engineering Value. Delivering Excellence.",
    template: "%s | Olymors Investment Limited",
  },
  description:
    "Olymors Investment Limited delivers reliable engineering, construction, contract execution, and commercial solutions designed to support infrastructure development, business expansion, and long-term value creation in Nigeria.",
  keywords: [
    "Olymors Investment Limited",
    "engineering company Nigeria",
    "construction company Lagos",
    "infrastructure development Nigeria",
    "contract services Lagos",
    "Ikorodu engineering firm",
    "construction project management",
    "general merchandise Nigeria",
    "building construction Lagos",
    "engineering solutions Nigeria",
  ],
  authors: [{ name: "Olymors Investment Limited" }],
  creator: "Olymors Investment Limited",
  publisher: "Olymors Investment Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://olymors.com",
    siteName: "Olymors Investment Limited",
    title: "Olymors Investment Limited | Engineering Value. Delivering Excellence.",
    description:
      "Delivering reliable engineering, construction, and commercial solutions for infrastructure development and long-term value creation in Nigeria.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olymors Investment Limited - Engineering Value. Delivering Excellence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olymors Investment Limited | Engineering Value. Delivering Excellence.",
    description:
      "Delivering reliable engineering, construction, and commercial solutions for infrastructure development and long-term value creation in Nigeria.",
    images: ["/images/og-image.jpg"],
    creator: "@OlymorsLtd",
  },
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon.svg" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://olymors.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olymors Investment Limited",
  url: "https://olymors.com",
  logo: "https://olymors.com/images/logo.svg",
  description:
    "Olymors Investment Limited delivers reliable engineering, construction, contract execution, and commercial solutions in Nigeria.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "38, Oloja Road Igbe",
    addressLocality: "Ikorodu",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-707-765-3308",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering & Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engineering Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction & Project Execution",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Merchandise",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} font-body antialiased`}>
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
