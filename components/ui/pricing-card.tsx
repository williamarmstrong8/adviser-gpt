"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

// --- 1. Typescript Interfaces (API) ---

export type BillingCycle = "monthly" | "annually";

export interface Feature {
  name: string;
  isIncluded: boolean;
  tooltip?: string;
}

export interface PriceTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnually: number;
  isPopular: boolean;
  buttonLabel: string;
  features: Feature[];
}

export interface PricingComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The list of pricing tiers to display. Must contain exactly 3 tiers. */
  plans: [PriceTier, PriceTier, PriceTier];
  /** The currently selected billing cycle. */
  billingCycle: BillingCycle;
  /** Callback function when the user changes the billing cycle. */
  onCycleChange: (cycle: BillingCycle) => void;
  /** Callback function when a user selects a plan. */
  onPlanSelect: (planId: string, cycle: BillingCycle) => void;
}

// --- 2. Utility Components ---

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.isIncluded ? Check : X;
  const iconColor = feature.isIncluded
    ? "text-[#e85d26]"
    : "text-[#6b7280]";

  return (
    <li className="flex items-start space-x-3 py-2">
      <Icon
        className={cn("h-4 w-4 flex-shrink-0 mt-0.5", iconColor)}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-sm leading-relaxed",
          feature.isIncluded ? "text-[#1a1a1a]" : "text-[#555]"
        )}
      >
        {feature.name}
      </span>
    </li>
  );
};

// --- 3. Main Component: PricingComponent ---

