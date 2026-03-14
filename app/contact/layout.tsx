import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "相談・お問い合わせ | CONTACT",
  description:
    "設計依頼・ご相談はこちらから。住宅・店舗・リノベーションの設計についてお気軽にお問い合わせください。初回相談無料。オンライン相談予約も受付中。",
  openGraph: {
    title: "相談・お問い合わせ | KAWAZOE ARCHITECTS",
    description:
      "設計依頼・ご相談はこちらから。初回相談無料。オンライン相談予約も受付中。",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
