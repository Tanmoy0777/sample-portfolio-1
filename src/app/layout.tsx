import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanmoy Acharjee — Account Management & Campaign Strategy",
  description:
    "Account management and campaign strategy specialist. Building CRM systems, ABM campaigns, and analytics infrastructure that turn data into confident decisions.",
  keywords: [
    "Account Management",
    "Campaign Strategy",
    "ABM",
    "Marketing Analytics",
    "CRM",
    "Power BI",
    "Marketo",
    "B2B Marketing",
  ],
  authors: [{ name: "Tanmoy Acharjee" }],
  openGraph: {
    title: "Tanmoy Acharjee — Account Management & Campaign Strategy",
    description: "Turning account data into smarter campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
