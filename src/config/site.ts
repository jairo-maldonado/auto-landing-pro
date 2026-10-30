export const siteConfig = {
  name: "Auto Landing Pro",
  description:
    "Servicio técnico automotriz especializado. Diagnóstico de precisión, repuestos certificados y garantía por escrito.",
  whatsappNumber: "56953449708",
  whatsappMessage:
    "Hola, me gustaría agendar una revisión técnica para mi vehículo.",
  phone: "+56 9 1234 5678",
  phoneHref: "tel:+56953449708",
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