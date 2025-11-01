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
      // Convert to string and check both the path and the variable name
      const imageStr = String(image).toLowerCase();
      
      // In production, paths look like: /Portfolio/assets/anitrend-tool3-DydBbKXE.png
      // In dev, might be relative paths or module references
      // We need to check the actual path string that gets rendered
      
      // Check for long screenshot FIRST (priority check)
      // Look for patterns in built/hashed filenames
      const hasLong = imageStr.includes('long-screenshot') || 
                      imageStr.includes('longscreenshot');
      const hasLongAndScreenshot = imageStr.includes('long') && imageStr.includes('screenshot');
      const hasAnitrendLong = imageStr.includes('anitrend-long');
      
      const isLong = hasLong || hasLongAndScreenshot || hasAnitrendLong;
      
      // Check for icons (tool or feature images) - these are SMALL icon files
      // Production paths: /Portfolio/assets/anitrend-tool3-DydBbKXE.png
      // MUST catch: anitrend-tool1, anitrend-tool2, anitrend-tool3, anitrend-feature1, etc.
      // Use multiple checks to ensure we catch them
      const hasTool = imageStr.includes('tool') || imageStr.indexOf('tool') !== -1;
      const hasFeature = imageStr.includes('feature') || imageStr.indexOf('feature') !== -1;
      const hasIcon = imageStr.includes('icon') || imageStr.indexOf('icon') !== -1;
      
      // Force icon detection - ANY mention of tool/feature/icon = icon
      // Also check for patterns like "tool1", "feature2", "tool-3", etc.
      const hasToolFeaturePattern = /tool\d|feature\d|tool-\d|feature-\d/i.test(imageStr);
      const isIcon = hasTool || hasFeature || hasIcon || hasToolFeaturePattern;

      // Priority: long images > icons > regular
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
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {iconImages.map((image, index) => (
                  <div 
                    key={`icon-${index}`}
                    className="flex items-center justify-center p-3 bg-background rounded-lg border border-border/50 shadow-sm"
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${title} - Icon ${index + 1}`}
                      className="w-16 h-16 object-contain"
                      style={{ maxWidth: '64px', maxHeight: '64px', width: 'auto', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Render regular images in a grid - smaller size */}
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
                    className="rounded-lg overflow-hidden border border-border flex justify-center"
                  >
                    <ImageWithFallback 
                      src={image} 
                      alt={`${title} - Image ${index + 1}`}
                      className="max-w-2xl w-full h-auto object-contain"
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
