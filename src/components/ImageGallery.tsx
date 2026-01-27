import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img 
              src={image} 
              alt={`Fotoğraf ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-6xl w-full p-0 bg-foreground/95 border-none rounded-2xl overflow-hidden">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>

            {/* Image */}
            {selectedIndex !== null && (
              <img 
                src={images[selectedIndex]} 
                alt={`Fotoğraf ${selectedIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-primary-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-primary-foreground" />
                </button>
              </>
            )}

            {/* Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
              <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${selectedIndex === index ? 'ring-2 ring-primary scale-110' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
