import { useState } from "react";
import { ChevronDown, Images, Calendar } from "lucide-react";
import { MonthlyProgress } from "@/data/projects";
import ImageGallery from "./ImageGallery";

interface MonthlyProgressItemProps {
  progress: MonthlyProgress;
  index: number;
}

const MonthlyProgressItem = ({ progress, index }: MonthlyProgressItemProps) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />
      
      <div className="relative pl-0 lg:pl-20 mb-6">
        {/* Timeline dot */}
        <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 hidden lg:block" />
        
        {/* Month Card */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-2xl"
        >
          <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${isExpanded ? 'ring-2 ring-primary shadow-xl' : 'hover:shadow-lg'}`}>
            {/* Background Image */}
            <div className="relative h-48 md:h-64">
              <img 
                src={progress.coverImage} 
                alt={`${progress.month} ${progress.year}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{progress.year}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    {progress.month}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 text-primary-foreground/80">
                    <Images className="w-4 h-4" />
                    <span className="text-sm">{progress.images.length} fotoğraf</span>
                  </div>
                </div>
                
                {/* Expand Button */}
                <div className={`w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isExpanded ? 'rotate-180 bg-primary' : 'hover:bg-primary-foreground/30'}`}>
                  <ChevronDown className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Expanded Gallery */}
        <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-secondary/30 rounded-2xl p-4 md:p-6">
            <ImageGallery images={progress.images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyProgressItem;
