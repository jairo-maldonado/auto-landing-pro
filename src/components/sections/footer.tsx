import { siteConfig } from "@/config/site";

const headingClassName =
  "text-sm font-semibold uppercase tracking-widest text-white";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-900 px-4 pb-8 pt-16 text-gray-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-white">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Servicio técnico automotriz con diagnóstico de precisión,
              repuestos certificados y garantía por escrito.
            </p>
          </div>

          <div>
            <h3 className={headingClassName}>Navegación</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClassName}>Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{siteConfig.address}</li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="transition hover:text-orange-400"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-orange-400"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <h3 className={`${headingClassName} mt-6`}>Horarios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.businessHours.map((item) => (
                <li key={item.days}>
                  <span className="text-white">{item.days}:</span>{" "}
                  {item.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            Tus datos se usan solo para responder tu consulta y no se
            comparten con terceros.
          </p>
        </div>
      </div>
    </footer>
  );
}