"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldAlert,
  BadgeDollarSign,
  Ban,
  FileX2,
  ArrowRight,
} from "lucide-react";

type FeatureItem = {
  icon: React.ElementType;
  title: string;
};

const features: FeatureItem[] = [
  {
    icon: BadgeDollarSign,
    title: "Multas económicas",
  },
  {
    icon: Ban,
    title: "Suspensión del código",
  },
  {
    icon: FileX2,
    title: "Cancelación definitiva",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f9]">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="relative overflow-hidden rounded-[28px] bg-[#f3f3f5] shadow-[0_20px_60px_rgba(35,31,58,0.08)]">
          {/* Elementos decorativos */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[52%] top-[31%] hidden h-[95px] w-[120px] rounded-l-[18px] bg-[#d9dbe1] lg:block" />

            <div className="absolute right-[10%] top-[35%] hidden h-[90px] w-[70px] bg-[#587e8d] lg:block" />

            <div className="absolute right-[7%] top-[18%] hidden h-[90px] w-[70px] rounded-tr-[18px] bg-[#231f3a]/90 lg:block" />

            <div className="absolute left-[43%] top-[63%] hidden h-[34px] w-[86px] bg-[radial-gradient(circle,#231f3a_1.4px,transparent_1.4px)] [background-size:10px_10px] opacity-20 lg:block" />
          </div>

          <div className="relative grid items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-14 lg:py-12">
            {/* Columna izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="max-w-[560px] text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#231f3a] sm:text-[3rem] lg:text-[4.2rem]">
                Protege tu carrera
                <br />
                profesional
              </h1>

              <div className="mt-4 h-[2px] w-24 bg-[#587e8d]" />

              <p className="mt-6 max-w-[520px] text-base leading-7 text-[#2f2f39] sm:text-lg">
                Defensa administrativa{" "}
                <span className="font-bold text-[#587e8d]">especializada</span>{" "}
                para ejecutivos del sistema de salud.
              </p>

              <div className="mt-6 flex max-w-[560px] items-start gap-3 rounded-2xl bg-white/80 p-4 backdrop-blur-sm">
                <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-[#231f3a]" />
                <p className="text-sm leading-6 text-[#3d3a4d] sm:text-[15px]">
                  Si enfrentas una denuncia ante la Superintendencia de Salud,
                  nuestro{" "}
                  <span className="font-semibold text-[#587e8d]">
                    equipo legal
                  </span>{" "}
                  te acompaña en todo el proceso.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#231f3a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(35,31,58,0.25)] transition hover:bg-[#2e294b]"
              >
                Solicitar asesoría
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-full max-w-[620px]">
                <div className="absolute -bottom-6 right-[-18px] h-full w-full rounded-[26px] bg-[#dfe1e7]" />

                <div className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/hero-proteccion-profesional.jpg"
                    alt="Abogado revisando documentos"
                    width={1200}
                    height={800}
                    className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Franja inferior */}
          <div className="border-t border-[#dadbe2] bg-[#f7f7f9] px-5 py-6 sm:px-8 lg:px-14">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1.2fr_1.7fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 border-l-[3px] border-[#587e8d] pl-4"
              >
                <p className="max-w-[320px] text-base font-extrabold uppercase leading-7 text-[#231f3a]">
                  Las denuncias contra ejecutivos{" "}
                  <span className="text-[#587e8d]">van en aumento</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="max-w-[340px] text-[15px] leading-6 text-[#3f4254]">
                  Los ejecutivos con{" "}
                  <span className="font-bold text-[#587e8d]">código</span> en la
                  Superintendencia enfrentan:
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid gap-3 sm:grid-cols-3"
              >
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-[#e4e5ea] bg-white px-4 py-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef3f4] text-[#587e8d]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-sm font-medium text-[#231f3a]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
