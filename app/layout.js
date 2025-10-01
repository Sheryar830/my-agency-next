// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootInit from "@/components/BootInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://my-agency-next.onrender.com"),
  title: {
    default: "DevStacks — Web & App Development Agency",
    template: "%s | DevStacks",
  },
  description:
    "DevStacks is a full-service agency building SEO-friendly websites, mobile apps, and smart digital solutions.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://my-agency-next.onrender.com",
    title: "DevStacks — Web & App Development Agency",
    description:
      "We help startups and businesses grow with modern websites, mobile apps, and SEO.",
    siteName: "DevStacks",
    images: [
      {
        url: "/og/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "DevStacks - SEO Agency & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStacks — Web & App Development Agency",
    description:
      "We help businesses grow with modern websites, mobile apps, and SEO.",
    images: ["/og/default-og.jpg"],
  },
  alternates: {
    canonical: "https://my-agency-next.onrender.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Template styles from /public/css */}
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        {/* add any others you actually need */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Preloader />
        <BootInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
