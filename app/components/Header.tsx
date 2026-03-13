"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { assetPath } from "../lib/assetPath";

interface HeaderProps {
  initialDark?: boolean;
}

export default function Header({ initialDark = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = initialDark && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isDark
            ? "bg-transparent"
            : "bg-white/96 backdrop-blur-sm border-b border-zinc-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src={assetPath("/images/logo.png")}
              alt="KAWAZOE ARCHITECTS"
              className={`h-8 w-auto transition-all duration-700 ${
                isDark ? "brightness-0 invert" : "brightness-0"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: "/works/", label: "WORKS" },
              { href: "/about/", label: "ABOUT" },
              { href: "/flow/", label: "FLOW" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[10px] tracking-[0.3em] font-light transition-colors duration-500 ${
                  isDark
                    ? "text-white/50 hover:text-white"
                    : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className={`text-[10px] tracking-[0.3em] px-6 py-2.5 border transition-all duration-300 ${
                isDark
                  ? "border-white/25 text-white/70 hover:border-white hover:text-white"
                  : "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
            aria-label="メニューを開く"
          >
            <span
              className={`block w-6 h-px bg-current origin-center transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current origin-center transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col items-start justify-end pb-20 px-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 w-full">
          {[
            { href: "/", label: "HOME" },
            { href: "/works/", label: "WORKS" },
            { href: "/about/", label: "ABOUT" },
            { href: "/flow/", label: "FLOW" },
            { href: "/contact/", label: "CONTACT" },
          ].map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-4"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="text-[9px] tracking-[0.3em] text-white/20 w-6">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-2xl font-light text-white/70 tracking-wide group-hover:text-white transition-colors duration-300">
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-8 right-8 text-[9px] tracking-[0.3em] text-white/20">
          KAWAZOE ARCHITECTS
        </p>
      </div>
    </>
  );
}
