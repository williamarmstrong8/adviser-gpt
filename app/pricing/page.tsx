"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingComponent, {
  type PriceTier,
  type BillingCycle,
} from "../../components/ui/pricing-card";

const ADVISERGPT_PLANS: [PriceTier, PriceTier, PriceTier] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for independent advisers and small teams getting started.",
    priceMonthly: 99,
    priceAnnually: 950, // ~20% off
    isPopular: false,
    buttonLabel: "Start Free Trial",
    features: [
      { name: "RFP & DDQ assistance", isIncluded: true },
      { name: "Compliance-approved language", isIncluded: true },
      { name: "Email support", isIncluded: true },
      { name: "Up to 3 users", isIncluded: true },
      { name: "Word & Excel Add-ins", isIncluded: false },
      { name: "Dedicated success manager", isIncluded: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Everything growing wealth and asset management teams need.",
    priceMonthly: 249,
    priceAnnually: 2390, // ~20% off
    isPopular: true,
    buttonLabel: "Choose Pro",
    features: [
      { name: "Unlimited RFP & DDQ assistance", isIncluded: true },
      { name: "Compliance-approved language", isIncluded: true },
      { name: "Priority support", isIncluded: true },
      { name: "Up to 25 users", isIncluded: true },
      { name: "Word & Excel Add-ins", isIncluded: true },
      { name: "Trust Score & tone controls", isIncluded: true },
      { name: "Dedicated success manager", isIncluded: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Advanced features and dedicated support for large organizations.",
    priceMonthly: 599,
    priceAnnually: 5750, // ~20% off
    isPopular: false,
    buttonLabel: "Contact Sales",
    features: [
      { name: "Unlimited RFP & DDQ assistance", isIncluded: true },
      { name: "Compliance-approved language", isIncluded: true },
      { name: "Priority support", isIncluded: true },
      { name: "Unlimited users", isIncluded: true },
      { name: "Word & Excel Add-ins", isIncluded: true },
      { name: "Trust Score & tone controls", isIncluded: true },
      { name: "Dedicated success manager", isIncluded: true },
      { name: "SSO & custom integrations", isIncluded: true },
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annually");

  const handleCycleChange = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
  };

  const handlePlanSelect = (planId: string, _cycle: BillingCycle) => {
    if (planId === "enterprise") {
      window.location.href =
        "mailto:sales@advisergpt.com?subject=Enterprise%20plan";
    } else {
      window.location.href = "/#demo";
    }
  };

  return (
    <main
      className="min-h-screen bg-[var(--background)] text-foreground"
      style={{ paddingTop: 88 }}
    >
      <Navbar />
      <PricingComponent
        plans={ADVISERGPT_PLANS}
        billingCycle={billingCycle}
        onCycleChange={handleCycleChange}
        onPlanSelect={handlePlanSelect}
      />
      <Footer />
    </main>
  );
}
