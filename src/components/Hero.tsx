import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional development workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-accent/20 animate-float">
        <Code size={40} />
      </div>
      <div className="absolute top-32 right-20 text-accent/20 animate-float" style={{animationDelay: '1s'}}>
        <Server size={32} />
      </div>
      <div className="absolute bottom-32 left-20 text-accent/20 animate-float" style={{animationDelay: '2s'}}>
        <Users size={36} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Alif
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Premium Development Services
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Hi, I'm <span className="font-semibold text-accent">Ali Husnain</span>, a full-stack developer crafting 
            modern web applications with React, Next.js, Spring Boot, and cutting-edge technologies.
          </p>
          
          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Code className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Front-End Excellence</h3>
              <p className="text-muted-foreground">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Server className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Back-End Power</h3>
              <p className="text-muted-foreground">Java, Spring Boot, APIs</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
              <p className="text-muted-foreground">Teaching & Career Guidance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.8s'}}>
            <Button 
              variant="gradient" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;