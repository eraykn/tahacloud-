<div align="center">

# tahacloud

**Karanlık, atletik-lüks bir premium coaching markası için sıfırdan tasarlayıp geliştirdiğim tek sayfalık satış sitesi.**

Video hero, akıcı scroll animasyonları, taahhüt bazlı dinamik fiyatlandırma ve WhatsApp'a akan bir satış hunisi — hepsi backend'siz, tamamen statik bir Next.js uygulamasında.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-Framer-EF0055?logo=framer&logoColor=white)](https://motion.dev)

</div>

---

## Bu proje ne anlatıyor

tahacloud, bir facial sculpting & bodybuilding koçluğu markası. Bana verilen görev basitti ama incelikliydi: **satışa çeviren, hızlı, premium hissettiren bir tanıtım sitesi** — ama hiçbir backend, veritabanı ya da form altyapısı kurmadan. Tüm dönüşüm WhatsApp'a akıyor; bu yüzden site tamamen statik kalabiliyor, saldırı yüzeyi neredeyse sıfır, barındırma maliyeti de öyle.

Bu projede kendimi sadece "component yazan" değil, **ürün kararı alan** biri olarak konumlandırdım: hangi bölüm nerede durmalı, kullanıcı scroll ederken gözü nereye takılmalı, fiyat kartı hangi anda "satın al"a dönüşmeli — bunların hepsini tasarım ve mühendislik kararı olarak birlikte düşündüm.

## Öne çıkan çözümler

- **Taahhüt bazlı dinamik fiyatlandırma** — 1/3/6/12 aylık dönem seçici; indirim yüzdesi ve döneme göre açılan ek özellikler tamamen veri odaklı tanımlı (`featuresFor()`), UI otomatik türetiliyor. İleride e-ticaret alt yapısına (ikas) taşınacağı için veriyi baştan ürün kataloğu mantığıyla kurguladım.
- **Coverflow dönüşüm carousel'i** — dairesel index matematiğiyle sonsuz döngü, her slayt eşit sürede kalıyor, hover'da duruyor, manuel navigasyonla çakışmıyor. Basit bir "önce/sonra" galerisini gereksiz kütüphane eklemeden sıfırdan kurdum.
- **Scroll-spy navbar** — `IntersectionObserver` ile aktif bölüm linkini belirliyorum; navbar aşağı kaydırınca kompaktlaşıyor, yukarıda şeffaflaşıyor. Lenis ile smooth scroll birlikte çalışıyor: nav linkine tıklayınca native jump değil, `lenis.scrollTo()` ile yumuşak geçiş oluyor.
- **Erişilebilirlik ilk sınıf vatandaş** — her animasyonlu bileşen `useReducedMotion` kontrolü yapıyor; kullanıcı hareket azaltmayı açtıysa animasyonlar kapanıyor, Lenis devre dışı kalıp native scroll'a düşülüyor.
- **Merkezi konfigürasyon** — telefon, WhatsApp linki, sosyal hesaplar, marka metinleri tek dosyada (`src/lib/site.ts`). Bileşenlere dağılmış sabit değer sorununu daha en baştan bu şekilde çözdüm.
- **Ortak yasal sayfa şablonu** — Gizlilik Sözleşmesi, KVKK Aydınlatma Metni, Mesafeli Satış Sözleşmesi ve İptal/İade Politikası dört ayrı sayfa ama tek bir `LegalPage` bileşenini paylaşıyor; her sayfa sadece kendi madde/liste/tanım verisini tanımlıyor, render mantığını tekrar yazmıyor.
- **Güvenlik başlıkları** — `next.config.ts` üzerinden `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` ve `Permissions-Policy` production'da otomatik ekleniyor.
- **Tema token'ları** — marka rengi (asit yeşili) ve tüm palet `oklch` ile tanımlı, Tailwind v4'ün `@theme` sistemiyle utility'lere (`text-brand` vb.) map ediliyor.

## Yaklaşımım

Bu siteyi kurarken kendime üç kural koydum:

1. **Gerekmeyen her şeyi çıkar.** Form yok, veritabanı yok, auth yok. Tek dönüşüm noktası WhatsApp — bu yüzden bakım yükü ve saldırı yüzeyi minimum, sayfa hızı maksimum.
2. **Veri ile UI'ı ayır.** Fiyat paketleri, SSS soruları, dönüşüm kartları, nav linkleri — hepsi tip güvenli veri yapıları olarak tanımlı, JSX sadece bu veriyi render ediyor. Bir fiyat değiştiğinde ya da yeni bir paket eklendiğinde tek satır değişiyor.
3. **Hareket bir süs değil, geri bildirim.** Her animasyon bir amaca hizmet ediyor: scroll-reveal dikkat yönlendiriyor, spring geçişler etkileşimi "canlı" hissettiriyor, `prefers-reduced-motion` her yerde saygı görüyor.

Sonuç: Next.js 16'nın App Router'ı ve Turbopack'i üzerine kurulu, tamamen statik olarak prerender edilen, Lighthouse dostu bir marka sitesi.

## Teknoloji

| Katman | Seçim | Neden |
| --- | --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) | Statik prerender + dosya tabanlı routing, sıfır server maliyeti |
| UI | React 19, Tailwind CSS v4 | `@theme` token'ları ve `oklch` renklerle tutarlı, bakımı kolay bir tasarım sistemi |
| Animasyon | `motion` (Framer Motion) | Scroll-reveal, marquee, coverflow carousel — hepsi deklaratif variant'larla |
| Scroll | `lenis` | Momentum/smooth scroll, nav linkleriyle senkron |
| İkon | `lucide-react` + elle çizilmiş marka SVG'leri | Sosyal medya ikonları marka tutarlılığı için özel çizildi |
| Font | `next/font` self-host | Inter (gövde) + Bebas Neue (başlık), sıfır layout shift |
| Dil | TypeScript (strict) | Veri modelleri (paket, SSS, dönüşüm) uçtan uca tip güvenli |

