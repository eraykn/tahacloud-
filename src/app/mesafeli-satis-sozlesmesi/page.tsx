import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi — tahacloud",
  description:
    "6502 Sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tahacloud coaching mesafeli satış sözleşmesi.",
};

const SECTIONS: LegalSection[] = [
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
    <LegalPage
      title="MESAFELİ SATIŞ SÖZLEŞMESİ"
      subtitle="6502 Sayılı Tüketicinin Korunması Hakkında Kanun"
      sections={SECTIONS}
      contactText="İşbu sözleşme ile ilgili her türlü soru ve talebiniz için bize ulaşabilirsiniz:"
    />
  );
}
