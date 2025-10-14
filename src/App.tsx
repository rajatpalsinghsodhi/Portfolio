import { useState, useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { InteractionProjectCard } from "./components/InteractionProjectCard";
import { ProcessStep } from "./components/ProcessStep";
import { ThemeToggle } from "./components/ThemeToggle";
import { DeviceMockup } from "./components/DeviceMockup";
import { PersonaCard } from "./components/PersonaCard";
import { ImageZoom } from "./components/ImageZoom";
import { PipelineDocumentation } from "./components/PipelineDocumentation";
import { IterationDocumentation } from "./components/IterationDocumentation";
import { Citations } from "./components/Citations";
import D31 from "./imports/D31";
import Frame85 from "./imports/Frame85";
import { Menu, X, Mail, Linkedin, ArrowRight, Lightbulb, Users, Palette, TrendingUp, BarChart3, RefreshCw, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import cryptoImage1 from "figma:asset/c9339c3ec67882a71f5353a9c36e1cae23408dcc.png";
import cryptoDetailView from "figma:asset/45a93cfd776fce778c7aea2c5f5af85770800dca.png";
import cryptoVolumeChart from "figma:asset/9b4a78e092bc0ec4828613eeffd6b5b1433e032d.png";
import cryptoListView from "figma:asset/20f7693b1aeffac2add949f93f6113618dc238f9.png";
import iterationInitial from "figma:asset/6823e8ef83bb0fad272e4800ea60f2d9c00d0f73.png";
import iterationFinal from "figma:asset/cdd591c5013f01d53ae698070df5c7789edeb42d.png";
import personaImage from "figma:asset/389d48c3df5ee8b67ef377543c9b31f0e430e2a6.png";
import envImage1 from "figma:asset/5fda8e1d17948fb955f5d9ed432af143334d228b.png";
import envImage2 from "figma:asset/fd5f2b26c76c1d10ad218851e7b0179243acb862.png";
import envImage3 from "figma:asset/40f2ffb621bc6d2b42794dc64feb80279cac1aa7.png";
import moodboard1 from "figma:asset/0934a5ab8a6a0dfb266ceb1f8cc6c5a907603f80.png";
import moodboard2 from "figma:asset/21e4efc7b877fa403826f54e380d7618e47a74ec.png";
import moodboard3 from "figma:asset/2386ceab0de3a2aea460ebe9be6058f516d31afe.png";
import moodboard4 from "figma:asset/abbc836bf404629aa5099c6287f593561da3b675.png";
import profilePhoto from "figma:asset/9acbba2f44a1f99786c2e7cd5b80c5130593c9b7.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProcessDetail, setShowProcessDetail] = useState(false);
  const [showPipelineDetails, setShowPipelineDetails] = useState(false);
  const [showIterationDetails, setShowIterationDetails] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const pipelineDetailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePipelineScale = () => {
      if (pipelineRef.current) {
        const containerWidth = pipelineRef.current.offsetWidth;
        const scale = Math.min(1, containerWidth / 1567);
        pipelineRef.current.style.setProperty('--pipeline-scale', scale.toString());
      }
    };

    updatePipelineScale();
    window.addEventListener('resize', updatePipelineScale);
    return () => window.removeEventListener('resize', updatePipelineScale);
  }, [showProcessDetail]);

  useEffect(() => {
    if (showPipelineDetails && pipelineDetailsRef.current) {
      setTimeout(() => {
        pipelineDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showPipelineDetails]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleViewProcess = () => {
    setShowProcessDetail(true);
    setTimeout(() => {
      scrollToSection("process");
    }, 100);
  };

  const projects = [
    {
      title: "Cryptocurrency Price Tracker",
      description: "A real-time cryptocurrency dashboard providing interactive market data, price tracking, and volume analysis. Built for both casual viewers and crypto enthusiasts.",
      role: "UX/UI Designer & Developer",
      duration: "10 weeks",
      tools: ["D3.js", "React", "Binance API", "Figma"],
      image: cryptoImage1,
      hasProcess: true
    },
    {
      title: "MediConnect - Healthcare Portal",
      description: "A redesign of a patient portal interface to improve accessibility and streamline the appointment booking process for users of all ages and technical abilities.",
      role: "Interaction Designer",
      duration: "6 weeks",
      tools: ["Sketch", "InVision", "UserTesting", "Illustrator"],
      image: "https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzYwMjkzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      hasProcess: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="cursor-pointer" onClick={() => scrollToSection("hero")}>
              Rajat Sodhi
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("philosophy")} className="hover:text-primary transition-colors">
                Philosophy
              </button>
              <button onClick={() => scrollToSection("work")} className="hover:text-primary transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contact
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              <button onClick={() => scrollToSection("philosophy")} className="text-left hover:text-primary transition-colors">
                Philosophy
              </button>
              <button onClick={() => scrollToSection("work")} className="text-left hover:text-primary transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Rajat Sodhi - Interaction Designer"
                  className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                />
              </div>
            </motion.div>
            
            {/* Hero Content */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="mb-4">Rajat Sodhi</h1>
              <h2 className="text-muted-foreground mb-6">Interaction Designer</h2>
              <p className="text-muted-foreground max-w-2xl mb-8">
                I create meaningful digital experiences that bridge the gap between human needs 
                and technology. Open to co-op opportunities where I can contribute to innovative projects.
              </p>
              <Button size="lg" onClick={() => scrollToSection("work")}>
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section id="philosophy" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Design Philosophy
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="mb-4">
                  As an <span className="relative inline-block px-2 -mx-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-blue-500/15 rounded"></span>
                    <span className="relative z-10 font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent" style={{
                      WebkitTextStroke: '0.5px rgba(var(--primary-rgb), 0.2)'
                    }}>
                      interaction designer
                    </span>
                  </span>, I believe that great design begins with empathy. 
                  Understanding the user's context, needs, and frustrations is the foundation of 
                  creating experiences that truly resonate. Design is not just about making things 
                  look beautiful—it's about solving problems and making technology more human.
                </p>
                <p className="mb-4">
                  I approach every project with a user-centered mindset, combining research, 
                  iteration, and collaboration to create solutions that are both functional and 
                  delightful. I believe in designing for inclusivity, ensuring that digital 
                  experiences are accessible to everyone regardless of their abilities or background.
                </p>
                <p>
                  My process is rooted in curiosity and continuous learning. I'm passionate about 
                  exploring new methodologies, challenging assumptions through testing, and refining 
                  designs based on real user feedback. Good design is never finished—it evolves 
                  with the people who use it.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-2">User-Centered</h3>
                  <p className="text-muted-foreground">
                    Every decision is informed by user research and validated through testing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-2">Iterative</h3>
                  <p className="text-muted-foreground">
                    Embracing feedback and continuous refinement to create better solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Palette className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-2">Inclusive</h3>
                  <p className="text-muted-foreground">
                    Designing experiences that are accessible and welcoming to all users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Work
          </motion.h2>
          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of interaction design projects showcasing my approach to user research, 
            ideation, prototyping, and testing.
          </motion.p>
          
          {/* Grid structure allows for 6 projects total (2 shown + 4 placeholders) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <InteractionProjectCard 
                key={project.title} 
                {...project}
                index={index}
                onViewDetails={project.hasProcess ? handleViewProcess : undefined}
              />
            ))}
            
            {/* Placeholder cards for future projects - hidden initially */}
            {/* Uncomment these as you add more projects:
            <InteractionProjectCard 
              title="Project 3 Title"
              description="Brief description of your third project..."
              role="Your Role"
              duration="Timeline"
              tools={["Tool 1", "Tool 2"]}
              image="image-url"
            />
            <InteractionProjectCard 
              title="Project 4 Title"
              description="Brief description of your fourth project..."
              role="Your Role"
              duration="Timeline"
              tools={["Tool 1", "Tool 2"]}
              image="image-url"
            />
            <InteractionProjectCard 
              title="Project 5 Title"
              description="Brief description of your fifth project..."
              role="Your Role"
              duration="Timeline"
              tools={["Tool 1", "Tool 2"]}
              image="image-url"
            />
            <InteractionProjectCard 
              title="Project 6 Title"
              description="Brief description of your sixth project..."
              role="Your Role"
              duration="Timeline"
              tools={["Tool 1", "Tool 2"]}
              image="image-url"
            />
            */}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      {showProcessDetail && (
        <section id="process" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Project Process: Cryptocurrency Price Tracker</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A real-time cryptocurrency dashboard providing interactive market data, price tracking, 
                and volume analysis. Built for both casual viewers and crypto enthusiasts.
              </p>
              <div className="flex gap-2 justify-center mt-6 flex-wrap">
                <Badge variant="secondary" className="px-3 py-1">Cryptocurrency</Badge>
                <Badge variant="secondary" className="px-3 py-1">Real-time Data</Badge>
                <Badge variant="secondary" className="px-3 py-1">Interactive Charts</Badge>
                <Badge variant="secondary" className="px-3 py-1">D3.js</Badge>
              </div>
            </div>

            {/* Project Overview */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="mb-6">Project Overview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-3">Key Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p><strong>Real-Time Price List</strong></p>
                          <p className="text-muted-foreground">Live tracking of top cryptocurrencies with current prices and 24-hour changes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <BarChart3 className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p><strong>Interactive Charts</strong></p>
                          <p className="text-muted-foreground">Expandable price charts with multiple timeframes and volume analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <RefreshCw className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p><strong>Auto-Refreshing Data</strong></p>
                          <p className="text-muted-foreground">Market data updates every minute automatically</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Smartphone className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p><strong>Responsive Design</strong></p>
                          <p className="text-muted-foreground">Clean, intuitive interface that works seamlessly across all devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3">Who It's For</h4>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                      <li>Cryptocurrency investors tracking market movements</li>
                      <li>Day traders who need real-time price updates</li>
                      <li>Beginners learning about cryptocurrency trends</li>
                      <li>Finance enthusiasts interested in market data visualization</li>
                    </ul>
                    <div className="mt-6">
                      <h4 className="mb-3">Built With</h4>
                      <div className="flex flex-wrap gap-3">
                        {/* D3.js */}
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                          <div className="w-5 h-5 flex-shrink-0 relative">
                            <svg className="absolute inset-0 size-full" viewBox="0 0 213 213" fill="none">
                              <path d="M1 17V195.448H179.448L1 17Z" fill="url(#d3-paint0)" />
                              <path d="M17.6552 195.448V17L196.103 195.448H17.6552Z" fill="url(#d3-paint1)" />
                              <path d="M17.6552 17L196.103 195.448" stroke="url(#d3-paint2)" strokeWidth="47.5862" />
                              <defs>
                                <linearGradient id="d3-paint0" x1="81.3017" x2="106.879" y1="115.741" y2="141.319" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#F9A03C" />
                                  <stop offset="1" stopColor="#F7974E" />
                                </linearGradient>
                                <linearGradient id="d3-paint1" x1="103.905" x2="141.379" y1="71.7242" y2="109.198" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#B84E51" />
                                  <stop offset="1" stopColor="#F68E48" />
                                </linearGradient>
                                <linearGradient id="d3-paint2" x1="78.3276" x2="128.888" y1="76.4828" y2="127.638" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#F26D58" />
                                  <stop offset="1" stopColor="#F9A03C" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <span className="text-sm font-medium">D3.js</span>
                        </div>
                        
                        {/* React */}
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                          <svg width="20" height="20" viewBox="0 0 256 228" fill="none">
                            <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/>
                          </svg>
                          <span className="text-sm font-medium">React</span>
                        </div>
                        
                        {/* Binance API */}
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                          <svg width="20" height="20" viewBox="0 0 126.61 126.61" fill="none">
                            <path d="M38.73 53.2l24.59-24.58 24.6 24.6 14.3-14.31L63.32 0l-38.9 38.9zM0 63.31l14.3-14.3 14.31 14.3-14.31 14.3zM38.73 73.41l24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88zM98 63.31l14.3-14.3 14.31 14.3-14.31 14.3z" fill="#F3BA2F"/>
                            <path d="M77.83 63.3L63.32 48.78 52.59 59.51l-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z" fill="#F3BA2F"/>
                          </svg>
                          <span className="text-sm font-medium">Binance API</span>
                        </div>
                        
                        {/* Real-time Updates */}
                        <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                          <span className="text-sm font-medium">Real-time Updates</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Dashboard Link */}
                    <div className="mt-6">
                      <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 text-center">
                        <h4 className="mb-2 text-primary">🔗 Experience the Live Dashboard</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          Interact with real-time cryptocurrency data and explore all the features described above.
                        </p>
                        <a 
                          href="https://rajatpalsinghsodhi.github.io/dynamicclone/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                        >
                          View Live Dashboard
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Phase */}
            <ProcessStep 
              title="1. Research & User Needs Analysis"
              description="I began by researching the cryptocurrency market and understanding user needs. Through interviews with 8 crypto investors and traders, and analysis of existing platforms like CoinMarketCap and Binance, I identified key pain points: information overload, lack of customization, and difficulty comparing multiple cryptocurrencies at once."
              content={
                <div className="space-y-6">
                  <DeviceMockup src={cryptoImage1} alt="Cryptocurrency tracker desktop view" device="laptop" />
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="mb-2">Key User Insights:</h4>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                      <li>Users need quick access to real-time price data without refreshing manually</li>
                      <li>Visual representation of price trends is crucial for decision-making</li>
                      <li>Both novice and experienced users want clean, uncluttered interfaces</li>
                      <li>Mobile responsiveness is critical as many check prices on-the-go</li>
                    </ul>
                  </div>
                </div>
              }
            />

            {/* User Persona */}
            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">User Persona: Meet Jamie</CardTitle>
              </CardHeader>
              <CardContent>
                <PersonaCard 
                  name="Jamie"
                  image={personaImage}
                  demographics={{
                    age: 30,
                    gender: "Female",
                    location: "New York, USA",
                    occupation: "Crypto Investor"
                  }}
                  background={{
                    education: "Bachelor's degree in Economics",
                    experience: "5 years of trading in stocks and cryptocurrencies"
                  }}
                  personalInfo={[
                    "Jamie is passionate about the financial market and enjoys reading about market strategies and new financial technologies in her free time.",
                    "She prefers dynamic tools that allow her to access up-to-date data at her convenience, helping her stay competitive in her investments."
                  ]}
                  goals={[
                    "Jamie is motivated by the desire to maximize her financial returns from cryptocurrency investments and to stay ahead of market trends through real-time data tracking.",
                    "She values tools that help her analyze vast amounts of data in an easily digestible format to make timely decisions."
                  ]}
                  motivations={[
                    "Jamie is motivated by the desire to maximize her financial returns from cryptocurrency investments and to stay ahead of market trends through real-time data tracking.",
                    "She values tools that help her analyze vast amounts of data in an easily digestible format to make timely decisions."
                  ]}
                  mentalState={[
                    "Jamie is excited after a long day of talks with her peers about the latest trends in cryptocurrency but also feels mentally drained from the numerous discussions.",
                    "She is energized by new ideas that might revolutionize her investment strategies, especially as she continues to explore more innovative tools and techniques.",
                    "She can get overwhelmed by the noise of competing ideas and opinions, particularly when navigating market predictions in a rapidly changing environment.",
                    "Jamie is cautious and sometimes worried that embracing a new concept might invalidate her existing trading theories and strategies.",
                    "She is eager to refine her ideas, constantly seeking insights that will allow her to break through to new levels of understanding and open up opportunities for future exploration."
                  ]}
                  needs={[
                    {
                      title: "Chart Literacy",
                      description: "Jamie is highly literate in charts and graphing methods, as she frequently analyzes cryptocurrency trends and stock market charts. She needs visualizations that provide accurate and meaningful insights into complex data, such as price fluctuations and market behavior."
                    },
                    {
                      title: "Need for Quantitative Accuracy",
                      description: "Accuracy is crucial to Jamie. As a crypto investor, she needs data visualizations that are precise and trustworthy, offering real-time tracking with minimal error. Any discrepancies in the data could lead to financial losses."
                    },
                    {
                      title: "Amount of Detail Desired",
                      description: "Jamie prefers clear but detailed visualizations that show enough context to make informed decisions but doesn't want to be overwhelmed by excessive details. She appreciates seeing trends, patterns, and forecasts in a digestible way."
                    },
                    {
                      title: "Annotations and Supporting Information",
                      description: "Annotations are essential for Jamie. She relies on brief, insightful labels or tooltips to guide her through complex data points. The visualizations should highlight key metrics like the 24-hour change in price or the volume of trades."
                    },
                    {
                      title: "Display Specifics",
                      description: "Jamie's ideal display is clean, with intuitive layout and user-friendly features. She appreciates interactive features like hover effects or zoom functions to dive deeper into specific data points."
                    },
                    {
                      title: "Tone/Approach",
                      description: "The tone of the visualizations needs to be professional and straightforward, offering clarity and transparency. Jamie prefers a data-driven, analytical approach rather than over-simplification or unnecessary embellishments."
                    }
                  ]}
                  emotions={[
                    {
                      title: "Hope",
                      description: "Jamie needs to experience hope as she navigates the volatile cryptocurrency market. Hope fuels her belief that her strategies will succeed, and it pushes her to continue seeking better trading opportunities.",
                      why: "This positive emotion helps Jamie stay motivated through market dips, maintaining her long-term vision and persistence."
                    },
                    {
                      title: "Anticipation",
                      description: "Jamie experiences anticipation as she waits for the next market surge or for her portfolio to grow based on trends she's identified.",
                      why: "Anticipation keeps Jamie engaged with the market, driving her to monitor data constantly and make strategic decisions with a focus on potential gains."
                    },
                    {
                      title: "Confidence",
                      description: "Jamie must feel confident in her decisions and her ability to make accurate predictions based on real-time data and market analysis.",
                      why: "Confidence allows Jamie to take calculated risks and stick with her strategies even in moments of uncertainty, ensuring she doesn't falter in high-stakes situations."
                    },
                    {
                      title: "Pride",
                      description: "Jamie feels pride when her trading strategies yield successful outcomes. She takes pride in mastering data visualization tools and applying them to achieve financial growth.",
                      why: "Pride boosts Jamie's self-worth and reinforces her dedication to continuously improving her trading skills and market understanding."
                    },
                    {
                      title: "Inspiration",
                      description: "Jamie is inspired by new breakthroughs in cryptocurrency technologies and analytical methods. Innovations in dynamic data visualization inspire her to explore new tools and methods for enhancing her trading strategies.",
                      why: "Inspiration drives Jamie to keep learning and integrating cutting-edge techniques into her workflow, maintaining her edge in the competitive cryptocurrency market."
                    },
                    {
                      title: "Satisfaction",
                      description: "Jamie experiences satisfaction when her portfolio performs well, aligning with her trading predictions. The feeling of having met her goals reinforces her success and decision-making skills.",
                      why: "Satisfaction provides Jamie with the validation she needs to feel like her strategies are working, which fuels her drive to maintain and improve her trading approach."
                    }
                  ]}
                />
              </CardContent>
            </Card>

            {/* Use Case */}
            <Card className="mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Use Case</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Scenario */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="mb-3 text-primary">Scenario</h4>
                    <p className="text-muted-foreground">
                      Jamie, a cryptocurrency investor, needs to track real-time market data to make informed investment 
                      decisions. The data visualization provides an interactive dashboard that helps her monitor fluctuations 
                      in cryptocurrency prices, volume, and trends. The visualization is designed to present data in an 
                      easy-to-understand format with charts, graphs, and real-time updates that enable her to react quickly 
                      to market changes.
                    </p>
                  </div>
                  
                  {/* Context */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="mb-3 text-primary">Context</h4>
                    <p className="text-muted-foreground">
                      Jamie accesses the <em>Crypto Price Tracker</em> dashboard through her laptop. She primarily uses 
                      it to monitor key cryptocurrencies like Bitcoin and Ethereum, making decisions based on price 
                      fluctuations and trading volume. She interacts with the visualizations by adjusting the data filters, 
                      zooming in on specific timeframes, and analyzing the graphs for trends.
                    </p>
                  </div>
                </div>
                
                {/* Value */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="mb-3 text-primary">Value</h4>
                  <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                    <li><strong>Real-time Updates:</strong> Jamie can see live updates on the market, allowing her to make swift, data-driven decisions.</li>
                    <li><strong>Data Accuracy:</strong> The visualization ensures that the data is accurate and up-to-date, which is critical for her decision-making process in trading.</li>
                    <li><strong>User Control:</strong> Jamie can customize the dashboard to display data relevant to her investments and adjust the visualizations to focus on specific metrics.</li>
                    <li><strong>Ease of Use:</strong> The dashboard simplifies complex data into visual insights, making it easier for Jamie to understand market trends without feeling overwhelmed by numbers.</li>
                  </ul>
                </div>
                
                {/* Context Images */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <ImageZoom src={envImage3} alt="User context - working on laptop" className="rounded-lg shadow-md w-full h-64 object-cover" />
                  <ImageZoom src={envImage2} alt="User context - analyzing data" className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Environment & People */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-primary">Environment & People</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">What environment is your user in?</h4>
                      <p className="text-muted-foreground">
                        Jamie is likely to interact with the data visualization in a quiet, focused environment 
                        such as her home office, a dedicated trading space, or a cafe when she's on the go. 
                        She'll access the visualization using a laptop or desktop computer, where she can monitor real-time data.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">How long are users likely to spend?</h4>
                      <p className="text-muted-foreground">
                        Jamie is likely to spend short, focused bursts of time on the visualization, ranging from 
                        15 to 30 minutes at a time, especially when she needs to quickly review market trends or 
                        check portfolio performance.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">What technological constraints exist?</h4>
                      <p className="text-muted-foreground">
                        Jamie's workflow involves using web-based tools and software like Tableau or D3.js to 
                        visualize dynamic crypto data. She relies on internet connectivity for real-time data updates. 
                        Performance may be a factor if the system doesn't load data quickly enough during market volatility.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">How many people will be viewing it?</h4>
                      <p className="text-muted-foreground">
                        Jamie will primarily interact with the visualization individually, though it's possible that 
                        she might occasionally share her screen with colleagues or peers when discussing trends or strategies.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">Does it imply a community of stakeholders?</h4>
                      <p className="text-muted-foreground">
                        Yes, the visualization could be used within a broader crypto-investing community. Jamie may 
                        share the visualization or its insights with other investors, traders, or a forum group.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3 text-primary">Consumption vs. Creation?</h4>
                      <p className="text-muted-foreground">
                        Jamie primarily consumes the visualization rather than creating it. She uses the pre-built 
                        visualization to monitor real-time data and make informed decisions based on the insights 
                        presented, but she doesn't actively contribute to its development.
                      </p>
                    </div>
                    
                    {/* Environment Image */}
                    <ImageZoom src={envImage1} alt="User environment" className="rounded-lg shadow-md w-full h-auto object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media and Technology */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-primary">Media and Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="mb-4 text-muted-foreground">What mediums or software tools are used to present the data visualization?</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Left Column - Technology Details */}
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3">Digital Tools for Interactive Visualization</h4>
                      <p className="text-muted-foreground">
                        The primary medium for presenting the data visualization is a web-based platform where Jamie 
                        accesses the cryptocurrency price tracker. The data visualization is rendered using D3.js for 
                        dynamic data handling and advanced interactive features.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3">Online Dashboard</h4>
                      <p className="text-muted-foreground">
                        The visualization is presented as part of an interactive online information dashboard, which 
                        provides real-time updates on cryptocurrency prices, trends, and statistics. This allows Jamie 
                        to make informed trading decisions by viewing real-time data in a clear and accessible format.
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="mb-3">Laptop/Computer Interface</h4>
                      <p className="text-muted-foreground">
                        Jamie interacts with the visualization on her laptop or desktop computer, where she can easily 
                        explore and analyze the data through the interactive features provided by the web-based platform.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column - Mood Board */}
                  <div>
                    <h4 className="mb-4">Inspiration Mood Board</h4>
                    <div className="flex flex-col gap-4">
                      <ImageZoom src={moodboard1} alt="Design inspiration" className="rounded-lg shadow-md w-full h-auto object-cover" />
                      <ImageZoom src={moodboard2} alt="Design inspiration" className="rounded-lg shadow-md w-full h-auto object-cover" />
                      <ImageZoom src={moodboard3} alt="Design inspiration" className="rounded-lg shadow-md w-full h-auto object-cover" />
                      <ImageZoom src={moodboard4} alt="Design inspiration" className="rounded-lg shadow-md w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Architecture */}
            <ProcessStep 
              title="2. Information Architecture & Wireframing"
              description="I designed the information hierarchy to prioritize the most critical data: price, 24h change, and volume. The expandable chart system allows users to dive deeper into specific cryptocurrencies without leaving the main view. Low-fidelity wireframes established the grid-based layout for optimal scanability."
              content={
                <div className="space-y-6">
                  <DeviceMockup src={cryptoListView} alt="Cryptocurrency list view mobile" device="mobile" />
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="mb-2">Design Decisions:</h4>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                      <li>Card-based layout for each cryptocurrency improves scanability</li>
                      <li>Color-coded indicators (green/red) for quick visual understanding</li>
                      <li>Progressive disclosure: detailed charts appear on demand</li>
                      <li>Sticky header maintains context during scrolling</li>
                    </ul>
                  </div>
                </div>
              }
            />

            {/* System Architecture & Data Pipeline */}
            <ProcessStep 
              title="3. System Architecture & Data Pipeline"
              description="Before implementation, I mapped out the complete data flow from collection to visualization. This architecture diagram shows how data moves through the system: from Binance API collection, through HTML/JavaScript processing, to temporary cache storage, and finally to dynamic D3.js visualizations with automatic refresh cycles and user interaction points."
              content={
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-primary/20">
                    <div ref={pipelineRef} className="w-full mx-auto">
                      <Frame85 />
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="mb-3">Architecture Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-medium mb-2">Data Flow Stages:</p>
                        <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                          <li><strong>Goal:</strong> Visualize cryptocurrency market data in real-time</li>
                          <li><strong>Data Collection:</strong> Binance API provides reliable market data</li>
                          <li><strong>Processing:</strong> HTML/JavaScript parse and transform raw data</li>
                          <li><strong>Storage:</strong> Temporary caching for faster retrieval</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">User Interaction Loop:</p>
                        <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                          <li><strong>Dynamic Visualization:</strong> D3.js renders real-time updates</li>
                          <li><strong>Auto-Refresh:</strong> Data updates every 60 seconds automatically</li>
                          <li><strong>User Control:</strong> Filter by timeframe (1hr/24hr/7 days)</li>
                          <li><strong>Responsive Updates:</strong> Each filter triggers fresh data fetch</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Explore Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      size="lg" 
                      onClick={() => {
                        console.log("Button clicked! Current state:", showPipelineDetails);
                        setShowPipelineDetails(!showPipelineDetails);
                      }}
                      className="gap-2"
                    >
                      {showPipelineDetails ? (
                        <>
                          Hide Detailed Pipeline Explanation
                          <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Explore Data Pipeline in Detail
                          <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {/* Debug indicator */}
                  {showPipelineDetails && (
                    <div className="text-center py-2 text-sm text-muted-foreground">
                      State is now TRUE - content should be visible below
                    </div>
                  )}
                </div>
              }
            />

            {/* Detailed Pipeline Explanation - Shown on demand */}
            {showPipelineDetails && (
              <div ref={pipelineDetailsRef} className="mt-12 scroll-mt-20">
                <PipelineDocumentation />

                {/* Return to Top Button */}
                <div className="flex justify-center pt-8">
                  <Button 
                    variant="outline"
                    size="lg" 
                    onClick={() => setShowPipelineDetails(false)}
                    className="gap-2"
                  >
                    <ChevronUp className="w-5 h-5" />
                    Collapse Detailed View
                  </Button>
                </div>
              </div>
            )}

            {/* Visual Design & Prototyping */}
            <ProcessStep 
              title="4. Visual Design & Interactive Prototyping"
              description="Using Figma, I created high-fidelity mockups that emphasized data clarity and visual hierarchy. The design system features a clean, modern aesthetic with carefully chosen colors to represent positive/negative market changes. Interactive prototypes were built to test the chart expansion interactions and data refresh animations."
              content={
                <div className="grid md:grid-cols-2 gap-8">
                  <DeviceMockup src={cryptoDetailView} alt="Bitcoin detail view mobile" device="mobile" />
                  <DeviceMockup src={cryptoVolumeChart} alt="Volume chart mobile" device="mobile" />
                </div>
              }
            />

            {/* Testing & Iteration */}
            <ProcessStep 
              title="5. User Testing & Iterative Refinement"
              description="I conducted usability testing with 10 participants (5 experienced traders, 5 crypto beginners). Testing revealed the need for clearer legends on charts and better mobile touch targets. Through 5 major iterations, the design evolved from a blank chart to a fully interactive, user-friendly dashboard. Each iteration addressed specific user pain points discovered through testing and feedback."
              content={
                <div className="space-y-6">
                  {/* Iteration Comparison Images */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <ImageZoom 
                        src={iterationInitial} 
                        alt="Initial iteration - blank chart" 
                        className="rounded-lg border border-border w-full"
                      />
                      <p className="text-center text-sm text-muted-foreground">
                        <strong>Initial Prototype:</strong> Blank chart with no data visualization
                      </p>
                    </div>
                    <div className="space-y-3">
                      <ImageZoom 
                        src={iterationFinal} 
                        alt="Final iteration - complete dashboard" 
                        className="rounded-lg border border-border w-full"
                      />
                      <p className="text-center text-sm text-muted-foreground">
                        <strong>Final Product:</strong> Fully interactive dashboard with real-time data
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="mb-3">Final Testing Results:</h4>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-5">
                      <li>90% of users successfully navigated to detailed charts on first try</li>
                      <li>Average time to understand price trends: under 5 seconds</li>
                      <li>100% of testers appreciated the auto-refresh feature</li>
                      <li>Mobile users reported easy interaction with chart controls</li>
                      <li>85% found the final interface intuitive without instruction</li>
                    </ul>
                  </div>

                  {/* Iteration Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => {
                        setShowIterationDetails(!showIterationDetails);
                      }}
                      className="gap-2"
                    >
                      {showIterationDetails ? (
                        <>
                          Hide Iteration Process
                          <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          View Complete Iteration Journey
                          <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Iteration Documentation - Expands inline below button */}
                  {showIterationDetails && (
                    <div className="pt-8">
                      <IterationDocumentation />
                      
                      {/* Collapse Button */}
                      <div className="flex justify-center pt-8">
                        <Button 
                          variant="outline"
                          size="lg" 
                          onClick={() => setShowIterationDetails(false)}
                          className="gap-2"
                        >
                          <ChevronUp className="w-5 h-5" />
                          Collapse Iteration View
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              }
            />

            {/* Outcomes */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="mb-4">Outcomes & Impact</h3>
                <p className="mb-4 text-muted-foreground">
                  The Cryptocurrency Price Tracker successfully delivers real-time market data in an 
                  intuitive, visually appealing interface. The combination of D3.js visualizations and 
                  the Binance API creates a powerful tool for both casual observers and active traders. 
                  The responsive design ensures users can track prices anywhere, anytime.
                </p>
                <p className="text-muted-foreground">
                  This project deepened my understanding of data visualization principles and real-time 
                  system design. I learned the importance of performance optimization when dealing with 
                  frequently updating data and how to balance feature richness with interface simplicity. 
                  Future enhancements could include price alerts, portfolio tracking, and historical 
                  comparison tools.
                </p>
              </CardContent>
            </Card>

            {/* Citations */}
            <div className="mt-8">
              <Citations />
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm exploring co-op opportunities for Summer 2025 where I can bring fresh perspectives to challenging design problems. 
            Whether you'd like to discuss collaboration, share feedback on my work, or simply connect—I'd love to hear from you!
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Rajat Sodhi. Designed and built as a portfolio template.</p>
        </div>
      </footer>
    </div>
  );
}
