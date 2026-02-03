import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CalendarCheck, Building2, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import MonthlyProgressItem from "@/components/MonthlyProgressItem";
import { Project } from "@/data/projects";
import { fetchProjectBySlug } from "@/lib/api";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) return;
      try {
        const data = await fetchProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

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

        {/* Blocks and Delivery Dates */}
        {
          project.blocks && project.blocks.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Blok Teslim Tarihleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.blocks.map((block, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-4 shadow-sm border border-border/50 flex justify-between items-center hover:shadow-md transition-shadow">
                    <span className="font-medium text-lg">{block.block_name}</span>
                    <span className="text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full text-sm">
                      {block.estimated_delivery_date}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )
        }

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Güncel Fotoğraflar
          </h2>
          <ImageSlider images={project.gallery} />
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Proje Hakkında
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
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
      </main >


      <Footer />
    </div >
  );
};

export default ProjectDetail;
