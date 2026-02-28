import { motion } from "framer-motion";

const IndianMotif = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <motion.svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 240 120"
    fill="none"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {/* Left paisley */}
    <motion.path
      d="M80 100 C80 60, 100 20, 120 20 C110 30, 95 55, 95 80 C95 90, 85 100, 80 100Z"
      fill="none"
      stroke="hsl(24 95% 53% / 0.4)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
    />
    <motion.path
      d="M75 100 C75 55, 100 10, 120 10 C105 25, 88 52, 88 80 C88 92, 80 100, 75 100Z"
      fill="none"
      stroke="hsl(38 100% 50% / 0.3)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    />
    {/* Right paisley (mirrored) */}
    <motion.path
      d="M160 100 C160 60, 140 20, 120 20 C130 30, 145 55, 145 80 C145 90, 155 100, 160 100Z"
      fill="none"
      stroke="hsl(24 95% 53% / 0.4)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
    />
    <motion.path
      d="M165 100 C165 55, 140 10, 120 10 C135 25, 152 52, 152 80 C152 92, 160 100, 165 100Z"
      fill="none"
      stroke="hsl(38 100% 50% / 0.3)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    />
    {/* Center lotus */}
    <motion.circle
      cx="120"
      cy="60"
      r="4"
      fill="hsl(24 95% 53% / 0.5)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    />
    {/* Lotus petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.ellipse
        key={angle}
        cx="120"
        cy="60"
        rx="3"
        ry="10"
        fill="none"
        stroke="hsl(24 95% 53% / 0.25)"
        strokeWidth="1"
        transform={`rotate(${angle} 120 60)`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
      />
    ))}
    {/* Decorative dots */}
    {[95, 105, 135, 145].map((x, i) => (
      <motion.circle
        key={x}
        cx={x}
        cy={95}
        r="1.5"
        fill="hsl(38 100% 50% / 0.4)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 + i * 0.1 }}
      />
    ))}
  </motion.svg>
);

export default IndianMotif;
