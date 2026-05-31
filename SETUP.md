# AI Geo Assistant — Setup Instructions

## 1. Initialize the Project

```bash
# Create Next.js project with App Router + TypeScript + Tailwind
npx create-next-app@latest ai-geo-assistant \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd ai-geo-assistant
```

## 2. Install All Dependencies

```bash
# Clerk — Authentication
npm install @clerk/nextjs

# Stripe — Payments & Subscriptions
npm install stripe @stripe/stripe-js

# Utility libraries
npm install clsx tailwind-merge lucide-react

# (Optional) shadcn/ui for base components
npx shadcn@latest init
```

## 3. Environment Variables

Create a `.env.local` file in the project root:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxx

# Your Stripe Price IDs (from Stripe Dashboard)
STRIPE_MONTHLY_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_ANNUAL_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxxxxx

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4. Folder Structure

```
ai-geo-assistant/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with ClerkProvider
│   │   ├── page.tsx                      # Landing Page
│   │   ├── sign-in/[[...sign-in]]/
│   │   │   └── page.tsx
│   │   ├── sign-up/[[...sign-up]]/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   ├── layout.tsx                # Protected dashboard layout
│   │   │   ├── page.tsx                  # Dashboard with 4 assistant cards
│   │   │   ├── procurement/
│   │   │   │   └── page.tsx              # Procurement AI (MindStudio iframe)
│   │   │   ├── legal/
│   │   │   │   └── page.tsx              # Legal AI (MindStudio iframe)
│   │   │   ├── hr/
│   │   │   │   └── page.tsx              # HR AI (MindStudio iframe)
│   │   │   └── finance/
│   │   │       └── page.tsx              # Finance AI (MindStudio iframe)
│   │   └── api/
│   │       └── webhooks/
│   │           └── stripe/
│   │               └── route.ts          # Stripe webhook handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── DashboardSidebar.tsx
│   │   └── ui/
│   │       ├── AssistantCard.tsx
│   │       └── PricingSection.tsx
│   ├── lib/
│   │   ├── stripe.ts                     # Stripe helpers
│   │   └── utils.ts                      # Utility functions
│   └── middleware.ts                     # Clerk auth middleware
├── public/
├── .env.local
├── tailwind.config.ts
└── next.config.ts
```

## 5. Configure Clerk Middleware

The `middleware.ts` file (provided) protects all `/dashboard/*` routes automatically.

## 6. Run the Development Server

```bash
npm run dev
# Open http://localhost:3000
```

## 7. MindStudio iframe Setup

In each assistant page (e.g., `/dashboard/procurement/page.tsx`), find the comment:
```
{/* PASTE YOUR MINDSTUDIO EMBED CODE HERE */}
```
Replace the placeholder `<iframe>` with the exact embed code from your MindStudio dashboard.
