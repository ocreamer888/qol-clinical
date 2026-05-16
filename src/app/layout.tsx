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

export const metadata: Metadata = {
  title: "QOL Clinical - Atención clínica integral",
  description: "QOL Clinical es un centro clínico integral especializado en el manejo de condiciones crónicas. Teleconsulta personalizada, seguimiento real, plan de salud diseñado para ti.",
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
