"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const MARQUEE_WORDS = [
  "DÖNÜŞÜM",
  "DİSİPLİN",
  "ESTETİK",
  "GÜÇ",
  "SONUÇ",
  "KARARLILIK",
];

export default function Cta() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: reduceMotion ? {} : { staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Repeat words so each track is wider than the viewport (seamless -100% loop).
  const strip = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section id="cta" className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* acid-green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-72 w-[42rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />

      {/* Statement */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.span
          variants={item}
          className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-brand"
        >
          Sıra Sende
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-5 font-heading text-5xl leading-[0.9] tracking-wide text-white md:text-7xl lg:text-8xl"
        >
          SÖZLER DEĞİL,
          <br />
          <span className="text-brand">SONUÇLAR.</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          Binlerce tekrar, tek bir hedef: senin en iyi versiyonun. Aşağıda sana
          en uygun paketi seç, dönüşümüne bugün başla.
        </motion.p>
      </motion.div>

      {/* Tilted infinite marquee band — two identical tracks looping at -100% */}
      <div className="relative mt-16 md:mt-20">
        <div className="rotate-[-2.5deg] scale-110">
          <div className="flex overflow-hidden border-y border-black/10 bg-brand py-4">
            {[0, 1].map((track) => (
              <motion.div
                key={track}
                aria-hidden={track === 1 ? true : undefined}
                className="flex shrink-0 items-center whitespace-nowrap"
                animate={reduceMotion ? undefined : { x: ["0%", "-100%"] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 35, ease: "linear", repeat: Infinity }
                }
              >
                {strip.map((word, i) => (
                  <span key={i} className="flex items-center">
                    <span className="mr-8 font-heading text-3xl tracking-wide text-brand-foreground md:text-4xl">
                      {word}
                    </span>
                    <span className="mr-8 text-brand-foreground/60">✦</span>
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
