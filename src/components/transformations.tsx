"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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

const AUTOPLAY_MS = 2500;

export default function Transformations() {
  const reduceMotion = useReducedMotion();
  const n = TRANSFORMATIONS.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);
  const goto = (i: number) => setActive(((i % n) + n) % n);

  // Auto-advance: each slide stays exactly AUTOPLAY_MS (timer resets on every
  // active change → uniform timing, resets after manual nav). Pauses on hover.
  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, reduceMotion, paused, n]);

  const line: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
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
          className="mb-14 text-center md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 text-brand">
            <motion.span
              variants={line}
              className="h-px w-20 origin-right bg-gradient-to-r from-transparent to-brand md:w-36"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Dönüşümler
            </span>
            <motion.span
              variants={line}
              className="h-px w-20 origin-left bg-gradient-to-r from-brand to-transparent md:w-36"
            />
          </div>
          <h2 className="mt-4 font-heading text-4xl tracking-wide text-white md:text-6xl">
            GERÇEK SONUÇLAR
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
            Her dönüşüm tek bir kararla başladı. Seninki bugün başlayabilir.
          </p>
        </motion.div>

        {/* Coverflow carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[600px] md:h-[640px]">
            {TRANSFORMATIONS.map((t, i) => {
              let rel = i - active;
              if (rel > n / 2) rel -= n;
              if (rel < -n / 2) rel += n;
              const isCenter = rel === 0;
              const visible = Math.abs(rel) <= 1;

              return (
                <motion.div
                  key={t.name}
                  className={cn(
                    "pointer-events-none absolute inset-0 flex items-center justify-center",
                    isCenter ? "z-30" : visible ? "z-20" : "z-0",
                  )}
                  animate={{
                    x: `${rel * 40}%`,
                    scale: isCenter ? 1 : 0.82,
                    opacity: visible ? (isCenter ? 1 : 0.5) : 0,
                    filter: isCenter ? "blur(0px)" : "blur(5px)",
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <div
                    className={cn(
                      "relative w-[86vw] max-w-[520px]",
                      visible ? "pointer-events-auto" : "pointer-events-none",
                    )}
                  >
                    <Card t={t} />
                    {!isCenter && visible && (
                      <button
                        type="button"
                        aria-label={`${t.name} dönüşümüne geç`}
                        onClick={() => goto(i)}
                        className="absolute inset-0 z-10 cursor-pointer rounded-3xl"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Manual controls */}
          <button
            type="button"
            aria-label="Önceki"
            onClick={() => go(-1)}
            className="absolute left-1 top-1/2 z-40 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-colors hover:border-brand hover:text-brand md:left-4 cursor-pointer"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Sonraki"
            onClick={() => go(1)}
            className="absolute right-1 top-1/2 z-40 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-colors hover:border-brand hover:text-brand md:right-4 cursor-pointer"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {TRANSFORMATIONS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`${i + 1}. dönüşüm`}
              onClick={() => goto(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-7 bg-brand" : "w-2 bg-white/25 hover:bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Transformation }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 shadow-2xl shadow-black/50">
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

        <p className="mt-4 text-sm font-semibold text-white">— {t.name}</p>
      </div>
    </article>
  );
}

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
        sizes="(max-width: 768px) 43vw, 260px"
        className={cn("object-cover", muted && "grayscale-[35%]")}
      />
      <figcaption
        className={cn(
          "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm",
          muted ? "bg-black/50 text-white/80" : "bg-brand/90 text-brand-foreground",
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}
