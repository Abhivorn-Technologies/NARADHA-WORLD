import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Landmark, Home, HeartPulse, GraduationCap, Banknote } from "lucide-react";

const useCases = [
  { icon: Landmark, title: "Insurance", description: "Automate policy renewal calls, claims follow-up, and new lead conversion." },
  { icon: Home, title: "Real Estate", description: "Qualify property inquiries, schedule site visits, and nurture buyers at scale." },
  { icon: HeartPulse, title: "Hospitals", description: "Appointment reminders, health check-up campaigns, and patient follow-ups." },
  { icon: GraduationCap, title: "Coaching Institutes", description: "Enrollment campaigns, batch reminders, and automated counseling calls." },
  { icon: Banknote, title: "Financial Services", description: "Loan follow-ups, KYC reminders, and investment advisory outreach." },
];

const UseCaseSection = () => (
  <section id="use-cases" className="section-padding section-warm">
    <div className="container">
      <SectionHeading
        eyebrow="Use Cases"
        title="Built for Every Industry"
        description="From insurance to education, Naradha World adapts to your industry's unique needs."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {useCases.map((u, i) => (
          <AnimatedSection key={u.title} delay={i * 0.1}>
            <div className="glass-card p-7 h-full group hover:border-primary/20 hover:glow-amber">
              <u.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-2">{u.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default UseCaseSection;
