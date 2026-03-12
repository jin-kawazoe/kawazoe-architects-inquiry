import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <p className="text-[9px] tracking-[0.4em] text-white/25 mb-8">
              CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.3] tracking-wide">
              まず、
              <br />
              話してみませんか。
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact/"
              className="text-[10px] tracking-[0.3em] bg-white text-zinc-950 px-10 py-4 hover:bg-zinc-200 transition-colors text-center"
            >
              相談・問い合わせ
            </Link>
            <Link
              href="/flow/"
              className="text-[10px] tracking-[0.3em] border border-white/20 text-white/50 px-10 py-4 hover:border-white/60 hover:text-white/80 transition-all text-center"
            >
              依頼の流れを見る
            </Link>
            <p className="text-[9px] text-white/20 text-center leading-5">
              初回相談は無料です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
