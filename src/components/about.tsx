"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const SOCIALS: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "WhatsApp", href: "#", icon: WhatsAppIcon },
];

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
          {/* acid-green glow behind photo */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/20 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/phot/tahaFoto.png"
              alt="Taha Bulut"
              fill
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
            className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-white/25 via-white/10 to-transparent"
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
          <motion.ul variants={item} className="mt-8 flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-300 hover:border-brand hover:bg-brand/10 hover:text-brand"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---- Inline brand icons (lucide has no brand marks) ---- */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.896 0-3.176-1.24-6.165-3.487-8.411" />
    </svg>
  );
}
