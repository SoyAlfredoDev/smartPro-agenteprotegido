"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldCheck,
  FileSearch,
  BriefcaseBusiness,
  Scale,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const problems = [
  "Procesos administrativos que pueden derivar en sanciones relevantes.",
  "Falta de orientación oportuna ante denuncias en la Superintendencia de Salud.",
  "Riesgo de multas, suspensión del código o afectación de la carrera profesional.",
];

const services = [
  {
    icon: FileSearch,
    title: "Análisis del caso",
    description:
      "Revisión completa de antecedentes, contexto y documentación disponible.",
  },
  {
    icon: Scale,
    title: "Estrategia de defensa",
    description:
      "Definición de una línea de acción clara, jurídica y especializada.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Acompañamiento del proceso",
    description:
      "Seguimiento profesional durante cada etapa hasta su resolución.",
  },
];

export default function ProblemServicesSection() {
  return (
    <section
      id="problema"
      className="relative overflow-hidden bg-[#f7f7f9] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-[#dfe3e8] bg-[#f3f3f5] shadow-[0_20px_60px_rgba(35,31,58,0.08)]">
          {/* fondos decorativos */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,126,141,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(35,31,58,0.06),transparent_26%)]" />
            <div className="absolute right-0 top-0 hidden h-40 w-40 rounded-full bg-[#587e8d]/10 blur-3xl lg:block" />
            <div className="absolute bottom-0 left-0 hidden h-40 w-40 rounded-full bg-[#231f3a]/10 blur-3xl lg:block" />
          </div>

          <div className="relative px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
            {/* bloque superior: problema */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d9dbe3] bg-white px-4 py-2 text-sm font-semibold text-[#587e8d] shadow-sm">
                  <AlertTriangle className="h-4 w-4" />
                  El problema
                </div>

                <h2 className="mt-5 max-w-3xl text-[2rem] font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#231f3a] sm:text-[2.6rem] lg:text-[3.2rem]">
                  Las denuncias contra ejecutivos{" "}
                  <span className="text-[#587e8d]">van en aumento</span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#43485a] sm:text-lg">
                  Los ejecutivos con código en la Superintendencia de Salud
                  enfrentan procesos administrativos que pueden generar
                  sanciones importantes y afectar seriamente su ejercicio
                  profesional.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#231f3a] sm:text-xl">
                  Muchos profesionales enfrentan estos procesos{" "}
                  <span className="font-bold text-[#587e8d]">
                    sin asesoría especializada
                  </span>
                  , aumentando el riesgo de cometer errores en momentos clave.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="rounded-[24px] border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_40px_rgba(35,31,58,0.08)] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3f4] text-[#587e8d]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#587e8d]">
                      Riesgos frecuentes
                    </p>
                    <h3 className="text-lg font-bold text-[#231f3a]">
                      Qué puede pasar sin una defensa adecuada
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={problem}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: 0.12 + index * 0.08 }}
                      className="flex items-start gap-3 rounded-2xl bg-[#f8f9fb] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#587e8d]" />
                      <p className="text-sm leading-6 text-[#4b5563] sm:text-[15px]">
                        {problem}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* separador */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.9 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#cfd5dd] to-transparent lg:my-12"
            />

            {/* servicios */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d9dbe3] bg-white px-4 py-2 text-sm font-semibold text-[#587e8d] shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Cómo te ayudamos
                </div>

                <h3 className="mt-4 text-[1.9rem] font-black tracking-[-0.03em] text-[#231f3a] sm:text-[2.4rem]">
                  Acompañamiento especializado
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5b6072] sm:text-lg">
                  Te apoyamos con una defensa clara, estratégica y profesional
                  en cada etapa del proceso.
                </p>
              </motion.div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:mt-10">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.08,
                      }}
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white p-6 shadow-[0_16px_40px_rgba(35,31,58,0.07)] transition"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#587e8d]" />

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef3f4] text-[#587e8d] transition group-hover:bg-[#231f3a] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h4 className="mt-5 text-xl font-bold text-[#231f3a]">
                        {service.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-[#5b6072] sm:text-[15px]">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
