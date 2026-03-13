import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { assetPath } from "./lib/assetPath";

export default function Home() {
  return (
    <>
      <Header initialDark />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="min-h-screen bg-zinc-950 flex flex-col justify-end relative overflow-hidden">
          {/* Ghost typography decoration */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none text-white/[0.025]"
            style={{
              fontSize: "22vw",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
            }}
          >
            KA
          </div>

          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full pb-16 pt-32">
            {/* Overline */}
            <p className="text-[9px] tracking-[0.5em] text-white/30 mb-16">
              KAWAZOE ARCHITECTS ── 一級建築士事務所 ── 東京 / 香川・高松
            </p>

            {/* Main headline */}
            <h1
              className="font-light text-white leading-[0.92] tracking-tight mb-16"
              style={{ fontSize: "clamp(52px, 11vw, 130px)" }}
            >
              建てることより、
              <br />
              <span className="text-white/40">暮らすことを</span>
              <br />
              考える設計を。
            </h1>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-8">
              <p className="text-xs text-white/30 font-light leading-7">
                住宅設計 / 店舗設計 / リノベーション
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/contact/"
                  className="text-[10px] tracking-[0.3em] text-white border border-white/25 px-8 py-3.5 hover:bg-white hover:text-zinc-950 transition-all duration-400"
                >
                  まず相談する
                </Link>
                <Link
                  href="/flow/"
                  className="text-[10px] tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors duration-300 cta-underline"
                >
                  依頼の流れ →
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-px h-10 bg-white/15" />
            <p className="text-[8px] tracking-[0.4em] text-white/15">SCROLL</p>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-baseline justify-between border-b border-zinc-100 pb-5 mb-0">
              <p className="text-[9px] tracking-[0.5em] text-zinc-300">
                SERVICES
              </p>
              <p className="text-[9px] tracking-[0.3em] text-zinc-200">
                住宅 / 店舗 / リノベーション
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-100 border-t-0">
              {[
                {
                  num: "01",
                  en: "RESIDENTIAL",
                  title: "住宅設計",
                  text: "家族の暮らし方を丁寧に聞いて、長く愛せる家をつくります。新築・建替え・増改築。",
                  href: "/contact/?type=住宅",
                },
                {
                  num: "02",
                  en: "COMMERCIAL",
                  title: "店舗設計",
                  text: "ブランドの世界観を空間で表現します。カフェ・レストラン・クリニック・オフィスなど。",
                  href: "/contact/?type=店舗",
                },
                {
                  num: "03",
                  en: "RENOVATION",
                  title: "リノベーション",
                  text: "古い建物の良さを活かしながら、現代の暮らしに合わせてつくり直します。",
                  href: "/contact/?type=リノベーション",
                },
              ].map((s, i) => (
                <Link
                  href={s.href}
                  key={i}
                  className="relative group p-10 md:p-12 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-950 transition-all duration-500 overflow-hidden"
                >
                  {/* Background number */}
                  <span
                    className="absolute bottom-2 right-4 text-[110px] leading-none font-light text-zinc-100 group-hover:text-white/[0.04] transition-colors duration-500 select-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {s.num}
                  </span>

                  <div className="relative z-10 min-h-[240px] flex flex-col">
                    <p className="text-[8px] tracking-[0.5em] text-zinc-300 group-hover:text-white/25 mb-6 transition-colors duration-500">
                      {s.en}
                    </p>
                    <h2 className="text-xl font-light tracking-wide mb-5 group-hover:text-white transition-colors duration-500">
                      {s.title}
                    </h2>
                    <p className="text-xs text-zinc-500 font-light leading-7 mb-10 group-hover:text-white/45 transition-colors duration-500 flex-1">
                      {s.text}
                    </p>
                    <span className="text-[9px] tracking-[0.3em] text-zinc-300 group-hover:text-white/50 transition-colors duration-500">
                      相談する →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ───────────────────────────────────────────── */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-20 items-start">
              {/* Left: large quote */}
              <div className="md:sticky md:top-32">
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-12">
                  WHY US
                </p>
                <blockquote className="text-[1.7rem] md:text-[2rem] font-light leading-[1.7] text-zinc-900 tracking-wide">
                  「依頼者の言葉が、
                  <br />
                  そのまま空間に
                  <br />
                  なっていく設計。」
                </blockquote>
                <p className="mt-8 text-xs text-zinc-400 font-light leading-7 max-w-xs">
                  型にはめない。流行に左右されない。
                  あなたの暮らしを深く聞くことからすべてが始まります。
                </p>
              </div>

              {/* Right: three points */}
              <div>
                {[
                  {
                    n: "01",
                    title: "ヒアリングから始まる設計",
                    text: "「どう住みたいか」「何を大切にしたいか」を丁寧に聞くことから設計が始まります。型にはめない、あなただけの空間を。",
                  },
                  {
                    n: "02",
                    title: "二拠点体制で広域に対応",
                    text: "東京と香川・高松に事務所を構え、全国の案件に対応しています。オンライン打ち合わせも活用しながら、地方の案件もお気軽にご相談ください。",
                  },
                  {
                    n: "03",
                    title: "完成まで一貫してサポート",
                    text: "初回相談から設計・監理・竣工まで、担当建築家が責任を持って伴走します。途中で担当が変わることはありません。",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-zinc-200 py-10 grid grid-cols-[48px_1fr] gap-6"
                  >
                    <p
                      className="text-[9px] tracking-[0.2em] text-zinc-300 pt-1"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {item.n}
                    </p>
                    <div>
                      <h3 className="text-sm font-light tracking-wide mb-3 text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-zinc-200" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Works Preview (dark) ─────────────────────────────── */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-baseline justify-between border-b border-white/8 pb-5 mb-14">
              <p className="text-[9px] tracking-[0.5em] text-white/25">
                WORKS
              </p>
              <Link
                href="/works/"
                className="text-[9px] tracking-[0.3em] text-white/25 hover:text-white/60 transition-colors cta-underline"
              >
                すべて見る →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  category: "住宅",
                  title: "AK MODEL HOUSE",
                  detail: "香川・さぬき市 / 平屋コートハウス",
                  image: "/images/works/ak-model-house.jpg",
                  href: "https://www.kawazoe-architects.com/project/house/ak-model-house/ak-model-house.html",
                },
                {
                  category: "店舗",
                  title: "BONO CURRY STAND",
                  detail: "香川・庵治 / 工場転用",
                  image: "/images/works/bono-curry-stand.jpg",
                  href: "https://www.kawazoe-architects.com/project/shop/bono-curry-stand/bono-curry-stand.html",
                },
                {
                  category: "貸別荘",
                  title: "RELUVILLA",
                  detail: "兵庫・淡路島西海岸",
                  image: "/images/works/reluvilla.jpg",
                  href: "https://www.kawazoe-architects.com/project/rental-villa/reluvilla/reluvilla.html",
                },
              ].map((work, i) => (
                <a href={work.href} key={i} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="aspect-[4/3] bg-zinc-800 mb-4 overflow-hidden relative">
                    <img
                      src={assetPath(work.image)}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <div>
                        <p className="text-[9px] tracking-[0.3em] text-white/50 mb-2">
                          {work.category}
                        </p>
                        <p className="text-sm text-white font-light">
                          {work.title}
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          {work.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[9px] tracking-[0.3em] text-white/25 mb-2 group-hover:text-white/40 transition-colors">
                    {work.category}
                  </p>
                  <p className="text-sm font-light text-white/60 group-hover:text-white transition-colors duration-300">
                    {work.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── About teaser ─────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-16 items-start">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-8">
                  ABOUT
                </p>
                <div className="aspect-[3/4] bg-zinc-100 overflow-hidden relative">
                  <img
                    src={assetPath("/images/profile/jin-kawazoe.jpg")}
                    alt="河添 甚 | 一級建築士"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:pt-14">
                <p className="text-[9px] tracking-[0.4em] text-zinc-300 mb-4">
                  PRINCIPAL ARCHITECT
                </p>
                <h2 className="text-3xl font-light tracking-wide mb-2">
                  河添 甚
                </h2>
                <p className="text-[10px] text-zinc-400 mb-14 tracking-widest">
                  一級建築士
                </p>

                <p className="text-sm text-zinc-600 font-light leading-[2] max-w-lg mb-6">
                  設計で大切にしているのは、「依頼者の言葉の奥にある要望を見つけること」です。
                  最初にいただく要望がそのまま答えではなく、対話を重ねるなかで本当に必要なものが見えてくる。
                </p>
                <p className="text-sm text-zinc-600 font-light leading-[2] max-w-lg mb-14">
                  そこから積み上げた設計は、完成してから「こうすればよかった」が少ない。
                  依頼者の言葉が、そのまま空間になっていくような設計を目指しています。
                </p>

                <Link
                  href="/about/"
                  className="text-[10px] tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors cta-underline pb-0.5"
                >
                  建築家について詳しく →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-40 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-end">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-white/20 mb-10">
                  CONTACT
                </p>
                <h2
                  className="font-light text-white leading-[1.2] tracking-wide"
                  style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
                >
                  まず、
                  <br />
                  話してみませんか。
                </h2>
                <p className="mt-6 text-xs text-white/35 font-light leading-7">
                  相談だけでも大丈夫です。初回のお話は無料でお受けしています。
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[220px]">
                <Link
                  href="/contact/"
                  className="text-[10px] tracking-[0.3em] bg-white text-zinc-950 px-10 py-4 hover:bg-zinc-200 transition-colors text-center"
                >
                  相談・問い合わせ
                </Link>
                <Link
                  href="/flow/"
                  className="text-[10px] tracking-[0.3em] border border-white/20 text-white/45 px-10 py-4 hover:border-white/50 hover:text-white/70 transition-all text-center"
                >
                  依頼の流れを見る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
