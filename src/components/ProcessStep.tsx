import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoPlayer } from "./VideoPlayer";

interface ProcessStepProps {
  title: string;
  description: string;
  images?: string[];
  videos?: { src: string; poster?: string }[];
  content?: React.ReactNode;
}

export function ProcessStep({ title, description, images, videos, content }: ProcessStepProps) {
  // Separate images into categories
  const categorizeImages = (images: string[]) => {
    const longImages: string[] = [];
    const iconImages: string[] = [];
    const regularImages: string[] = [];

    images.forEach((image) => {
      const imageStr = String(image).toLowerCase();
      
      // Check for long screenshot - check for patterns in hashed filenames too
      // Built assets will be like: anitrend-long-screenshot-MF6FCXOJ.png
      // So we check for "long" + "screenshot" appearing together or separately
      const isLong = imageStr.includes('long-screenshot') || 
                     imageStr.includes('longscreenshot') ||
                     (imageStr.includes('long') && imageStr.includes('screenshot')) ||
                     imageStr.includes('anitrend-long');
      
      // Check for icons (tool or feature images) - these are small icon files
      const isIcon = imageStr.includes('tool') || 
                     imageStr.includes('feature') ||
                     imageStr.includes('icon') ||
                     imageStr.includes('-tool') ||
                     imageStr.includes('-feature');

      if (isLong) {
        longImages.push(image);
      } else if (isIcon) {
        iconImages.push(image);
      } else {
        regularImages.push(image);
      }
    });

    return { longImages, iconImages, regularImages };
  };

  const { longImages, iconImages, regularImages } = images ? categorizeImages(images) : { longImages: [], iconImages: [], regularImages: [] };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-muted-foreground">{description}</p>
        
        {content && <div className="mb-6">{content}</div>}
        
        {images && images.length > 0 && (
          <div className="mb-6 space-y-4">
            {/* Render long images first in scrollable containers */}
            {longImages.map((image, index) => (
              <div 
                key={`long-${index}`}
                className="w-full rounded-lg border-2 border-primary/20 overflow-hidden bg-gradient-to-b from-muted/40 to-muted/20 shadow-xl"
              >
                <div className="relative">
                  <div className="sticky top-0 z-20 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md px-4 py-2 border-b border-border/50 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="animate-bounce">↓</span>
                      <span>Scroll down to explore</span>
                      <span className="animate-bounce">↓</span>
                    </div>
                  </div>
                  <div 
                    className="overflow-y-auto scrollbar-thin"
                    style={{ 
                      maxHeight: '600px',
                      overflowY: 'auto',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${title} - Long Screenshot ${index + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Render icons as small centered icons */}
            {iconImages.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-muted/20 rounded-lg border border-border">
                {iconImages.map((image, index) => (
                  <div 
                    key={`icon-${index}`}
                    className="flex items-center justify-center p-2 bg-background rounded-lg border border-border/50"
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${title} - Icon ${index + 1}`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Render regular images in a grid */}
            {regularImages.length > 0 && (
              <div className={`grid gap-4 ${
                regularImages.length === 1 
                  ? 'grid-cols-1' 
                  : regularImages.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {regularImages.map((image, index) => (
                  <div 
                    key={`regular-${index}`}
                    className="rounded-lg overflow-hidden border border-border"
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {videos && videos.length > 0 && (
          <div className={`grid gap-4 ${videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
            {videos.map((video, index) => (
              <VideoPlayer 
                key={index}
                src={video.src}
                poster={video.poster}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
