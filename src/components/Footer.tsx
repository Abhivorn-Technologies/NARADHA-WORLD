import { Linkedin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg btn-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">N</span>
            </div>
            <span className="font-display font-bold text-foreground">Naradha World</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered voice and WhatsApp automation for modern enterprises.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Product</h4>
          <ul className="space-y-2.5">
            {["Features", "Pricing", "Use Cases", "How It Works"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Company</h4>
          <ul className="space-y-2.5">
            {["About", "Contact", "Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Connect</h4>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors">
              <Linkedin size={16} className="text-muted-foreground" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors">
              <MessageCircle size={16} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Naradha World. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
