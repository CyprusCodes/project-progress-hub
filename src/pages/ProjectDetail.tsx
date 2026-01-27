import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CalendarCheck, Building2, Share2, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import MonthlyProgressItem from "@/components/MonthlyProgressItem";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Proje bulunamadı</h1>
          <Link to="/" className="text-primary hover:underline">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Tüm Projeler</span>
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-primary-foreground mb-4"
                  style={{ backgroundColor: project.color }}
                >
                  {project.location}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                  {project.name}
                </h1>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </button>
                <button className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Share2 className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-6 relative z-10">
        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Konum</p>
                <p className="font-semibold text-foreground">{project.location}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Başlangıç</p>
                <p className="font-semibold text-foreground">{project.startDate}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tahmini Bitiş</p>
                <p className="font-semibold text-foreground">{project.endDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Update Banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Canlı Güncelleme
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Son Güncelleme: {project.latestUpdate}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Building2 className="w-5 h-5" />
              <span>{project.monthlyProgress.length} aylık ilerleme kaydı</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Güncel Fotoğraflar
          </h2>
          <ImageGallery images={project.gallery} />
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Proje Hakkında
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Türkçe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.descriptionTr}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">English</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Daha fazla bilgi için{" "}
                <a href="mailto:info@noyanlar.com" className="text-primary font-medium hover:underline">
                  info@noyanlar.com
                </a>{" "}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Monthly Progress Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              İnşaat İlerleme Geçmişi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projenin başlangıcından bu yana tüm aylık güncellemeleri görüntüleyin. 
              Her ay için detaylı fotoğraf galerisi mevcuttur.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {project.monthlyProgress.map((progress, index) => (
              <MonthlyProgressItem 
                key={`${progress.month}-${progress.year}-${index}`} 
                progress={progress}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Bu Projede Yatırım Yapmak İster Misiniz?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Size özel fiyatlar ve ödeme planları için hemen bizimle iletişime geçin.
            </p>
            <a 
              href="mailto:info@noyanlar.com" 
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg"
            >
              Bilgi Talep Et
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
