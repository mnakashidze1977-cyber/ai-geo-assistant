import Link from "next/link";
import Header from "@/components/layout/Header";
import PricingSection from "@/components/ui/PricingSection";

// ─── Feature data ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "სრული ავტომატიზაცია",
    desc: "AI ასისტენტი 24/7 ასრულებს რუტინულ ამოცანებს: დოკუმენტაცია, ანგარიშები, კომუნიკაცია — ყველაფერი ავტომატურად.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "დრო — ყველაზე ძვირფასი რესურსი",
    desc: "პლატფორმა შექმნილია ერთი მიზნით: დაუბრუნოს პროფესიონალებს საათები, რომლებსაც ისინი ტყუილად ხარჯავენ ეკრანთან.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "უსაფრთხო და კონფიდენციალური",
    desc: "კორპორატიული დონის დაშიფვრა. თქვენი მონაცემები არასოდეს გამოიყენება მოდელების გასაწვრთნად. GDPR-შესაბამისი.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "სწრაფი ინტეგრაცია",
    desc: "5 წუთში მუშაობა. არ საჭიროებს IT გუნდს ან სპეციალურ ინფრასტრუქტურას. შედით, გააქტიურეთ, დაიწყეთ.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "გუნდური მართვა",
    desc: "მთელი გუნდი ერთ პანელში. განსხვავებული დეპარტამენტები, განსხვავებული ასისტენტები — სრული კონტროლი.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "გამჭვირვალე ანალიტიკა",
    desc: "იხილეთ რამდენი დრო დაზოგა თითოეულმა ასისტენტმა. გაზომეთ ROI რეალურ დროში.",
  },
];

const DEPARTMENTS = [
  {
    label: "Procurement AI",
    geo: "შესყიდვების ასისტენტი",
    color: "#2f5899",
    glow: "rgba(47,88,153,0.3)",
  },
  {
    label: "Legal AI",
    geo: "იურიდიული ასისტენტი",
    color: "#1f5a3b",
    glow: "rgba(31,90,59,0.3)",
  },
  {
    label: "HR AI",
    geo: "HR ასისტენტი",
    color: "#7a4a1e",
    glow: "rgba(122,74,30,0.25)",
  },
  {
    label: "Finance AI",
    geo: "ფინანსური ასისტენტი",
    color: "#4a2a72",
    glow: "rgba(74,42,114,0.25)",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Deep gradient */}
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(22,46,85,0.5) 0%, transparent 70%)",
            }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #2f5899, transparent)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
            style={{ background: "radial-gradient(circle, #2d7a52, transparent)" }} />
          {/* Gold accent line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,106,0.3), transparent)",
            }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 mb-10"
            style={{ background: "rgba(22,46,85,0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-xs text-slate-400 tracking-[0.15em] uppercase font-medium">
              ახალი თაობის სამუშაო ავტომატიზაცია
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
            AI მუშაობს.
            <br />
            <span className="text-gradient-gold">შენ ცხოვრობ.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            AI Geo Assistant ამუშავებს მძიმე, რუტინულ პროცესებს — შენ მხოლოდ
            მართავ და აკვირდები. მინიმალური კლიკებით. ნებისმიერი მოწყობილობიდან.
          </p>
          <p className="text-base text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            შესყიდვები. იურიდიული. HR. ფინანსები. — ოთხი დეპარტამენტი, ერთი პლატფორმა.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="btn-gold text-base px-10 py-4">
              უფასოდ დაიწყე
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/#features" className="btn-primary text-base px-10 py-4">
              გაიგე მეტი
            </Link>
          </div>

          {/* Social proof mini */}
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
            {["შესყიდვები", "იურიდიული", "HR", "ფინანსები"].map((dep, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-3.5 h-3.5 text-forest-400" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="3" />
                </svg>
                {dep}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">გადაახვიე</span>
          <svg className="w-4 h-4 animate-bounce" viewBox="0 0 16 16" fill="none">
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="divider-gold mx-16 my-2" />

      {/* ── DEPARTMENTS PREVIEW ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">სამართავი პანელი</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
              ოთხი ასისტენტი. ერთი პანელი.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.label}
                className="glass-card glass-card-hover rounded-sm p-6 flex flex-col gap-3"
                style={{ borderColor: `${d.color}30` }}
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-2"
                  style={{ background: `${d.color}20`, boxShadow: `0 0 20px ${d.glow}` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono tracking-wider">{d.label}</p>
                  <p className="text-sm text-white font-medium mt-1">{d.geo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-32 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5 blur-3xl rounded-full"
            style={{ background: "radial-gradient(circle, #d4af6a, transparent)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="section-label">შესაძლებლობები</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">
              ყველაფერი, რაც გჭირდება
              <br />
              <span className="text-gradient-blue">ავტომატიზაციისთვის</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed">
              პლატფორმა შექმნილია ყველაზე მოთხოვნადი კორპორატიული გამოყენებისთვის.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-sm p-7">
                <div className="w-11 h-11 rounded-sm flex items-center justify-center mb-5 text-gold-400"
                  style={{ background: "rgba(212,175,106,0.08)", border: "1px solid rgba(212,175,106,0.15)" }}>
                  {f.icon}
                </div>
                <h3 className="font-display text-lg text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-sm p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10"
              style={{ background: "radial-gradient(circle at top left, #d4af6a, transparent)" }} />
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
              style={{ background: "radial-gradient(circle at bottom right, #2f5899, transparent)" }} />

            <div className="relative">
              <span className="section-label">ჩვენი ფილოსოფია</span>
              <blockquote className="font-display text-3xl md:text-4xl text-white mt-6 mb-6 leading-tight">
                &ldquo;AI უნდა იმუშაოს შენ მაგიერ.
                <br />
                <span className="text-gradient-gold">შენ კი — ისიამოვნო ცხოვრებით.&rdquo;</span>
              </blockquote>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                ჩვენ გვჯერა, რომ ტექნოლოგია მხოლოდ მაშინ ქმნის ღირებულებას,
                როდესაც ის ათავისუფლებს ადამიანს — არა ამარჩვევს მის ადგილს,
                არამედ ანიჭებს მეტ დროს, ენერგიასა და სიხარულს.
              </p>
              <div className="divider-gold mt-10 mb-10 max-w-xs mx-auto" />
              <Link href="/sign-up" className="btn-gold inline-flex">
                დაიწყე ახლა — უფასოდ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <PricingSection />

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-white text-sm">AI Geo Assistant</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-600 text-xs">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-8">
            {["კონფიდენციალურობა", "სერვისის პირობები", "კონტაქტი"].map((l) => (
              <Link key={l} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors tracking-wide">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
