import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/month",
    description: "For small teams getting started with AI automation.",
    features: ["1,000 AI calls/month", "WhatsApp integration", "Basic analytics", "Email support", "1 campaign"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹29,999",
    period: "/month",
    description: "For growing businesses scaling their outreach.",
    features: ["10,000 AI calls/month", "Voice + WhatsApp", "Advanced analytics", "Priority support", "Unlimited campaigns", "CRM integration"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements.",
    features: ["Unlimited calls", "Multi-tenant setup", "Dedicated account manager", "Custom AI training", "SLA guarantee", "On-premise option"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
    <div className="container relative">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your business. Scale up anytime."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.name} delay={i * 0.15}>
            <div className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-500 ${
              plan.highlighted
                ? "glass-card glow-orange border-primary/30 relative"
                : "glass-card hover:border-border/80"
            }`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "btn-gradient text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
