"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { SOCIALS, WhatsAppIcon } from "./social-icons";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=905413299480&text&type=phone_number&app_absent=0";

const MENU: { label: string; href: string }[] = [
  { label: "Hakkımda", href: "#about" },
  { label: "Süreç", href: "#process" },
  { label: "Dönüşümler", href: "#transformations" },
  { label: "Programlar", href: "#programs" },
  { label: "S.S.S", href: "#faq" },
];

const LEGAL: { label: string; href: string }[] = [
  { label: "Gizlilik Sözleşmesi", href: "#" },
  { label: "KVKK Aydınlatma Metni", href: "#" },
  { label: "Mesafeli Satış Sözleşmesi", href: "#" },
  { label: "İptal & İade Politikası", href: "#" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[40rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/phot/logo_cropped.png"
              alt="tahacloud"
              width={332}
              height={333}
              className="h-24 w-auto md:h-28"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Facial Sculpting &amp; Bodybuilding koçluğu. En iyi versiyonuna
              giden yolda yanındayız.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-brand hover:bg-brand/10 hover:text-brand"
                >
                  <Icon className="size-[1.15rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Menü
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {MENU.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="text-sm text-white/55 transition-colors hover:text-brand"
                  >
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Yasal
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/55 transition-colors hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              İletişim
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/55">
              <li>
                <a
                  href="mailto:iletisim@tahacloud.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Mail className="size-4 shrink-0 text-brand" />
                  iletisim@tahacloud.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-brand" />
                  +90 541 329 94 80
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-brand" />
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} tahacloud coaching. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/30">
            made by{" "}
            <motion.a
              href="#"
              className="bg-gradient-to-r from-white/40 via-brand to-white/40 bg-[length:200%_auto] bg-clip-text font-semibold text-transparent"
              animate={
                reduceMotion ? undefined : { backgroundPositionX: ["0%", "-200%"] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 6, ease: "linear", repeat: Infinity }
              }
            >
              unforgiven
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
