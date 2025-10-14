interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:brightness-105`}
    />
  );
}
