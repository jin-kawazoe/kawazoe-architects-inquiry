import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-16 md:gap-24 items-start mb-16">
          {/* Brand */}
          <div>
            <p className="text-[10px] tracking-[0.4em] font-light text-white/80 mb-3">
              KAWAZOE ARCHITECTS
            </p>
            <p className="text-xs text-white/30 font-light leading-7">
              河添建築事務所
              <br />
              東京 / 香川・高松
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-4">
            {[
              { href: "/works/", label: "WORKS" },
              { href: "/about/", label: "ABOUT" },
              { href: "/flow/", label: "FLOW & FEE" },
              { href: "/contact/", label: "CONTACT" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[10px] tracking-[0.3em] text-white/30 hover:text-white/70 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] tracking-[0.4em] text-white/20 mb-2">
              INQUIRY
            </p>
            <Link
              href="/contact/"
              className="text-[10px] tracking-[0.3em] border border-white/20 text-white/60 px-6 py-3 hover:border-white/60 hover:text-white transition-all duration-300 text-center"
            >
              まず相談する
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[9px] text-white/20 font-light tracking-widest">
            © {new Date().getFullYear()} KAWAZOE ARCHITECTS. All rights
            reserved.
          </p>
          <a
            href="https://www.kawazoe-architects.com/"
            className="text-[9px] tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            ← メインサイトへ
          </a>
        </div>
      </div>
    </footer>
  );
}
