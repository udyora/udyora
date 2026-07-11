import type { Metadata } from "next";
import { Inter, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/common/scroll-top-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udyora.com"),

  title: {
    default:
      "Udyora Ventures | Industrial & Infrastructure Project Approval Experts",
    template: "%s | Udyora Ventures",
  },

  description:
    "Udyora simplifies complex regulatory processes through end-to-end project approvals and compliance services. We specialize in land due diligence, CLU, building plan approvals, environmental clearances, fire safety approvals, and occupancy certifications across industrial, commercial, institutional, and infrastructure projects.",

  keywords: [
    "Udyora Ventures",
    "Project Approvals",
    "Industrial Approvals",
    "Infrastructure Approvals",
    "Land Due Diligence",
    "Change of Land Use",
    "CLU Haryana",
    "Building Plan Approval",
    "Environmental Clearance",
    "Fire Safety Approval",
    "Occupancy Certificate",
    "Regulatory Compliance",
    "Government Approvals",
    "TCP Haryana",
    "HSIIDC Approval",
    "Industrial Licensing",
    "Industrial Infrastructure",
    "Project Advisory Services",
    "Approval Consultant Haryana",
    "Commercial Project Approvals",
    "Institutional Project Approvals",
    "Land Conversion Services",
    "Single Window Approval Services",
    "Regulatory Solutions India",
  ],

  authors: [{ name: "Udyora Ventures" }],
  creator: "Udyora Ventures",
  publisher: "Udyora Ventures",

  openGraph: {
    title: "Udyora Ventures | One Window. Every Approval. Zero Hassle.",
    description:
      "End-to-end regulatory approvals and compliance solutions for industrial, commercial, institutional, and infrastructure projects.",
    url: "https://udyora.com",
    siteName: "Udyora Ventures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Udyora Ventures",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Udyora Ventures | Project Approval Intelligence Platform",
    description:
      "Your trusted partner for project approvals, regulatory compliance, and statutory clearances.",
    images: ["/og-image.jpg"],
  },

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

  alternates: {
    canonical: "https://udyora.com",
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${fraunces.variable}
        ${geistMono.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full bg-black text-white">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
