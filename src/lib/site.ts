/**
 * Central site configuration — brand, contact details and social links.
 * Import from here instead of hard-coding values across components.
 */
export const SITE = {
  name: "tahacloud",
  brand: "tahacloud coaching",
  description: "Premium fitness & coaching — train like it matters.",

  email: "iletisim@tahacloud.com",
  phoneDisplay: "+90 541 329 94 80",
  location: "İstanbul, Türkiye",

  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=905413299480&text&type=phone_number&app_absent=0",

  socials: {
    instagram: "https://www.instagram.com/tahacloud/",
    tiktok: "https://www.tiktok.com/@tahabcloud",
    youtube: "https://www.youtube.com/@tahacloud",
  },
} as const;
