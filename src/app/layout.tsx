import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "../styles/glowingCard.css";
import "../styles/globals.css";
import "../styles/heroSection.css";
import "../styles/cardStyles.css";
import "../styles/painPointsOverride.css"; // Höchste Priorität für PainPoints-Styles
import "../styles/contactFormOverride.css"; // Höchste Priorität für Kontaktformular-Styles
import TrackingScripts from "../components/TrackingScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMEX EXPRESS - Air Freight Solutions",
  description: "Your trusted partner for time-critical and oversized air freight solutions. Located at Frankfurt Airport, serving clients worldwide.",
};

import ClientLayout from "../components/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <TrackingScripts />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
