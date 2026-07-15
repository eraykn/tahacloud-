import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

export type LegalParagraph = string | { text: string; emphasis?: boolean };

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: LegalParagraph[];
  list?: string[];
  terms?: { term: string; def: string }[];
  subsections?: { code: string; title: string; paragraphs: string[] }[];
  note?: { heading: string; paragraphs: string[] };
  danger?: boolean;
};

export function LegalPage({
  title,
  subtitle,
  sections,
  contactText,
}: {
  title: string;
  subtitle?: string;
  sections: LegalSection[];
  contactText: string;
}) {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4" />
          Ana Sayfa
        </Link>

        <div className="mt-10 flex justify-center">
          <Image
            src="/phot/logo_cropped.png"
            alt="tahacloud"
            width={332}
            height={333}
            className="h-20 w-auto"
          />
        </div>

        <h1 className="mt-8 text-center font-heading text-4xl tracking-wide text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-center text-sm text-white/50">{subtitle}</p>
        )}

        {/* İçindekiler */}
        {sections.length > 1 && (
          <nav
            aria-label="İçindekiler"
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              İçindekiler
            </h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-2 text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    <span className="font-heading text-brand/70 group-hover:text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Bölümler */}
        <div className="mt-8 flex flex-col gap-6">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-3xl leading-none text-brand/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className={cn(
                    "text-lg font-semibold",
                    s.danger ? "text-red-500" : "text-brand",
                  )}
                >
                  {s.title}
                </h2>
              </div>

              {s.paragraphs?.map((p, idx) => {
                const text = typeof p === "string" ? p : p.text;
                const emphasis = typeof p !== "string" && p.emphasis;
                return (
                  <p
                    key={idx}
                    className={cn(
                      "mt-4 leading-relaxed",
                      s.danger
                        ? "text-red-500"
                        : emphasis
                          ? "font-serif italic text-white/85"
                          : "text-white/70",
                    )}
                  >
                    {text}
                  </p>
                );
              })}

              {s.list && (
                <ul className="mt-4 flex flex-col gap-2">
                  {s.list.map((l) => (
                    <li
                      key={l}
                      className="flex gap-2.5 leading-relaxed text-white/70"
                    >
                      <span className="text-brand">•</span>
                      {l}
                    </li>
                  ))}
                </ul>
              )}

              {s.terms && (
                <dl className="mt-4 flex flex-col gap-4">
                  {s.terms.map((t) => (
                    <div key={t.term}>
                      <dt className="font-semibold text-white">{t.term}</dt>
                      <dd className="mt-1 leading-relaxed text-white/70">
                        {t.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {s.subsections && (
                <div className="mt-4 flex flex-col gap-5">
                  {s.subsections.map((sub) => (
                    <div key={sub.code}>
                      <h3 className="text-sm font-semibold text-white">
                        <span className="text-brand">{sub.code}</span>{" "}
                        {sub.title}
                      </h3>
                      {sub.paragraphs.map((p) => (
                        <p key={p} className="mt-2 leading-relaxed text-white/70">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {s.note && (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">
                    {s.note.heading}
                  </h3>
                  {s.note.paragraphs.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed text-white/70">
                      {p}
                    </p>
                  ))}
                </>
              )}
            </section>
          ))}
        </div>

        {/* İletişim */}
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 text-center md:p-8">
          <p className="text-sm leading-relaxed text-white/70">{contactText}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
          >
            <Mail className="size-4" />
            {SITE.email}
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
