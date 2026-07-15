import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "İptal & İade Politikası — tahacloud",
  description:
    "tahacloud coaching iptal ve iade politikası: kişiye özel hazırlanan koçluk hizmetlerinde cayma hakkı istisnası.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "cayma-hakki-istisnasi",
    title: "Cayma Hakkı İstisnası",
    paragraphs: [
      "Alıcı tarafından satın alınan online koçluk hizmeti; alıcının kişisel bilgileri, hedefleri ve ihtiyaçları doğrultusunda kişiye özel olarak hazırlanan beslenme ve antrenman programlarını kapsamaktadır.",
      {
        text: "6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesi uyarınca, kişiye özel hazırlanan hizmetlerde cayma hakkı bulunmamaktadır.",
        emphasis: true,
      },
      "Alıcı, hizmetin satın alma işleminin tamamlanmasıyla birlikte program hazırlama sürecinin başlayacağını, bu kapsamda cayma hakkından feragat ettiğini ve programın kendisine dijital ortamda sunulmasının ardından ücret iadesi talep edemeyeceğini kabul, beyan ve taahhüt eder.",
    ],
  },
];

export default function IptalIadePolitikasiPage() {
  return (
    <LegalPage
      title="İPTAL & İADE POLİTİKASI"
      sections={SECTIONS}
      contactText="İptal ve iade ile ilgili her türlü soru ve talebiniz için bize ulaşabilirsiniz:"
    />
  );
}
