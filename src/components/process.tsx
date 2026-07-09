"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

const STEPS: { no: string; title: string; desc: string }[] = [
  {
    no: "01",
    title: "Hedef Analizi",
    desc: "Yüz hatlarınız, yağ oranınız, vücut yapınız, günlük yaşamınız ve hedefleriniz detaylı olarak analiz edilir.",
  },
  {
    no: "02",
    title: "Kişiye Özel Plan",
    desc: "Yüz egzersizleri, beslenme ve antrenman rutini tamamen sana özel hazırlanır.",
  },
  {
    no: "03",
    title: "Takip & Gelişim",
    desc: "Haftalık ölçümler, fotoğraf analizleri ve düzenli geri bildirimlerle gelişimin sürekli takip edilir.",
  },
  {
    no: "04",
    title: "Yeni Versiyonun",
    desc: "Daha belirgin yüz hatları, daha estetik bir fizik ve sürdürülebilir disiplin alışkanlıkları kazanırsın.",
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const line: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 text-brand">
            <motion.span
              variants={line}
              className="h-px w-20 origin-right bg-gradient-to-r from-transparent to-brand md:w-36"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Süreç
            </span>
            <motion.span
              variants={line}
              className="h-px w-20 origin-left bg-gradient-to-r from-brand to-transparent md:w-36"
            />
          </div>
          <h2 className="mt-4 font-heading text-4xl tracking-wide text-white md:text-6xl">
            SÜREÇ NASIL İŞLER?
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-stretch gap-6 lg:flex-row lg:gap-4"
        >
          {STEPS.map((step, i) => (
            <Fragment key={step.no}>
              <motion.article
                variants={item}
                className="group relative flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/[0.06]"
              >
                <span className="font-heading text-5xl leading-none text-brand/70 transition-colors duration-300 group-hover:text-brand">
                  {step.no}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </motion.article>

              {i < STEPS.length - 1 && (
                <motion.div
                  variants={item}
                  aria-hidden
                  className="flex shrink-0 items-center justify-center text-brand/60"
                >
                  <ArrowRight className="size-7 rotate-90 lg:rotate-0" />
                </motion.div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
