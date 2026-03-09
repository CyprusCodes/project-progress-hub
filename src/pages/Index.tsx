import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogGroupCard from "@/components/LogGroupCard";
import { LogGroup } from "@/data/projects";
import { fetchLogGroups } from "@/lib/api";
import { Building2, Award, Users, TrendingUp, Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();
  const [logGroups, setLogGroups] = useState<LogGroup[]>([]);
  const [loading, setLoading] = useState(true);

  const stats = [
    { icon: Building2, value: "28+", label: t("completedProjects") },
    { icon: Users, value: "10,000+", label: t("happyCustomers") },
    { icon: Award, value: "53", label: t("yearsExperience") },
    { icon: TrendingUp, value: "15", label: t("ongoingProjects") },
  ];

  useEffect(() => {
    const loadLogGroups = async () => {
      try {
        const data = await fetchLogGroups();
        if (data && data.length > 0) {
          setLogGroups(data);
        }
      } catch (error) {
        console.error("Error loading log groups:", error);
      } finally {
        setLoading(false);
      }
    };
    loadLogGroups();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("heroTitle1")}
              <span className="text-primary block">{t("heroTitle2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {t("heroDescription")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                {t("exploreProjects")}
              </a>
              <a
                href="https://wa.me/905338243370"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all"
              >
                {t("contactUs")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Log Groups Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("activeProjects")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("activeProjectsDesc")}
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              logGroups.map((logGroup, index) => (
                <LogGroupCard key={logGroup.id || logGroup.slug} logGroup={logGroup} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {t("ctaDescription")}
          </p>
          <a
            href="https://wa.me/905338243370"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-all shadow-xl"
          >
            {t("freeCounseling")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
