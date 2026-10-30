interface Highlight {
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    title: "Garantía por escrito",
    description: "Cada trabajo queda respaldado con un documento formal.",
  },
  {
    title: "Repuestos certificados",
    description: "Trabajamos solo con repuestos de calidad verificada.",
  },
  {
    title: "Presupuesto transparente",
    description:
      "Te explicamos el diagnóstico y el costo antes de intervenir tu vehículo.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Sobre nosotros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Somos un taller especializado en servicio técnico automotriz.
            Combinamos tecnología de diagnóstico con atención cercana para que
            sepas exactamente qué necesita tu auto y cuánto cuesta.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}