export const PricingComponent: React.FC<PricingComponentProps> = ({
  plans,
  billingCycle,
  onCycleChange,
  onPlanSelect,
  className,
  ...props
}) => {
  if (plans.length !== 3) {
    console.error("PricingComponent requires exactly 3 pricing tiers.");
    return null;
  }

  const annualDiscountPercent = 20;

  const CycleToggle = (
    <div className="flex justify-center mb-10 mt-2">
      <ToggleGroup
        type="single"
        value={billingCycle}
        onValueChange={(value) => {
          if (value && (value === "monthly" || value === "annually")) {
            onCycleChange(value);
          }
        }}
        aria-label="Select billing cycle"
        className="border border-[#d4d4d1] rounded-full p-1 bg-[#fafaf9]"
      >
        <ToggleGroupItem
          value="monthly"
          aria-label="Monthly Billing"
          className="px-6 py-1.5 text-sm font-medium !bg-[#fafaf9] text-[#555] hover:!bg-[#eeecea]/70 data-[state=on]:!bg-[var(--nav-hover)] data-[state=on]:text-[#1a1a1a] rounded-full transition-colors"
        >
          Monthly
        </ToggleGroupItem>
        <ToggleGroupItem
          value="annually"
          aria-label="Annual Billing"
          className="px-6 py-1.5 text-sm font-medium !bg-[#fafaf9] text-[#555] hover:!bg-[#eeecea]/70 data-[state=on]:!bg-[var(--nav-hover)] data-[state=on]:text-[#1a1a1a] rounded-full transition-colors relative"
        >
          Annually
          <span className="absolute -top-3 right-0 text-xs font-semibold text-white bg-[#e85d26] px-1.5 rounded-full whitespace-nowrap">
            Save {annualDiscountPercent}%
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );

  const allFeatures = Array.from(
    new Set(plans.flatMap((p) => p.features.map((f) => f.name)))
  );

  const PricingCards = (
    <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
      {plans.map((plan) => {
        const isFeatured = plan.isPopular;
        const currentPrice =
          billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually;
        const originalMonthlyPrice = plan.priceMonthly;
        const priceSuffix = billingCycle === "monthly" ? "/mo" : "/yr";

        return (
          <Card
            key={plan.id}
            className={cn(
              "flex flex-col transition-all duration-300 border border-[#d4d4d1] rounded-xl bg-white shadow-sm hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5",
              isFeatured &&
                "ring-2 ring-[#1a1a1a] shadow-md md:scale-[1.02] hover:scale-[1.02]"
            )}
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex justify-between items-start">
                <CardTitle
                  className="text-2xl font-normal tracking-tight text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {plan.name}
                </CardTitle>
                {isFeatured && (
                  <span className="text-xs font-semibold px-3 py-1 bg-[#1a1a1a] text-white rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              <CardDescription className="text-sm mt-1 text-[#555] leading-relaxed">
                {plan.description}
              </CardDescription>
              <div className="mt-4">
                <p className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
                  ${currentPrice}
                  <span className="text-base font-normal text-[#555] ml-1">
                    {priceSuffix}
                  </span>
                </p>
                {billingCycle === "annually" && (
                  <p className="text-xs text-[#555] mt-1">
                    Billed annually
                  </p>
                )}
                {billingCycle === "annually" && (
                  <p className="text-xs text-[#555] line-through opacity-70 mt-0.5">
                    ${originalMonthlyPrice}/mo
                  </p>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <h4 className="text-sm font-semibold mb-2 mt-4 text-[#1a1a1a]">
                Key Features:
              </h4>
              <ul className="list-none space-y-0">
                {plan.features.slice(0, 5).map((feature) => (
                  <FeatureItem key={feature.name} feature={feature} />
                ))}
                {plan.features.length > 5 && (
                  <li className="text-sm text-[#555] mt-2">
                    + {plan.features.length - 5} more features
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                onClick={() => onPlanSelect(plan.id, billingCycle)}
                className={cn(
                  "w-full transition-all duration-200 rounded-full font-medium",
                  isFeatured
                    ? "bg-[#1a1a1a] hover:bg-[#333] text-white shadow-md"
                    : "bg-white text-[#1a1a1a] hover:bg-[var(--nav-hover)] border border-[#d4d4d1]"
                )}
                size="lg"
                aria-label={`Select ${plan.name} plan for ${currentPrice} ${priceSuffix}`}
              >
                {plan.buttonLabel}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );

  const ComparisonTable = (
    <div className="mt-16 hidden md:block border border-[#d4d4d1] rounded-xl overflow-x-auto shadow-sm bg-white">
      <table className="min-w-full divide-y divide-[#d4d4d1]">
        <thead>
          <tr className="bg-[#fafaf9]">
            <th
              scope="col"
              className="px-6 py-4 text-left text-sm font-semibold text-[#1a1a1a] w-[200px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={`th-${plan.id}`}
                scope="col"
                className={cn(
                  "px-6 py-4 text-center text-sm font-semibold text-[#1a1a1a] whitespace-nowrap",
                  plan.isPopular && "bg-[#eeecea]"
                )}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#d4d4d1]">
          {allFeatures.map((featureName, index) => (
            <tr
              key={featureName}
              className={cn(
                "transition-colors hover:bg-[var(--nav-hover)]",
                index % 2 === 0 ? "bg-white" : "bg-[#fafaf9]"
              )}
            >
              <td className="px-6 py-3 text-left text-sm font-medium text-[#1a1a1a] whitespace-nowrap">
                {featureName}
              </td>
              {plans.map((plan) => {
                const feature = plan.features.find((f) => f.name === featureName);
                const isIncluded = feature?.isIncluded ?? false;
                const Icon = isIncluded ? Check : X;
                const iconColor = isIncluded
                  ? "text-[#e85d26]"
                  : "text-[#6b7280]";

                return (
                  <td
                    key={`${plan.id}-${featureName}`}
                    className={cn(
                      "px-6 py-3 text-center transition-all duration-150",
                      plan.isPopular && "bg-[#fafaf9]"
                    )}
                  >
                    <Icon
                      className={cn("h-5 w-5 mx-auto", iconColor)}
                      aria-hidden="true"
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
      className={cn(
        "w-full py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      <header className="text-center mb-10">
        <h2
          className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1a1a1a]"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Choose the right plan for your firm.
        </h2>
        <p className="mt-3 text-base text-[#555] max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: 1.6 }}>
          Scale effortlessly with AdviserGPT—from single advisers to enterprise
          teams.
        </p>
      </header>

      {CycleToggle}

      <section aria-labelledby="pricing-plans">{PricingCards}</section>

      <section aria-label="Feature Comparison Table" className="mt-16">
        <h3
          className="text-2xl font-normal mb-6 hidden md:block text-center text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Detailed Feature Comparison
        </h3>
        {ComparisonTable}
      </section>
    </div>
  );
};

export default PricingComponent;
