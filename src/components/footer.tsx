"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { SOCIALS, WhatsAppIcon } from "./social-icons";
import { SITE } from "@/lib/site";

const MENU: { label: string; href: string }[] = [
  { label: "Hakkımda", href: "#about" },
  { label: "Süreç", href: "#process" },
  { label: "Dönüşümler", href: "#transformations" },
  { label: "Programlar", href: "#programs" },
  { label: "S.S.S", href: "#faq" },
];

const LEGAL: { label: string; href: string }[] = [
  { label: "Gizlilik Sözleşmesi", href: "/gizlilik-sozlesmesi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
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

      {/* Main */}
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 md:py-20">
        <Image
          src="/phot/logo_cropped.png"
          alt="tahacloud"
          width={332}
          height={333}
          className="mx-auto h-24 w-auto md:h-28"
        />

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/50">
          Facial Sculpting &amp; Bodybuilding koçluğu. En iyi versiyonuna giden
          yolda yanındayız.
        </p>

        {/* Nav */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {MENU.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-brand"
            >
              {m.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-8 flex items-center justify-center gap-3">
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

        {/* Contact */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Mail className="size-4 text-brand" />
            {SITE.email}
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <WhatsAppIcon className="size-4 text-brand" />
            {SITE.phoneDisplay}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-brand" />
            {SITE.location}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
          {/* Legal */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-white/45 transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/40">
              © {year} {SITE.brand}. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-white/30">
              made by{" "}
              <motion.a
                href="https://github.com/eraykn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-white/40 via-brand to-white/40 bg-[length:200%_auto] bg-clip-text font-semibold text-transparent"
                animate={
                  reduceMotion
                    ? undefined
                    : { backgroundPositionX: ["0%", "-200%"] }
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
      </div>
    </footer>
  );
}
