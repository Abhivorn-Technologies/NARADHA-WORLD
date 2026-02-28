import { AnimatedSection, SectionHeading } from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VP Sales, InsureTech Corp",
    quote: "Naradha World transformed our telecalling operations. We went from 200 calls/day to 5,000 with better conversion rates.",
  },
  {
    name: "Priya Sharma",
    role: "CEO, EduNext Academy",
    quote: "The WhatsApp automation alone saved us 3 full-time employees. Our enrollment rates jumped 40% in the first quarter.",
  },
  {
    name: "Arjun Mehta",
    role: "Director, PropFirst Realty",
    quote: "Finally a platform that understands Indian real estate. The AI voice agent handles site visit scheduling like a pro.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding section-warm">
    <div className="container">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by Industry Leaders"
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.12}>
            <div className="glass-card p-7 h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <div className="font-display font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
