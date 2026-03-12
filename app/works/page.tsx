import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const works = [
  {
    id: 1,
    category: "住宅",
    title: "木造2階建て住宅",
    detail: "東京都 / 延床90㎡",
    description: "都市の狭小地に建つ、光と風を取り込んだ縦長の家。",
    year: "2023",
  },
  {
    id: 2,
    category: "店舗",
    title: "カフェ&ギャラリー",
    detail: "香川県高松市 / 延床120㎡",
    description: "古い倉庫をリノベーションした、地域に開かれたカフェ兼ギャラリー。",
    year: "2023",
  },
  {
    id: 3,
    category: "リノベ",
    title: "築40年 戸建てリノベーション",
    detail: "大阪府 / 延床80㎡",
    description: "昭和の木造住宅を、構造を活かしながら現代の暮らしに合わせて再生。",
    year: "2022",
  },
  {
    id: 4,
    category: "住宅",
    title: "平屋の週末住宅",
    detail: "長野県 / 延床60㎡",
    description: "自然の中にひっそりと佇む、週末を過ごすための静かな家。",
    year: "2022",
  },
  {
    id: 5,
    category: "店舗",
    title: "クリニック内装設計",
    detail: "東京都 / 延床200㎡",
    description: "患者の不安を和らげる、清潔感と温かさを両立した内装。",
    year: "2021",
  },
  {
    id: 6,
    category: "住宅",
    title: "中庭のある2世帯住宅",
    detail: "神奈川県 / 延床150㎡",
    description: "中庭を介して適度な距離感を保ちながら、家族が繋がって暮らす家。",
    year: "2021",
  },
];

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Page Hero ────────────────────────────────────────── */}
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
                  住宅・店舗・リノベーションなど、これまでの設計実績をご紹介します。
                  詳細は各プロジェクトページをご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filter Bar ───────────────────────────────────────── */}
        <section className="border-b border-zinc-100 bg-white sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex gap-10 overflow-x-auto">
              {["すべて", "住宅", "店舗", "リノベ"].map((cat, i) => (
                <button
                  key={cat}
                  className={`text-[9px] tracking-[0.4em] py-5 whitespace-nowrap border-b-2 transition-all duration-200 ${
                    i === 0
                      ? "border-zinc-900 text-zinc-900"
                      : "border-transparent text-zinc-400 hover:text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Works Grid ───────────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {works.map((work, i) => (
                <div key={work.id} className="group">
                  <div className="aspect-[4/3] bg-zinc-100 mb-5 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center group-hover:bg-zinc-200 transition-colors duration-500">
                      <span
                        className="text-[70px] font-light text-zinc-200 group-hover:text-zinc-300 leading-none transition-colors duration-500"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-zinc-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <p className="text-xs text-white/70 font-light leading-6">
                        {work.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[8px] tracking-[0.4em] text-zinc-300 mb-2">
                        {work.category}
                      </p>
                      <h2 className="text-sm font-light mb-1 group-hover:text-zinc-600 transition-colors">
                        {work.title}
                      </h2>
                      <p className="text-xs text-zinc-400 font-light">
                        {work.detail}
                      </p>
                    </div>
                    <p
                      className="text-[10px] text-zinc-300 font-light shrink-0 pt-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {work.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-400 font-light">
                詳細な実績は
                <a
                  href="https://www.kawazoe-architects.com/portfolio/"
                  className="text-zinc-600 cta-underline hover:text-zinc-900 transition-colors ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  メインサイトのポートフォリオ
                </a>
                でご覧いただけます。
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
