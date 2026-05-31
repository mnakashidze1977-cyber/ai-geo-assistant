import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/dashboard",
    label: "Overview",
    geo: "მთავარი",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l7-7 7 7M5 8v8a1 1 0 001 1h3v-4h2v4h3a1 1 0 001-1V8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    exact: true,
  },
  {
    href: "/dashboard/procurement",
    label: "Procurement AI",
    geo: "შესყიდვები",
    color: "#2f5899",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 5m11.5-5l1.5 5M10 16a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/dashboard/legal",
    label: "Legal AI",
    geo: "იურიდიული",
    color: "#1f5a3b",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/dashboard/hr",
    label: "HR AI",
    geo: "HR",
    color: "#7a4a1e",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/dashboard/finance",
    label: "Finance AI",
    geo: "ფინანსები",
    color: "#4a2a72",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="flex h-screen bg-navy-950 overflow-hidden">
      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-white/5"
        style={{ background: "rgba(8,16,30,0.95)" }}>

        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1e3d72, #2d7a52)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="rgba(212,175,106,0.6)" strokeWidth="1" />
                <circle cx="7" cy="7" r="2" fill="#d4af6a" />
                <line x1="7" y1="7" x2="7" y2="2.5" stroke="#d4af6a" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-display font-semibold text-white">AI Geo</span>
              <span className="text-[10px] text-slate-500 block leading-none tracking-wider">Assistant</span>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 mb-2">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-medium px-2 mb-1">
              ნავიგაცია
            </p>
          </div>
          <ul className="space-y-0.5 px-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavItem item={item} />
              </li>
            ))}
          </ul>

          <div className="px-3 mt-6 mb-2">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-medium px-2 mb-1">
              ანგარიში
            </p>
          </div>
          <ul className="space-y-0.5 px-2">
            <li>
              <Link href="/dashboard/billing"
                className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-slate-500 hover:text-slate-300 hover:bg-navy-800/50 transition-all text-sm group">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 10a7 7 0 1014 0A7 7 0 003 10zm7-3v3l2 2" strokeLinecap="round" />
                </svg>
                <span>ტარიფი</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-white/5 p-4 flex items-center gap-3">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 ring-1 ring-navy-600",
              },
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-300 truncate font-medium">ჩემი ანგარიში</p>
            <p className="text-[10px] text-slate-600 truncate">Professional</p>
          </div>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-16 border-b border-white/5 flex items-center px-6 gap-4 flex-shrink-0"
          style={{ background: "rgba(8,16,30,0.6)", backdropFilter: "blur(12px)" }}>
          <div className="flex-1">
            <p className="text-sm text-slate-300 font-medium">სამართავი პანელი</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            სისტემა გააქტიურებულია
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

// Simple nav item client hint — for active state use CSS or a client component
function NavItem({ item }: { item: typeof NAV_ITEMS[0] }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-slate-500 hover:text-slate-200 hover:bg-navy-800/50 transition-all text-sm group"
    >
      <span className="text-slate-600 group-hover:text-slate-300 transition-colors">
        {item.icon}
      </span>
      <div className="flex-1 min-w-0">
        <span className="block text-[11px] font-mono text-slate-600 group-hover:text-slate-500 leading-none mb-0.5">
          {item.label}
        </span>
        <span className="block text-sm leading-none">{item.geo}</span>
      </div>
      {"color" in item && item.color && (
        <span className="w-1.5 h-1.5 rounded-full opacity-60 flex-shrink-0"
          style={{ background: item.color }} />
      )}
    </Link>
  );
}
