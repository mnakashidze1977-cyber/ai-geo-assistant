"use client";

import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ background: "rgba(4,8,16,0.85)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* SVG Logo: Represents automation (gears/orbit), time (clock arc), and control (nodes) */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            {/* Outer orbit arc — automation loop */}
            <circle
              cx="18" cy="18" r="16"
              stroke="url(#logoGrad1)"
              strokeWidth="1.5"
              strokeDasharray="60 40"
              strokeLinecap="round"
              style={{ transformOrigin: "18px 18px", animation: "spin 12s linear infinite" }}
            />
            {/* Inner control ring */}
            <circle cx="18" cy="18" r="10" stroke="rgba(212,175,106,0.3)" strokeWidth="1" />
            {/* Center — the human in control */}
            <circle cx="18" cy="18" r="3.5" fill="url(#logoGrad2)" />
            {/* Clock hand — time */}
            <line x1="18" y1="18" x2="18" y2="10.5"
              stroke="#d4af6a" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="18" x2="22" y2="18"
              stroke="rgba(212,175,106,0.6)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Orbit nodes — distributed control */}
            <circle cx="18" cy="2" r="2" fill="#2f5899" />
            <circle cx="34" cy="18" r="2" fill="#2f5899" />
            <circle cx="18" cy="34" r="2" fill="#2d7a52" />
            <circle cx="2" cy="18" r="2" fill="#2d7a52" />
            <defs>
              <linearGradient id="logoGrad1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5077b5" />
                <stop offset="100%" stopColor="#2d7a52" />
              </linearGradient>
              <linearGradient id="logoGrad2" x1="14.5" y1="14.5" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d4af6a" />
                <stop offset="100%" stopColor="#b8932a" />
              </linearGradient>
            </defs>
          </svg>

          <div>
            <span className="font-display font-semibold text-base text-white tracking-wide">
              AI Geo
            </span>
            <span className="font-body text-xs text-slate-400 block leading-none tracking-wider">
              Assistant
            </span>
          </div>
        </Link>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm text-slate-400 hover:text-slate-200 transition-colors tracking-wide">
            შესაძლებლობები
          </Link>
          <Link href="/#pricing" className="text-sm text-slate-400 hover:text-slate-200 transition-colors tracking-wide">
            ტარიფები
          </Link>
          <Link href="/#about" className="text-sm text-slate-400 hover:text-slate-200 transition-colors tracking-wide">
            ჩვენ შესახებ
          </Link>
        </nav>

        {/* Auth controls */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in" className="text-sm text-slate-400 hover:text-slate-200 transition-colors hidden md:block">
              შესვლა
            </Link>
            <Link href="/sign-up" className="btn-gold text-xs px-5 py-2.5">
              უფასოდ სცადე
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className="btn-primary text-xs px-5 py-2.5">
              სამართავი პანელი
            </Link>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 ring-2 ring-navy-600",
                },
              }}
            />
          </SignedIn>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-navy-900/95 px-6 py-4 space-y-3">
          <Link href="/#features" className="block text-sm text-slate-300 py-2" onClick={() => setMobileOpen(false)}>
            შესაძლებლობები
          </Link>
          <Link href="/#pricing" className="block text-sm text-slate-300 py-2" onClick={() => setMobileOpen(false)}>
            ტარიფები
          </Link>
          <Link href="/#about" className="block text-sm text-slate-300 py-2" onClick={() => setMobileOpen(false)}>
            ჩვენ შესახებ
          </Link>
        </div>
      )}
    </header>
  );
}
