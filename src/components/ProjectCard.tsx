import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Project } from "@/data/projects";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <Link to={`/project/${project.slug}`} className="group block">
      <div
        className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50`}
      >
        {/* Image Section */}
        <div className="relative lg:w-3/5 h-72 lg:h-[400px] overflow-hidden">
          <img
            src={getOptimizedImageUrl(project.heroImage, "card")}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

          {/* Project badge */}
          <div
            className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground backdrop-blur-sm"
            style={{ backgroundColor: `${project.color}` }}
          >
            {project.location}
          </div>

          {/* Arrow indicator */}
          <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <ArrowUpRight className="w-6 h-6 text-primary-foreground group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
          {/* Logo circle */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden relative"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
            }}
          >
            {project.iconUrl ? (
              <img
                src={getOptimizedImageUrl(project.iconUrl, "icon")}
                alt={`${project.name} icon`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-primary-foreground">
                {project.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            )}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
            {project.name}
          </h2>

          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.descriptionTr}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {project.location}
            </div>
            {project.startDate}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            {project.finishDate}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <span className="text-sm text-primary font-medium flex items-center gap-2">
              Son Güncelleme: {project.latestUpdate}
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
