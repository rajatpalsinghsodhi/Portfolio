interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster, 
  className = "",
  controls = true,
  autoplay = false,
  loop = false,
  muted = false
}: VideoPlayerProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${className}`}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className="w-full h-auto"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
