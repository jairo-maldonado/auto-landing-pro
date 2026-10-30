import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(
  message: string = siteConfig.whatsappMessage,
): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}