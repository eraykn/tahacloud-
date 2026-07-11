"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Programlar kimler için uygun?",
    a: "Yüz hatlarını belirginleştirmek, estetik bir fizik kazanmak veya yağ yakmak isteyen; başlangıç ya da ileri seviye herkes için uygundur. Plan tamamen sana göre hazırlanır.",
  },
  {
    q: "Yüz şekillendirme gerçekten işe yarıyor mu?",
    a: "Evet. Düzenli yüz egzersizleri, doğru beslenme ve düşük yağ oranıyla çene ve yüz hatların zamanla belirginleşir. Süreç kişiye göre değişir ve ölçümlerle takip edilir.",
  },
  {
    q: "Spor salonu veya ekipman gerekli mi?",
    a: "Şart değil. Program ev veya salon koşullarına göre uyarlanır; elindeki imkânlara uygun bir antrenman planı hazırlanır.",
  },
  {
    q: "Gelişimim nasıl takip ediliyor?",
    a: "Haftalık ölçümler, fotoğraf analizleri ve düzenli geri bildirimlerle ilerlemen sürekli izlenir; plan gerektikçe güncellenir.",
  },
  {
    q: "Sonuçları ne zaman görürüm?",
    a: "İlk değişimler genelde ilk 3-4 haftada başlar. Kalıcı ve belirgin sonuçlar için 3 ay ve üzeri programlar önerilir.",
  },
  {
    q: "Ödeme ve iade nasıl işliyor?",
    a: "Paketini seçip WhatsApp üzerinden başlıyoruz. İptal ve iade koşulları için ilgili sözleşmeyi inceleyebilir, dilediğin an bize ulaşabilirsin.",
  },
];

export default function Faq() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container: Variants = {
    hidden: {},
    show: { transition: reduceMotion ? {} : { staggerChildren: 0.06 } },
  };

  return (
    <section id="faq" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={item}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            S.S.S
          </span>
          <h2 className="mt-4 font-heading text-4xl tracking-wide text-white md:text-6xl">
            SIKÇA SORULAN SORULAR
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-white/10 border-y border-white/10"
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} variants={item}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-base font-semibold transition-colors md:text-lg",
                      isOpen ? "text-brand" : "text-white",
                    )}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-brand transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-white/60 md:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
