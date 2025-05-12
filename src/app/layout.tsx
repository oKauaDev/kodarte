import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodarte | Agência de Desenvolvimento Web com Propósito e Alma",
  description:
    "Kodarte impulsiona sua marca na web com sites sob medida: design estratégico, performance otimizada e experiência única que encanta e converte.",
  keywords: [
    "agência de desenvolvimento web",
    "sites sob medida",
    "design estratégico",
    "performance otimizada",
    "experiência do usuário",
    "SEO",
    "conversão",
    "Kodarte",
  ],
  authors: [{ name: "Kodarte" }],
  robots: "index, follow",
  openGraph: {
    title: "Kodarte | Agência de Desenvolvimento Web com Propósito e Alma",
    description:
      "Transformamos sua visão em presença digital marcante: sites personalizados, rápidos e orientados a resultados reais.",
    url: "https://kodarte.com",
    siteName: "Kodarte",
    type: "website",
    images: [
      {
        url: "https://kodarte.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodarte - Criação de Sites com Propósito e Alma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodarte | Sites sob Medida com Design e Performance",
    description:
      "Agência Kodarte: sites que encantam, performam e convertem. Design estratégico, código impecável e alma.",
    creator: "@Kodarte",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
