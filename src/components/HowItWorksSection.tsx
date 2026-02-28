import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Upload, Phone, MessageSquare, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Leads", description: "Import your lead database via Excel or CRM integration." },
  { icon: Phone, title: "AI Calls", description: "AI agents start calling with natural, human-like conversations." },
  { icon: MessageSquare, title: "Smart Conversations", description: "Context-aware dialogue that qualifies and engages prospects." },
  { icon: TrendingUp, title: "Lead Conversion", description: "Hot leads are flagged and routed to your sales team instantly." },
  { icon: BarChart3, title: "Analytics", description: "Track every metric — call duration, outcomes, and ROI in real-time." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 section-saffron-mist" />
    <div className="container relative">
      <SectionHeading
        eyebrow="How It Works"
        title="From Leads to Revenue in 5 Steps"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12} className="text-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mx-auto mb-4 glow-orange">
                  <s.icon className="text-primary" size={22} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full btn-gradient text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-1">{s.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
