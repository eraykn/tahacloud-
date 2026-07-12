# tahacloud

**tahacloud coaching** — Facial Sculpting & Bodybuilding koçluğu için premium, tek sayfalık (single-page) tanıtım ve satış sitesi. Karanlık, atletik-lüks tasarım dili; video hero, akıcı animasyonlar ve WhatsApp üzerinden satış akışı.

> **Yol haritası:** Site ileride [ikas](https://www.ikas.com) e-ticaret altyapısına taşınacak. Bu repo, o geçişe kadar canlıda kalacak pazarlama sitesi + tasarım referansıdır. Paket/fiyat yapısı (`src/components/packages.tsx`) ikas ürün kataloğuna birebir aktarılabilecek şekilde veri odaklı kurgulandı.

## Teknoloji

| Katman | Seçim |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) — tamamen statik çıktı (SSG) |
| UI | React 19, Tailwind CSS v4 (`@theme` token'ları, oklch renkler) |
| Animasyon | `motion` (Framer Motion) — scroll-reveal, marquee, coverflow carousel |
| Scroll | `lenis` — momentum/smooth scroll |
| İkon | `lucide-react` + elle çizilmiş marka SVG'leri (`social-icons.tsx`) |
| Font | `next/font` ile self-host: Inter (gövde), Bebas Neue (başlık) |
| Stil yardımcıları | `clsx` + `tailwind-merge` (`cn()`), shadcn temel token'ları |

Backend, veritabanı, form endpoint'i **yok** — tüm dönüşüm (conversion) WhatsApp linkine akar. Bu sayede saldırı yüzeyi ve bakım maliyeti minimum.

## Proje yapısı

```
src/
  app/
    layout.tsx              # Kök layout: fontlar, smooth scroll, WhatsApp float
    page.tsx                # Tek sayfa: Hero → Hakkımda → Süreç → İstatistik →
                            # Dönüşümler → CTA → Paketler → SSS → Footer
    gizlilik-sozlesmesi/    # Gizlilik sözleşmesi sayfası
    icon.png, apple-icon.png, favicon.ico  # Marka logosu (Next dosya konvansiyonu)
  components/               # Bölüm bileşenleri (navbar, packages, faq, ...)
  lib/
    site.ts                 # Merkezi site konfigürasyonu: marka, iletişim, sosyal linkler
    utils.ts                # cn() yardımcı fonksiyonu
public/
  phot/                     # Logo, profil fotoğrafı, önce/sonra görselleri
  vid/                      # Hero video
```

## Öne çıkan çözümler

- **Merkezi konfigürasyon (`src/lib/site.ts`):** Telefon, WhatsApp linki, sosyal hesaplar ve marka metinleri tek dosyada. Bileşenlere dağılmış sabit değer sorunu bu dosyayla çözüldü — ikas geçişinde de tek güncelleme noktası.
- **Erişilebilirlik / `prefers-reduced-motion`:** Her animasyonlu bileşen `useReducedMotion` kontrolü yapar; hareket azaltma açıkken animasyonlar kapanır, Lenis devre dışı kalıp native scroll'a düşülür.
- **Scroll-spy navbar:** `IntersectionObserver` ile viewport ortasından geçen bölüm aktif linki belirler; aşağı kaydırınca navbar kompaktlaşır, yukarıda şeffaflaşır. Mobil menü açıkken body scroll kilitlenir.
- **Coverflow dönüşüm carousel'i:** Dairesel index matematiğiyle sonsuz döngü; her slayt eşit süre kalır (timer her geçişte sıfırlanır), hover'da durur, manuel navigasyonla çakışmaz.
- **Taahhüt bazlı fiyatlandırma:** 1/3/6/12 aylık dönem seçici; indirim yüzdesi ve döneme göre açılan ek özellikler (`featuresFor`) veri olarak tanımlı — UI otomatik türetilir.
- **Tema token'ları:** Marka rengi (`--brand`, asit yeşili) ve tüm palet oklch olarak `globals.css` içinde; Tailwind v4 `@theme` ile utility'lere (`text-brand` vb.) map edilir.
- **App icon konvansiyonu:** `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` marka logosundan üretildi; Next `<head>` etiketlerini otomatik ekler.

## Güvenlik notları

- Statik site; kullanıcı girdisi işlenmez, `dangerouslySetInnerHTML` / `eval` yok, gizli anahtar (env secret) yok.
- Tüm dış linkler (`target="_blank"`) `rel="noopener noreferrer"` taşır.
- `npm audit`: 2 orta seviye bulgu — Next.js'in kendi içine gömdüğü `postcss < 8.5.10` (build zamanı bağımlılığı, statik sitede sömürülebilir değil). Next yamalı sürüm yayınlayınca `next` güncellenmeli.
- Üretim ortamına alırken host/CDN katmanında güvenlik başlıkları önerilir: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `frame-ancestors` (CSP).

## Bilinen eksikler / yapılacaklar

- Footer'daki **KVKK Aydınlatma Metni, Mesafeli Satış Sözleşmesi, İptal & İade Politikası** linkleri placeholder (`#`). ikas geçişi öncesi gerçek metinler eklenmeli (e-ticarette yasal zorunluluk).
- Dönüşüm kartlarındaki isim ve yorumlar placeholder — gerçek danışan izinli içerikle değiştirilecek.
- OpenGraph / sosyal paylaşım görseli (`opengraph-image`) henüz yok.

## Geliştirme

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # Üretim build'i (statik)
```
