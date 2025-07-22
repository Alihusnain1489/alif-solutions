import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Monitor, 
  Smartphone,
  Database,
  Zap,
  Users,
  ShoppingCart,
  BookOpen,
  BarChart3
} from "lucide-react";

// Import project thumbnails
import bookingPlatformImage from "@/assets/booking-platform.jpg";
import ecommerceImage from "@/assets/ecommerce-website.jpg";
import portfolioImage from "@/assets/portfolio-website.jpg";
import employeeManagementImage from "@/assets/employee-management.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Booking Platform",
      description: "A comprehensive booking platform built for a cybersecurity company, enabling customers to easily book product-related services with modern UI/UX design.",
      longDescription: "This platform features a responsive design, real-time availability checking, secure payment integration, and an admin dashboard for service management. Built with accessibility and performance in mind.",
      technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap"],
      category: "Web Application",
      icon: BookOpen,
      image: bookingPlatformImage,
      features: [
        "Real-time booking system",
        "Responsive design",
        "Modern UI/UX",
        "Admin dashboard"
      ],
      metrics: {
        users: "500+",
        bookings: "1,200+",
        uptime: "99.9%"
      }
    },
    {
      title: "Ecommerce Website – Wholesale Threads",
      description: "A fully responsive e-commerce platform designed for wholesale products with dynamic product listings, category filtering, and mobile-first design approach.",
      longDescription: "Features include dynamic product management, advanced filtering systems, shopping cart functionality, user authentication, and comprehensive admin tools. Deployed on Vercel with optimized performance.",
      technologies: ["React.js", "Tailwind CSS", "Next.js"],
      category: "E-commerce",
      icon: ShoppingCart,
      image: ecommerceImage,
      features: [
        "Dynamic product listings",
        "Category filtering",
        "Mobile-first design",
        "Performance optimized"
      ],
      metrics: {
        products: "1,000+",
        orders: "800+",
        performance: "95%"
      }
    },
    {
      title: "Professional Portfolio",
      description: "A sleek and modern portfolio website showcasing development skills, projects, and professional experience with smooth animations and responsive design.",
      longDescription: "Built with modern React patterns, featuring smooth scroll navigation, project galleries, interactive animations, and optimized performance. Includes contact forms and social media integration.",
      technologies: ["React.js", "Tailwind CSS"],
      category: "Portfolio",
      icon: Monitor,
      image: portfolioImage,
      features: [
        "Smooth scroll navigation",
        "Project gallery",
        "Responsive animations",
        "Interactive design"
      ],
      metrics: {
        visitors: "2,000+",
        engagement: "85%",
        speed: "98%"
      }
    },
    {
      title: "Employee Management System",
      description: "A comprehensive full-stack CRUD application for managing employee data with real-time updates, responsive admin interface, and secure backend API.",
      longDescription: "Complete employee management solution with Spring Boot REST API backend and React frontend. Features include employee CRUD operations, role management, search functionality, and detailed reporting systems.",
      technologies: ["React", "Tailwind CSS", "Spring Boot REST API"],
      category: "Full-Stack Application",
      icon: Users,
      image: employeeManagementImage,
      features: [
        "Real-time updates",
        "Responsive admin interface", 
        "MVC architecture",
        "Secure API integration"
      ],
      metrics: {
        employees: "250+",
        departments: "12",
        efficiency: "92%"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent hover:animate-bounce-subtle cursor-default">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            A showcase of real-world applications demonstrating expertise in modern web development, 
            full-stack solutions, and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group fluid-hover fluid-glow animate-zoom-in overflow-hidden interactive-element hover:scale-[1.02] border-accent/20"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-primary-foreground text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 animate-fade-in">
                    <project.icon className="w-8 h-8 mx-auto mb-2 animate-float-medium group-hover:animate-bounce-subtle" />
                    <p className="text-sm font-medium">View Project Details</p>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs hover:scale-105 hover:bg-accent/20 transition-all duration-300">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-all duration-300 hover:scale-105 transform cursor-default">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                     {project.technologies.map((tech, techIndex) => (
                       <Badge 
                         key={tech} 
                         variant="outline" 
                         className="hover:bg-accent/10 hover:scale-105 fluid-hover hover:border-accent animate-slide-up"
                         style={{animationDelay: `${(index * 4 + techIndex) * 0.05}s`}}
                       >
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
                       <li 
                         key={featureIndex} 
                         className="flex items-start gap-3 text-muted-foreground hover:text-foreground fluid-hover animate-slide-left"
                         style={{animationDelay: `${(index * 4 + featureIndex) * 0.05}s`}}
                       >
                         <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
                         <span>{feature}</span>
                       </li>
                     ))}
                  </ul>
                </div>

                {/* Project Metrics */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Project Impact:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                     {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                       <div 
                         key={key}
                         className="bg-accent/5 p-2 rounded-lg hover:bg-accent/10 fluid-hover fluid-scale animate-zoom-in"
                         style={{animationDelay: `${(index * 4 + metricIndex) * 0.05}s`}}
                       >
                         <div className="font-semibold text-accent text-sm">{value}</div>
                         <div className="text-xs text-muted-foreground capitalize">{key}</div>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Action Buttons */}
                 <div className="flex gap-3 pt-4">
                   <Button 
                     variant="gradient" 
                     size="sm" 
                     className="group flex-1 fluid-scale hover:animate-pulse-glow transition-all duration-500"
                   >
                     <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                     View Live
                   </Button>
                   <Button 
                     variant="outline" 
                     size="sm"
                     className="group fluid-scale hover:border-accent hover:text-accent transition-all duration-500"
                   >
                     <Github className="w-4 h-4 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                     Code
                   </Button>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-primary/5 border border-accent/20 rounded-lg p-8 max-w-2xl mx-auto hover:shadow-glow transition-all duration-500">
            <h3 className="font-semibold text-xl mb-4 text-accent">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Each project represents a unique challenge solved with innovative solutions, modern technologies, 
              and best development practices. Let's build something amazing together.
            </p>
            <Button variant="gradient" size="lg" className="hover:scale-105 transition-transform duration-300">
              <Zap className="w-4 h-4 mr-2" />
              Start New Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;