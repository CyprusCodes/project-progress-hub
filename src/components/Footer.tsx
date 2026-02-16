import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="tel:+905338888888"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +90 533 888 88 88
            </a>
            <a
              href="mailto:info@noyanlar.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@noyanlar.com
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Noyanlar Group of Companies. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
