import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi — tahacloud",
  description:
    "6502 Sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tahacloud coaching mesafeli satış sözleşmesi.",
};

type Subsection = { code: string; title: string; paragraphs: string[] };

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  terms?: { term: string; def: string }[];
  subsections?: Subsection[];
  danger?: boolean;
};

const SECTIONS: Section[] = [
  {
    id: "taraflar",
    title: "1. Taraflar",
    paragraphs: [
      "İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.",
    ],
    list: [
      "SATICI: Taha Bulut, İstanbul, Türkiye, iletisim@tahacloud.com",
      "ALICI: Sipariş esnasında bilgileri girilecek olan kişidir. İşbu sözleşmeyi kabul etmekle ALICI, sözleşme konusu siparişi onayladığı takdirde sipariş konusu bedeli ve varsa ek ücretleri ödeme yükümlülüğü altına gireceğini kabul eder.",
    ],
  },
  {
    id: "tanimlar",
    title: "2. Tanımlar",
    terms: [
      { term: "BAKAN", def: "Gümrük ve Ticaret Bakanı." },
      { term: "KANUN", def: "6502 sayılı Tüketicinin Korunması Hakkında Kanun." },
      {
        term: "YÖNETMELİK",
        def: "Mesafeli Sözleşmeler Yönetmeliği (RG: 27.11.2014/29188).",
      },
      {
        term: "HİZMET",
        def: "Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin konusu.",
      },
      {
        term: "SATICI",
        def: "Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan şirket.",
      },
      {
        term: "ALICI",
        def: "Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişi.",
      },
    ],
  },
  {
    id: "konu",
    title: "3. Konu",
    paragraphs: [
      "İşbu Sözleşme, ALICI'nın, SATICI'ya ait internet sitesi üzerinden elektronik ortamda siparişini verdiği ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerini düzenler.",
      "Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir.",
    ],
  },
  {
    id: "genel-hukumler",
    title: "Genel Hükümler",
    subsections: [
      {
        code: "9.1",
        title: "Ön Bilgilendirme",
        paragraphs: [
          "ALICI, SATICI'ya ait internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup, bilgi sahibi olduğunu, elektronik ortamda gerekli teyidi verdiğini kabul eder.",
        ],
      },
      {
        code: "9.2",
        title: "Teslimat Süresi",
        paragraphs: [
          "Sözleşme konusu her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile ALICI'nın yerleşim yeri uzaklığına bağlı olarak ALICI veya ALICI'nın gösterdiği adresteki kişiye teslim edilir.",
        ],
      },
      {
        code: "9.3",
        title: "Satıcının Yükümlülükleri",
        paragraphs: [
          "SATICI, sözleşme konusu ürünü eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ile teslim etmeyi, her türlü ayıptan arî olarak yasal mevzuat gereklerine göre sağlam, standartlara uygun bir şekilde işi doğruluk ve dürüstlük esasları dâhilinde ifa etmeyi taahhüt eder.",
        ],
      },
    ],
  },
  {
    id: "ozel-kosullar",
    title: "Özel Koşullar",
    subsections: [
      {
        code: "9.7",
        title: "Sözleşme Feshi",
        paragraphs: [
          "SATICI, ALICININ programa aykırı davrandığının tespiti üzerine sözleşmeyi feshetme hakkına sahiptir. 6 hafta boyunca WhatsApp ya da başka bir iletişim kanalı ile ALICININ, SATICIYLA herhangi bir şekilde iletişime geçmemesi halinde SATICININ derhal fesih hakkı saklıdır.",
        ],
      },
      {
        code: "9.8",
        title: "Program Paylaşımı",
        paragraphs: [
          "SATICI, ALICININ satın aldığı programı kendisinden habersiz olarak bir başka 3. kişiyle ya da umuma açık bir şekilde paylaşması halinde sözleşmeyi derhal feshetme hakkına sahiptir.",
        ],
      },
      {
        code: "9.9",
        title: "Başarı Yüzdesi",
        paragraphs: [
          "ALICI'nın, programa uyumunu gösteren aylık başarı yüzdesinin %20'nin altında kalması durumunda hizmet iptal edilebilir, söz konusu bu durum tarafların karşılıklı anlaşması neticesinde gerçekleşecektir.",
        ],
      },
    ],
  },
  {
    id: "sorumluluk-reddi",
    title: "Sorumluluk Reddi",
    danger: true,
    paragraphs: [
      "SATICI tarafından hazırlanan beslenme programının, antrenman programının, ergojenik takviye kullanım çizelgesinin, performans arttırıcı ilaç kullanım takviminin yanlışsız olduğunun garantisi bulunmamaktadır.",
      "SATICI tarafından sağlanan tıbbi bilgi, en iyi durumda bile, yalnızca genel nitelikli olup bir tıp profesyonelinin tavsiyesi yerine geçmez. Danışmanın gerçekleşen bu satış sözleşmesi kapsamında tıp doktoru sıfatı bulunmamaktadır.",
    ],
  },
  {
    id: "odeme-ve-iade",
    title: "Ödeme ve İade",
    paragraphs: [
      "ALICI tarafından siparişin iptal edilmesi halinde ALICI'nın nakit ile yaptığı ödemelerde, ürün tutarı 14 gün içinde kendisine nakden ve defaten ödenir. ALICI'nın kredi kartı ile yaptığı ödemelerde ise, ürün tutarı, siparişin ALICI tarafından iptal edilmesinden sonra 14 gün içerisinde ilgili bankaya iade edilir.",
      "Not: SATICI tarafından kredi kartına iade edilen tutarın banka tarafından ALICI hesabına yansıtılmasına ilişkin ortalama süreç 2 ile 3 haftayı bulabilir.",
    ],
  },
];

export default function MesafeliSatisSozlesmesiPage() {
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
          MESAFELİ SATIŞ SÖZLEŞMESİ
        </h1>
        <p className="mt-4 text-center text-sm text-white/50">
          6502 Sayılı Tüketicinin Korunması Hakkında Kanun
        </p>

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
                <h2
                  className={cn(
                    "text-lg font-semibold",
                    s.danger ? "text-red-500" : "text-brand",
                  )}
                >
                  {s.title}
                </h2>
              </div>

              {s.paragraphs?.map((p) => (
                <p
                  key={p}
                  className={cn(
                    "mt-4 leading-relaxed",
                    s.danger ? "text-red-500" : "text-white/70",
                  )}
                >
                  {p}
                </p>
              ))}

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
                        <p
                          key={p}
                          className="mt-2 leading-relaxed text-white/70"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* İletişim */}
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 text-center md:p-8">
          <p className="text-sm leading-relaxed text-white/70">
            İşbu sözleşme ile ilgili her türlü soru ve talebiniz için bize
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
