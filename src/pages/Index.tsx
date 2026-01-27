import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-xl md:text-2xl font-medium text-foreground mb-2">
            Noyanlar İnşaat İlerlemeleri
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Noyanlar Construction Progress
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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

export default Index;
