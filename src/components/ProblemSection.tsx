import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { AlertTriangle, DollarSign, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Missed Follow-Ups",
    description: "Businesses lose 78% of leads because they can't follow up fast enough. Every delay costs revenue.",
  },
  {
    icon: DollarSign,
    title: "Expensive Telecalling",
    description: "Manual telecalling teams cost ₹3-5 lakhs/month and still miss most opportunities due to limited bandwidth.",
  },
  {
    icon: Clock,
    title: "No 24/7 Support",
    description: "Customers expect instant responses at any hour. Without automation, you're leaving money on the table.",
  },
];

const ProblemSection = () => (
  <section className="section-padding relative section-warm">
    <div className="container">
      <SectionHeading
        eyebrow="The Problem"
        title="Your Leads Are Slipping Away"
        description="Traditional communication channels can't keep up with modern customer expectations."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <div className="glass-card p-8 h-full group hover:border-destructive/20">
              <div className="w-12 h-12 rounded-xl bg-destructive/8 flex items-center justify-center mb-5 group-hover:bg-destructive/12 transition-colors duration-300">
                <p.icon className="text-destructive" size={22} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
