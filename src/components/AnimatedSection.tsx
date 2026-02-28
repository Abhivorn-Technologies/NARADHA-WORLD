import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <AnimatedSection>
      <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase gradient-text mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
      <div className="ornamental-divider max-w-xs mx-auto mt-8" />
    </AnimatedSection>
  </div>
);
