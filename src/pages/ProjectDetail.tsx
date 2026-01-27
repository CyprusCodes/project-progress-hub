import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CalendarCheck } from "lucide-react";
import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import MonthlyProgressItem from "@/components/MonthlyProgressItem";
import WaveDivider from "@/components/WaveDivider";
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
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Projeler</span>
        </Link>

        {/* Project Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {project.name}
        </h1>

        {/* Project Info Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
            <div 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {project.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col gap-3 text-right lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 border-b border-border pb-3">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Yer</span>
                </div>
                <span className="text-foreground font-medium">{project.location}</span>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 border-b border-border pb-3">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Başlangıç Tarihi</span>
                </div>
                <span className="text-foreground font-medium">{project.startDate}</span>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 border-b border-border pb-3">
                <div className="flex items-center gap-2 text-primary">
                  <CalendarCheck className="w-4 h-4" />
                  <span className="text-sm font-medium">Bitiş Tarihi</span>
                </div>
                <span className="text-foreground font-medium">{project.endDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Update Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-6">
          İnşaat İlerlemeleri Son Güncelleme: {project.latestUpdate}
        </h2>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={project.monthlyProgress[0]?.coverImage || project.heroImage} 
            alt={`${project.name} - Son güncelleme`}
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          <ImageGallery images={project.gallery} columns={4} />
        </div>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
            Proje Hakkında
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {project.descriptionTr}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <p className="text-muted-foreground">
              Daha fazla bilgi için bizimle{" "}
              <a href="mailto:info@noyanlar.com" className="text-primary hover:underline">
                iletişime
              </a>{" "}
              geçin.
            </p>
          </div>
        </section>

        <WaveDivider />

        {/* Monthly Progress Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Proje İnşaatı İlerleme Geçmişi
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {project.monthlyProgress.map((progress, index) => (
              <MonthlyProgressItem 
                key={`${progress.month}-${progress.year}-${index}`} 
                progress={progress} 
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Noyanlar Group of Companies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
