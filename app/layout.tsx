import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "設計依頼・相談 | KAWAZOE ARCHITECTS",
    template: "%s | KAWAZOE ARCHITECTS",
  },
  description:
    "河添建築事務所への設計依頼・相談窓口。住宅・店舗・リノベーションの設計をご検討の方、まずはお気軽にご相談ください。初回相談無料。東京・香川・高松。",
  metadataBase: new URL("https://www.kawazoe-architects.com"),
  alternates: {
    canonical: "https://www.kawazoe-architects.com/inquiry/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.kawazoe-architects.com/inquiry/",
    siteName: "KAWAZOE ARCHITECTS",
    title: "設計依頼・相談 | KAWAZOE ARCHITECTS",
    description:
      "河添建築事務所への設計依頼・相談窓口。住宅・店舗・リノベーションの設計をご検討の方、まずはお気軽にご相談ください。初回相談無料。",
    images: [
      {
        url: "/inquiry/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "KAWAZOE ARCHITECTS — 設計依頼・相談",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "設計依頼・相談 | KAWAZOE ARCHITECTS",
    description:
      "河添建築事務所への設計依頼・相談窓口。住宅・店舗・リノベーションの設計をご検討の方、まずはお気軽にご相談ください。",
    images: ["/inquiry/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 構造化データ（schema.org）
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ArchitectureFirm",
      "@id": "https://www.kawazoe-architects.com/#organization",
      "name": "KAWAZOE ARCHITECTS（河添建築事務所）",
      "alternateName": "河添建築事務所",
      "url": "https://www.kawazoe-architects.com/inquiry/",
      "logo": "https://www.kawazoe-architects.com/inquiry/images/logo.png",
      "image": "https://www.kawazoe-architects.com/inquiry/images/hero-bg.jpg",
      "description": "住宅・店舗・リノベーションの設計を手がける一級建築士事務所。東京・香川・高松を拠点に全国対応。初回相談無料。",
      "telephone": ["+81-3-6421-6955", "+81-879-52-6158", "+81-87-880-8653"],
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "東京都",
          "addressCountry": "JP",
          "description": "東京オフィス"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "香川県",
          "addressCountry": "JP",
          "description": "香川オフィス"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "日本"
      },
      "serviceType": ["住宅設計", "店舗設計", "リノベーション", "建築設計監理"],
      "priceRange": "お問い合わせください",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "設計サービス",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "住宅設計",
            "description": "新築・建替え・増改築の住宅設計。家族の暮らし方を丁寧に聞き、長く愛せる家をつくります。"
          },
          {
            "@type": "Offer",
            "name": "店舗設計",
            "description": "カフェ・レストラン・クリニック・オフィスなど、ブランドの世界観を空間で表現します。"
          },
          {
            "@type": "Offer",
            "name": "リノベーション",
            "description": "古い建物の良さを活かしながら、現代の暮らしに合わせてつくり直します。"
          }
        ]
      },
      "founder": {
        "@type": "Person",
        "@id": "https://www.kawazoe-architects.com/#person",
        "name": "河添 甚",
        "alternateName": "Jin Kawazoe",
        "jobTitle": "代表取締役 / 一級建築士",
        "worksFor": {
          "@id": "https://www.kawazoe-architects.com/#organization"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "大阪工業大学建築学科"
        },
        "knowsAbout": ["建築設計", "住宅設計", "店舗設計", "リノベーション", "コートハウス"]
      },
      "sameAs": [
        "https://www.kawazoe-architects.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kawazoe-architects.com/inquiry/#website",
      "url": "https://www.kawazoe-architects.com/inquiry/",
      "name": "KAWAZOE ARCHITECTS 設計依頼・相談",
      "description": "河添建築事務所への設計依頼・相談窓口",
      "publisher": {
        "@id": "https://www.kawazoe-architects.com/#organization"
      },
      "inLanguage": "ja"
    }
  ]
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
