import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 hero-glow opacity-60" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

    <div className="container relative text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
          Ready to Deploy Your{" "}
          <span className="gradient-text">AI Workforce</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Join 500+ enterprises already automating their communication with Naradha World.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="btn-gradient text-primary-foreground font-semibold px-10 py-4 rounded-xl flex items-center justify-center gap-2 text-base">
            Book a Demo <ArrowRight size={18} />
          </a>
          <a href="#" className="glass-card text-foreground font-semibold px-10 py-4 rounded-xl flex items-center justify-center gap-2 text-base hover:bg-secondary transition-colors">
            Contact Sales
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
