import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Tajawal, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transformix — حين تتحول البيانات إلى ذكاء يقود أعمالك",
  description:
    "نستخدم البيانات والذكاء الاصطناعي لمساعدتك على تحسين الأداء، أتمتة العمليات، واتخاذ قرارات أكثر دقة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoKufi.variable} ${tajawal.variable} ${plusJakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
