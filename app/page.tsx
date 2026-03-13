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
        <section className="min-h-screen flex flex-col justify-end relative overflow-hidden">
          {/* Background photo */}
          <img
            src={assetPath("/images/hero-bg.jpg")}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />

          {/* Ghost typography decoration */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none text-white/[0.04]"
            style={{
              fontSize: "22vw",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
            }}
          >
            KA
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pb-16 pt-32">
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
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
            <div className="w-px h-10 bg-white/15" />
            <p className="text-[8px] tracking-[0.4em] text-white/15">SCROLL</p>
          </div>
        </section>

        {/* ── こんな方へ ───────────────────────────────────────── */}
        <section className="py-28 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16 mb-16">
              <p className="text-[9px] tracking-[0.5em] text-zinc-300 shrink-0">
                FOR YOU
              </p>
              <h2 className="text-xl md:text-2xl font-light text-zinc-900 tracking-wide leading-relaxed">
                こんなお悩み、ありませんか？
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                { n: "01", text: "土地はあるが、何から始めたらいいかわからない" },
                { n: "02", text: "ハウスメーカーでは物足りない。自分だけの家をつくりたい" },
                { n: "03", text: "古い家を活かしながら、今の暮らしに合わせてつくり直したい" },
                { n: "04", text: "店舗を開くにあたって、空間でブランドを表現したい" },
                { n: "05", text: "設計事務所は費用が高そう・敷居が高そうで不安" },
                { n: "06", text: "まず話を聞いてほしいだけ。すぐ依頼しなくてもいいか心配" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-t border-zinc-100 py-6 grid grid-cols-[40px_1fr] gap-4 items-start md:odd:border-r md:odd:pr-16 md:even:pl-16"
                >
                  <span
                    className="text-[11px] text-zinc-300 font-light pt-0.5"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {item.n}
                  </span>
                  <p className="text-sm font-light text-zinc-700 leading-7">{item.text}</p>
                </div>
              ))}
              <div className="border-t border-zinc-100 md:border-r md:pr-16" />
              <div className="border-t border-zinc-100 md:pl-16" />
            </div>

            <div className="mt-14 flex items-center gap-8">
              <p className="text-xs text-zinc-400 font-light leading-7">
                ひとつでも当てはまるなら、まずお気軽にご相談ください。
                <br />
                初回相談は無料、まだ検討段階でも大丈夫です。
              </p>
              <a
                href="/contact/"
                className="shrink-0 text-[10px] tracking-[0.3em] bg-zinc-950 text-white px-8 py-3.5 hover:bg-zinc-700 transition-colors"
              >
                相談してみる
              </a>
            </div>
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
                  image: "/images/service-residential.jpg",
                },
                {
                  num: "02",
                  en: "COMMERCIAL",
                  title: "店舗設計",
                  text: "ブランドの世界観を空間で表現します。カフェ・レストラン・クリニック・オフィスなど。",
                  href: "/contact/?type=店舗",
                  image: "/images/service-commercial.jpg",
                },
                {
                  num: "03",
                  en: "RENOVATION",
                  title: "リノベーション",
                  text: "古い建物の良さを活かしながら、現代の暮らしに合わせてつくり直します。",
                  href: "/contact/?type=リノベーション",
                  image: "/images/service-renovation.jpg",
                },
              ].map((s, i) => (
                <Link
                  href={s.href}
                  key={i}
                  className="relative group border-r border-zinc-100 last:border-r-0 hover:bg-zinc-950 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Photo */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={assetPath(s.image)}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/40 transition-colors duration-500" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 p-10 md:p-12 flex-1 flex flex-col">
                    {/* Background number */}
                    <span
                      className="absolute bottom-2 right-4 text-[110px] leading-none font-light text-zinc-100 group-hover:text-white/[0.04] transition-colors duration-500 select-none"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {s.num}
                    </span>
                    <p className="text-[8px] tracking-[0.5em] text-zinc-300 group-hover:text-white/25 mb-5 transition-colors duration-500">
                      {s.en}
                    </p>
                    <h2 className="text-xl font-light tracking-wide mb-4 group-hover:text-white transition-colors duration-500">
                      {s.title}
                    </h2>
                    <p className="text-xs text-zinc-500 font-light leading-7 mb-8 group-hover:text-white/45 transition-colors duration-500 flex-1">
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

                {/* Award stats */}
                <div className="mt-14 flex gap-10 border-t border-zinc-200 pt-10">
                  {[
                    { num: "20+", label: "受賞歴" },
                    { num: "45+", label: "年の実績" },
                    { num: "3", label: "拠点" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-3xl font-light text-zinc-900 mb-1"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {stat.num}
                      </p>
                      <p className="text-[9px] tracking-[0.3em] text-zinc-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
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

        {/* ── 施主の声 ─────────────────────────────────────────── */}
        <section className="py-32 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-20">
              CLIENT VOICES
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                {
                  quote: "「まだ土地も決まっていない段階で相談しに行ったのに、丁寧に聞いてもらえました。押しつけがましくなく、自分たちのペースで進められたのが良かったです。」",
                  name: "T.M. 様",
                  detail: "香川県・住宅設計",
                  year: "2022",
                },
                {
                  quote: "「設計事務所はハードルが高いイメージでしたが、初回の打ち合わせで払拭されました。完成した店舗を見たお客様から『雰囲気が好き』と言われるたびに、お願いして良かったと思います。」",
                  name: "K.H. 様",
                  detail: "東京都・店舗設計",
                  year: "2021",
                },
                {
                  quote: "「古い家を壊すか迷っていましたが、残せるものを活かした提案をもらえました。費用も想像より抑えられ、愛着のある家に住み続けられています。」",
                  name: "Y.S. 様",
                  detail: "香川県・リノベーション",
                  year: "2023",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="p-10 md:p-12 border-r border-zinc-100 last:border-r-0 flex flex-col gap-8"
                >
                  <p className="text-sm font-light text-zinc-600 leading-[2.2] flex-1">
                    {v.quote}
                  </p>
                  <div className="border-t border-zinc-100 pt-6">
                    <p className="text-xs font-light text-zinc-800 tracking-wide mb-1">
                      {v.name}
                    </p>
                    <p className="text-[9px] tracking-[0.3em] text-zinc-300">
                      {v.detail} · {v.year}
                    </p>
                  </div>
                </div>
              ))}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
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
                <a
                  href={work.href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden"
                >
                  <div className="aspect-[3/4] bg-zinc-800 relative overflow-hidden">
                    <img
                      src={assetPath(work.image)}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Always-visible bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[9px] tracking-[0.3em] text-white/40 mb-2">
                        {work.category}
                      </p>
                      <p className="text-base font-light text-white tracking-wide">
                        {work.title}
                      </p>
                      <p className="text-xs text-white/35 mt-1 font-light">
                        {work.detail}
                      </p>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] tracking-[0.3em] text-white/60">VIEW →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/works/"
                className="inline-block text-[10px] tracking-[0.3em] border border-white/15 text-white/40 px-10 py-4 hover:border-white/40 hover:text-white/70 transition-all duration-300"
              >
                すべての実績を見る
              </Link>
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
