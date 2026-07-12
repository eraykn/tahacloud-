"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsAppIcon } from "./social-icons";
import { SITE } from "@/lib/site";

export default function WhatsappFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-5 right-5 z-[70] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 md:bottom-7 md:right-7"
      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* pulsing ring */}
      {!reduceMotion && (
        <motion.span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.6], opacity: [0.55, 0] }}
          transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity }}
        />
      )}
      <WhatsAppIcon className="size-7" />
    </motion.a>
  );
}
