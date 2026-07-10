"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=905413299480&text&type=phone_number&app_absent=0";

type Term = { months: number; label: string; pct: number };

const TERMS: Term[] = [
  { months: 1, label: "1 Ay", pct: 0 },
  { months: 3, label: "3 Ay", pct: 10 },
  { months: 6, label: "6 Ay", pct: 15 },
  { months: 12, label: "12 Ay", pct: 20 },
];

type Package = {
  name: string;
  monthly: number;
  desc: string;
  features: string[];
  highlight?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Yüz Şekillendirme Paketi",
    monthly: 2490,
    desc: "Belirgin çene hattı, simetrik ve estetik yüz hatları için kişiye özel yüz egzersizleri ve beslenme planı.",
    features: [
      "Kişiye özel yüz egzersiz programı",
      "Yüz hattı & simetri analizi",
      "Beslenme & su takibi",
      "Haftalık ölçüm ve foto analizi",
      "24/7 WhatsApp destek",
    ],
  },
  {
    name: "Yüz + Vücut Paketi",
    monthly: 3480,
    desc: "Hem yüz hatlarını hem de fiziğini aynı anda dönüştüren bütünsel premium program.",
    features: [
      "Yüz Şekillendirme paketinin tamamı",
      "Vücut paketinin tamamı",
      "Bütünsel dönüşüm planı",
      "Öncelikli 24/7 destek",
      "Aylık strateji görüşmesi",
    ],
    highlight: true,
  },
  {
    name: "Vücut Paketi",
    monthly: 1990,
    desc: "Yağ yakımı, kas gelişimi ve estetik fizik için tamamen sana özel antrenman ve beslenme programı.",
    features: [
      "Kişiye özel antrenman programı",
      "Hedefe yönelik beslenme planı",
      "Yağ yakımı & kas gelişim takibi",
      "Haftalık ölçüm ve foto analizi",
      "24/7 WhatsApp destek",
    ],
  },
];

const fmt = (n: number) => new Intl.NumberFormat("tr-TR").format(n) + " ₺";

export default function Packages() {
  const reduceMotion = useReducedMotion();
  const [months, setMonths] = useState(1);
  const term = TERMS.find((t) => t.months === months) ?? TERMS[0];

  const line: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container: Variants = {
    hidden: {},
    show: { transition: reduceMotion ? {} : { staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={item}
          className="mb-10 text-center md:mb-12"
        >
          <div className="flex items-center justify-center gap-4 text-brand">
            <motion.span
              variants={line}
              className="h-px w-20 origin-right bg-gradient-to-r from-transparent to-brand md:w-36"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Programlar
            </span>
            <motion.span
              variants={line}
              className="h-px w-20 origin-left bg-gradient-to-r from-brand to-transparent md:w-36"
            />
          </div>
          <h2 className="mt-4 font-heading text-4xl tracking-wide text-white md:text-6xl">
            SANA UYGUN PAKETİ SEÇ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
            Ne kadar uzun taahhüt, o kadar avantaj. Daha uzun paketlerde daha
            fazla indirim.
          </p>
        </motion.div>

        {/* Term selector */}
        <div className="mb-14 flex justify-center">
          <div className="flex flex-wrap justify-center rounded-full border border-white/10 bg-white/[0.03] p-1">
            {TERMS.map((t) => {
              const activeTerm = t.months === months;
              return (
                <button
                  key={t.months}
                  type="button"
                  onClick={() => setMonths(t.months)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-6",
                    activeTerm
                      ? "text-brand-foreground"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {activeTerm && (
                    <motion.span
                      layoutId="termPill"
                      className="absolute inset-0 -z-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {t.label}
                    {t.pct > 0 && (
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                          activeTerm
                            ? "bg-black/15 text-brand-foreground"
                            : "bg-brand/15 text-brand",
                        )}
                      >
                        -%{t.pct}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8"
        >
          {PACKAGES.map((pkg) => {
            const base = pkg.monthly * term.months;
            const price = Math.round((base * (100 - term.pct)) / 100);

            return (
              <motion.article
                key={pkg.name}
                variants={item}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-7 transition-colors duration-300",
                  pkg.highlight
                    ? "border-brand/60 bg-brand/[0.06] shadow-2xl shadow-brand/10 md:-translate-y-3"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25",
                )}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-foreground">
                    En Popüler
                  </span>
                )}

                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-white/60">
                  {pkg.desc}
                </p>

                {/* Price */}
                <div className="mt-6">
                  {term.pct > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 line-through">
                        {fmt(base)}
                      </span>
                      <span className="rounded-full bg-brand/15 px-2 py-0.5 text-xs font-semibold text-brand">
                        -%{term.pct}
                      </span>
                    </div>
                  )}
                  <div className="mt-1 font-heading text-4xl text-white md:text-5xl">
                    {fmt(price)}
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    {term.months === 1
                      ? "aylık"
                      : `${term.months} ay toplam`}
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-white/75"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]",
                    pkg.highlight
                      ? "bg-brand text-brand-foreground shadow-[0_0_40px_-12px] shadow-brand"
                      : "border border-white/20 text-white hover:border-brand hover:text-brand",
                  )}
                >
                  Paketi Seç
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
