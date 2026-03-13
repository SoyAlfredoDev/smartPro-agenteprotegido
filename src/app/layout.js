import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://agenteprotegido.cl"),

  title:
    "Defensa Administrativa para Ejecutivos de Salud en Chile | Agente Protegido",
  description:
    "Asesoría y defensa administrativa especializada para ejecutivos del sistema de salud en Chile. Protege tu carrera profesional ante procesos y sanciones de la Superintendencia de Salud.",

  keywords: [
    "defensa administrativa salud chile",
    "sanciones superintendencia de salud",
    "abogado administrativo salud chile",
    "defensa ejecutivos sistema de salud chile",
    "proceso administrativo superintendencia de salud",
    "asesoría ejecutivos isapre sanciones",
    "defensa administrativa profesionales salud chile",
  ],

  alternates: {
    canonical: "https://agenteprotegido.cl",
  },

  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://agenteprotegido.cl",
    siteName: "Agente Protegido",
    title:
      "Defensa Administrativa para Ejecutivos de Salud en Chile | Agente Protegido",
    description:
      "Protege tu carrera profesional. Asesoría y defensa especializada ante procesos y sanciones de la Superintendencia de Salud en Chile.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agente Protegido — Defensa administrativa para ejecutivos de salud en Chile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Defensa Administrativa para Ejecutivos de Salud en Chile | Agente Protegido",
    description:
      "Protege tu carrera profesional. Asesoría y defensa especializada ante procesos y sanciones de la Superintendencia de Salud en Chile.",
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
