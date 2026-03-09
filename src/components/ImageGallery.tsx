import { useState, useRef, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.3;

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    resetZoom();
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    resetZoom();
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
      resetZoom();
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
      resetZoom();
    }
  };

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    setZoom(prev => {
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + delta));
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  }, []);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container || selectedIndex === null) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [handleWheel, selectedIndex]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [zoom, pan]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPan({ x: panStart.current.x + dx, y: panStart.current.y + dy });
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

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
              src={getOptimizedImageUrl(image, "gallery-thumbnail")}
              alt={`Fotoğraf ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-foreground/95 border-none rounded-2xl overflow-hidden">
          <div className="relative flex flex-col h-[95vh]">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>

            {zoom > 1 && (
              <button
                onClick={resetZoom}
                className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground text-xs font-medium transition-colors backdrop-blur-sm"
              >
                {Math.round(zoom * 100)}% — Reset
              </button>
            )}

            <div
              ref={imageContainerRef}
              className="flex-1 flex items-center justify-center overflow-hidden"
              style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              {selectedIndex !== null && (
                <img
                  src={getOptimizedImageUrl(images[selectedIndex], "gallery-lightbox")}
                  alt={`Fotoğraf ${selectedIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain select-none transition-transform duration-150"
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  }}
                  draggable={false}
                />
              )}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-primary-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-primary-foreground" />
                </button>
              </>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent z-10">
              <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      resetZoom();
                    }}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${selectedIndex === index ? "ring-2 ring-primary scale-110" : "opacity-60 hover:opacity-100"}`}
                  >
                    <img src={getOptimizedImageUrl(image, "gallery-thumbnail")} alt="" className="w-full h-full object-cover" />
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
