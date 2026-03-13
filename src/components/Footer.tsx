"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/agenteprotegido.cl",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Proceso", href: "#" },
    { label: "Preguntas frecuentes", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <footer
      id="contacto"
      className="border-t border-[#2f2a4a] bg-[#231f3a] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {/* Marca */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div>
              <Image
                src="/images/logo-agente-protegido.png"
                alt="Agente Protegido — Defensa administrativa para ejecutivos de salud"
                width={100}
                height={100}
                className="h-auto mt-[-30px] w-auto"
              />
              <p className="mt-2 text-sm font-medium text-[#7aa2b0]">
                Defensa administrativa especializada
              </p>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Acompañamos a ejecutivos del sistema de salud en procesos
              administrativos complejos, con una atención seria y estratégica.
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-base font-bold tracking-[-0.02em] text-white">
              Enlaces rápidos
            </h4>

            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/65 transition hover:text-[#8ab0bd]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-base font-bold tracking-[-0.02em] text-white">
              Contacto
            </h4>

            <ul className="mt-4 w-full space-y-3 text-sm text-white/65">
              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:contacto@agenteprotegido.cl"
                  className="break-all transition hover:text-[#8ab0bd]"
                >
                  contacto@agenteprotegido.cl
                </a>
              </li>

              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+56 9 0000 0000</span>
              </li>

              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>
                  Santiago, Chile
                  <br />
                  Atención online y personalizada
                </span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-base font-bold tracking-[-0.02em] text-white">
              Síguenos
            </h4>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Mantente al día con novedades y contenidos relevantes para el
              ejercicio profesional en el sistema de salud.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-[#231f3a] shadow-sm transition hover:border-[#587e8d] hover:bg-[#587e8d] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-[#2f2a4a] bg-white/95 px-4 py-4 text-center text-xs font-medium text-[#6b7280]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 lg:flex-row lg:text-left">
          <p>
            © {currentYear} Agente Protegido. Todos los derechos reservados.
          </p>

          <div className="flex items-center justify-center gap-2">
            <span>creado por:</span>
            <a
              href="https://smartpro.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo-smartpro.png"
                alt="SmartPro — Desarrollo web profesional"
                width={80}
                height={24}
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="transition hover:text-[#587e8d]">
              Términos y Condiciones
            </a>
            <a href="#" className="transition hover:text-[#587e8d]">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
