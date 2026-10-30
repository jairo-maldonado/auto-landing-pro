"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { siteConfig } from "@/config/site";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200";

const labelClassName = "mb-1 block text-sm font-medium text-gray-700";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    setStatus("loading");

    try {
      const { error } = await supabase.from("contact_messages").insert({
        full_name: String(formData.get("full_name") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        email: email || null,
        vehicle: String(formData.get("vehicle") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
      });

      if (error) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contacto" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Agenda tu revisión
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cuéntanos qué necesita tu vehículo y te contactaremos a la
            brevedad.
          </p>
          <ul className="mt-8 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Teléfono:</span>{" "}
              <a href={siteConfig.phoneHref} className="hover:text-orange-600">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="font-semibold">Ubicación:</span>{" "}
              {siteConfig.address}
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="full_name" className={labelClassName}>
              Nombre completo
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Juan Pérez"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClassName}>
              Teléfono de contacto
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={20}
              autoComplete="tel"
              placeholder="+56 9 1234 5678"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              Email <span className="text-gray-400">(opcional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={120}
              autoComplete="email"
              placeholder="juan@correo.cl"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="vehicle" className={labelClassName}>
              Vehículo (marca / modelo / año)
            </label>
            <input
              id="vehicle"
              name="vehicle"
              type="text"
              required
              maxLength={100}
              placeholder="Toyota Yaris 2018"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClassName}>
              Motivo de consulta o servicio requerido
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={1000}
              placeholder="Ej: ruido al frenar, luz de check engine encendida..."
              className={inputClassName}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Enviando..." : "Enviar consulta"}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800"
            >
              ¡Mensaje enviado! Te contactaremos a la brevedad.
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo
              nuevamente, o escríbenos por WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}