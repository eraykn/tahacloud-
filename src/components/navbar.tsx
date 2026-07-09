"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımda", href: "#about" },
  { label: "Süreç", href: "#process" },
  { label: "Dönüşümler", href: "#transformations" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  // `compact` = shrink to the dense, blurred state.
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Near the top: always full-size and transparent.
    if (latest < 80) {
      setCompact(false);
      return;
    }
    // Scrolling down -> compact; scrolling up -> expand.
    if (latest > previous) setCompact(true);
    else setCompact(false);
  });

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-spy: highlight the nav link whose section crosses the viewport center.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref("#" + entry.target.id);
        }
      },
      // Thin band across the vertical center — the section over it is "active".
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          height: compact ? 64 : 96,
          backgroundColor: compact ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 350, damping: 30 }
        }
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center backdrop-blur-md",
          compact ? "border-b border-brand/30" : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            aria-label="tahacloud — Anasayfa"
            onClick={() => setActiveHref("#home")}
            className="flex items-center"
          >
            <motion.div
              initial={false}
              animate={{ scale: compact ? 0.78 : 1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 350, damping: 30 }
              }
              className="origin-left"
            >
              <Image
                src="/phot/logo_cropped.png"
                alt="tahacloud"
                width={332}
                height={333}
                priority
                className="h-20 w-auto"
              />
            </motion.div>
          </a>

          {/* Desktop links + CTA (right group) */}
          <div className="hidden items-center gap-9 md:flex">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = activeHref === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setActiveHref(link.href)}
                      className={cn(
                        "group relative text-sm font-bold uppercase tracking-wide transition-colors",
                        active ? "text-brand" : "text-white/85 hover:text-brand",
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-1.5 left-0 h-0.5 w-full origin-left rounded-full bg-brand transition-transform duration-300 ease-out",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={() => setActiveHref("#contact")}
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-105"
            >
              Başla
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="text-white md:hidden"
          >
            <Menu className="size-7" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Image
                src="/phot/logo_cropped.png"
                alt="tahacloud"
                width={332}
                height={333}
                className="h-11 w-auto"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                <X className="size-7" />
              </button>
            </div>

            <motion.ul
              className="flex flex-1 flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: reduceMotion
                    ? {}
                    : { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-4xl tracking-wide text-white transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block rounded-full bg-brand px-8 py-3 text-lg font-semibold text-brand-foreground"
                >
                  Başla
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