## Proje yapısı

```
src/
  app/
    layout.tsx                    # Kök layout: fontlar, smooth scroll, WhatsApp float
    page.tsx                      # Tek sayfa: Hero → Hakkımda → Süreç → İstatistik →
                                  # Dönüşümler → CTA → Paketler → SSS → Footer
    gizlilik-sozlesmesi/
    kvkk-aydinlatma-metni/
    mesafeli-satis-sozlesmesi/
    iptal-iade-politikasi/        # Yasal sayfalar — hepsi LegalPage'i kullanır
  components/                     # Bölüm bileşenleri (navbar, packages, faq, ...)
    legal-page.tsx                # Yasal sayfalar için ortak şablon
  lib/
    site.ts                       # Merkezi site konfigürasyonu
    utils.ts                      # cn() yardımcı fonksiyonu
public/
  phot/                           # Logo, profil fotoğrafı, önce/sonra görselleri
  vid/                            # Hero video
```

## Yerelde çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # Üretim build'i (statik prerender)
```

## Yol haritası

- [ ] Site, ikas e-ticaret altyapısına taşınacak — paket/fiyat veri yapısı (`src/components/packages.tsx`) doğrudan ürün kataloğuna aktarılabilecek şekilde kurgulandı.
- [ ] Dönüşüm kartlarındaki isim ve yorumlar gerçek, danışan izinli içerikle değiştirilecek.
- [ ] OpenGraph / sosyal paylaşım görseli (`opengraph-image`) eklenecek.

---

<div align="center">

### Bu projeyi beğendiysen

Bir ⭐ bırakman, benim için küçük bir dikkat çekmekten çok daha fazlası — ne yaptığımı gördüğünü gösteriyor.

Benzer bir proje mi kuruyorsun, yoksa bu sitede bir şey mi dikkatini çekti? Konuşalım.

[**GitHub'da beni takip et**](https://github.com/eraykn) · [**Diğer projelerime göz at**](https://github.com/eraykn?tab=repositories) · [**E-posta gönder**](mailto:eraykn95@gmail.com)

</div>
