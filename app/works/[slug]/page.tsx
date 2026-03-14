import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { works } from "../../lib/works-data";
import { assetPath } from "../../lib/assetPath";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.id === slug);
  if (!work) return {};
  return {
    title: `${work.title} | WORKS`,
    description: work.description,
    openGraph: {
      title: `${work.title} | KAWAZOE ARCHITECTS`,
      description: work.description,
      images: [{ url: `/inquiry${work.image}` }],
    },
  };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.id === slug);
  if (!work) notFound();

  // Get adjacent works (prev / next)
  const idx = works.indexOf(work);
  const prev = works[idx - 1] ?? null;
  const next = works[idx + 1] ?? null;

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-zinc-900">
          <img
            src={assetPath(work.image)}
            alt={work.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14">
            <p className="text-[10px] tracking-[0.5em] text-white/65 mb-4">
              {work.category}
            </p>
            <h1
              className="font-light text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
            >
              {work.title}
            </h1>
            <p className="text-xs text-white/70 font-light mt-3 tracking-wider">
              {work.detail}
            </p>
          </div>
        </section>

        {/* ── Description + Specs ────────────────────────────── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-20 items-start">
              <div>
                <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-8">
                  OVERVIEW
                </p>
                <p className="text-sm text-zinc-600 font-light leading-[2.2] max-w-xl">
                  {work.longDescription}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.5em] text-zinc-400 mb-8">
                  SPECS
                </p>
                <div className="space-y-0">
                  {work.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="border-t border-zinc-100 py-4 grid grid-cols-[80px_1fr] gap-6"
                    >
                      <p className="text-[10px] tracking-[0.3em] text-zinc-400">
                        {spec.label}
                      </p>
                      <p className="text-xs text-zinc-700 font-light">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-zinc-100" />
                </div>

                <div className="mt-10">
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] border border-zinc-200 text-zinc-500 px-7 py-3.5 hover:border-zinc-900 hover:text-zinc-900 transition-all duration-300"
                  >
                    詳細を見る（メインサイト）
                    <span className="text-zinc-300">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Prev / Next ─────────────────────────────────────── */}
        <section className="border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-2">
              {prev ? (
                <Link
                  href={`/works/${prev.id}/`}
                  className="group py-10 pr-8 border-r border-zinc-100 hover:bg-zinc-50 transition-colors duration-300"
                >
                  <p className="text-[10px] tracking-[0.4em] text-zinc-400 mb-3">
                    ← PREV
                  </p>
                  <p className="text-xs font-light text-zinc-600 group-hover:text-zinc-900 transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/works/${next.id}/`}
                  className="group py-10 pl-8 text-right hover:bg-zinc-50 transition-colors duration-300"
                >
                  <p className="text-[10px] tracking-[0.4em] text-zinc-400 mb-3">
                    NEXT →
                  </p>
                  <p className="text-xs font-light text-zinc-600 group-hover:text-zinc-900 transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <p className="text-[10px] tracking-[0.5em] text-white/50 mb-10">
              CONTACT
            </p>
            <h2
              className="font-light text-white leading-[1.3] tracking-tight mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              この建築を手がけた
              <br />
              設計事務所に相談する
            </h2>
            <p className="text-sm text-white/70 font-light leading-8 max-w-md mb-12">
              初回相談は無料です。まだ検討段階でも構いません。
              お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-block text-[10px] tracking-[0.3em] bg-white text-zinc-950 px-12 py-4 hover:bg-zinc-200 transition-colors text-center"
              >
                相談・問い合わせ
              </Link>
              <Link
                href="/works/"
                className="inline-block text-[10px] tracking-[0.3em] border border-white/30 text-white/70 px-12 py-4 hover:border-white/65 hover:text-white/95 transition-all text-center"
              >
                実績一覧へ戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
