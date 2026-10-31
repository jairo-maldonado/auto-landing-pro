import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import "./globals.css";

const pageTitle = `${siteConfig.name} | Taller mecánico en Santiago`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "taller mecánico Santiago",
    "diagnóstico electrónico automotriz",
    "mantenimiento preventivo",
    "frenos y suspensión",
    "servicio técnico automotriz",
  ],
  openGraph: {
    title: pageTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-16">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}