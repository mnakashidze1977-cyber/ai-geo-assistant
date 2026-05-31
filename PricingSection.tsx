"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    nameGeo: "სტარტერი",
    monthlyPrice: 149,
    annualPrice: 119,
    currency: "₾",
    description: "პატარა გუნდებისთვის, რომლებიც ახლა იწყებენ.",
    features: [
      "2 AI ასისტენტი",
      "500 მოთხოვნა / თვეში",
      "ელ-ფოსტის მხარდაჭერა",
      "სტანდარტული სიჩქარე",
    ],
    priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY ?? "price_starter_monthly",
    priceIdAnnual: process.env.NEXT_PUBLIC_STRIPE_STARTER_ANNUAL ?? "price_starter_annual",
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    nameGeo: "პროფესიონალი",
    monthlyPrice: 349,
    annualPrice: 279,
    currency: "₾",
    description: "მზარდი კომპანიებისთვის, რომლებიც სრულად ავტომატიზებენ.",
    features: [
      "4 AI ასისტენტი (სრული კომპლექტი)",
      "3,000 მოთხოვნა / თვეში",
      "პრიორიტეტული მხარდაჭერა",
      "გაძლიერებული სიჩქარე",
      "გუნდის წვდომა (5 მომხმარებელი)",
      "გამოყენების ანალიტიკა",
    ],
    priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY ?? "price_pro_monthly",
    priceIdAnnual: process.env.NEXT_PUBLIC_STRIPE_PRO_ANNUAL ?? "price_pro_annual",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    nameGeo: "საწარმო",
    monthlyPrice: null,
    annualPrice: null,
    currency: "₾",
    description: "მსხვილი ორგანიზაციებისთვის, ინდივიდუალური სერვისით.",
    features: [
      "შეუზღუდავი ასისტენტები",
      "შეუზღუდავი მოთხოვნები",
      "გამოყოფილი მენეჯერი",
      "SLA გარანტია",
      "Custom ინტეგრაცია",
      "SSO / SAML",
    ],
    priceIdMonthly: null,
    priceIdAnnual: null,
    highlight: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
  const [loading, setLoading] = useState<string | null>(null);
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleSubscribe = async (plan: typeof PLANS[0]) => {
    if (!isSignedIn) {
      router.push("/sign-up");
      return;
    }

    if (!plan.priceIdMonthly) {
      // Enterprise — redirect to contact
      router.push("mailto:info@aigeoa.com");
      return;
    }

    setLoading(plan.id);
    try {
      const priceId = annual ? plan.priceIdAnnual : plan.priceIdMonthly;
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #2f5899 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="section-label">ტარიფები</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">
            ინვესტიცია, რომელიც{" "}
            <span className="text-gradient-gold">თავის ამართლებს</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            ერთი გამოუყენებელი სამუშაო საათი ფარავს სრული თვის ხარჯს.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!annual ? "text-white" : "text-slate-500"}`}>თვიური</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                annual ? "bg-navy-500" : "bg-navy-700"
              }`}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-gold-400 transition-transform duration-200 ${
                annual ? "translate-x-7" : "translate-x-1"
              }`} />
            </button>
            <span className={`text-sm ${annual ? "text-white" : "text-slate-500"}`}>
              წლიური
              <span className="ml-2 text-xs text-forest-400 font-medium">−20%</span>
            </span>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-sm flex flex-col ${
                plan.highlight
                  ? "ring-1 ring-gold-500/40"
                  : "ring-1 ring-white/5"
              }`}
              style={{
                background: plan.highlight
                  ? "linear-gradient(160deg, rgba(22,46,85,0.9) 0%, rgba(15,31,58,0.95) 100%)"
                  : "rgba(8,16,30,0.8)",
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-medium tracking-widest uppercase rounded-sm"
                    style={{ background: "linear-gradient(90deg, #9a7a1e, #d4af6a)", color: "#0f1f3a" }}>
                    პოპულარული
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="font-display text-xl text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{plan.nameGeo}</p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="font-display text-4xl text-white">
                        {plan.currency}{annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-500 text-sm ml-2">/ თვეში</span>
                      {annual && (
                        <p className="text-xs text-slate-500 mt-1">
                          {plan.currency}{(plan.annualPrice! * 12).toLocaleString()} წელიწადში
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="font-display text-3xl text-white">ინდივიდუალური</span>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-forest-400 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={loading === plan.id}
                  className={`w-full py-3.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 ${
                    plan.highlight
                      ? "btn-gold"
                      : "btn-primary"
                  } ${loading === plan.id ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {loading === plan.id
                    ? "მიმდინარეობს..."
                    : plan.monthlyPrice
                    ? "დაიწყე ახლავე"
                    : "დაგვიკავშირდი"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-slate-600 mt-10 tracking-wide">
          უსაფრთხო გადახდა Stripe-ის საშუალებით · გაუქმება ნებისმიერ დროს · 14-დღიანი უკან დაბრუნების გარანტია
        </p>
      </div>
    </section>
  );
}
