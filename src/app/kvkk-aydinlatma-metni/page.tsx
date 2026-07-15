import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — tahacloud",
  description:
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında tahacloud coaching KVKK aydınlatma metni.",
};

const SECTIONS: LegalSection[] = [
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
    note: {
      heading: "Başvuru Süreci",
      paragraphs: [
        "Başvurunuzda yer alan talepleriniz, talebin niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin websitemiz için ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.",
        "Kişisel verilerinizin işlenmesi ile ilgili hususlarda başvurunuzu yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da bize daha önce bildirdiğiniz ve kayıtlarımızda yer alan elektronik posta adresinizi kullanmak suretiyle veri sorumlumuza teslim etmeniz gerekmektedir.",
      ],
    },
  },
];

export default function KvkkAydinlatmaMetniPage() {
  return (
    <LegalPage
      title="KVKK AYDINLATMA METNİ"
      subtitle="6698 Sayılı Kişisel Verilerin Korunması Kanunu"
      sections={SECTIONS}
      contactText="Kişisel verilerinizle ilgili her türlü soru ve talebiniz için bize ulaşabilirsiniz:"
    />
  );
}
