import { Link } from "react-router-dom";
import { Building2, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-muted-foreground border-b border-border/30">
          <a href="tel:+905338888888" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            +90 533 888 88 88
          </a>
          <a href="mailto:info@noyanlar.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3 h-3" />
            info@noyanlar.com
          </a>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/50 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                Noyanlar
              </span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                Group of Companies
              </span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Projeler
            </Link>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Hakkımızda
            </a>
            <a href="mailto:info@noyanlar.com" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              İletişim
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
