import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Link from "next/link";
import { assetPath } from "../lib/assetPath";

export const metadata: Metadata = {
  title: "事務所・建築家について | ABOUT",
  description:
    "代表建築士・河添甚のプロフィール、受賞歴、設計哲学、東京・香川・高松の拠点情報をご紹介します。",
  openGraph: {
    title: "事務所・建築家について | KAWAZOE ARCHITECTS",
    description:
      "代表建築士・河添甚のプロフィール、受賞歴、設計哲学。東京・香川・高松の3拠点で全国対応。",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Page Hero ────────────────────────────────────────── */}
        <section className="py-28 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-end">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-6">
                  ABOUT
                </p>
                <h1
                  className="font-light text-zinc-900 leading-tight tracking-tight"
                  style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
                >
                  事務所・
                  <br />
                  建築家について
                </h1>
              </div>
              <div className="md:pb-3 md:max-w-sm md:ml-auto">
                <p className="text-xs text-zinc-600 font-light leading-8">
                  設計を依頼するにあたって、どんな人が設計するのかは重要なことだと思っています。
                  事務所と代表について、少し紹介させてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Banner Image ─────────────────────────────────────── */}
        <div className="w-full h-[260px] md:h-[380px] overflow-hidden relative">
          <img
            src={assetPath("/images/profile/profile-hero.jpg")}
            alt="KAWAZOE ARCHITECTS — 設計事務所"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-zinc-900/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <p className="text-[10px] tracking-[0.5em] text-white/60 mb-5">
              PRINCIPAL ARCHITECT
            </p>
            <p
              className="font-light text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(20px, 3.5vw, 44px)" }}
            >
              河添 甚 ／ JIN KAWAZOE
            </p>
            <p className="mt-4 text-xs text-white/55 font-light tracking-wider">
              一級建築士 ／ 代表取締役
            </p>
          </div>
        </div>

        {/* ── Profile ──────────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 items-start">
              <div>
                <div className="aspect-[3/4] bg-zinc-100 overflow-hidden relative">
                  <img
                    src={assetPath("/images/profile/jin-kawazoe.jpg")}
                    alt="河添 甚 | 一級建築士"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <p className="text-[10px] tracking-[0.4em] text-zinc-400 mb-5">
                  PRINCIPAL ARCHITECT
                </p>
                <h2 className="text-3xl font-light tracking-wide mb-1">
                  河添 甚
                </h2>
                <p className="text-[10px] text-zinc-400 tracking-[0.3em] mb-2">
                  JIN KAWAZOE
                </p>
                <p className="text-[10px] text-zinc-400 tracking-widest mb-14">
                  代表取締役 ／ 一級建築士
                </p>

                <div className="space-y-7">
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    1977年香川県生まれ。大阪工業大学工学部建築学科卒業後、株式会社プランテック総合計画事務所に入所。
                    大型商業施設や複合建築のプロジェクトに携わったのち、2010年に河添建築事務所に参画。
                  </p>
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    設計で大切にしているのは、「依頼者の言葉の奥にある要望を見つけること」です。
                    最初にいただく要望がそのまま答えではなく、対話を重ねるなかで本当に必要なものが見えてくる。
                    そのプロセスを丁寧に重ねることが、長く愛される建築につながると考えています。
                  </p>
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    東京と香川・高松を行き来しながら、住宅・店舗・リノベーションを幅広く手がけています。
                    東京テクニカルカレッジ（旧東京工科専門学校）の非常勤講師も務めました。
                  </p>
                </div>

                {/* Career */}
                <div className="mt-14 space-y-0">
                  {[
                    { year: "1977", text: "香川県生まれ" },
                    { year: "2001", text: "大阪工業大学建築学科卒業設計展 入賞" },
                    { year: "2002", text: "大阪工業大学工学部建築学科卒業" },
                    { year: "2003", text: "株式会社プランテック総合計画事務所入所" },
                    { year: "2010", text: "河添建築事務所参画" },
                    { year: "2010", text: "東京テクニカルカレッジ 非常勤講師" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="border-t border-zinc-100 py-4 grid grid-cols-[60px_1fr] gap-6"
                    >
                      <p className="text-[10px] tracking-widest text-zinc-400">
                        {item.year}
                      </p>
                      <p className="text-xs text-zinc-600 font-light">
                        {item.text}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-zinc-100" />
                </div>

                <div className="mt-14 flex gap-6">
                  <Link
                    href="/contact/"
                    className="text-[10px] tracking-[0.3em] bg-zinc-950 text-white px-8 py-3.5 hover:bg-zinc-700 transition-colors"
                  >
                    相談する
                  </Link>
                  <Link
                    href="/works/"
                    className="text-[10px] tracking-[0.3em] border border-zinc-200 text-zinc-500 px-8 py-3.5 hover:border-zinc-900 hover:text-zinc-900 transition-all"
                  >
                    実績を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Awards ───────────────────────────────────────────── */}
        <section className="py-24 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-16">
              AWARDS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
              {[
                { year: "2022", text: "住宅デザインコンテスト 全体大賞・モデルハウス部門大賞 W受賞" },
                { year: "2021", text: "住宅デザインコンテスト 審査員特別賞" },
                { year: "2020", text: "住宅デザインコンテスト 建築家が選ぶデザイン賞 優秀賞" },
                { year: "2018", text: "住宅デザインコンテスト 準グランプリ・審査員特別賞 W受賞" },
                { year: "2015", text: "夢のインテリアコンテスト 2015 優秀賞" },
                { year: "2014", text: "レオパレス21 アパート外観デザインコンテスト 優秀賞" },
                { year: "2014", text: "キッチン空間アイデアコンテスト 優秀賞" },
                { year: "2009", text: "香川県建築士会 建築設計競技 銅賞" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-t border-zinc-100 py-5 grid grid-cols-[56px_1fr] gap-6"
                >
                  <p className="text-[10px] tracking-widest text-zinc-400">
                    {item.year}
                  </p>
                  <p className="text-xs text-zinc-600 font-light leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="border-t border-zinc-100" />
              <div className="border-t border-zinc-100" />
            </div>
          </div>
        </section>

        {/* ── Philosophy ───────────────────────────────────────── */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[10px] tracking-[0.5em] text-white/55 mb-20">
              PHILOSOPHY
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <div>
                <h2
                  className="font-light text-white leading-[1.6] tracking-wide mb-10"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                >
                  「いい建築」より、
                  <br />
                  「あなたに合った
                  <br />
                  建築」を。
                </h2>
                <div className="space-y-6">
                  <p className="text-sm text-white/70 font-light leading-[2]">
                    デザイン賞を受賞するような建築も、依頼者の暮らしに合っていなければ意味がない。
                    そう思っています。
                  </p>
                  <p className="text-sm text-white/70 font-light leading-[2]">
                    初回の打ち合わせでは、間取りや外観の話よりも先に、
                    「どんな暮らしをしたいか」「今の生活で不便なことは何か」を聞くことにしています。
                  </p>
                  <p className="text-sm text-white/70 font-light leading-[2]">
                    そこから積み上げた設計は、完成してから「こうすればよかった」が少ない。
                  </p>
                </div>
              </div>

              <div className="space-y-0">
                {[
                  {
                    label: "ヒアリング重視",
                    text: "最初の数回の打ち合わせは、設計よりもヒアリングに充てます。",
                  },
                  {
                    label: "シンプルであること",
                    text: "流行に左右されず、10年後・20年後も飽きのこないデザインを心がけています。",
                  },
                  {
                    label: "素材と構造の正直さ",
                    text: "コンクリートはコンクリートらしく、木は木らしく。素材の本質を活かした設計を。",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-white/8 py-8 grid grid-cols-[1fr_1.6fr] gap-8"
                  >
                    <p className="text-[10px] tracking-widest text-white/65">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/65 font-light leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
                <div className="border-t border-white/8" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Office ───────────────────────────────────────────── */}
        <section className="py-32 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-16">
              OFFICE
            </p>

            {/* Office History */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0 max-w-3xl">
              {[
                { year: "1979", text: "河添建築事務所設立（香川県知事登録623号）" },
                { year: "1991–", text: "竹中工務店協力事務所" },
                { year: "2016", text: "東京事務所開設" },
                { year: "2022", text: "高松スタジオ開設" },
                { year: "2023", text: "法人化：株式会社 KAWAZOE-ARCHITECTS" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-t border-zinc-100 py-4 grid grid-cols-[56px_1fr] gap-6"
                >
                  <p className="text-[10px] tracking-widest text-zinc-400">
                    {item.year}
                  </p>
                  <p className="text-xs text-zinc-600 font-light">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="border-t border-zinc-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                {
                  en: "TOKYO",
                  title: "東京事務所",
                  addr: "〒142-0042\n東京都品川区豊町2-22-2\nSocius Soho 201",
                  tel: "03-6421-6955",
                },
                {
                  en: "KAGAWA",
                  title: "香川事務所",
                  addr: "〒769-2301\n香川県さぬき市長尾東973-1",
                  tel: "0879-52-6158",
                },
                {
                  en: "TAKAMATSU STUDIO",
                  title: "高松スタジオ",
                  addr: "〒760-0062\n高松市塩上町1-2-26\n入江ビル3F",
                  tel: "087-880-8653",
                },
              ].map((office, i) => (
                <div
                  key={i}
                  className="p-10 md:p-12 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-50 transition-colors duration-300"
                >
                  <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-6">
                    {office.en}
                  </p>
                  <h3 className="text-base font-light tracking-wide mb-5">
                    {office.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-light leading-8 whitespace-pre-line mb-4">
                    {office.addr}
                  </p>
                  <a
                    href={`tel:${office.tel}`}
                    className="text-[10px] tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    {office.tel}
                  </a>
                </div>
              ))}
            </div>

            {/* Affiliation */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3">
              <p className="text-[10px] tracking-[0.4em] text-zinc-400 w-full mb-2">AFFILIATION</p>
              {[
                "一般社団法人 香川県建築士会",
                "一般社団法人 東京都建築士会",
                "一般社団法人 東京都建築士事務所協会",
              ].map((name) => (
                <p key={name} className="text-xs text-zinc-400 font-light">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
