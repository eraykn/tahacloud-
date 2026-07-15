import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — tahacloud",
  description:
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında tahacloud coaching KVKK aydınlatma metni.",
};

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  terms?: { term: string; def: string }[];
  list?: string[];
};

const SECTIONS: Section[] = [
  {
    id: "veri-sorumlusu-kimligi",
    title: "Veri Sorumlusu Kimliği",
    paragraphs: [
      "6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu kimliği aşağıdaki gibidir:",
    ],
    list: [
      "Ad Soyad: Taha Bulut",
      "Adres: İstanbul, Türkiye",
      `E-posta: ${SITE.email}`,
    ],
  },
  {
    id: "tanimlar",
    title: "Tanımlar",
    terms: [
      {
        term: "Kişisel Veri",
        def: "Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade eder.",
      },
      {
        term: "Veri İşleyen",
        def: "Veri sorumlusunun verdiği yetkiye dayanarak onun adına Kişisel Verileri işleyen gerçek veya tüzel kişiyi ifade eder.",
      },
      {
        term: "Veri Sorumlusu",
        def: "Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi ifade eder.",
      },
    ],
  },
  {
    id: "kisisel-verilerin-toplanma-yontemi",
    title: "Kişisel Verilerin Toplanma Yöntemi",
    paragraphs: [
      "Kişisel verileriniz, websitemiz ile aranızdaki ilişkiye bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, Websitemiz ve bağlı birimleri, internet sitesi, sosyal medya mecraları, telefon, e-posta ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanmaktadır.",
      "KVKK'nın 5. ve 6. Maddesinde belirtilen amaç ve şartlar dahilinde, siz site üyelerimize ve ziyaretçilerimize sizlerin amacına daha uygun hizmet vermek amacıyla işlenmektedir.",
    ],
  },
  {
    id: "verilerin-aktarilmasi",
    title: "Verilerin Aktarılması",
    paragraphs: [
      "Toplanan kişisel verileriniz, KVKK'da öngörülen temel ilkelere uygun olarak ve KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde websitemiz tarafından yukarıda yer alan amaçlar doğrultusunda aşağıdaki taraflara aktarılabilecektir:",
    ],
    list: [
      "Proje ortaklarımıza, Websitemize hizmet veren aracı kuruluşlar ile tedarikçilerimize",
      "Kanunen yetkili kamu kurumlarına",
      "Yasal takip süreçleriyle ilgili zorunlu kişi ve kurumlara",
    ],
  },
  {
    id: "haklariniz",
    title: "Haklarınız (KVKK Madde 11)",
    paragraphs: [
      "KVKK'nın 11. Maddesi gereği bize şahsen, kimliğinizi ispat etmeniz kaydıyla, kişisel verileriniz ile ilgili aşağıdaki haklara sahipsiniz:",
    ],
    list: [
      "Websitemizin hakkınızda kişisel veri işleyip işlemediğini öğrenme",
      "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
      "Kişisel verilerin yurtiçi veya yurtdışına aktarılıp aktarılmadığı ve kimlere aktarıldığını öğrenme",
      "Yanlış ve eksik kişisel verilerinizin düzeltilmesini talep etme",
      "KVKK'nın 7. Maddesinde öngörülen şartlar çerçevesinde verilerinizin silinmesini talep etme",
      "Münhasıran otomatik sistem kullanılarak oluşturulmuş analizlere itiraz etme",
      "Kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme",
    ],
  },
];

const BASVURU_PARAGRAPHS = [
  "Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin websitemiz için ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.",
  "Kişisel verilerinizin işlenmesi ile ilgili hususlarda başvurunuzu yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da bize daha önce bildirdiğiniz ve kayıtlarımızda yer alan elektronik posta adresinizi kullanmak suretiyle veri sorumlumuza teslim etmeniz gerekmektedir.",
];

export default function KvkkAydinlatmaMetniPage() {
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
          KVKK AYDINLATMA METNİ
        </h1>
        <p className="mt-4 text-center text-sm text-white/50">
          6698 Sayılı Kişisel Verilerin Korunması Kanunu
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
                <h2 className="text-lg font-semibold text-brand">{s.title}</h2>
              </div>

              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-white/70">
                  {p}
                </p>
              ))}

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

              {s.id === "haklariniz" && (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">
                    Başvuru Süreci
                  </h3>
                  {BASVURU_PARAGRAPHS.map((p) => (
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
          <p className="text-sm leading-relaxed text-white/70">
            Kişisel verilerinizle ilgili her türlü soru ve talebiniz için bize
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
