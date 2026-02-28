import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">N</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">Naradha World</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Log In
          </a>
          <a href="#cta" className="btn-gradient text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-sm">
            Book Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground py-2 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="btn-gradient text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2">
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
