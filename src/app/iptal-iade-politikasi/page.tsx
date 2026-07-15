import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "İptal & İade Politikası — tahacloud",
  description:
    "tahacloud coaching iptal ve iade politikası: kişiye özel hazırlanan koçluk hizmetlerinde cayma hakkı istisnası.",
};

export default function IptalIadePolitikasiPage() {
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
          İPTAL &amp; İADE POLİTİKASI
        </h1>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-lg font-semibold text-brand">
            Cayma Hakkı İstisnası
          </h2>

          <p className="mt-4 leading-relaxed text-white/70">
            Alıcı tarafından satın alınan online koçluk hizmeti; alıcının
            kişisel bilgileri, hedefleri ve ihtiyaçları doğrultusunda kişiye
            özel olarak hazırlanan beslenme ve antrenman programlarını
            kapsamaktadır.
          </p>

          <p className="mt-4 font-serif italic leading-relaxed text-white/85">
            6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
            Sözleşmeler Yönetmeliği&apos;nin 15. maddesi uyarınca, kişiye özel
            hazırlanan hizmetlerde cayma hakkı bulunmamaktadır.
          </p>

          <p className="mt-4 leading-relaxed text-white/70">
            Alıcı, hizmetin satın alma işleminin tamamlanmasıyla birlikte
            program hazırlama sürecinin başlayacağını, bu kapsamda cayma
            hakkından feragat ettiğini ve programın kendisine dijital ortamda
            sunulmasının ardından ücret iadesi talep edemeyeceğini kabul,
            beyan ve taahhüt eder.
          </p>
        </section>

        {/* İletişim */}
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 text-center md:p-8">
          <p className="text-sm leading-relaxed text-white/70">
            İptal ve iade ile ilgili her türlü soru ve talebiniz için bize
            ulaşabilirsiniz:
          </p>
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
