import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import WorksGrid from "./WorksGrid";

export const metadata: Metadata = {
  title: "実績 | WORKS",
  description:
    "河添建築事務所の設計実績。住宅・店舗・リノベーション・オフィスなど、幅広いプロジェクトをご紹介します。",
  openGraph: {
    title: "実績 | KAWAZOE ARCHITECTS",
    description:
      "河添建築事務所の設計実績。住宅・店舗・リノベーション・オフィスなど、幅広いプロジェクトをご紹介します。",
  },
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Page Hero ── */}
        <section className="py-28 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-end">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-6">
                  WORKS
                </p>
                <h1
                  className="font-light text-zinc-900 leading-tight tracking-tight"
                  style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
                >
                  実績
                </h1>
              </div>
              <div className="md:pb-3 md:max-w-sm md:ml-auto">
                <p className="text-xs text-zinc-500 font-light leading-8">
                  住宅・店舗・オフィスなど、これまでの設計実績をご紹介します。
                  詳細は各プロジェクトページをご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <WorksGrid />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
