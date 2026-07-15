import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi — tahacloud",
  description:
    "tahacloud coaching gizlilik sözleşmesi: kişisel verilerin korunması, iletişim hakkı, bilgi erişimi ve KVKK uyumu.",
};

const SECTIONS: LegalSection[] = [
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
      "Metnin onayıyla birlikte Taha Bulut da KVKK'ye uyacağını, verileri Kanun'un öngördüğü şekilde işleyeceğini ve hukuki sorumluluk altına gireceğini kabul eder.",
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
    <LegalPage
      title="GİZLİLİK SÖZLEŞMESİ"
      sections={SECTIONS}
      contactText="İşbu sözleşme ve kişisel verilerinizle ilgili her türlü soru ve talebiniz için bize ulaşabilirsiniz:"
    />
  );
}
