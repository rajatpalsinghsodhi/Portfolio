import { useEffect, useRef, ReactNode } from "react";

interface ResponsiveFigmaFrameProps {
  children: ReactNode;
  baseWidth?: number;
}

export function ResponsiveFigmaFrame({ children, baseWidth = 1920 }: ResponsiveFigmaFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scale = Math.min(1, containerWidth / baseWidth);
        containerRef.current.style.setProperty('--frame-scale', scale.toString());
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [baseWidth]);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-[16/9] relative overflow-hidden bg-black"
    >
      <div 
        className="absolute top-0 left-0 origin-top-left"
        style={{ 
          transform: 'scale(var(--frame-scale, 1))',
          width: '1920px',
          height: '1080px',
          transformOrigin: 'top left'
        }}
      >
        {children}
      </div>
    </div>
  );
}
