"use client";
import { useState } from "react";
import Link from "next/link";
import { works, categories } from "../lib/works-data";
import { assetPath } from "../lib/assetPath";

export default function WorksGrid() {
  const [active, setActive] = useState("すべて");
  const filtered =
    active === "すべて" ? works : works.filter((w) => w.category === active);

  return (
    <>
      {/* ── Filter Bar ── */}
      <section className="border-b border-zinc-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex gap-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] tracking-[0.4em] py-5 whitespace-nowrap border-b-2 transition-all duration-200 ${
                  active === cat
                    ? "border-zinc-900 text-zinc-900"
                    : "border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300"
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
              <Link
                key={work.id}
                href={`/works/${work.id}/`}
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
                    <p className="text-[10px] tracking-[0.4em] text-zinc-400 mb-2">
                      {work.category}
                    </p>
                    <h2 className="text-sm font-light mb-1 group-hover:text-zinc-500 transition-colors tracking-wider">
                      {work.title}
                    </h2>
                    <p className="text-xs text-zinc-400 font-light">
                      {work.detail}
                    </p>
                  </div>
                </div>
              </Link>
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
    </>
  );
}
