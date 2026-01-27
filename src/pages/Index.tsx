import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Building2, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "15+", label: "Tamamlanan Proje" },
  { icon: Users, value: "5000+", label: "Mutlu Müşteri" },
  { icon: Award, value: "25+", label: "Yıllık Deneyim" },
  { icon: TrendingUp, value: "3", label: "Devam Eden Proje" },
];

const Index = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Canlı İnşaat Takibi
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              İnşaat İlerlemelerinizi
              <span className="text-primary block">Takip Edin</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Noyanlar Group of Companies olarak projelerimizin her aşamasını şeffaf bir şekilde paylaşıyoruz. 
              Yatırımınızın gelişimini aylık güncellemelerle takip edin.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                Projeleri İncele
              </a>
              <a 
                href="mailto:info@noyanlar.com" 
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all"
              >
                Bize Ulaşın
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

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Aktif Projelerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kıbrıs'ın en prestijli lokasyonlarında hayata geçirdiğimiz projelerimizi keşfedin
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Hayalinizdeki Eve Bir Adım Daha Yaklaşın
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Projelerimiz hakkında detaylı bilgi almak ve size özel fırsatlardan haberdar olmak için bizimle iletişime geçin.
          </p>
          <a 
            href="mailto:info@noyanlar.com" 
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-all shadow-xl"
          >
            Ücretsiz Danışmanlık Alın
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
