import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThanksPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen flex flex-col">
        {/* ── Thanks ───────────────────────────────────────────── */}
        <section className="flex-1 bg-zinc-950 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-40 w-full">
            <p className="text-[9px] tracking-[0.5em] text-white/25 mb-14">
              THANK YOU
            </p>

            <h1
              className="font-light text-white leading-[1.15] tracking-tight mb-12"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              お問い合わせ
              <br />
              ありがとうございます。
            </h1>

            <div className="space-y-5 mb-16 max-w-lg">
              <p className="text-sm text-white/45 font-light leading-8">
                内容を確認の上、2営業日以内にご連絡いたします。
              </p>
              <p className="text-sm text-white/45 font-light leading-8">
                自動返信メールをお送りしています。届いていない場合は、
                迷惑メールフォルダをご確認いただくか、直接メールにてご連絡ください。
              </p>
            </div>

            {/* Next steps */}
            <div className="border border-white/8 p-8 max-w-md mb-14">
              <p className="text-[9px] tracking-[0.4em] text-white/25 mb-6">
                NEXT STEP
              </p>
              <ol className="space-y-4">
                {[
                  "自動返信メールをご確認ください",
                  "2営業日以内に担当者よりご連絡します",
                  "日程を調整の上、初回オンライン相談（無料）を行います",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span
                      className="text-[10px] text-white/20 shrink-0 pt-0.5"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-white/40 font-light leading-6">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="text-[10px] tracking-[0.3em] bg-white text-zinc-950 px-10 py-4 hover:bg-zinc-200 transition-colors text-center"
              >
                トップに戻る
              </Link>
              <Link
                href="/flow/"
                className="text-[10px] tracking-[0.3em] border border-white/20 text-white/45 px-10 py-4 hover:border-white/50 hover:text-white/70 transition-all text-center"
              >
                依頼の流れを見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
