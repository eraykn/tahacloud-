"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { SOCIALS } from "./social-icons";

export default function About() {
  const reduceMotion = useReducedMotion();
  const dx = reduceMotion ? 0 : 1;

  const photoVariants: Variants = {
    hidden: { opacity: 0, x: -80 * dx },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 * dx },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Photo */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-md md:mx-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/phot/tahaFoto.png"
              alt="Taha Bulut"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            {/* bottom fade for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-brand"
          >
            <span className="h-px w-8 bg-brand" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Facial Sculpting &amp; Bodybuilding
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            variants={item}
            className="mt-4 font-heading text-5xl tracking-wide text-white md:text-7xl"
          >
            TAHA BULUT
          </motion.h2>

          {/* Faint divider */}
          <motion.div
            variants={item}
            className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-white/50 via-white/15 to-transparent"
          />

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            Facial Sculpting &amp; Bodybuilding Koçu. 3+ yıllık koçluk
            deneyimimle belirgin yüz hatları, estetik fizik, kas gelişimi, ve
            yağ yakımı hedefleyen danışanlarıma tamamen kişiselleştirilmiş
            antrenman, beslenme ve yaşam tarzı koçluğu sunuyorum.
          </motion.p>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-brand hover:bg-brand/10 hover:text-brand"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
