import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface InteractionProjectCardProps {
  title: string;
  description: string;
  role: string;
  duration: string;
  tools: string[];
  image: string;
  onViewDetails?: () => void;
  index?: number;
}

export function InteractionProjectCard({ 
  title, 
  description, 
  role, 
  duration, 
  tools, 
  image, 
  onViewDetails,
  index = 0
}: InteractionProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <ImageWithFallback 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="flex gap-4 text-muted-foreground mt-2">
            <span>{role}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
          <CardDescription className="mt-4">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary">{tool}</Badge>
            ))}
          </div>
          {onViewDetails && (
            <Button variant="outline" className="w-full" onClick={onViewDetails}>
              View Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
