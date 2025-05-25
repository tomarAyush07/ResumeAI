import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  // This would typically come from your user's subscription data
  const currentPlan = "Free";

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for trying out our basic features",
      features: [
        "Basic resume analysis",
        "Limited job matches",
        "Standard templates",
        "Basic formatting tips",
        "Community support"
      ],
      buttonText: "Current Plan",
      popular: false
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      annualPrice: "₹9,990",
      annualPeriod: "/year",
      savings: "Save ₹990",
      description: "Best for job seekers who want to stand out",
      features: [
        "Advanced resume analysis",
        "Unlimited job matches",
        "Premium templates",
        "AI-powered suggestions",
        "Priority support",
        "ATS optimization",
        "Resume tracking",
        "Interview preparation"
      ],
      buttonText: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹9,999",
      period: "/month",
      annualPrice: "₹99,999",
      annualPeriod: "/year",
      savings: "Save ₹19,989",
      description: "For organizations and career services",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "Team management",
        "Analytics dashboard",
        "API access",
        "Custom branding",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your career journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.name === currentPlan
                ? "border-primary shadow-lg scale-105"
                : plan.popular
                ? "border-border"
                : "border-border"
            }`}
          >
            {plan.name === currentPlan && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  Current Plan
                </span>
              </div>
            )}
            {plan.popular && plan.name !== currentPlan && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <div className="mt-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    )}
                  </div>
                  {plan.annualPrice && (
                    <div className="mt-2 text-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold text-primary">{plan.annualPrice}</span>
                        {plan.annualPeriod && (
                          <span className="text-muted-foreground ml-1">{plan.annualPeriod}</span>
                        )}
                      </div>
                      <span className="text-sm text-green-600 font-medium">{plan.savings}</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-8 ${
                  plan.name === currentPlan
                    ? "bg-primary/20 text-primary hover:bg-primary/30"
                    : plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
                disabled={plan.name === currentPlan}
              >
                {plan.name === currentPlan ? "Current Plan" : plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-8">
          We offer tailored solutions for educational institutions and organizations
        </p>
        <Button variant="secondary" size="lg">
          Contact Us
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 14-day free trial for our Pro plan. No credit card required to start.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept UPI, Net Banking, Credit/Debit Cards, and other popular Indian payment methods.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 