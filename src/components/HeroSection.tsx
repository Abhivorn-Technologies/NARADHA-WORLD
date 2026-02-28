import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import IndianMotif from "./IndianMotif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Sarvam-style warm gradient glow at top */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-0 left-0 right-0 h-[400px] hero-gradient-banner opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px] animate-pulse-glow" />

      <div className="container relative z-10 text-center py-20 md:py-32">
        {/* Indian motif decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <IndianMotif size={200} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.04] px-5 py-2.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-foreground/70 tracking-wide">AI-Powered Communication Engine</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] mb-6 max-w-4xl mx-auto text-foreground"
        >
          Your AI Messenger for{" "}
          <span className="gradient-text">Business Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Automate Calls. Convert Leads. Scale Faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#cta" className="btn-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-base shadow-lg">
            Book Demo <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className="border border-foreground/20 text-foreground font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-base hover:bg-secondary transition-all duration-300">
            <Play size={16} /> Start Free Trial
          </a>
        </motion.div>

        {/* Stats with ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="ornamental-divider max-w-md mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "10M+", label: "Calls Automated" },
              { value: "98%", label: "Lead Response Rate" },
              { value: "3x", label: "Conversion Boost" },
              { value: "500+", label: "Enterprises" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
