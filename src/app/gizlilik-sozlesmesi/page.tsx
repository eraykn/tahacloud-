import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi — tahacloud",
  description: "tahacloud coaching gizlilik sözleşmesi ve veri güvenliği taahhüdü.",
};

export default function GizlilikSozlesmesiPage() {
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
          GİZLİLİK SÖZLEŞMESİ
        </h1>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-lg font-semibold text-brand">Gizlilik Taahhüdü</h2>
          <p className="mt-4 leading-relaxed text-white/70">
            taha bulut kişisel bilgi ve veri güvenliğini önemsemekte ve bu
            hususta gerekli olan tüm tedbirleri almaya özen göstermektedir.
            Kullanıcılar da Uygulamayı kullanarak işbu gizlilik sözleşmesi
            hükümlerine uygun davranacaklarını kabul, beyan ve taahhüt eder.
          </p>
        </div>
      </div>
    </main>
  );
}
