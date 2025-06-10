import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playFairDisplay = Playfair_Display({
  variable: "--font-playFair-display",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: [ "300", "400", "500", "600", "700" ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erwin - Fullstack Web Developer",
  description: "Fullstack developer specializing in React, Next.js, and modern web solutions. I build responsive, user-focused applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playFairDisplay.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Navbar />
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
