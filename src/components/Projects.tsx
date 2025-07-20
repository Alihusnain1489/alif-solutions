import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, ShoppingCart, User, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Booking Platform",
      description: "A comprehensive booking platform built for a cybersecurity company, enabling customers to book product-related services with modern front-end architecture.",
      icon: Shield,
      tech: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap"],
      features: [
        "Responsive design with mobile-first approach",
        "Advanced state management with Redux",
        "Modular component architecture",
        "Business-facing application interface"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Wholesale Threads E-commerce",
      description: "A fully responsive e-commerce platform for wholesale products with dynamic features and optimized performance deployed on Vercel.",
      icon: ShoppingCart,
      tech: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
      features: [
        "Dynamic product listings via APIs",
        "Advanced category filtering system",
        "Mobile-first responsive UI design",
        "Performance optimization and scalability"
      ],
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Professional Portfolio",
      description: "A polished developer portfolio website showcasing projects and skills with smooth animations and interactive design elements.",
      icon: User,
      tech: ["React.js", "Tailwind CSS", "Smooth Scroll"],
      features: [
        "Smooth scroll navigation",
        "Interactive project gallery",
        "Responsive and animated design",
        "Professional presentation of work"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Employee Management System",
      description: "A full-stack CRUD application for managing employee data with real-time updates and secure architecture using modern technologies.",
      icon: Users,
      tech: ["React", "Tailwind CSS", "Spring Boot", "REST API"],
      features: [
        "Full-stack CRUD operations",
        "Real-time data updates",
        "Responsive admin interface",
        "MVC architecture with secure backend"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of real-world applications demonstrating expertise in 
            full-stack development, modern frameworks, and scalable architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-glow transition-all duration-500 animate-scale-in border-muted/50 overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-accent/20 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    View Live
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-muted-foreground mb-6">
            Each project represents a unique challenge solved with innovative solutions and best practices.
          </p>
          <Button variant="gradient" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;