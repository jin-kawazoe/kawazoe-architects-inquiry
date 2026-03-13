"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { assetPath } from "../lib/assetPath";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const BASE = "https://www.kawazoe-architects.com/project";

const works = [
  // ── 住宅 ────────────────────────────────────────────────
  {
    id: "ay-house",
    category: "住宅",
    title: "AY HOUSE",
    detail: "大阪市南森町 / 長屋",
    description: "光庭を持つ長屋。閉じたファサードとプライベートな光の空間が共存する。",
    image: "/images/works/ay-house.jpg",
    href: `${BASE}/house/ay-house/ay-house.html`,
  },
  {
    id: "iehaku-model-house",
    category: "住宅",
    title: "IEHAKU MODEL HOUSE",
    detail: "香川・高松 / かがわ家博2023",
    description: "かがわ家博2023出展モデルハウス。環境をテーマにしたファサードとパティオ。",
    image: "/images/works/iehaku-model-house.jpg",
    href: `${BASE}/house/iehaku-model-house/iehaku-model-house.html`,
  },
  {
    id: "ak-model-house",
    category: "住宅",
    title: "AK MODEL HOUSE",
    detail: "香川・さぬき市 / 平屋コートハウス",
    description: "閉じたファサードとコの字型コート。外部を遮断しながら光と緑を内側に取り込む。",
    image: "/images/works/ak-model-house.jpg",
    href: `${BASE}/house/ak-model-house/ak-model-house.html`,
  },
  {
    id: "uy3-house",
    category: "住宅",
    title: "UY3 HOUSE",
    detail: "熊本市 / 江津湖沿い",
    description: "江津湖を見渡す2階リビング。湖に向かう大開口と白い外壁が印象的な住宅。",
    image: "/images/works/uy3-house.jpg",
    href: `${BASE}/house/uy3-house/uy3-house.html`,
  },
  {
    id: "hk-model-house",
    category: "住宅",
    title: "HK MODEL HOUSE",
    detail: "香川・高松 / U字型コートハウス",
    description: "台形敷地に計画したコの字型住宅。コートとリビングが一体に繋がる。",
    image: "/images/works/hk-model-house.jpg",
    href: `${BASE}/house/hk-model-house/hk-model-house.html`,
  },
  {
    id: "sc-model-house",
    category: "住宅",
    title: "SC MODEL HOUSE",
    detail: "静岡 / コーナー敷地・回廊型コート",
    description: "コーナー敷地に計画した回廊型コートハウス。光と風を内側に引き込む中庭。",
    image: "/images/works/sc-model-house.jpg",
    href: `${BASE}/house/sc-model-house/sc-model-house.html`,
  },
  // ── 店舗 ────────────────────────────────────────────────
  {
    id: "bono-curry-stand",
    category: "店舗",
    title: "BONO CURRY STAND",
    detail: "香川・庵治 / 工場転用",
    description: "製鉄所のオフィスをカレースタンドへ転用。庵治石カウンターとガルバリウムの外装。",
    image: "/images/works/bono-curry-stand.jpg",
    href: `${BASE}/shop/bono-curry-stand/bono-curry-stand.html`,
  },
  {
    id: "hk-shop-design",
    category: "店舗",
    title: "HK SHOP DESIGN",
    detail: "香川 / 店舗改修",
    description: "既存建物を活かした店舗改修。サインから内装まで一貫してデザイン。",
    image: "/images/works/hk-shop-design.jpg",
    href: `${BASE}/renovation/hk-shop-design/hk-shop-design.html`,
  },
  // ── ショールーム ────────────────────────────────────────
  {
    id: "showroom",
    category: "ショールーム",
    title: "SHOWROOM RENOVATION",
    detail: "ショールーム改修・インテリアデザイン",
    description: "既存ショールームの改修。空間構成を再編し、製品の魅力を引き出す内装計画。",
    image: "/images/works/showroom.jpg",
    href: `${BASE}/renovation/showroom/showroom.html`,
  },
  // ── オフィス ────────────────────────────────────────────
  {
    id: "sy-headquarters",
    category: "オフィス",
    title: "SY HEADQUARTERS BUILDING",
    detail: "大阪市城東区 / 工務店本社ビル",
    description: "城東区の工務店本社ビル計画。ショールームとオフィスを一体化した複合建築。",
    image: "/images/works/sy-headquarters.jpg",
    href: `${BASE}/office/sy-headquarters-building/sy-headquarters-building.html`,
  },
  // ── 貸別荘 ──────────────────────────────────────────────
  {
    id: "reluvilla",
    category: "貸別荘",
    title: "RELUVILLA",
    detail: "兵庫・淡路島西海岸",
    description: "淡路島西海岸の貸別荘。オーシャンビュー、大開口、吹き抜けリビング。",
    image: "/images/works/reluvilla.jpg",
    href: `${BASE}/rental-villa/reluvilla/reluvilla.html`,
  },
  // ── 看板サイン ──────────────────────────────────────────
  {
    id: "affectueux",
    category: "看板サイン",
    title: "AFFECTUEUX",
    detail: "看板・サインデザイン",
    description: "建築と調和する看板・サインデザイン。素材と文字の組み合わせを丁寧に計画。",
    image: "/images/works/affectueux.jpg",
    href: `${BASE}/sign/affectueux/affectueux.html`,
  },
  {
    id: "nail-shop",
    category: "看板サイン",
    title: "NAIL SHOP SIGN",
    detail: "看板・サインデザイン",
    description: "ネイルショップのサインデザイン。ブランドイメージを空間に落とし込む。",
    image: "/images/works/nail-shop.jpg",
    href: `${BASE}/sign/nail-shop/nail-shop.html`,
  },
];

const categories = ["すべて", "住宅", "店舗", "ショールーム", "オフィス", "貸別荘", "看板サイン"];

export default function WorksPage() {
  const [active, setActive] = useState("すべて");
  const filtered = active === "すべて" ? works : works.filter((w) => w.category === active);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Page Hero ── */}
        <section className="py-28 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-end">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-6">WORKS</p>
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

        {/* ── Filter Bar ── */}
        <section className="border-b border-zinc-100 bg-white sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex gap-8 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-[9px] tracking-[0.4em] py-5 whitespace-nowrap border-b-2 transition-all duration-200 ${
                    active === cat
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

        {/* ── Works Grid ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {filtered.map((work) => (
                <a
                  key={work.id}
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="aspect-[4/3] bg-zinc-100 mb-5 overflow-hidden relative">
                    <img
                      src={assetPath(work.image)}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <p className="text-xs text-white/80 font-light leading-6">
                        {work.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[8px] tracking-[0.4em] text-zinc-300 mb-2">
                        {work.category}
                      </p>
                      <h2 className="text-sm font-light mb-1 group-hover:text-zinc-500 transition-colors tracking-wider">
                        {work.title}
                      </h2>
                      <p className="text-xs text-zinc-400 font-light">{work.detail}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-400 font-light">
                すべての実績は
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
