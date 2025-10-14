import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DeviceMockupProps {
  src: string;
  alt: string;
  device: "laptop" | "mobile";
}

export function DeviceMockup({ src, alt, device }: DeviceMockupProps) {
  if (device === "laptop") {
    return (
      <div className="w-full max-w-4xl mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative bg-slate-800 rounded-t-lg p-2 pb-0">
          {/* Laptop notch/camera */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-900 rounded-b-lg"></div>
          
          {/* Screen */}
          <div className="bg-white rounded-t overflow-hidden border-2 border-slate-700">
            <ImageWithFallback 
              src={src} 
              alt={alt}
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Laptop base */}
        <div className="relative">
          <div className="h-4 bg-slate-800 rounded-b-xl"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-t"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-900 rounded-b-2xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden border-4 border-slate-800">
          <ImageWithFallback 
            src={src} 
            alt={alt}
            className="w-full h-auto"
          />
        </div>
        
        {/* Home button area */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
}
