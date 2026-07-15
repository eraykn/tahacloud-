import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi — tahacloud",
  description:
    "tahacloud coaching gizlilik sözleşmesi: kişisel verilerin korunması, iletişim hakkı, bilgi erişimi ve KVKK uyumu.",
};

const SECTIONS: { id: string; title: string; paragraphs: string[] }[] = [
  {
    id: "gizlilik-taahhudu",
    title: "Gizlilik Taahhüdü",
    paragraphs: [
      "Taha Bulut, kişisel bilgi ve veri güvenliğini önemsemekte ve bu hususta gerekli olan tüm tedbirleri almaya özen göstermektedir. Kullanıcılar da Uygulamayı kullanarak işbu gizlilik sözleşmesi hükümlerine uygun davranacaklarını kabul, beyan ve taahhüt ederler.",
      "İşbu Gizlilik Sözleşmesi, Sitenin tüm bölümlerinde geçerli olacaktır.",
    ],
  },
  {
    id: "bilgilerin-korunmasi",
    title: "Bilgilerin Korunması",
    paragraphs: [
      "Kullanıcıların bilgilerinin korunması ve gizliliğin sürdürülebilmesi Taha Bulut'un birinci önceliğidir. Bu nedenle Kullanıcıların vermiş olduğu bilgiler, sözleşmede belirtilen kurallar ve amaçlar dışında herhangi bir kapsamda kullanılmayacak, üçüncü şahıslarla paylaşılmayacaktır.",
    ],
  },
  {
    id: "iletisim-hakki",
    title: "İletişim Hakkı",
    paragraphs: [
      "Taha Bulut'un, Kullanıcı tarafından siteye kayıt formunda belirtilen veya daha sonra kendisi tarafından güncellenen adresi, e-posta adresi, sabit ve mobil telefon hatları ve diğer iletişim bilgileri üzerinden mektup, e-posta, SMS, telefon görüşmesi ve diğer yollarla iletişim, pazarlama, bildirim ve diğer amaçlarla Kullanıcıya ulaşma hakkı bulunmaktadır.",
      "Kullanıcı, işbu sözleşmeyi kabul etmekle, aksine bir yazılı bildirimi olmadığı müddetçe Taha Bulut'un kendisine yönelik yukarıda belirtilen iletişim faaliyetlerinde bulunabileceğini kabul ve beyan etmektedir.",
    ],
  },
  {
    id: "bilgi-erisimi",
    title: "Bilgi Erişimi ve Paylaşımı",
    paragraphs: [
      "Websitesi ile ilgili sorunların tanımlanabilmesi ve websitesinde çıkabilecek muhtemel sorunların acil olarak giderilmesi için, Taha Bulut gerektiğinde Kullanıcıların IP adresini ve sosyal ağ kullanıcı hesabında kayıtlı bilgileri kaydedebilir ve bu kayıtları anılan bu amaçlarla kullanabilir.",
      "Bu IP adresleri, Taha Bulut tarafından kullanıcılarını ve ziyaretçilerini genel anlamda tanımlamak ve kapsamlı şekilde demografik veri toplayabilmek amacıyla kullanılabilir.",
    ],
  },
  {
    id: "gizli-bilgilerin-saklanmasi",
    title: "Gizli Bilgilerin Saklanması",
    paragraphs: [
      "Taha Bulut, kendisine verilen gizli bilgileri kesinlikle özel ve gizli tutmayı, bunu bir sır olarak saklamayı yükümlülük olarak kabul ettiğini; gizliliğin sağlanıp sürdürülmesi, gizli bilginin tamamının veya herhangi bir parçasının kamu alanına girmesini, yetkisiz kullanımını veya üçüncü bir kişiye açıklanmasını önleme gereği olan gerekli tüm tedbirleri almayı ve üzerine düşen tüm özeni tam olarak göstermeyi taahhüt etmektedir.",
    ],
  },
  {
    id: "kvkk-uyumu",
    title: "KVKK Uyumu",
    paragraphs: [
      "Metnin onayıyla birlikte SEFA GÖKTUĞ ALAF da KVKK'ye uyacağını, verileri Kanun'un öngördüğü şekilde işleyeceğini ve hukuki sorumluluk altına gireceğini kabul eder.",
    ],
  },
  {
    id: "degisiklikler",
    title: "Değişiklikler",
    paragraphs: [
      "Taha Bulut, işbu gizlilik bildiriminde geçen hükümleri gerekli gördüğü zamanda Uygulamada yayınlamak şartıyla değiştirebilir. Taha Bulut'un değişiklik yaptığı gizlilik bildirimi hükümleri, Uygulamada yayınlandığı tarihte yürürlüğe girmiş kabul edilir.",
    ],
  },
];

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

        {/* İçindekiler */}
        <nav
          aria-label="İçindekiler"
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            İçindekiler
          </h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {SECTIONS.map((s, i) => (
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

        {/* Bölümler */}
        <div className="mt-8 flex flex-col gap-6">
          {SECTIONS.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-3xl leading-none text-brand/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-brand">{s.title}</h2>
              </div>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-white/70">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* İletişim */}
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 text-center md:p-8">
          <p className="text-sm leading-relaxed text-white/70">
            İşbu sözleşme ve kişisel verilerinizle ilgili her türlü soru ve
            talebiniz için bize ulaşabilirsiniz:
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
