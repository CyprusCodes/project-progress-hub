import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.slug}`} 
      className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative flex h-48 md:h-56 lg:h-64">
        {/* Logo Section */}
        <div 
          className="w-1/4 flex items-center justify-center p-4"
          style={{ backgroundColor: 'hsl(0 0% 92%)' }}
        >
          <div className="text-center">
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-2 flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {project.name.charAt(0)}
              </span>
            </div>
            <span className="text-xs md:text-sm font-medium text-foreground block leading-tight">
              {project.name.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className="w-3/4 relative overflow-hidden">
          <img 
            src={project.heroImage} 
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay with project name */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              background: `linear-gradient(to right, ${project.color}90, ${project.color}70)` 
            }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground tracking-wide text-center px-4 drop-shadow-lg">
              {project.name.toUpperCase()}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
