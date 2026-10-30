import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center bg-gray-900 px-4 text-white"
    >
      <div className="mx-auto w-full max-w-6xl py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-400">
          {siteConfig.address}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Expert car care you can trust
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-8 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
          >
            Request a quote
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/10"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}