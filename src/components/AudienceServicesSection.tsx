"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  FileSearch,
  ShieldCheck,
  BriefcaseBusiness,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const audienceItems = [
  "Ejecutivos de Isapres",
  "Ejecutivos con código en la Superintendencia",
  "Equipos comerciales del sistema de salud",
  "Sindicatos del sector",
];

const services = [
  {
    icon: FileSearch,
    title: "Análisis del caso",
    description: "Revisión completa de antecedentes",
  },
  {
    icon: ShieldCheck,
    title: "Estrategia de defensa",
    description: "Orientación jurídica especializada",
  },
  {
    icon: BriefcaseBusiness,
    title: "Acompañamiento del proceso",
    description: "Seguimiento hasta resolución",
  },
];

export default function AudienceServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f9]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="relative overflow-hidden rounded-[28px] border border-[#e2e5ea] bg-[#f3f3f5] shadow-[0_20px_60px_rgba(35,31,58,0.06)]">
          <div className="grid gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[1.05fr_1.15fr] lg:gap-10 lg:px-10 lg:py-8">
            {/* Columna izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                <h2 className="text-[1.65rem] font-black uppercase leading-tight tracking-[-0.03em] text-[#231f3a] sm:text-[2rem]">
                  ¿A quién está dirigido?
                </h2>

                <ul className="mt-5 space-y-4">
                  {audienceItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 * index,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef3f4] text-[#587e8d]">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-[15px] leading-6 text-[#2f2f39] sm:text-base">
                        {item.includes("Isapres") ? (
                          <>
                            Ejecutivos de{" "}
                            <span className="font-semibold text-[#231f3a]">
                              Isapres
                            </span>
                          </>
                        ) : item.includes("código") ? (
                          <>
                            Ejecutivos con{" "}
                            <span className="font-semibold text-[#231f3a]">
                              código
                            </span>{" "}
                            en la Superintendencia
                          </>
                        ) : (
                          item
                        )}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="mt-7 rounded-[22px] bg-white/75 p-4 shadow-sm ring-1 ring-[#e7e9ee] backdrop-blur-sm"
              >
                <p className="text-[1.2rem] font-black uppercase tracking-[-0.03em] text-[#231f3a] sm:text-[1.45rem]">
                  No enfrentes este proceso{" "}
                  <span className="text-[#587e8d]">solo</span>
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4b5563] sm:text-[15px]">
                  Contáctanos y{" "}
                  <span className="font-semibold text-[#231f3a]">
                    protege tu futuro
                  </span>{" "}
                  profesional.
                </p>
              </motion.div>
            </motion.div>

            {/* Columna derecha */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex h-full flex-col"
            >
              <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
                {/* Imagen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="relative mx-auto w-full max-w-[320px] lg:mx-0"
                >
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[22px] bg-[#dfe1e7]" />
                  <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                    <Image
                      src="/audiencia-servicios.jpg"
                      alt="Equipo profesional revisando documentación"
                      width={900}
                      height={700}
                      className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[210px]"
                    />
                  </div>
                </motion.div>

                {/* Servicios */}
                <div>
                  <h3 className="text-[1.2rem] font-black uppercase tracking-[-0.03em] text-[#231f3a] sm:text-[1.35rem]">
                    Nuestros servicios
                  </h3>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.1 + index * 0.08,
                            ease: "easeOut",
                          }}
                          whileHover={{ y: -6, scale: 1.01 }}
                          className="group relative overflow-hidden rounded-[20px] border border-[#e6e8ee] bg-white px-5 py-5 shadow-[0_10px_26px_rgba(35,31,58,0.06)] transition"
                        >
                          <div className="absolute inset-x-0 bottom-0 h-[4px] bg-[#587e8d]" />
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3f4] text-[#587e8d] transition group-hover:bg-[#231f3a] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <h4 className="mt-4 text-lg font-bold leading-6 text-[#231f3a]">
                            {service.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-[#5b6072]">
                            {service.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Botones */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#231f3a] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(35,31,58,0.22)] transition hover:bg-[#2d2848]"
                >
                  Solicitar asesoría
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href="https://wa.me/56900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#587e8d] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(88,126,141,0.22)] transition hover:bg-[#4e7280]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hablar por WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
