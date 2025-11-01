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
              // Check if image is marked as long (contains "long" in filename or is anitrend-long-screenshot)
              const isLongImage = image.includes('long-screenshot') || image.includes('long');
              // Check if image is an icon/tool (contains "tool" in path/filename)
              const isIcon = image.includes('tool') || image.includes('icon') || image.includes('-tool');
              
              // For long images, render in full-width scrollable container
              if (isLongImage) {
                return (
                  <div 
                    key={index} 
                    className="w-full rounded-lg border border-border overflow-hidden bg-muted/20"
                  >
                    <div className="max-h-[600px] overflow-y-auto scrollbar-thin">
                      <ImageWithFallback 
                        src={image} 
                        alt={`${title} - Image ${index + 1}`}
                        className="w-full h-auto"
                      />
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
            {images.filter(img => !img.includes('long-screenshot') && !img.includes('long')).length > 1 && (
              <div className={`grid gap-4 ${
                images.filter(img => !img.includes('long-screenshot') && !img.includes('long')).length === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {images.map((image, index) => {
                  const isLongImage = image.includes('long-screenshot') || image.includes('long');
                  const isIcon = image.includes('tool') || image.includes('icon') || image.includes('-tool');
                  
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
