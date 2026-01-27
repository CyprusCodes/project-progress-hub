import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import noyanlarLogo from "@/assets/noyanlar-logo.png";

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
          <Link to="/" className="flex items-center group">
            <img 
              src={noyanlarLogo} 
              alt="Noyanlar Group of Companies" 
              className="h-10 md:h-12 w-auto"
            />
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
