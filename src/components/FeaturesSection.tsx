import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Building2, FileSpreadsheet, Activity, Brain, Headphones, Shield } from "lucide-react";

const features = [
  { icon: Building2, title: "Multi-Tenant Architecture", description: "Isolated environments for each client with enterprise-grade data separation." },
  { icon: FileSpreadsheet, title: "Excel Upload Campaigns", description: "Upload your lead sheets and launch calling campaigns in minutes." },
  { icon: Activity, title: "Real-Time Analytics", description: "Live dashboards tracking call outcomes, conversion rates, and agent performance." },
  { icon: Brain, title: "AI Lead Qualification", description: "Intelligent scoring that identifies hot leads and prioritizes follow-ups." },
  { icon: Headphones, title: "Voice + WhatsApp", description: "Seamless omnichannel outreach across voice calls and WhatsApp messaging." },
  { icon: Shield, title: "Enterprise Security", description: "SOC2-compliant infrastructure with encrypted data and role-based access controls." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative">
    <div className="container">
      <SectionHeading
        eyebrow="Features"
        title="Built for Scale"
        description="Everything you need to automate communication and supercharge conversions."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="glass-card p-7 h-full group hover:border-accent/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon className="text-accent" size={20} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
