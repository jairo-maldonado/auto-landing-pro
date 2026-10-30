import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/navbar";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
      </body>
    </html>
  );
}