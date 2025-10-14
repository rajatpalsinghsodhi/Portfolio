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
          <div className={`grid gap-4 mb-6 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-border">
                <ImageWithFallback 
                  src={image} 
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
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
