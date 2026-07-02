import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/common/BackToTop";
import { ScrollProgress } from "@/components/common/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Bishal Mondal | AI Engineer & Full Stack Developer",
  description: "AI Engineer, Machine Learning specialist, and Full Stack Developer. Passionate about building intelligent systems and solving real-world problems with AI and technology.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Bishal Mondal" }],
  creator: "Bishal Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bishal.dev",
    title: "Bishal Mondal | AI Engineer & Full Stack Developer",
    description: "AI Engineer, Machine Learning specialist, and Full Stack Developer.",
    siteName: "Bishal Mondal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishal Mondal | AI Engineer & Full Stack Developer",
    description: "AI Engineer, Machine Learning specialist, and Full Stack Developer.",
    creator: "@bishal_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bishal.dev" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white overflow-x-hidden`}
      >
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
