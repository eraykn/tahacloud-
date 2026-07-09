"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

const STATS: {
  value: number;
  decimals?: number;
  suffix?: string;
  emoji?: string;
  label: string;
}[] = [
  { value: 3, suffix: "+", label: "Yıl Deneyim" },
  { value: 125, suffix: "+", label: "Mutlu Danışan" },
  { value: 4.8, decimals: 1, suffix: "/5", emoji: "⭐", label: "Danışan Memnuniyeti" },
  { value: 24, suffix: "/7", label: "Destek" },
];

export default function Stats() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-black pb-24 pt-4 md:pb-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:px-8 md:grid-cols-4 md:gap-6"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-brand/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-baseline justify-center font-heading text-4xl leading-none text-brand md:text-5xl">
              <NumberTicker
                value={s.value}
                decimalPlaces={s.decimals ?? 0}
                className="text-brand"
              />
              {s.suffix && <span>{s.suffix}</span>}
              {s.emoji && <span className="ml-1.5 text-2xl">{s.emoji}</span>}
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/55 md:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
