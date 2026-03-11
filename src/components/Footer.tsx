"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ShieldCheck,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
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
    <footer className="border-t border-[#d9dbe3] bg-[#f7f7f9] text-[#231f3a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          {/* Marca */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#231f3a] text-white shadow-[0_10px_30px_rgba(35,31,58,0.18)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  Agente Protegido
                </h3>
                <p className="text-sm font-medium text-[#587e8d]">
                  Defensa administrativa especializada
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#5b6072]">
              Acompañamos a ejecutivos del sistema de salud en procesos
              administrativos complejos, con una atención seria, estratégica y
              enfocada en proteger su carrera profesional.
            </p>

            <div className="mt-6 w-full max-w-sm rounded-2xl border border-[#dde1e8] bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef3f4] text-[#587e8d]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#231f3a]">
                    Respaldo profesional
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6b7280]">
                    Orientación clara, acompañamiento legal y una estrategia
                    enfocada en reducir riesgos y defender tu ejercicio
                    profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-lg font-bold tracking-[-0.02em] text-[#231f3a]">
              Enlaces rápidos
            </h4>

            <ul className="mt-5 space-y-3 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[#5b6072] transition hover:text-[#587e8d]"
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
            <h4 className="text-lg font-bold tracking-[-0.02em] text-[#231f3a]">
              Contacto
            </h4>

            <ul className="mt-5 w-full space-y-4 text-sm text-[#5b6072]">
              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm ring-1 ring-[#e5e7eb]">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:contact@agenteseguro.cl"
                  className="break-all transition hover:text-[#587e8d]"
                >
                  contact@agenteseguro.cl
                </a>
              </li>

              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm ring-1 ring-[#e5e7eb]">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+56 9 0000 0000</span>
              </li>

              <li className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#587e8d] shadow-sm ring-1 ring-[#e5e7eb]">
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
            <h4 className="text-lg font-bold tracking-[-0.02em] text-[#231f3a]">
              Síguenos
            </h4>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#5b6072]">
              Mantente al día con novedades, orientación y contenidos relevantes
              para el ejercicio profesional en el sistema de salud.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9dbe3] bg-white text-[#231f3a] shadow-sm transition hover:border-[#587e8d] hover:bg-[#231f3a] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#d9dbe3] pt-6 text-center text-xs font-medium text-[#6b7280] lg:flex-row lg:text-left">
          <p>
            © {currentYear} Agente Protegido. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
