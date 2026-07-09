"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Transformation = {
  before: string;
  after: string;
  pkg: string;
  name: string;
  stars: number;
  review: string;
};

// NOTE: names + reviews are placeholders — replace with real testimonials.
const TRANSFORMATIONS: Transformation[] = [
  {
    before: "/phot/before1.jpg",
    after: "/phot/after1.jpg",
    pkg: "1 Aylık Paket",
    name: "Mehmet K.",
    stars: 5,
    review:
      "İlk aydan sonra çok memnun kaldım, paketimi yükseltmeye karar verdim. Yüz hatlarım şimdiden belirginleşti.",
  },
  {
    before: "/phot/before2.jpg",
    after: "/phot/after2.jpg",
    pkg: "3 Aylık Paket",
    name: "Emre A.",
    stars: 5,
    review:
      "3 ayda hem yağ oranım düştü hem de çene ve yüz çizgilerim netleşti. Takip sistemi gerçekten kusursuz.",
  },
  {
    before: "/phot/before3.jpg",
    after: "/phot/after3.jpg",
    pkg: "6 Aylık Paket",
    name: "Can Y.",
    stars: 4,
    review:
      "6 ay boyunca disiplinli bir program uyguladık. Sonuçlar beklediğimden çok daha iyi oldu.",
  },
  {
    before: "/phot/before4.jpg",
    after: "/phot/after4.jpg",
    pkg: "12 Aylık Paket",
    name: "Burak T.",
    stars: 5,
    review:
      "1 yıllık süreçte tamamen değiştim. Estetik fizik ve keskin yüz hatları hedefime ulaştım. Kesinlikle tavsiye ederim.",
  },
];

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < n ? "fill-brand text-brand" : "fill-transparent text-white/25",
          )}
        />
      ))}
      <span className="ml-1.5 text-xs font-medium text-white/50">{n}/5</span>
    </div>
  );
}

export default function Transformations() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="transformations"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={item}
          className="mb-14 text-center md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Dönüşümler
            </span>
            <span className="h-px w-8 bg-brand" />
          </div>
          <h2 className="mt-4 font-heading text-4xl tracking-wide text-white md:text-6xl">
            GERÇEK SONUÇLAR
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
            Her dönüşüm tek bir kararla başladı. Seninki bugün başlayabilir.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {TRANSFORMATIONS.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-brand/40"
            >
              {/* Before / After */}
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <BeforeAfter src={t.before} label="ÖNCE" muted />
                <BeforeAfter src={t.after} label="SONRA" />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    {t.pkg}
                  </span>
                  <StarRating n={t.stars} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.review}&rdquo;
                </p>

                <p className="mt-4 text-sm font-semibold text-white">
                  — {t.name}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfter({
  src,
  label,
  muted = false,
}: {
  src: string;
  label: string;
  muted?: boolean;
}) {
  return (
    <figure className="relative aspect-[3/4] overflow-hidden">
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-[1.03]",
          muted && "grayscale-[35%]",
        )}
      />
      <figcaption
        className={cn(
          "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm",
          muted
            ? "bg-black/50 text-white/80"
            : "bg-brand/90 text-brand-foreground",
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}
