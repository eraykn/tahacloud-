import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/smooth-scroll";
import WhatsappFloat from "@/components/whatsapp-float";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        bebasNeue.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsappFloat />
      </body>
    </html>
  );
}
