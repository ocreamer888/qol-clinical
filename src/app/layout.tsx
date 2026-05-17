import type { Metadata } from "next";
import { Outfit, Adamina } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const adamina = Adamina({
  variable: "--font-adamina",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qolclinical.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "QOL Clinical - Atención clínica integral",
  description: "QOL Clinical es un centro clínico integral especializado en el manejo de condiciones crónicas. Teleconsulta personalizada, seguimiento real, plan de salud diseñado para ti.",
  openGraph: {
    title: "QOL Clinical - Atención clínica integral",
    description: "Teleconsulta personalizada, seguimiento real, plan de salud diseñado para ti.",
    url: siteUrl,
    siteName: "QOL Clinical",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QOL Clinical - Atención clínica integral",
    description: "Teleconsulta personalizada, seguimiento real, plan de salud diseñado para ti.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${adamina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
