"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

export default function Quote() {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-6 md:pb-36 md:pt-10">
      {/* faint acid-green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-64 w-[36rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

      <motion.figure
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto max-w-4xl px-6 sm:px-8"
      >
        {/* opening quote mark */}
        <span
          aria-hidden
          className="block select-none font-serif text-7xl leading-none text-brand md:text-8xl"
        >
          &ldquo;
        </span>

        <blockquote className="-mt-4 md:-mt-6">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white md:text-4xl md:leading-[1.25]">
            Her fizik bir potansiyel taşır. Benim görevim; doğru antrenman,
            beslenme ve yaşam alışkanlıklarıyla hem yüz hatlarının hem de vücudunun en iyi versiyonunu ortaya çıkarmana rehberlik etmektir.
          </p>

          {/* closing quote mark — mirrors the opening one, bottom-right */}
          <span
            aria-hidden
            className="-mb-8 block select-none text-right font-serif text-7xl leading-none text-brand md:-mb-10 md:text-8xl"
          >
            &rdquo;
          </span>

          <figcaption className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Taha Bulut
            </span>
          </figcaption>
        </blockquote>
      </motion.figure>
    </section>
  );
}
