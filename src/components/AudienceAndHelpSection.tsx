"use client";

import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  FileSearch,
  Scale,
  BriefcaseBusiness,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const audience = [
  "Ejecutivos de Isapres",
  "Ejecutivos con código en la Superintendencia",
  "Equipos comerciales del sistema de salud",
  "Sindicatos del sector",
];

const helpSteps = [
  {
    icon: FileSearch,
    title: "Analizamos tu caso",
    description:
      "Revisamos antecedentes, contexto y documentación para entender el escenario con claridad.",
  },
  {
    icon: Scale,
    title: "Definimos la estrategia",
    description:
      "Te orientamos con una defensa especializada, alineada con el proceso administrativo y sus riesgos.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Te acompañamos hasta el final",
    description:
      "Hacemos seguimiento de cada etapa para que enfrentes el proceso con respaldo profesional.",
  },
];

export default function AudienceAndHelpSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f9]">
      {/* fondo general */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_bottom,#f7f7f9_0%,#f2f3f6_100%)]" />
        <div className="absolute left-0 top-0 h-[260px] w-full bg-[radial-gradient(circle_at_top_left,rgba(88,126,141,0.12),transparent_32%)]" />
        <div className="absolute bottom-0 right-0 h-[280px] w-full bg-[radial-gradient(circle_at_bottom_right,rgba(35,31,58,0.07),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-0 overflow-hidden rounded-[32px] border border-[#e2e5ea] shadow-[0_20px_60px_rgba(35,31,58,0.06)] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Lado izquierdo */}
          <div className="relative bg-[#eef1f4] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,126,141,0.10),transparent_32%)]" />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8dde3] bg-white/80 px-4 py-2 text-sm font-semibold text-[#587e8d] shadow-sm backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4" />
                ¿A quién está dirigido?
              </div>

              <h2 className="mt-5 max-w-md text-[2rem] font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#231f3a] sm:text-[2.5rem]">
                Pensado para quienes no pueden improvisar
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#4b5563] sm:text-lg">
                Esta asesoría está orientada a profesionales y equipos del
                sistema de salud que necesitan respaldo serio ante procesos
                administrativos que pueden afectar su ejercicio profesional.
              </p>

              <div className="mt-8 space-y-4">
                {audience.map((item, index) => (
                  <motion.div
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
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#587e8d] shadow-sm ring-1 ring-[#d9dbe3]">
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
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 rounded-[24px] border border-[#dce1e7] bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-[1.2rem] font-black uppercase tracking-[-0.03em] text-[#231f3a] sm:text-[1.45rem]">
                  No enfrentes este proceso{" "}
                  <span className="text-[#587e8d]">solo</span>
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5b6072] sm:text-[15px]">
                  Una mala respuesta o una estrategia débil puede aumentar el
                  riesgo. Lo importante es actuar con criterio y respaldo.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Lado derecho */}
          <div className="relative bg-[#231f3a] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,126,141,0.30),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />
            <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border border-white/10 lg:block" />
            <div className="absolute bottom-12 left-8 hidden h-16 w-16 rounded-full bg-[#587e8d]/20 blur-2xl lg:block" />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#c7dde3] backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4" />
                Cómo te ayudamos
              </div>

              <h3 className="mt-5 max-w-xl text-[2rem] font-black leading-[0.98] tracking-[-0.03em] text-white sm:text-[2.5rem]">
                Acompañamiento especializado en cada etapa del proceso
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                Te damos claridad, dirección y respaldo para que enfrentes el
                proceso con una estrategia sólida, en lugar de reaccionar tarde
                o sin apoyo especializado.
              </p>

              <div className="mt-10 space-y-5">
                {helpSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + index * 0.08,
                      }}
                      className="group grid gap-4 rounded-[22px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition hover:bg-white/10 sm:grid-cols-[56px_1fr]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#587e8d]/18 text-[#bfe1ea] transition group-hover:bg-[#587e8d]/28">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-white/72 sm:text-[15px]">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#231f3a] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-[#f4f5f7]"
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
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#587e8d] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(88,126,141,0.26)] transition hover:bg-[#4f7381]"
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
