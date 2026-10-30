"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.phoneHref}
          className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 md:inline-block"
        >
          Llamar ahora
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          className="p-2 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium text-gray-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.phoneHref}
            onClick={closeMenu}
            className="mt-2 block rounded-full bg-black px-5 py-3 text-center font-semibold text-white"
          >
            Llamar ahora
          </a>
        </div>
      )}
    </header>
  );
}