
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lawrence's Portfolio",
  description:
    "AWS Certified Full Stack Engineer Portfolio - Showcasing expertise in Next.js, Django, and Cloud Architecture (AWS/DevOps) for building scalable web applications.",
  keywords: [
    "AWS Certified Full Stack Engineer",
    "Next.js Developer",
    "Django Developer",
    "Cloud Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Lawrence" }],
  openGraph: {
    title: "Lawrence's Portfolio",
    description:
      "AWS Certified Full Stack Engineer Portfolio - Showcasing expertise in Next.js, Django, and Cloud Architecture (AWS/DevOps) for building scalable web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawrence's Portfolio",
    description:
      "AWS Certified Full Stack Engineer Portfolio - Showcasing expertise in Next.js, Django, and Cloud Architecture (AWS/DevOps) for building scalable web applications.",
  },
  icons: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
