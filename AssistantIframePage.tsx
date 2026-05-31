// src/components/ui/AssistantIframePage.tsx
// Reusable template used by all 4 assistant pages

"use client";

import Link from "next/link";
import { useState } from "react";

interface AssistantConfig {
  label: string;          // English / Latin label
  geo: string;            // Georgian name
  description: string;    // Short Georgian description
  mindstudioUrl: string;  // The src URL from MindStudio embed code
  color: string;          // Brand color hex
  accentText: string;     // Text/icon accent color
}

export default function AssistantIframePage({
  config,
}: {
  config: AssistantConfig;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col h-full">

      {/* ── Sub-header ───────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
        style={{
          background: "rgba(8,16,30,0.8)",
          borderColor: `${config.color}25`,
        }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/dashboard"
            className="text-slate-500 hover:text-slate-300 transition-colors text-xs tracking-wide"
          >
            სამართავი პანელი
          </Link>
          <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-slate-700">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-slate-300 text-xs">{config.geo}</span>
        </div>

        {/* Title & status */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <span
              className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm"
              style={{ background: `${config.color}20`, color: config.accentText }}
            >
              {config.label}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
            <span className="hidden sm:block">ჩართულია</span>
          </div>
        </div>
      </div>

      {/* ── Iframe container ─────────────────────────────────────────────── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Loading skeleton */}
        {loading && (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6"
            style={{ background: "rgba(4,8,16,0.95)" }}
          >
            {/* Animated logo mark */}
            <div className="relative">
              <div
                className="w-16 h-16 rounded-sm flex items-center justify-center"
                style={{
                  background: `${config.color}15`,
                  border: `1px solid ${config.color}30`,
                }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
                  style={{ borderColor: `${config.accentText} transparent transparent transparent` }}
                />
              </div>
            </div>
            <div className="text-center">
              <p className="font-display text-lg text-white mb-1">{config.geo}</p>
              <p className="text-sm text-slate-500">{config.label} იტვირთება...</p>
            </div>
            {/* Progress bar */}
            <div className="w-48 h-0.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}>
              <div
                className="h-full rounded-full animate-pulse"
                style={{ background: `linear-gradient(90deg, ${config.color}, ${config.accentText})`, width: "60%" }}
              />
            </div>
          </div>
        )}

        {/*
          ╔══════════════════════════════════════════════════════════════════╗
          ║              MINDSTUDIO EMBED — PASTE HERE                     ║
          ║                                                                  ║
          ║  1. Open your MindStudio dashboard                              ║
          ║  2. Go to the specific assistant → Share → Embed                ║
          ║  3. Copy the embed URL (the src="..." part of the iframe)       ║
          ║  4. Pass it as `mindstudioUrl` prop in the page file below      ║
          ║                                                                  ║
          ║  The iframe below is the container. Replace the src prop        ║
          ║  or paste the full <iframe> tag from MindStudio replacing this. ║
          ╚══════════════════════════════════════════════════════════════════╝
        */}
        <iframe
          src={config.mindstudioUrl}
          title={`${config.label} — ${config.geo}`}
          className="w-full h-full border-0"
          allow="microphone; camera; clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          onLoad={() => setLoading(false)}
          style={{ display: "block", minHeight: "100%" }}
        />
      </div>
    </div>
  );
}
