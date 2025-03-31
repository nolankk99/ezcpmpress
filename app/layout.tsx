import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";
import { MetadataProvider } from "./lib/MetadataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ Compress | 무료 이미지 압축 및 변환 도구",
  description: "이미지 파일 크기를 빠르고 쉽게 압축하고 최적화하세요. JPG, PNG, WEBP 간 변환, 해상도 조절 및 일괄 처리 기능을 무료로 제공합니다.",
  keywords: "이미지 압축, 사진 최적화, 파일 크기 줄이기, PNG 압축, JPG 압축, WEBP 변환, 이미지 리사이즈, 무료 이미지 도구",
  authors: [{ name: "EZ Compress" }],
  creator: "EZ Compress",
  publisher: "EZ Compress",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    languages: {
      'ko': '/ko',
      'en': '/en',
      'ja': '/ja',
      'zh': '/zh',
      'es': '/es'
    }
  },
  openGraph: {
    title: "EZ Compress | 무료 이미지 압축 및 변환 도구",
    description: "이미지 파일 크기를 빠르고 쉽게 압축하고 최적화하세요. JPG, PNG, WEBP 간 변환, 해상도 조절 및 일괄 처리 기능을 무료로 제공합니다.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP", "zh_CN", "es_ES"],
    siteName: "EZ Compress",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "EZ Compress - 이미지 압축 및 최적화 도구"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ Compress | 무료 이미지 압축 및 변환 도구",
    description: "이미지 파일 크기를 빠르고 쉽게 압축하고 최적화하세요. JPG, PNG, WEBP 간 변환, 해상도 조절 및 일괄 처리 기능을 무료로 제공합니다.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google5e54b9135fd78760",
    yandex: "983392ebcda1ba44",
    other: {
      "naver-site-verification": "naverb8d9b81b3be5b0134afa3630a54d2577"
    }
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5138554444834908" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <MetadataProvider>
            {children}
          </MetadataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
