"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const types = ["住宅設計", "店舗設計", "リノベーション", "その他・未定"];

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type || !formData.name || !formData.email) {
      setError("用途・お名前・メールアドレスは必須です。");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("送信に失敗しました。");
      router.push("/thanks/");
    } catch {
      setError("送信に失敗しました。しばらく経ってから再度お試しください。");
      setLoading(false);
    }
  };

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
                  CONTACT
                </p>
                <h1
                  className="font-light text-zinc-900 leading-tight tracking-tight"
                  style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
                >
                  相談・
                  <br />
                  お問い合わせ
                </h1>
              </div>
              <div className="md:pb-3 md:max-w-sm md:ml-auto">
                <p className="text-xs text-zinc-500 font-light leading-8">
                  まだ検討段階でも構いません。「話を聞いてみたい」という気持ちで、
                  お気軽にご連絡ください。初回相談は無料です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Form ─────────────────────────────────────────────── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-8 md:px-16">
            <form onSubmit={handleSubmit} className="space-y-14">
              {/* 用途選択 */}
              <div>
                <label className="block text-[9px] tracking-[0.4em] text-zinc-300 mb-6">
                  ご相談の内容{" "}
                  <span className="text-zinc-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {types.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, type: t })}
                      className={`text-[10px] tracking-wide py-4 px-6 border transition-all duration-300 text-left ${
                        formData.type === t
                          ? "border-zinc-900 bg-zinc-950 text-white"
                          : "border-zinc-200 text-zinc-500 hover:border-zinc-500 hover:text-zinc-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* お名前 */}
              <div>
                <label className="block text-[9px] tracking-[0.4em] text-zinc-300 mb-5">
                  お名前{" "}
                  <span className="text-zinc-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="山田 太郎"
                  className="w-full border-b border-zinc-200 py-3.5 text-sm font-light outline-none focus:border-zinc-900 transition-colors duration-300 bg-transparent placeholder:text-zinc-300"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-[9px] tracking-[0.4em] text-zinc-300 mb-5">
                  メールアドレス{" "}
                  <span className="text-zinc-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full border-b border-zinc-200 py-3.5 text-sm font-light outline-none focus:border-zinc-900 transition-colors duration-300 bg-transparent placeholder:text-zinc-300"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-[9px] tracking-[0.4em] text-zinc-300 mb-5">
                  お電話番号{" "}
                  <span className="text-[9px] text-zinc-300 tracking-normal">
                    (任意)
                  </span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="090-0000-0000"
                  className="w-full border-b border-zinc-200 py-3.5 text-sm font-light outline-none focus:border-zinc-900 transition-colors duration-300 bg-transparent placeholder:text-zinc-300"
                />
              </div>

              {/* 相談内容 */}
              <div>
                <label className="block text-[9px] tracking-[0.4em] text-zinc-300 mb-5">
                  ご相談内容{" "}
                  <span className="text-[9px] text-zinc-300 tracking-normal">
                    (任意)
                  </span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="敷地の場所、規模感、ご予算感、現状の状況など、思ったことを自由にお書きください。"
                  rows={6}
                  className="w-full border-b border-zinc-200 py-3.5 text-sm font-light outline-none focus:border-zinc-900 transition-colors duration-300 bg-transparent placeholder:text-zinc-300 resize-none leading-8"
                />
              </div>

              {error && (
                <p className="text-[10px] text-red-400 font-light tracking-wide">
                  {error}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-zinc-950 text-white text-[10px] tracking-[0.3em] px-12 py-4 hover:bg-zinc-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {loading ? "送信中..." : "送信する"}
                </button>
                <p className="text-[9px] text-zinc-300 font-light leading-5">
                  送信後、2営業日以内にご連絡します。
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* ── Direct Contact ───────────────────────────────────── */}
        <section className="py-16 border-t border-zinc-100">
          <div className="max-w-3xl mx-auto px-8 md:px-16">
            <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-10">
              DIRECT CONTACT
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                { label: "TOKYO", tel: "03-6421-6955" },
                { label: "KAGAWA", tel: "0879-52-6158" },
                { label: "TAKAMATSU", tel: "087-880-8653" },
              ].map((office) => (
                <div
                  key={office.label}
                  className="p-8 border-r border-zinc-100 last:border-r-0"
                >
                  <p className="text-[9px] tracking-[0.4em] text-zinc-300 mb-3">
                    {office.label}
                  </p>
                  <a
                    href={`tel:${office.tel}`}
                    className="text-sm font-light text-zinc-700 hover:text-zinc-900 transition-colors tracking-wider"
                  >
                    {office.tel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Calendly ─────────────────────────────────────────── */}
        <section className="py-24 border-t border-zinc-100 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-16 items-start">
              <div>
                <p className="text-[9px] tracking-[0.5em] text-zinc-300 mb-6">
                  BOOK A CALL
                </p>
                <h2 className="text-2xl font-light tracking-wide mb-5">
                  オンライン相談を
                  <br />
                  予約する
                </h2>
                <p className="text-xs text-zinc-500 font-light leading-8">
                  メールのやりとりより、まず話したい方は
                  こちらから直接ご予約いただけます。
                  <br />
                  30分の無料相談です。
                </p>
              </div>
              <div className="border border-zinc-200 aspect-[16/9] flex items-center justify-center bg-white">
                <p className="text-[9px] text-zinc-300 tracking-[0.4em]">
                  Calendly 埋め込み予定
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
