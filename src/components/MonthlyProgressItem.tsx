import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { MonthlyProgress } from "@/data/projects";
import ImageGallery from "./ImageGallery";

interface MonthlyProgressItemProps {
  progress: MonthlyProgress;
}

const MonthlyProgressItem = ({ progress }: MonthlyProgressItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4">
      {/* Month Cover */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <img 
          src={progress.coverImage} 
          alt={`${progress.month} ${progress.year}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        
        {/* Month Label */}
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-wide">
            {progress.month.toUpperCase()} {progress.year}
          </h3>
        </div>
        
        {/* Expand Indicator */}
        <div className="absolute bottom-6 right-6">
          <div className={`w-12 h-12 rounded-full border-2 border-primary-foreground flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </button>

      {/* Expanded Gallery */}
      {isExpanded && (
        <div className="mt-4 animate-accordion-down">
          <ImageGallery images={progress.images} />
        </div>
      )}
    </div>
  );
};

export default MonthlyProgressItem;
