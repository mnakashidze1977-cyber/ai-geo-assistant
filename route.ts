// src/app/api/stripe/create-checkout/route.ts

import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  const { priceId } = await req.json();

  if (!priceId) {
    return NextResponse.json({ error: "Price ID required" }, { status: 400 });
  }

  try {
    const session = await createCheckoutSession({
      priceId,
      userId,
      userEmail: user?.emailAddresses[0]?.emailAddress ?? "",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session error:", err);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}
