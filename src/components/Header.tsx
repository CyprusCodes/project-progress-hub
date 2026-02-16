import { Link } from "react-router-dom";
import noyanlarLogo from "@/assets/noyanlar-logo.png";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
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
              {t("projects")}
            </Link>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {t("about")}
            </a>
            <a href="mailto:info@noyanlar.com" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              {t("contact")}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${language === "tr"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${language === "en"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile language switcher */}
          <div className="flex md:hidden items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setLanguage("tr")}
              className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${language === "tr"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${language === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
