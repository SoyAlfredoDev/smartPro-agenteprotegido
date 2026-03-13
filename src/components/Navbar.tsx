"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Problema", href: "#problema" },
  { label: "Cómo te ayudamos", href: "#audiencia" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#231f3a]/90 shadow-[0_4px_30px_rgba(35,31,58,0.22)] backdrop-blur-xl"
            : "bg-[#231f3a]/75 backdrop-blur-lg"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="relative z-10 shrink-0"
            aria-label="Ir al inicio"
          >
            <Image
              src="/images/logo-agente-protegido.png"
              alt="Agente Protegido — Defensa administrativa para ejecutivos de salud en Chile"
              width={90}
              height={90}
              className="h-auto"
              priority
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="group relative rounded-lg px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-[#587e8d] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}

            <li className="ml-4">
              <motion.a
                href="#contacto"
                onClick={(e) => scrollTo(e, "#contacto")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#587e8d] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(88,126,141,0.30)] transition hover:bg-[#4e7280]"
              >
                Solicitar asesoría
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 7, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] rounded-full bg-white"
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: 12 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-4 rounded-full bg-white"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -7, width: "100%" }
                    : { rotate: 0, y: 0, width: "75%" }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] rounded-full bg-white"
                style={{ originX: 0.5, originY: 0.5 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Fondo oscuro real */}
            <div className="absolute inset-0 bg-[#231f3a]/98 backdrop-blur-xl" />

            {/* Contenido */}
            <div className="relative flex min-h-dvh flex-col">
              <div className="flex items-center justify-between px-4 py-4 sm:px-6">
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, "#hero")}
                  className="shrink-0"
                  aria-label="Ir al inicio"
                >
                  <Image
                    src="/images/logo-agente-protegido.png"
                    alt="Agente Protegido — Defensa administrativa para ejecutivos de salud en Chile"
                    width={86}
                    height={86}
                    className="h-auto"
                  />
                </a>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-white/15"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center px-6 pb-10">
                <div className="flex w-full max-w-sm flex-col items-center gap-5">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.05 * i, duration: 0.25 }}
                      className="text-center text-xl font-semibold text-white/85 transition hover:text-white"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  <motion.a
                    href="#contacto"
                    onClick={(e) => scrollTo(e, "#contacto")}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: 0.05 * NAV_LINKS.length,
                      duration: 0.25,
                    }}
                    className="mt-4 inline-flex items-center gap-3 rounded-xl bg-[#587e8d] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(88,126,141,0.30)] transition hover:bg-[#4e7280]"
                  >
                    Solicitar asesoría
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>

                  <button
                    type="button"
                    onClick={closeMenu}
                    className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    Cerrar menú
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
