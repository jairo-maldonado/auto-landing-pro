import type { ReactNode } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Diagnóstico Electrónico",
    description:
      "Scanner multimarca de última generación y lectura de códigos de falla.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 10h2l1.5-3 3 6L15 10h2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: "Mantenimiento Preventivo",
    description:
      "Cambio de aceite, filtros y revisión por pauta de fabricante.",
    icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  },
  {
    title: "Frenos y Suspensión",
    description:
      "Cambio de pastillas, rectificado de discos y alineación/balanceo.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones técnicas para mantener tu vehículo en óptimas
            condiciones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-gray-600">{service.description}</p>

              <a
                href={getWhatsAppUrl(
                  `Hola, me gustaría consultar por ${service.title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Consultar por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}