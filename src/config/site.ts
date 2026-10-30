export const siteConfig = {
  name: "Auto Landing Pro",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Servicio técnico automotriz especializado. Diagnóstico de precisión, repuestos certificados y garantía por escrito.",
  whatsappNumber: "56912345678",
  whatsappMessage:
    "Hola, me gustaría agendar una revisión técnica para mi vehículo.",
  phone: "+56 9 1234 5678",
  phoneHref: "tel:+56912345678",
  email: "contacto@autolandingpro.cl",
  address: "Santiago, Chile",
  businessHours: [
    { days: "Lunes a Viernes", hours: "08:30 a 18:30" },
    { days: "Sábado", hours: "09:00 a 14:00" },
  ],
  navLinks: [
    { label: "Inicio", href: "#home" },
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;