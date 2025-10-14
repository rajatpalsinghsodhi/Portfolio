import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Target, Zap, Brain, Heart, TrendingUp, BarChart2, MessageSquare, Sparkles, Award, Smile } from "lucide-react";

interface PersonaCardProps {
  name: string;
  image: string;
  demographics: {
    age: number;
    gender: string;
    location: string;
    occupation: string;
  };
  background: {
    education: string;
    experience: string;
  };
  personalInfo: string[];
  goals: string[];
  motivations: string[];
  mentalState: string[];
  needs: {
    title: string;
    description: string;
  }[];
  emotions: {
    title: string;
    description: string;
    why: string;
  }[];
}

const emotionIcons: Record<string, any> = {
  "Hope": Heart,
  "Anticipation": TrendingUp,
  "Confidence": Award,
  "Pride": Sparkles,
  "Inspiration": Zap,
  "Satisfaction": Smile
};

const needIcons: Record<string, any> = {
  "Chart Literacy": BarChart2,
  "Need for Quantitative Accuracy": Target,
  "Amount of Detail Desired": MessageSquare,
  "Annotations and Supporting Information": MessageSquare,
  "Display Specifics": Sparkles,
  "Tone/Approach": Brain
};

export function PersonaCard({ 
  name, 
  image, 
  demographics, 
  background, 
  personalInfo, 
  goals, 
  motivations,
  mentalState,
  needs,
  emotions
}: PersonaCardProps) {
  return (
    <div className="space-y-6">
      {/* Header with image and basic info */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-[300px_1fr] gap-6">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback 
                  src={image} 
                  alt={`${name} - User Persona`}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full">
                <p className="text-center">{name}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-primary">Demographics</h4>
                <ul className="space-y-1">
                  <li><strong>Age:</strong> {demographics.age}</li>
                  <li><strong>Gender:</strong> {demographics.gender}</li>
                  <li><strong>Location:</strong> {demographics.location}</li>
                  <li><strong>Occupation:</strong> {demographics.occupation}</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3 text-primary">Background</h4>
                <ul className="space-y-1">
                  <li><strong>Education:</strong> {background.education}</li>
                  <li><strong>Work Experience:</strong> {background.experience}</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>About Jamie</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {personalInfo[0]}
          </p>
        </CardContent>
      </Card>

      {/* Goals and Motivations */}
      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Goals & Motivations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Maximize financial returns from cryptocurrency investments and stay ahead of market trends through 
            real-time data tracking. She values tools that help analyze vast amounts of data in an easily 
            digestible format to make timely decisions.
          </p>
        </CardContent>
      </Card>

      {/* Mental State - Condensed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Mental State While Trading
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Excited about new trends</Badge>
            <Badge variant="secondary">Energized by innovation</Badge>
            <Badge variant="secondary">Cautious with new concepts</Badge>
            <Badge variant="secondary">Eager to refine strategies</Badge>
            <Badge variant="secondary">Can feel overwhelmed</Badge>
          </div>
        </CardContent>
      </Card>

      {/* User Needs and Capabilities - Condensed with Icons */}
      <Card>
        <CardHeader>
          <CardTitle>User Needs & Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {needs.slice(0, 4).map((need, index) => {
              const Icon = needIcons[need.title] || Target;
              return (
                <div key={index} className="flex gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">{need.title}</h4>
                    <p className="text-muted-foreground">
                      {need.description.length > 100 
                        ? need.description.substring(0, 100) + "..." 
                        : need.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Psychographic Details - Positive Emotions - Visual Cards */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Emotional Drivers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {emotions.map((emotion, index) => {
              const Icon = emotionIcons[emotion.title] || Heart;
              return (
                <div key={index} className="bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <h4 className="text-primary">{emotion.title}</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {emotion.why}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
