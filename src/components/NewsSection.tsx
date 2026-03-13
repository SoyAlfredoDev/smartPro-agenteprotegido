"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Newspaper,
  ArrowUpRight,
  ShieldAlert,
  Scale,
  Gavel,
} from "lucide-react";

const newsItems = [
  {
    icon: Gavel,
    category: "Sanciones",
    title:
      "Avanza proyecto que crea un registro público de sancionados en salud",
    description:
      "La Superintendencia impulsa nuevas facultades que incluyen más transparencia, mayor capacidad sancionatoria y un registro público de sancionados. En un entorno así, una respuesta mal manejada puede tener más impacto reputacional y regulatorio.",
    href: "https://www.superdesalud.gob.cl/noticias/2025/12/avanza-proyecto-en-senado-superintendencia-de-salud-busca-nuevas-facultades-para-proteger-a-pacientes/",
    image: "/images/news-01.jpg",
    cta: "Ver noticia",
  },
  {
    icon: ShieldAlert,
    category: "Fiscalización",
    title:
      "La Superintendencia corrige excesos en cobros GES y refuerza su control",
    description:
      "Por primera vez, la autoridad verificó lo que las isapres querían cobrar por GES y corrigió excesos. Esto confirma un escenario de mayor revisión técnica y fiscalización, donde actuar con criterio y respaldo especializado es cada vez más importante.",
    href: "https://www.superdesalud.gob.cl/noticias/2025/12/por-primera-vez-la-superintendencia-de-salud-verifica-lo-que-las-isapres-quieren-cobrar-por-el-ges-y-corrige-excesos/",
    image: "/images/news-02.jpg",
    cta: "Ver noticia",
  },
  {
    icon: Scale,
    category: "Mayor control",
    title:
      "Senado aprueba en comisión un fortalecimiento del régimen sancionatorio",
    description:
      "La propuesta aprobada en comisión contempla multas más altas, criterios de gravedad más claros y mayor alcance fiscalizador. Cuando el regulador endurece su capacidad de control, prevenir errores administrativos se vuelve aún más crítico.",
    href: "https://www.superdesalud.gob.cl/noticias/2025/12/comision-de-salud-del-senado-aprueba-por-unanimidad-proyecto-que-amplia-facultades-de-la-superintendencia-de-salud-para-defender-a-las-personas/",
    image: "/images/news-03.jpg",
    cta: "Ver noticia",
  },
];

export default function NewsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileSlider, setIsMobileSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSlider(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !isMobileSlider) return;

    const updateActiveIndex = () => {
      const containerRect = slider.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const children = Array.from(slider.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [isMobileSlider]);

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const target = slider.children[index] as HTMLElement | undefined;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section
      id="noticias"
      className="relative overflow-hidden bg-[#eef2f5] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#eef2f5_0%,#f7f7f9_100%)]" />
        <div className="absolute left-0 top-0 h-[280px] w-full bg-[radial-gradient(circle_at_top_left,rgba(88,126,141,0.16),transparent_28%)]" />
        <div className="absolute bottom-0 right-0 h-[280px] w-full bg-[radial-gradient(circle_at_bottom_right,rgba(35,31,58,0.10),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8dde3] bg-white/90 px-4 py-2 text-sm font-semibold text-[#587e8d] shadow-sm backdrop-blur-sm">
            <Newspaper className="h-4 w-4" />
            Noticias relevantes
          </div>

          <h2 className="mt-5 text-[2rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#231f3a] sm:text-[2.8rem] lg:text-[3.2rem]">
            Más fiscalización, más sanciones, más riesgo de exposición
          </h2>

          <p className="mt-5 text-base leading-7 text-[#4b5563] sm:text-lg">
            El contexto regulatorio en Chile se ha vuelto más exigente. Cuando
            aumentan las facultades sancionatorias y la revisión de procesos,
            una asesoría temprana puede marcar la diferencia.
          </p>
        </motion.div>

        <div className="mt-10 lg:mt-14">
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-4 pl-1 pr-1 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {newsItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex min-w-[85%] snap-center flex-col overflow-hidden rounded-[26px] border border-[#dfe4ea] bg-white shadow-[0_20px_50px_rgba(35,31,58,0.07)] transition sm:min-w-[420px] lg:min-w-0"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(35,31,58,0.55),rgba(35,31,58,0.08),transparent)]" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5" />
                      {item.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.28rem] font-black leading-tight tracking-[-0.02em] text-[#231f3a]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5b6072] sm:text-[15px]">
                      {item.description}
                    </p>

                    <div className="mt-5 rounded-2xl bg-[#f7f9fb] p-4">
                      <p className="text-sm font-semibold text-[#231f3a]">
                        Por qué importa:
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5b6072]">
                        Un entorno más fiscalizado aumenta el costo de responder
                        tarde, improvisar o enfrentar el proceso sin estrategia.
                      </p>
                    </div>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#231f3a] transition hover:text-[#587e8d]"
                    >
                      {item.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Indicadores móviles */}
          <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
            {newsItems.map((_, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToCard(index)}
                  aria-label={`Ir a la noticia ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-2.5 w-8 bg-[#587e8d] shadow-[0_4px_14px_rgba(88,126,141,0.35)]"
                      : "h-2.5 w-2.5 bg-[#c6d0d8] hover:bg-[#9eb0bb]"
                  }`}
                />
              );
            })}
          </div>

          <div className="mt-3 text-center text-xs text-[#6b7280] lg:hidden">
            Desliza para ver más noticias
          </div>
        </div>
      </div>
    </section>
  );
}
