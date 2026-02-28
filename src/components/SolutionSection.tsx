import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Phone, PhoneIncoming, MessageSquare, BarChart3 } from "lucide-react";

const solutions = [
  { icon: Phone, title: "AI Telecaller", description: "Outbound AI agents that call leads with natural conversations, qualifying and converting at scale." },
  { icon: PhoneIncoming, title: "Inbound Voice Agent", description: "24/7 intelligent voice agents that handle customer queries, route calls, and never miss a beat." },
  { icon: MessageSquare, title: "WhatsApp Automation", description: "Automated WhatsApp campaigns with smart replies, follow-ups, and rich media messaging." },
  { icon: BarChart3, title: "Campaign Manager", description: "Upload leads, launch campaigns, track performance — all from one unified dashboard." },
];

const SolutionSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 section-saffron-mist" />
    <div className="container relative">
      <SectionHeading
        eyebrow="The Solution"
        title="Meet Your AI Workforce"
        description="Naradha World combines voice AI and messaging automation into one powerful platform."
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {solutions.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.12}>
            <div className="glass-card p-8 h-full group hover:glow-orange">
              <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
