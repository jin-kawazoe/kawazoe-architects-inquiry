import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Link from "next/link";

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
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-6">
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
                <p className="text-xs text-zinc-500 font-light leading-8">
                  設計を依頼するにあたって、どんな人が設計するのかは重要なことだと思っています。
                  事務所と代表について、少し紹介させてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Profile ──────────────────────────────────────────── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 items-start">
              <div>
                <div className="aspect-[3/4] bg-zinc-100 flex items-center justify-center">
                  <p className="text-[9px] text-zinc-300 tracking-[0.3em]">
                    PHOTO
                  </p>
                </div>
              </div>

              <div className="md:pt-8">
                <p className="text-[9px] tracking-[0.4em] text-zinc-300 mb-5">
                  PRINCIPAL ARCHITECT
                </p>
                <h2 className="text-3xl font-light tracking-wide mb-2">
                  河添 ——
                </h2>
                <p className="text-[10px] text-zinc-400 tracking-widest mb-14">
                  一級建築士
                </p>

                <div className="space-y-7">
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    建築設計事務所に勤務後、独立。住宅から店舗、リノベーションまで幅広く手がけています。
                  </p>
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    設計で大切にしているのは、「依頼者の言葉の奥にある要望を見つけること」です。
                    最初にいただく要望がそのまま答えではなく、対話を重ねるなかで本当に必要なものが見えてくる。
                    そのプロセスを丁寧に重ねることが、良い建築につながると考えています。
                  </p>
                  <p className="text-sm text-zinc-600 font-light leading-[2]">
                    東京と香川・高松を行き来しながら、日本各地の案件に関わっています。
                  </p>
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

        {/* ── Philosophy ───────────────────────────────────────── */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-white/25 mb-20">
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
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    デザイン賞を受賞するような建築も、依頼者の暮らしに合っていなければ意味がない。
                    そう思っています。
                  </p>
                  <p className="text-sm text-white/45 font-light leading-[2]">
                    初回の打ち合わせでは、間取りや外観の話よりも先に、
                    「どんな暮らしをしたいか」「今の生活で不便なことは何か」を聞くことにしています。
                  </p>
                  <p className="text-sm text-white/45 font-light leading-[2]">
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
                    <p className="text-[10px] tracking-widest text-white/35">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/40 font-light leading-7">
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
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-16">
              OFFICE
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-100">
              {[
                {
                  en: "TOKYO",
                  title: "東京事務所",
                  addr: "〒000-0000\n東京都 ——",
                },
                {
                  en: "KAGAWA / TAKAMATSU",
                  title: "香川・高松スタジオ",
                  addr: "〒000-0000\n香川県高松市 ——",
                },
              ].map((office, i) => (
                <div
                  key={i}
                  className="p-10 md:p-14 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-50 transition-colors duration-300"
                >
                  <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-8">
                    {office.en}
                  </p>
                  <h3 className="text-lg font-light tracking-wide mb-5">
                    {office.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light leading-8 whitespace-pre-line">
                    {office.addr}
                  </p>
                </div>
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
