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
      <div className="absolute top-20 left-10 text-accent/20 animate-float-slow">
        <Code size={40} />
      </div>
      <div className="absolute top-32 right-20 text-accent/20 animate-float-medium" style={{animationDelay: '1s'}}>
        <Server size={32} />
      </div>
      <div className="absolute bottom-32 left-20 text-accent/20 animate-float-fast" style={{animationDelay: '2s'}}>
        <Users size={36} />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/2 right-10 text-primary/10 animate-float-slow" style={{animationDelay: '3s'}}>
        <div className="w-4 h-4 bg-gradient-primary rounded-full animate-pulse-glow"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-accent/10 animate-float-medium" style={{animationDelay: '4s'}}>
        <div className="w-6 h-6 bg-gradient-secondary rounded-full animate-pulse-glow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-zoom-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-bounce-subtle">
            Alif
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 animate-slide-down" style={{animationDelay: '0.2s'}}>
            Premium Development Services
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-down" style={{animationDelay: '0.4s'}}>
            Hi, I'm <span className="font-semibold text-accent hover:animate-wiggle">Ali Husnain</span>, a full-stack developer crafting 
            modern web applications with React, Next.js, Spring Boot, and cutting-edge technologies.
          </p>
          
          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card fluid-hover fluid-scale fluid-glow animate-slide-left group" style={{animationDelay: '0.6s'}}>
              <Code className="w-8 h-8 text-accent mb-4 mx-auto group-hover:animate-bounce-subtle" />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Front-End Excellence</h3>
              <p className="text-muted-foreground">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card fluid-hover fluid-scale fluid-glow animate-zoom-in group" style={{animationDelay: '0.8s'}}>
              <Server className="w-8 h-8 text-accent mb-4 mx-auto group-hover:animate-bounce-subtle" />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Back-End Power</h3>
              <p className="text-muted-foreground">Java, Spring Boot, APIs</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border shadow-card fluid-hover fluid-scale fluid-glow animate-slide-right group" style={{animationDelay: '1s'}}>
              <Users className="w-8 h-8 text-accent mb-4 mx-auto group-hover:animate-bounce-subtle" />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Mentorship</h3>
              <p className="text-muted-foreground">Teaching & Career Guidance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '1.2s'}}>
            <Button 
              variant="gradient" 
              size="lg" 
              className="group fluid-scale hover:animate-pulse-glow transition-all duration-500"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group fluid-scale hover:border-accent hover:text-accent transition-all duration-500"
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