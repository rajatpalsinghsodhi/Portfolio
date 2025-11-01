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
            {images.map((image, index) => {
              // Check if image is marked as long (contains "long" or "long-screenshot" in path/filename)
              // Also check for common patterns in built assets (hashed filenames)
              const imageStr = String(image);
              const isLongImage = imageStr.toLowerCase().includes('long-screenshot') || 
                                  imageStr.toLowerCase().includes('longscreenshot') ||
                                  imageStr.toLowerCase().includes('anitrend-long');
              // Check if image is an icon/tool (contains "tool" in path/filename)
              const isIcon = imageStr.toLowerCase().includes('tool') || 
                           imageStr.toLowerCase().includes('icon') || 
                           imageStr.toLowerCase().includes('-tool');
              
              // For long images, render in full-width scrollable container
              if (isLongImage) {
                return (
                  <div 
                    key={index} 
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
                          alt={`${title} - Image ${index + 1}`}
                          className="w-full h-auto block"
                          style={{ display: 'block', width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
              
              // For regular images, use grid layout
              return (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden border border-border ${
                    isIcon
                      ? 'flex justify-center items-center p-4 bg-muted/30 inline-block'
                      : ''
                  }`}
                >
                  <ImageWithFallback 
                    src={image} 
                    alt={`${title} - Image ${index + 1}`}
                    className={
                      isIcon 
                        ? 'w-20 h-20 object-contain' 
                        : 'w-full h-auto object-cover'
                    }
                  />
                </div>
              );
            })}
            {/* Grid container for non-long images */}
            {images.filter(img => {
              const imgStr = String(img).toLowerCase();
              return !imgStr.includes('long-screenshot') && !imgStr.includes('longscreenshot') && !imgStr.includes('anitrend-long');
            }).length > 1 && (
              <div className={`grid gap-4 ${
                images.filter(img => {
                  const imgStr = String(img).toLowerCase();
                  return !imgStr.includes('long-screenshot') && !imgStr.includes('longscreenshot') && !imgStr.includes('anitrend-long');
                }).length === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {images.map((image, index) => {
                  const imageStr = String(image).toLowerCase();
                  const isLongImage = imageStr.includes('long-screenshot') || 
                                      imageStr.includes('longscreenshot') ||
                                      imageStr.includes('anitrend-long');
                  const isIcon = imageStr.includes('tool') || 
                               imageStr.includes('icon') || 
                               imageStr.includes('-tool');
                  
                  // Skip long images (already rendered above)
                  if (isLongImage) return null;
                  
                  return (
                    <div 
                      key={index} 
                      className={`rounded-lg overflow-hidden border border-border ${
                        isIcon
                          ? 'flex justify-center items-center p-4 bg-muted/30'
                          : ''
                      }`}
                    >
                      <ImageWithFallback 
                        src={image} 
                        alt={`${title} - Image ${index + 1}`}
                        className={
                          isIcon 
                            ? 'w-20 h-20 object-contain' 
                            : 'w-full h-auto object-cover'
                        }
                      />
                    </div>
                  );
                })}
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
